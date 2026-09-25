# Résumé viewer fix

## What was wrong
`openResume()` only set the iframe's `src` when `!iframe.src`. But an `<iframe src="">` reports the
*page's own URL* from `.src`, so that check was never true and the PDF was never assigned (the viewer
showed a blank grey panel). Even when assigned, PDFs inside iframes don't render on iOS Safari, and the
Google Docs Viewer workaround needs a public URL and is unreliable.

## What changed
| File | Change |
|---|---|
| `resume-viewer.js` (new) | Renders the PDF onto `<canvas>` pages with pdf.js. Lazy-loaded on first open, re-fits on resize/rotate, shows an "Open PDF" fallback if pdf.js fails. |
| `public/vendor/pdfjs/` (new) | Vendored pdf.js 5.6.205 **legacy** build (works on older iPhones) + its Apache-2.0 LICENSE. |
| `main.js` and `src/main.ts` | `openResume()` now calls `window.ResumeViewer.open(url)`. Patched in BOTH so `npm run build` won't undo it. |
| `index.html` | `<iframe>` replaced by `#resume-scroll` container; loads `resume-viewer.js`. |
| `style.css` | Replaced the `#resume-iframe` rule with page/spinner/fallback styles. |
| `.gitignore` | Was saved as UTF-16, which git can't read, so `node_modules` was probably not being ignored. Rewritten as plain text. |

## To update your résumé
Replace `public/resume.pdf` (same filename). Nothing else to change.

## Heads-up: src/main.ts is out of date
`main.js` (deployed) has the Terminal, Control Center, wallpapers and sounds; `src/main.ts` does not.
Running `npm run build` will overwrite `main.js` and delete those features. Don't run it until
`main.ts` is brought back in sync.

## Tested (headless Chromium)
Desktop and 390px phone: both PDF pages render, no horizontal scroll, no console errors.
Fallback link appears when pdf.js is blocked. Esc closes; reopening works. `tsc --noEmit` passes.
