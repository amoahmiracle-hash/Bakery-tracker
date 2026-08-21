/* Five Grains Bakery Tracker — Service Worker
   Caches the app shell so it keeps working with no internet connection.
   Uses a NETWORK-FIRST strategy: whenever the phone has internet, it
   always fetches the latest version before showing anything, and only
   falls back to the cached copy if the network request fails (i.e.
   genuinely offline). This means updates show up on the very next open,
   not "the open after that". Bump CACHE_NAME on every release so the
   activate step clears out anything from the previous version. */
const CACHE_NAME = "fgb-tracker-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  if(event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(function(response){
      if(response && response.status===200){
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
      }
      return response;
    }).catch(function(){
      return caches.match(event.request);
    })
  );
});
