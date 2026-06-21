# Alex Rivera — TPM Portfolio (macOS-style desktop)

A macOS-Finder-styled portfolio site. Boots into a loading screen, fades into a
desktop with project folders, a draggable "About Me" window, a live menu bar,
and a working dock (Search / Mail / LinkedIn / GitHub / Résumé). Fully
responsive — collapses to a stacked, tap-friendly layout on mobile.

## 1. Personalize your content

Everything you need to edit lives in **`src/App.tsx`**:

- `PROFILE` (top of file) — name, title, email, LinkedIn, GitHub, bio, skills, experience.
- `PROJECTS` array — one object per folder (`ViCa`, `Cyster`, `LMS`). Each has
  `overview`, `problem`, `highlights`, `decision`, `stats`, `tech`, and
  `screenshots` (just captions for now — see below).

## 2. Add real screenshots

Drop your screenshots into `public/projects/<project-id>/` (e.g.
`public/projects/vica/01.png`) and swap the placeholder tiles in the
`ScreenshotGrid` component (in `App.tsx`) for real `<img>` tags pointing at
those files.

## 3. Replace the résumé

Swap `public/resume.pdf` with your real résumé (same filename), or change
`PROFILE.resumeUrl` in `App.tsx` if you rename it.

## 4. Replace the dock icons / wallpaper (optional)

- Dock icons: `public/icons/mail.jpg`, `linkedin.jpg`, `github.jpg`,
  `resume.jpg`, `search.jpg` — square images work best.
- Desktop wallpaper: `public/wallpaper.jpg`.

## 5. Run locally

```bash
npm install
npm run dev
```

## 6. Deploy to GitHub Pages

1. In `vite.config.ts`, set `base: "/your-repo-name/"` (must match your repo name).
2. Push this folder to a new GitHub repo.
3. Run:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch using the
   `gh-pages` package.
4. In your repo's **Settings → Pages**, set the source branch to `gh-pages`.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

> Using a custom domain or a user/organization page (`username.github.io`)
> instead? Set `base: "/"` in `vite.config.ts`.

## What's interactive

- **Boot screen** → fades into desktop (~1.5s).
- **Menu bar**: live clock + date, working dropdown menus, ⌘F opens search.
- **Folders**: click to select, double-click (or single tap on mobile) to open.
- **Windows**: draggable by the title bar, red = close, yellow = minimize to dock.
- **Dock**: Search (spotlight-style, searches projects/about/links), Mail
  (opens your default mail client addressed to you), LinkedIn, GitHub (open
  in new tab), Résumé (in-app PDF viewer with a Download button).
- **Mobile**: desktop metaphor becomes a scrollable stacked layout; windows
  open full-screen; dock stays pinned at the bottom; no hover/drag (not
  needed on touch).
