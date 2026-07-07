
const GAMES = [
        { id: '2048', title: '2048', emoji: '🔢', description: 'Merge tiles and reach 2048 in this addictive puzzle.', category: 'puzzle', difficulty: 'medium', path: '2048/', accentColor: '#f97316', bgGradient: 'linear-gradient(135deg, #fff7ed, #ffedd5)' },
        { id: 'draw-a-card', title: 'Draw a Card', emoji: '🃏', description: 'Try your luck with a random draw.', category: 'luck', difficulty: 'easy', path: 'draw-a-card/', accentColor: '#a78bfa', bgGradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' },
        { id: 'flappy-clone', title: 'Flappy Clone', emoji: '🐦', description: 'Tap to fly through the pipes without crashing.', category: 'arcade', difficulty: 'medium', path: 'flappy-clone/', accentColor: '#38bdf8', bgGradient: 'linear-gradient(135deg, #0f172a, #1e293b)' },
        { id: 'flip-a-coin', title: 'Flip a Coin', emoji: '🪙', description: 'Quick heads or tails with a flick.', category: 'luck', difficulty: 'easy', path: 'flip-a-coin/', accentColor: '#fbbf24', bgGradient: 'linear-gradient(135deg, #1c1917, #292524)' },
        { id: 'memory-match', title: 'Memory Match', emoji: '🧩', description: 'Flip cards and find matching pairs.', category: 'puzzle', difficulty: 'easy', path: 'memory-match/', accentColor: '#ec4899', bgGradient: 'linear-gradient(135deg, #fdf2f8, #fce7f3)' },
        { id: 'minesweeper', title: 'Minesweeper', emoji: '💣', description: 'Clear the board without hitting a hidden mine.', category: 'puzzle', difficulty: 'medium', path: 'minesweeper/', accentColor: '#ef4444', bgGradient: 'linear-gradient(135deg, #0a0a0f, #1c1c24)' },
        { id: 'pong', title: 'Pong', emoji: '🏓', description: 'Classic paddle versus paddle. Keep the ball alive.', category: 'arcade', difficulty: 'easy', path: 'pong/', accentColor: '#22c55e', bgGradient: 'linear-gradient(135deg, #022c22, #064e3b)' },
        { id: 'rock-paper-scissors', title: 'Rock Paper Scissors', emoji: '✌️', description: 'Beat the computer in this quick duel of choices.', category: 'luck', difficulty: 'easy', path: 'rock-paper-scissors/', accentColor: '#f97316', bgGradient: 'linear-gradient(135deg, #fff1e6, #ffe4e6)' },
        { id: 'roll-a-dice', title: 'Roll a Dice', emoji: '🎲', description: 'Roll the dice and test your fortune.', category: 'luck', difficulty: 'easy', path: 'roll-a-dice/', accentColor: '#eab308', bgGradient: 'linear-gradient(135deg, #1c1917, #292524)' },
        { id: 'snake', title: 'Snake', emoji: '🐍', description: 'Eat, grow, and avoid your own tail.', category: 'arcade', difficulty: 'easy', path: 'snake/', accentColor: '#10b981', bgGradient: 'linear-gradient(135deg, #022c22, #064e3b)' },
        { id: 'space-invaders', title: 'Space Invaders', emoji: '👾', description: 'Defend Earth from relentless alien invaders!', category: 'arcade', difficulty: 'medium', path: 'space-invaders/', accentColor: '#00FF00', bgGradient: 'linear-gradient(135deg, #0A0A0A, #222222)' },
        { id: 'tetris', title: 'Tetris', emoji: '🧱', description: 'Stack blocks, clear lines, chase the high score.', category: 'arcade', difficulty: 'medium', path: 'tetris/', accentColor: '#3b82f6', bgGradient: 'linear-gradient(135deg, #0f172a, #1e293b)' },
        { id: 'tic-tac-toe', title: 'Tic Tac Toe', emoji: '❌', description: 'Classic 3x3 strategy. Play locally or against basic AI.', category: 'puzzle', difficulty: 'easy', path: 'tic-tac-toe/', status: 'playable', accentColor: '#EC4899', bgGradient: 'linear-gradient(135deg, #1a1025, #231839)' },
        { id: 'typing-speed', title: 'Typing Speed', emoji: '⌨️', description: 'Type fast and accurate to beat the clock.', category: 'skill', difficulty: 'easy', path: 'typing-speed/', accentColor: '#14b8a6', bgGradient: 'linear-gradient(135deg, #042f2e, #115e59)' },
        { id: 'wordle-clone', title: 'Wordle', emoji: '🧩', description: 'Guess a 5-letter word in 6 tries.', category: 'puzzle', difficulty: 'medium', path: 'wordle-clone/', accentColor: '#EC4899', bgGradient: 'linear-gradient(135deg, #1a1025, #231839)' }
    ];

// Render games on the landing page
function renderGames() {
  const grid = document.getElementById('games-grid');
  const noResults = document.getElementById('no-results');
  const countEl = document.getElementById('games-count');
  const searchInput = document.getElementById('search-input');
  const filterTags = document.querySelectorAll('.filter-tag');
  if (!grid) return;

  function matchesFilter(game, tag) {
    if (!tag || tag === 'all') return true;
    return game.category === tag;
  }

  function render(filterTag) {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const filtered = GAMES.filter((g) => {
      const matchesSearch =
        !query ||
        g.title.toLowerCase().includes(query) ||
        (g.description && g.description.toLowerCase().includes(query));
      const matchesTag = matchesFilter(g, filterTag);
      return matchesSearch && matchesTag;
    });
    grid.innerHTML = filtered
      .map(
        (g) => `
      <a class="game-card" href="${g.path}" style="text-decoration:none;color:inherit">
        <div class="game-card__accent" style="background:${g.accentColor || 'rgba(255,255,255,0.08)'}"></div>
        <div class="game-card__body">
          <div class="game-card__top">
            <span class="game-card__emoji">${g.emoji || '🎮'}</span>
            <span class="game-card__difficulty">${g.difficulty || ''}</span>
          </div>
          <h3 class="game-card__title">${g.title}</h3>
          <p class="game-card__desc">${g.description || ''}</p>
          <span class="game-card__path">${g.path}</span>
        </div>
      </a>
    `
      )
      .join('');
    if (countEl) countEl.textContent = filtered.length + ' game' + (filtered.length === 1 ? '' : 's');
    if (noResults) noResults.classList.toggle('visible', filtered.length === 0);
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => render(document.querySelector('.filter-tag.active')?.dataset.filter || 'all'));
  }
  filterTags.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterTags.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter || 'all');
    });
  });

  render('all');
}

