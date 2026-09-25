/**
 * Résumé viewer — renders the PDF inside the page with pdf.js (vendored in public/vendor/pdfjs).
 *
 * Why not <iframe src="resume.pdf">?  iOS Safari and many mobile browsers don't render PDFs in iframes,
 * and Google Docs Viewer needs a public URL and often shows a blank page. Drawing pages onto <canvas>
 * works the same on every browser, offline, and on localhost.
 *
 * Usage (already wired into main.js):   window.ResumeViewer.open(absolutePdfUrl)
 * pdf.js is only downloaded the first time the résumé is opened.
 */

const PDFJS_URL = new URL('./public/vendor/pdfjs/pdf.min.mjs', import.meta.url).href;
const WORKER_URL = new URL('./public/vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;
const MAX_PAGE_WIDTH = 900; // CSS px

let pdfjsPromise = null;
let loadedUrl = null;
let pdfDoc = null;
let renderGen = 0; // bumps on every (re)render so stale renders stop early
let lastWidth = 0;
let resizeTimer = 0;

function el(id) {
  return document.getElementById(id);
}

function setStatus(html) {
  const s = el('resume-status');
  if (!s) return;
  s.innerHTML = html;
  s.style.display = html ? 'flex' : 'none';
}

function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = import(PDFJS_URL).then((lib) => {
      lib.GlobalWorkerOptions.workerSrc = WORKER_URL;
      return lib;
    });
    pdfjsPromise.catch(() => (pdfjsPromise = null)); // allow retry after a failure
  }
  return pdfjsPromise;
}

async function renderPages() {
  const host = el('resume-pages');
  const scroller = el('resume-scroll');
  if (!host || !scroller || !pdfDoc) return;

  const gen = ++renderGen;
  const available = Math.max(200, scroller.clientWidth - 32);
  const cssWidth = Math.min(available, MAX_PAGE_WIDTH);
  lastWidth = scroller.clientWidth;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const fragments = [];
  for (let n = 1; n <= pdfDoc.numPages; n++) {
    const page = await pdfDoc.getPage(n);
    if (gen !== renderGen) return;
    const base = page.getViewport({ scale: 1 });
    const cssScale = cssWidth / base.width;
    const viewport = page.getViewport({ scale: cssScale * dpr });

    const canvas = document.createElement('canvas');
    canvas.className = 'resume-page';
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', `Résumé, page ${n} of ${pdfDoc.numPages}`);

    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
    if (gen !== renderGen) return;
    fragments.push(canvas);
  }
  host.replaceChildren(...fragments);
}

function showFallback(url, reason) {
  console.warn('[ResumeViewer] falling back to plain link:', reason);
  setStatus(
    `<div class="resume-fallback">
       <strong>The résumé preview couldn't load.</strong>
       <span>You can still open or download the PDF.</span>
       <a href="${url}" target="_blank" rel="noopener">Open PDF in a new tab</a>
     </div>`,
  );
}

async function open(url) {
  const scroller = el('resume-scroll');
  if (scroller) scroller.scrollTop = 0;

  if (pdfDoc && loadedUrl === url) {
    // Already loaded: just make sure it fits the current window size.
    if (Math.abs((scroller?.clientWidth ?? 0) - lastWidth) > 20) renderPages();
    return;
  }

  setStatus('<div class="resume-spinner" aria-hidden="true"></div><span>Loading résumé…</span>');
  try {
    const lib = await loadPdfjs();
    pdfDoc = await lib.getDocument({ url }).promise;
    loadedUrl = url;
    setStatus('');
    await renderPages();
  } catch (err) {
    pdfDoc = null;
    showFallback(url, err);
  }
}

// Re-fit pages when the window is resized or the phone is rotated.
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const scroller = el('resume-scroll');
    if (pdfDoc && scroller && scroller.clientWidth > 0 && Math.abs(scroller.clientWidth - lastWidth) > 20) renderPages();
  }, 200);
});

window.ResumeViewer = { open };
