# Rajdeep & Mitali — RSVP + Hosting Setup

## A. RSVP database (Google Sheets)

1. Create a new Google Sheet called `Rajdeep & Mitali — RSVP`.
2. Open Extensions → Apps Script.
3. Paste the contents of `RSVP_Google_Apps_Script.gs`.
4. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` with the ID from the Sheet URL.
5. Deploy → New deployment → Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Copy the resulting Web App URL.
9. Put that URL into the website where marked `RSVP_ENDPOINT`.

Google Apps Script web apps support `doPost(e)` and can receive request parameters from a website. The submitted rows are written to the Google Sheet.

## B. Hosting

The website is a static HTML site and can be hosted on GitHub Pages. GitHub Pages supports custom domains and HTTPS.

1. Create a GitHub repository.
2. Upload `index.html` and `Dur_Ejibon.mp3`.
3. Settings → Pages → deploy from the main branch.
4. GitHub will give you a public URL.
5. Optional: connect your own domain, e.g. `rajdeepmitali.in`.

## C. Final WhatsApp link

After hosting, send the public URL through WhatsApp. Guests open the invitation directly in their browser.

## D. Important

The RSVP will NOT save centrally until the Google Apps Script URL is deployed and inserted into the website. The local HTML cannot create a shared database by itself.
