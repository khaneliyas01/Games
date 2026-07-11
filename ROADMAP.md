# Games Portal — Technical Roadmap

## Current State
- Static portal with 20+ single-file HTML games, plus shared `script.js`/`style.css`.
- Self-hosted via Nextcloud sync; no CI/CD, no build step.
- Domain arrives at one bundled `index.html`; game pages live under subfolders.
- No reminder or sharing infrastructure yet.

## Goals
1. Publish and manage the site without changing its free/no-SaaS constraint.
2. Make all games playable on mobile from the same single files.
3. Add lightweight sharing and embed options without new backend.
4. Ship 3 concrete, measurable improvements next.

## Hosting Approach
Keep the static model; move from raw Nextcloud sync to reliable static hosting without paying a SaaS platform.

1. **Near-term:** point a web server/Docker container at the Nextcloud-synced folder and serve it directly, optionally through nginx/Caddy with free HTTPS from Let’s Encrypt.
2. **Mid-term:** add a simple deploy script that syncs files from the local repo to the served folder or remote server automatically.
3. **Longer-term:** split `index.html` from game pages if traffic grows, but do not introduce a backend unless sharing/embed requires it.

## Mobile Readiness
- Add viewport and input normalization to the shared `style.css`, especially for touch targets, keyboard behavior, and orientation locking.
- Funnel all input in `script.js` through a small input abstraction that supports touch, mouse, and keyboard without relying on `alert()`.
- Introduce a lightweight mobile menu and larger hit areas for navigation and cards.

## Sharing / Embed Strategy
Static-only, no paid SaaS.

1. Add URL parameters for deep links to specific games, e.g. `?game=snake`.
2. Generate a shareable card image client-side via canvas and use Web Share API when available.
3. Provide an embed snippet for blog posts/portfolios via an iframe pointing to `https://games.eliyas.xyz/<game>/?embed=1&theme=dark`.

## Next 3 Builds
1. **Input + Mobile baseline**
   - Touch controls in games.
   - On-screen controls for mobile where needed.
   - Responsive/fit-to-viewport scaling.

2. **Deep-link & share**
   - `?game=` routing from `index.html`.
   - Share button; fallback copy-to-clipboard.
   - Embed mode styles for iframe use.

3. **Persisted lightweight progress**
   - Local-only high-score and streak storage via `localStorage`.
   - No backend accounts, no sync dependencies.

## Non-Goals
- No account system, no ads, and no paid SaaS tools.
- No database unless you explicitly want ranked/leaderboard persistence later.
