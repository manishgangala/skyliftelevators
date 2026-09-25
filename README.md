# Skylift Elevators — Website

A free, 5-page static website for Skylift Elevators (Home, About, Products, Gallery, Contact). No build tools needed — plain HTML/CSS/JS.

## How to put it online for free

**Easiest option — Netlify (drag & drop, ~2 minutes):**
1. Go to https://app.netlify.com/drop
2. Drag this whole `skylift-website` folder onto the page.
3. Netlify gives you a live link immediately (e.g. `skylift-elevators.netlify.app`). You can rename the site and later attach your own domain, still for free.

**Alternative — GitHub Pages:**
1. Create a free GitHub account and a new repository (e.g. `skylift-elevators`).
2. Upload all files in this folder to the repository (keep the `css/` and `js/` folders as-is).
3. In the repo, go to Settings → Pages → set the source branch to `main` and folder to `/root`.
4. Your site goes live at `https://<your-username>.github.io/skylift-elevators/`.

Either way, hosting stays free unless you choose to buy a custom domain (e.g. `skyliftelevators.in`), which is optional.

## What's using placeholders right now

- **Gallery photos** — the 6 tiles on `gallery.html` are illustrated SVG placeholders, not real photos. Swap each `<svg>...</svg>` block inside a `.gallery-tile` for an `<img src="assets/your-photo.jpg" alt="...">` once you have real installation photos.
- **Founder portrait** on `about.html` — same idea, replace the SVG placeholder with an actual photo.
- **Enquiry form** on `contact.html` — currently just shows a confirmation message locally; it isn't wired to actually send you an email yet. Easiest free fix: sign up at https://formspree.io, and change the `<form class="enquiry">` tag to `<form class="enquiry" action="https://formspree.io/f/yourFormID" method="POST">` — then submissions land in your inbox.
- **Testimonials carousel** on `index.html` — the founder quote is real; the other two slides are placeholder reviews clearly marked as such. Replace the `<div class="testimonial-slide">` text and author with real customer quotes as you get them.
- **Before/after slider** on `gallery.html` — illustrative placeholder graphics, not a real project. Replace the two SVG blocks inside `.ba-after` and `.ba-before` with `<img>` tags pointing at real before/after photos of the same shaft.
- **Map** on `contact.html` uses an approximate embed for the Santhnagar area — you can drop in the exact Google Maps embed link for your plot for a pinpoint marker.

## Editing content

Every page is plain HTML — open any `.html` file in a text editor and change the text directly. Shared styling lives in `css/style.css`; shared behavior (mobile menu, scroll indicator, form message) lives in `js/script.js`.

## Design notes

- Colors are taken directly from the Skylift Elevators visiting card: navy blue, red, gold, and cream/white.
- The vertical dot-rail on the left of each page (desktop only) doubles as a floor indicator, echoing an actual lift's floor display as you scroll.
- Typefaces: IBM Plex Sans Condensed for headings, IBM Plex Sans for body text (loaded free from Google Fonts).
