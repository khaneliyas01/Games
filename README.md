# 🎮 Eliyas Games — Browser-Based Minigames

> **Live at:** [games.eliyas.xyz](https://games.eliyas.xyz)

A curated collection of free, browser-based minigames. Pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Just open and play.

---

## 📁 Project Structure

```
Games/
├── index.html              # Landing page — game hub
├── style.css               # Global design system & landing page styles
├── script.js               # Landing page interactivity & games registry
├── README.md               # This file
├── .agents/
│   └── AGENTS.md           # Agent-specific rules and conventions
│
├── snake/                  # 🐍 Snake
│   └── index.html
├── tetris/                 # 🧱 Tetris
│   └── index.html
├── pong/                   # 🏓 Pong
│   └── index.html
├── minesweeper/            # 💣 Minesweeper
│   └── index.html
├── memory-match/           # 🎨 Memory Match
│   └── index.html
├── 2048/                   # 🔢 2048
│   └── index.html
├── rock-paper-scissors/    # ✂️ Rock Paper Scissors
│   └── index.html
├── typing-speed/           # ⌨️ Typing Speed
│   └── index.html
├── roll-a-dice/            # 🎲 Roll a Dice ✅
│   └── index.html
├── flip-a-coin/            # 🪙 Flip a Coin ✅
│   └── index.html
└── draw-a-card/            # 🃏 Draw a Card ✅
    └── index.html
```

---

## 🕹️ Games Registry

All games are registered in the `GAMES` array inside [`script.js`](script.js). The landing page dynamically renders game cards from this registry. Each game entry has the following schema:

```javascript
{
  id: 'snake',                    // Unique ID — must match the directory name
  title: 'Snake',                 // Display title on the landing page
  emoji: '🐍',                   // Emoji shown on the game card
  description: '...',            // Short description (1–2 sentences)
  category: 'classic',           // One of: 'classic', 'puzzle', 'arcade', 'skill', 'luck'
  difficulty: 'easy',            // One of: 'easy', 'medium', 'hard'
  path: 'snake/',                // Relative URL path to the game directory
  status: 'coming-soon',         // 'playable' or 'coming-soon'
  accentColor: '#10B981',        // Primary accent color (hex)
  bgGradient: 'linear-gradient(135deg, #065F46, #10B981)'  // Card preview gradient
}
```

---

## 🚀 How to Add a New Game

### Step 1: Create the game directory

Create a new directory under `Games/` with a kebab-case name matching your game:

```
Games/your-game-name/
├── index.html       # Main game file (entry point)
├── style.css        # Game-specific styles (optional)
├── game.js          # Game logic (optional — can be inline)
└── assets/          # Images, sounds, etc. (optional)
```

### Step 2: Build the game

- Use **vanilla HTML, CSS, and JavaScript** — no frameworks or build tools.
- The game must be fully self-contained in its subdirectory.
- Include a **"← Back to Games"** link that points to `https://games.eliyas.xyz`.
- Follow the design system (see below) for visual consistency.

### Step 3: Register on the landing page

Open [`script.js`](script.js) and add a new entry to the `GAMES` array:

```javascript
{
  id: 'your-game-name',
  title: 'Your Game Name',
  emoji: '🎯',
  description: 'Brief description of your game.',
  category: 'puzzle',            // classic | puzzle | arcade | skill | luck
  difficulty: 'medium',          // easy | medium | hard
  path: 'your-game-name/',
  status: 'playable',           // Set to 'playable' when the game is ready
  accentColor: '#8B5CF6',
  bgGradient: 'linear-gradient(135deg, #4C1D95, #8B5CF6)'
}
```

### Step 4: Update the game count

In [`index.html`](index.html), update the `stat-games` value in the hero section to match the new total.

### Step 5: Test

- Verify the game card renders correctly on the landing page.
- Verify the game loads and is playable from its subdirectory.
- Test on mobile and desktop.

---

## 🎨 Design System Reference

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0a0a0f` | Page background |
| `--color-bg-secondary` | `#12121a` | Card/section backgrounds |
| `--color-text-primary` | `#f0f0f5` | Headings, primary text |
| `--color-text-secondary` | `#a0a0b8` | Descriptions, body text |
| `--color-text-muted` | `#6b6b80` | Labels, metadata |
| `--accent-purple` | `#8B5CF6` | Primary accent |
| `--accent-cyan` | `#06B6D4` | Secondary accent |
| `--accent-pink` | `#EC4899` | Tertiary accent |
| `--accent-emerald` | `#10B981` | Success / "playable" status |
| `--accent-amber` | `#F59E0B` | Warning / "coming soon" status |
| `--accent-red` | `#EF4444` | Danger / hard difficulty |

### Typography

| Usage | Font | Weight |
|-------|------|--------|
| Headings | `Outfit` | 700–900 |
| Body text | `Inter` | 300–600 |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
```

### Game Page Template

Each game page should follow this minimal dark-themed template with its own accent color:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game Name — Eliyas Games</title>
  <style>
    /* Import fonts, set dark bg, use Inter + Outfit */
    body { background: #0a0a0f; color: #f0f0f5; font-family: 'Inter', sans-serif; }
  </style>
</head>
<body>
  <!-- Game content here -->
  <a href="https://games.eliyas.xyz">← Back to Games</a>
</body>
</html>
```

---

## 📐 Coding Conventions

1. **No frameworks** — Pure HTML, CSS, JavaScript only.
2. **No build tools** — No npm, no bundlers. Everything runs directly in the browser.
3. **Self-contained games** — Each game is fully contained within its own directory. No shared dependencies between games.
4. **Responsive design** — All games must work on mobile (min 320px) and desktop.
5. **Dark theme** — Consistent with the landing page aesthetic.
6. **Performance** — Games should target 60fps. Use `requestAnimationFrame` for game loops.
7. **Accessibility** — Include keyboard controls where applicable. Use semantic HTML.
8. **SEO** — Each game page must have proper `<title>`, `<meta name="description">`, and `<meta name="viewport">` tags.

---

## 🌐 Deployment

This is a **static site** served from a web server at `games.eliyas.xyz`.

- **No build step required** — just serve the files.
- Each game subdirectory (e.g., `snake/`) is accessible at `games.eliyas.xyz/snake/`.
- The landing page is accessible at `games.eliyas.xyz`.

---

## 📊 Current Game Status

| Game | Directory | Status | Category | Difficulty |
|------|-----------|--------|----------|------------|
| 🐍 Snake | `snake/` | 🟢 Playable | Classic | Easy |
| 🧱 Tetris | `tetris/` | 🟢 Playable | Puzzle | Medium |
| 🏓 Pong | `pong/` | 🟢 Playable | Arcade | Easy |
| 💣 Minesweeper | `minesweeper/` | 🟢 Playable | Puzzle | Hard |
| 🎨 Memory Match | `memory-match/` | 🟢 Playable | Puzzle | Easy |
| 🔢 2048 | `2048/` | 🟢 Playable | Puzzle | Medium |
| ✂️ Rock Paper Scissors | `rock-paper-scissors/` | 🟢 Playable | Classic | Easy |
| ⌨️ Typing Speed | `typing-speed/` | 🟢 Playable | Skill | Medium |
| 🎲 Roll a Dice | `roll-a-dice/` | 🟢 Playable | Luck | Easy |
| 🪙 Flip a Coin | `flip-a-coin/` | 🟢 Playable | Luck | Easy |
| 🃏 Draw a Card | `draw-a-card/` | 🟢 Playable | Luck | Easy |
| 👾 Space Invaders | `space-invaders/` | 🟢 Playable | Arcade | Medium |
| 🐦 Flappy Clone | `flappy-clone/` | 🟢 Playable | Arcade | Medium |
| ❌ Tic Tac Toe | `tic-tac-toe/` | 🟢 Playable | Puzzle | Easy |
| 🧩 Wordle | `wordle-clone/` | 🟢 Playable | Puzzle | Medium |
| 🎪 Hangman | `hangman/` | 🟢 Playable | Puzzle | Medium |
| 🟡 Connect Four | `connect-four/` | 🟢 Playable | Strategy | Medium |
| 🧬 Game of Life | `life/` | 🟢 Playable | Simulation | Easy |
| 🔢 Sudoku | `sudoku/` | 🟢 Playable | Puzzle | Hard |
| 🏰 Tower Defense | `tower-defense/` | 🟢 Playable | Strategy | Hard |
| 🎯 Reaction Time | `reaction-time/` | 🟢 Playable | Skill | Easy |
| 🔤 Word Scramble | `word-scramble/` | 🟢 Playable | Puzzle | Easy |
| 🏃 Endless Runner | `endless-runner/` | 🟢 Playable | Arcade | Medium |
| 🎵 Rhythm Tap | `rhythm-tap/` | 🟢 Playable | Skill | Medium |
| 🧮 Math Sprint | `math-sprint/` | 🟢 Playable | Quiz | Easy |

---

## 🤝 Contributing (For Agents)

When building a game for this project:

1. **Read this README first** — understand the project structure and conventions.
2. **Check `script.js`** — review the `GAMES` array to see existing games and avoid ID conflicts.
3. **Follow the design system** — use the colors, fonts, and patterns documented above.
4. **Update the registry** — after building your game, update `script.js` to set `status: 'playable'`.
5. **Update this README** — update the "Current Game Status" table.
6. **Test your game** — ensure it loads from the landing page and the "Back to Games" link works.

---

*Built with ♥ by Eliyas — © 2026*
