FIVE GRAINS BAKERY TRACKER — Android App Package
==================================================

This folder turns your bakery tracker into a real installable Android app
(a downloadable .apk file). It takes two steps: host these files online
(free), then convert the hosted link into an .apk (free, ~5 minutes).

WHAT'S IN THIS FOLDER
----------------------
  index.html   — the tracker itself (same one you've been using)
  manifest.json — tells Android this is an installable app (name, icon, colors)
  sw.js        — lets the app keep working with no internet after first load
  icons/       — the app icon at the sizes Android needs

Keep all of these files together, in this same folder structure — don't
rename or move individual files, or the app icon / offline mode will break.


STEP 1 — HOST THE FOLDER ONLINE (free, ~5 minutes)
-----------------------------------------------------
You need ONE stable web address (URL) for this folder. Easiest option
since you already have a GitHub account:

  1. Go to github.com → New repository → name it e.g. "bakery-tracker"
     → make it Public → Create repository.
  2. Upload all the files in THIS folder (keep the icons/ folder as a
     folder, not flattened) using "Add file" → "Upload files".
  3. Go to Settings → Pages (left sidebar) → under "Source" choose
     "Deploy from a branch" → Branch: main, folder: / (root) → Save.
  4. GitHub gives you a URL like:
       https://YOUR-USERNAME.github.io/bakery-tracker/
     Wait 1–2 minutes after saving, then open that link in Chrome on
     your phone to confirm the tracker loads there.

(You've done something similar before with Render for your Computing
Notes storefront — GitHub Pages works the same way, and it's free
forever for a static site like this one.)


STEP 2 — GENERATE THE .APK FILE (free, ~5 minutes)
-----------------------------------------------------
  1. On a computer, go to: https://www.pwabuilder.com
  2. Paste your GitHub Pages URL from Step 1 and click "Start".
  3. It will scan the site and show a score/report — that's normal.
  4. Click "Package for stores" → choose "Android".
  5. Leave the default options and click "Generate" / "Download".
  6. You'll get a .zip — inside it is your .apk file. That .apk is the
     file you share with investors.


STEP 3 — SHARE & INSTALL
-----------------------------------------------------
  - Send the .apk file via WhatsApp, email, or a Drive link.
  - On the investor's Android phone: tap the file to install.
  - Android will show a warning like "Install blocked" or "Unknown app"
    the first time — this is normal for any app installed outside the
    Play Store. They tap Settings → allow "Install unknown apps" for
    WhatsApp (or whichever app they downloaded it from) → then install.
  - Once installed, it behaves like any other app: its own icon, opens
    full-screen, works offline after the first open.


UPDATING IT LATER
-----------------------------------------------------
If you improve the tracker later, re-upload the new index.html to the
same GitHub repo (Step 1), then repeat Step 2 on PWABuilder to get a
fresh .apk. Investors just install the new .apk over the old one —
Android will update it in place as long as you didn't rename anything.


A NOTE ON "VIEW ONLY"
-----------------------------------------------------
This app still lets whoever has it add/edit/delete entries — it doesn't
have a separate read-only mode. If you want investors to only be able to
VIEW the numbers (not edit), the Google Drive link approach from before
is still the right tool for that. This Android app is best suited for
YOUR OWN day-to-day use (or your bakery staff's), since it stores data
locally on whichever phone it's installed on.
