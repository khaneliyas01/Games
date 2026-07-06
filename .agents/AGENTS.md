# Eliyas Games — Agent Rules

## Project Context
This is a static minigames website hosted at `eliyas.xyz/games`. Each game is a self-contained subdirectory with its own `index.html`. The landing page dynamically renders game cards from a registry in `script.js`.

## Critical Rules

1. **Read `README.md` first** before making any changes. It contains the complete project guide.
2. **No frameworks or build tools.** Use only vanilla HTML, CSS, and JavaScript.
3. **Each game is self-contained** in its own subdirectory under `Games/`. Do not create cross-game dependencies.
4. **Always update the games registry** in `script.js` when adding or modifying a game. Set `status: 'playable'` when the game is complete.
5. **Follow the dark theme.** Background: `#0a0a0f`, text: `#f0f0f5`, fonts: Outfit (headings) + Inter (body).
6. **Include a back link** (`<a href="https://games.eliyas.xyz">← Back to Games</a>`) on every game page.
7. **Update `README.md`** status table when a game status changes.
8. **Be responsive.** All pages must work at 320px viewport width minimum.
9. **Use `requestAnimationFrame`** for game loops, not `setInterval`.
10. **Keep existing comments and documentation intact** unless directly modifying the documented code.

## File Ownership
- `index.html`, `style.css`, `script.js` — Landing page files. Edit carefully; they affect all game cards.
- `<game-name>/` — Each game directory is independent. Safe to edit in isolation.
- `README.md` — Update the status table when changing game statuses.

## Game Registry Format
See the `GAMES` array in `script.js`. Each entry requires: `id`, `title`, `emoji`, `description`, `category`, `difficulty`, `path`, `status`, `accentColor`, `bgGradient`.
