# Λέξις — Κέντρο Ξένων Γλωσσών (website)

Static one-page site for the Lexis Giannoulatou language school in Agioi Anargyroi.
Greek by default, with an **EL / EN / ES / DE** language switcher.

## Stack

The lightest thing that does the job — **no build step, no framework, no dependencies**:

| | |
|---|---|
| `index.html` | all content, one page, anchor-linked sections |
| `assets/css/styles.css` | one stylesheet, CSS custom properties, responsive |
| `assets/js/main.js` | ~5 KB vanilla JS: translations, language switch, mobile menu, contact form |
| fonts | Baloo 2 + Nunito from Google Fonts (only external request) |

That's it. Any static host serves it as-is.

## Run locally

Just open `index.html` in a browser, or for clean paths:

```bash
cd site
python3 -m http.server 8000      # then open http://localhost:8000
```

Add `?lang=en` (or `es` / `de`) to the URL to force a language while testing.

## Deploy

Drop the `site/` folder on any of these — all free, all static:

- **Netlify** — drag the folder onto app.netlify.com/drop. The contact form works automatically (see below).
- **Cloudflare Pages** / **GitHub Pages** / **Vercel** — point at this folder, no build command, output dir = `site`.

## Editing content

**All text lives in `assets/js/main.js`** in the `I18N` object — one block per language (`el`, `en`, `es`, `de`).
Each key matches a `data-i18n="..."` attribute in `index.html`. Change the value, done.
Values may contain simple HTML (`<strong>`, `<em>`, `<span class="hl">`, `<br>`).

Structure / layout / colours are in `styles.css` (palette = the `:root` custom properties at the top).

## Contact form

Markup is already set up for **Netlify Forms** (`data-netlify="true"`, hidden `form-name`).
On Netlify, submissions show up in the dashboard with zero extra work.

Not on Netlify? Swap for **Formspree** / **Getform** / **Web3Forms**: change the form's
`action` to your endpoint and remove the `data-netlify` / hidden-input lines. The JS
already POSTs the form and shows a thank-you message either way.

## Placeholders to replace before going live

Search for `[` and `επιβεβαίωση` / `to confirm` / `placeholder`:

- Class hours + enrolment dates/times (currently from the Instagram post)
- Exam list per language (Cambridge / LanguageCert / Michigan, DELE, Goethe / ÖSD)
- Whether **French** is offered
- Years in operation, students per class
- Real parent/graduate testimonials
- `about_p2` — the school's story / philosophy
- Real **logo** — save it as `assets/img/logo.png` (see `assets/img/README.md`).
  Until it's there the header shows a gold star-ring fallback.
- **Photos** — hero currently uses a coloured shape placeholder
- `[Privacy Policy]` link
- Confirm the Google Maps embed points at the right spot

## Known real data (already in place)

Γεωργίου Παπανδρέου 77, Άγιοι Ανάργυροι 135 62 · ☎ 210 2612612 ·
aggelgiannoulatou@gmail.com · Instagram @lexis_yannoulatou · Facebook: Λέξις Γιαννουλάτου ·
Αετοί της Εκπαίδευσης 2024–2026 · ESB preparation centre.
