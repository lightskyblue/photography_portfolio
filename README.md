
# Lightweight static portfolio site

## Files
- `index.html` — home page
- `work.html` — work overview with filters
- `contact.html` — booking/contact page
- `people.html`, `product.html`, `street.html`, `nature.html` — category pages
- `assets/styles.css` — global styles
- `assets/script.js` — mobile menu + work filter
- `assets/images/` — placeholder demo images

## Quick edit guide
1. Change the site title in each HTML file by replacing `Your Site Title`.
2. Update the email and Instagram handle in `contact.html`.
3. Replace the images inside `assets/images/` with your own files using the same names, or update the paths in the HTML.
4. Edit the text blocks in each HTML file to match your services and tone.

## Run locally
Open `index.html` directly in a browser, or run a simple local server:

### Python
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

## Notes
- The layout is responsive for desktop and mobile.
- The card hover effect uses layered blur to create a soft frosted look.
- The code is kept intentionally small and readable for easy handoff and editing.