// Space Invaders Game Logic
// This section contains the game logic for Space Invaders.
document.addEventListener('DOMContentLoaded', () => {
    const spaceInvadersCanvas = document.getElementById('gameCanvas');
    if (!spaceInvadersCanvas) return; // Only run if on the Space Invaders page

    const ctx = spaceInvadersCanvas.getContext('2d');
    spaceInvadersCanvas.width = 400;
    spaceInvadersCanvas.height = 600;

    const PLAYER_SPEED = 5;
    const BULLET_SPEED = 7;
    const ALIEN_SPEED = 1;
    const ALIEN_ROWS = 5;
    const ALIEN_COLS = 10;
    const ALIEN_X_SPACING = 30;
    const ALIEN_Y_SPACING = 30;
    const ALIEN_OFFSET_X = 20;
    const ALIEN_OFFSET_Y = 30;
    const ALIEN_SIZE = 20;

    let player = {
        x: spaceInvadersCanvas.width / 2 - 15,
        y: spaceInvadersCanvas.height - 40,
        width: 30,
        height: 20,
        color: 'lime'
    };

    let bullets = [];
    let aliens = [];
    let alienDirection = 1; // 1 for right, -1 for left
    let score = 0;
    let gameOver = false;

    function initGame() {
        player.x = spaceInvadersCanvas.width / 2 - 15;
        bullets = [];
        aliens = [];
        alienDirection = 1;
        score = 0;
        gameOver = false;

        // Create aliens
        for (let row = 0; row < ALIEN_ROWS; row++) {
            for (let col = 0; col < ALIEN_COLS; col++) {
                aliens.push({
                    x: col * ALIEN_X_SPACING + ALIEN_OFFSET_X,
                    y: row * ALIEN_Y_SPACING + ALIEN_OFFSET_Y,
                    width: ALIEN_SIZE,
                    height: ALIEN_SIZE,
                    color: 'red',
                    isHit: false
                });
            }
        }
    }

    function drawPlayer() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function drawBullets() {
        bullets.forEach(bullet => {
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        });
    }

    function drawAliens() {
        aliens.forEach(alien => {
            if (!alien.isHit) {
                ctx.fillStyle = alien.color;
                ctx.fillRect(alien.x, alien.y, alien.width, alien.height);
            }
        });
    }

    function updateGame() {
        if (gameOver) return;

        // Update player position (controlled by keys)

        // Update bullets
        for (let i = bullets.length - 1; i >= 0; i--) {
            bullets[i].y -= BULLET_SPEED;
            if (bullets[i].y < 0) {
                bullets.splice(i, 1);
            }
        }

        // Update aliens
        let alienMovedDown = false;
        for (let i = 0; i < aliens.length; i++) {
            if (!aliens[i].isHit) {
                aliens[i].x += ALIEN_SPEED * alienDirection;
                if (aliens[i].x + aliens[i].width > spaceInvadersCanvas.width || aliens[i].x < 0) {
                    alienDirection *= -1;
                    alienMovedDown = true;
                }
                if (aliens[i].y + aliens[i].height > player.y) {
                    gameOver = true;
                }
            }
        }

        if (alienMovedDown) {
            aliens.forEach(alien => {
                if (!alien.isHit) {
                    alien.y += 10; // Move aliens down when they hit the edge
                }
            });
        }

        // Check for collisions (bullets and aliens)
        for (let i = bullets.length - 1; i >= 0; i--) {
            for (let j = aliens.length - 1; j >= 0; j--) {
                if (!aliens[j].isHit &&
                    bullets[i].x < aliens[j].x + aliens[j].width &&
                    bullets[i].x + bullets[i].width > aliens[j].x &&
                    bullets[i].y < aliens[j].y + aliens[j].height &&
                    bullets[i].y + bullets[i].height > aliens[j].y) {
                    aliens[j].isHit = true;
                    bullets.splice(i, 1);
                    score += 10;
                    break;
                }
            }
        }

        // Check if all aliens are gone
        if (aliens.every(alien => alien.isHit)) {
            gameOver = true;
            // Potentially add a win condition or next level
        }

        drawGame();
        requestAnimationFrame(updateGame);
    }

    function drawGame() {
        ctx.clearRect(0, 0, spaceInvadersCanvas.width, spaceInvadersCanvas.height);
        drawPlayer();
        drawBullets();
        drawAliens();

        ctx.fillStyle = 'white';
        ctx.font = '16px "Press Start 2P"'; // Use retro font
        ctx.fillText('Score: ' + score, 10, 20);

        if (gameOver) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(0, 0, spaceInvadersCanvas.width, spaceInvadersCanvas.height);
            ctx.fillStyle = 'white';
            ctx.font = '30px "Press Start 2P"';
            ctx.fillText('GAME OVER', spaceInvadersCanvas.width / 2 - ctx.measureText('GAME OVER').width / 2, spaceInvadersCanvas.height / 2 - 20);
            ctx.font = '20px "Press Start 2P"';
            ctx.fillText('Score: ' + score, spaceInvadersCanvas.width / 2 - ctx.measureText('Score: ' + score).width / 2, spaceInvadersCanvas.height / 2 + 20);
            ctx.fillText('Press R to Restart', spaceInvadersCanvas.width / 2 - ctx.measureText('Press R to Restart').width / 2, spaceInvadersCanvas.height / 2 + 60);
        }
    }

    // Event Listeners
    document.addEventListener('keydown', e => {
        if (gameOver && e.key === 'r') {
            initGame();
            updateGame();
            return;
        }
        if (!gameOver) {
            if (e.key === 'ArrowLeft') {
                player.x -= PLAYER_SPEED;
            } else if (e.key === 'ArrowRight') {
                player.x += PLAYER_SPEED;
            } else if (e.key === ' ') {
                bullets.push({
                    x: player.x + player.width / 2 - 2,
                    y: player.y,
                    width: 4,
                    height: 10,
                    color: 'white'
                });
            }
            // Keep player within bounds
            if (player.x < 0) player.x = 0;
            if (player.x + player.width > spaceInvadersCanvas.width) player.x = spaceInvadersCanvas.width - player.width;
        }
    });

    initGame();
    updateGame();
});

