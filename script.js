/* ============================================
   ELIYAS.XYZ/GAMES — Interactive JavaScript
   ============================================ */

// ─── Games Registry ─────────────────────────────────────────────────────────
// This is the central registry of all games. To add a new game, simply add
// an entry to this array. The landing page will automatically render it.
const GAMES = [
  {
    id: 'snake',
    title: 'Snake',
    emoji: '🐍',
    description: 'Guide the snake to eat food and grow longer. Don\'t hit the walls or yourself!',
    category: 'classic',
    difficulty: 'easy',
    path: 'snake/',
    status: 'playable',
    accentColor: '#10B981',
    bgGradient: 'linear-gradient(135deg, #065F46, #10B981)'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    emoji: '🧱',
    description: 'Stack falling blocks to complete rows. The classic puzzle game that never gets old.',
    category: 'puzzle',
    difficulty: 'medium',
    path: 'tetris/',
    status: 'playable',
    accentColor: '#8B5CF6',
    bgGradient: 'linear-gradient(135deg, #4C1D95, #8B5CF6)'
  },
  {
    id: 'pong',
    title: 'Pong',
    emoji: '🏓',
    description: 'The original video game. Battle against AI or challenge a friend in this paddle classic.',
    category: 'arcade',
    difficulty: 'easy',
    path: 'pong/',
    status: 'playable',
    accentColor: '#06B6D4',
    bgGradient: 'linear-gradient(135deg, #164E63, #06B6D4)'
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    emoji: '💣',
    description: 'Uncover tiles without detonating hidden mines. Use logic and a bit of luck to survive.',
    category: 'puzzle',
    difficulty: 'hard',
    path: 'minesweeper/',
    status: 'playable',
    accentColor: '#EF4444',
    bgGradient: 'linear-gradient(135deg, #7F1D1D, #EF4444)'
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    emoji: '🎨',
    description: 'Flip cards to find matching pairs. Test your memory with increasing difficulty levels.',
    category: 'puzzle',
    difficulty: 'easy',
    path: 'memory-match/',
    status: 'playable',
    accentColor: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #831843, #EC4899)'
  },
  {
    id: '2048',
    title: '2048',
    emoji: '🔢',
    description: 'Slide numbered tiles on a grid to combine them and reach the 2048 tile.',
    category: 'puzzle',
    difficulty: 'medium',
    path: '2048/',
    status: 'playable',
    accentColor: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, #78350F, #F59E0B)'
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    emoji: '✂️',
    description: 'The timeless hand game — now with slick animations and an AI opponent to beat.',
    category: 'classic',
    difficulty: 'easy',
    path: 'rock-paper-scissors/',
    status: 'playable',
    accentColor: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #1E3A5F, #3B82F6)'
  },
  {
    id: 'typing-speed',
    title: 'Typing Speed',
    emoji: '⌨️',
    description: 'How fast can you type? Test your WPM with random passages and track your progress.',
    category: 'skill',
    difficulty: 'medium',
    path: 'typing-speed/',
    status: 'playable',
    accentColor: '#6366F1',
    bgGradient: 'linear-gradient(135deg, #312E81, #6366F1)'
  },
  {
    id: 'roll-a-dice',
    title: 'Roll a Dice',
    emoji: '🎲',
    description: 'Roll a realistic 3D dice with physics animation. Track your roll history and statistics.',
    category: 'luck',
    difficulty: 'easy',
    path: 'roll-a-dice/',
    status: 'playable',
    accentColor: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, #78350F, #F59E0B)'
  },
  {
    id: 'flip-a-coin',
    title: 'Flip a Coin',
    emoji: '🪙',
    description: 'Flip a shiny 3D coin and track your heads vs tails streak. Settle any debate instantly!',
    category: 'luck',
    difficulty: 'easy',
    path: 'flip-a-coin/',
    status: 'playable',
    accentColor: '#D97706',
    bgGradient: 'linear-gradient(135deg, #92400E, #F59E0B)'
  },
  {
    id: 'draw-a-card',
    title: 'Draw a Card',
    emoji: '🃏',
    description: 'Draw from a shuffled 52-card deck with slick card flip animations. What will you get?',
    category: 'luck',
    difficulty: 'easy',
    path: 'draw-a-card/',
    status: 'playable',
    accentColor: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #831843, #EC4899)'
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    emoji: '👾',
    description: 'Defend Earth from waves of relentless alien invaders in this arcade classic.',
    category: 'arcade',
    difficulty: 'medium',
    path: 'space-invaders/',
    status: 'playable',
    accentColor: '#10B981',
    bgGradient: 'linear-gradient(135deg, #022c22, #064e3b)'
  },
  {
    id: 'flappy-clone',
    title: 'Flappy Clone',
    emoji: '🐦',
    description: 'Flap your wings and fly through columns of neon pipes. Don\'t crash!',
    category: 'arcade',
    difficulty: 'medium',
    path: 'flappy-clone/',
    status: 'playable',
    accentColor: '#06B6D4',
    bgGradient: 'linear-gradient(135deg, #164E63, #06B6D4)'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    emoji: '❌',
    description: 'Play the classic game of Xs and Os against a friend or a smart computer AI.',
    category: 'puzzle',
    difficulty: 'easy',
    path: 'tic-tac-toe/',
    status: 'playable',
    accentColor: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #1a1025, #231839)'
  },
  {
    id: 'wordle-clone',
    title: 'Wordle',
    emoji: '🧩',
    description: 'Guess the secret five-letter word in six attempts. Inspired by the popular game.',
    category: 'puzzle',
    difficulty: 'medium',
    path: 'wordle-clone/',
    status: 'playable',
    accentColor: '#8B5CF6',
    bgGradient: 'linear-gradient(135deg, #4C1D95, #8B5CF6)'
  },
  {
    id: 'hangman',
    title: 'Hangman',
    emoji: '🎪',
    description: 'Guess the letters to reveal the mystery word before the stages run out.',
    category: 'puzzle',
    difficulty: 'medium',
    path: 'hangman/',
    status: 'playable',
    accentColor: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #831843, #EC4899)'
  },
  {
    id: 'trivia-quiz',
    title: 'Trivia Quiz',
    emoji: '🧠',
    description: '10 quick questions. How many can you get right?',
    category: 'quiz',
    difficulty: 'easy',
    path: 'trivia-quiz/',
    status: 'playable',
    accentColor: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, #1c1917, #292524)'
  },
  {
    id: 'idle-clicker',
    title: 'Idle Clicker',
    emoji: '🪙',
    description: 'Tap a coin and buy upgrades that generate coins for you.',
    category: 'idle',
    difficulty: 'easy',
    path: 'idle-clicker/',
    status: 'playable',
    accentColor: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, #1c1917, #292524)'
  },
  {
    id: 'asteroids',
    title: 'Asteroids',
    emoji: '🚀',
    description: 'Pilot a ship through an asteroid field and blast rocks into smaller pieces.',
    category: 'arcade',
    difficulty: 'medium',
    path: 'asteroids/',
    status: 'playable',
    accentColor: '#7ec9ff',
    bgGradient: 'linear-gradient(135deg, #05060f, #0b0f24)'
  },
  {
    id: '15-puzzle',
    title: '15 Puzzle',
    emoji: '🧩',
    description: 'Slide the numbered tiles into numerical order with the empty space.',
    category: 'puzzle',
    difficulty: 'easy',
    path: '15-puzzle/',
    status: 'playable',
    accentColor: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #0f172a, #1e293b)'
  },
  {
    id: 'blackjack',
    title: 'Blackjack',
    emoji: '♠️',
    description: 'Beat the dealer by getting closest to 21 without busting.',
    category: 'card',
    difficulty: 'medium',
    path: 'blackjack/',
    status: 'playable',
    accentColor: '#10b981',
    bgGradient: 'linear-gradient(135deg, #0f172a, #064e3b)'
  },
  {
    id: 'solitaire',
    title: 'Klondike Solitaire',
    emoji: '🃏',
    description: 'Move cards onto foundations and clear the tableau one pile at a time.',
    category: 'card',
    difficulty: 'hard',
    path: 'solitaire/',
    status: 'playable',
    accentColor: '#ec4899',
    bgGradient: 'linear-gradient(135deg, #20122a, #5b21b6)'
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    emoji: '🧠',
    description: 'Repeat the growing sequence of colors and sounds. How long can you remember?',
    category: 'memory',
    difficulty: 'easy',
    path: 'simon-says/',
    status: 'playable',
    accentColor: '#F59E0B',
    bgGradient: 'linear-gradient(135deg, #78350F, #F59E0B)'
  },
  {
    id: 'connect-four',
    title: 'Connect Four',
    emoji: '🟡',
    description: 'Drop discs into the grid and connect four in a row, column, or diagonal to win.',
    category: 'strategy',
    difficulty: 'medium',
    path: 'connect-four/',
    status: 'playable',
    accentColor: '#FBBF24',
    bgGradient: 'linear-gradient(135deg, #78350F, #FBBF24)'
  },
  {
    id: 'life',
    title: 'Game of Life',
    emoji: '🧬',
    description: 'Watch cells live, die, and multiply under simple rules in Conway\'s famous cellular automaton.',
    category: 'simulation',
    difficulty: 'easy',
    path: 'life/',
    status: 'playable',
    accentColor: '#34D399',
    bgGradient: 'linear-gradient(135deg, #064E3B, #34D399)'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    emoji: '🔢',
    description: 'Fill the 9×9 grid so every row, column, and 3×3 box contains digits 1–9.',
    category: 'puzzle',
    difficulty: 'hard',
    path: 'sudoku/',
    status: 'playable',
    accentColor: '#818CF8',
    bgGradient: 'linear-gradient(135deg, #312E81, #818CF8)'
  },
  {
    id: 'tower-defense',
    title: 'Tower Defense',
    emoji: '🏰',
    description: 'Place towers strategically and stop waves of enemies from reaching the exit.',
    category: 'strategy',
    difficulty: 'hard',
    path: 'tower-defense/',
    status: 'playable',
    accentColor: '#F97316',
    bgGradient: 'linear-gradient(135deg, #7C2D12, #F97316)'
  },
  {
    id: 'reaction-time',
    title: 'Reaction Time',
    emoji: '🎯',
    description: 'Test your reflexes — click as fast as you can when the screen changes color.',
    category: 'skill',
    difficulty: 'easy',
    path: 'reaction-time/',
    status: 'playable',
    accentColor: '#EF4444',
    bgGradient: 'linear-gradient(135deg, #7F1D1D, #EF4444)'
  },
  {
    id: 'word-scramble',
    title: 'Word Scramble',
    emoji: '🔤',
    description: 'Unscramble the shuffled letters to find the hidden word before time runs out.',
    category: 'puzzle',
    difficulty: 'easy',
    path: 'word-scramble/',
    status: 'playable',
    accentColor: '#A78BFA',
    bgGradient: 'linear-gradient(135deg, #4C1D95, #A78BFA)'
  },
  {
    id: 'endless-runner',
    title: 'Endless Runner',
    emoji: '🏃',
    description: 'Jump and dodge obstacles in this auto-scrolling side-scroller. How far can you go?',
    category: 'arcade',
    difficulty: 'medium',
    path: 'endless-runner/',
    status: 'playable',
    accentColor: '#14B8A6',
    bgGradient: 'linear-gradient(135deg, #134E4A, #14B8A6)'
  },
  {
    id: 'rhythm-tap',
    title: 'Rhythm Tap',
    emoji: '🎵',
    description: 'Tap falling notes in sync with the beat. Hit perfect timing for the highest score!',
    category: 'skill',
    difficulty: 'medium',
    path: 'rhythm-tap/',
    status: 'playable',
    accentColor: '#F472B6',
    bgGradient: 'linear-gradient(135deg, #831843, #F472B6)'
  },
  {
    id: 'math-sprint',
    title: 'Math Sprint',
    emoji: '🧮',
    description: 'Solve arithmetic problems as fast as you can against the clock. Brain training at speed!',
    category: 'quiz',
    difficulty: 'easy',
    path: 'math-sprint/',
    status: 'playable',
    accentColor: '#22D3EE',
    bgGradient: 'linear-gradient(135deg, #164E63, #22D3EE)'
  }
];

// ─── DOM Elements ────────────────────────────────────────────────────────────
const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search-input');
const filterTags = document.getElementById('filter-tags');
const gamesCount = document.getElementById('games-count');
const noResults = document.getElementById('no-results');
const navbar = document.getElementById('navbar');
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

// ─── State ───────────────────────────────────────────────────────────────────
let activeFilter = 'all';
let searchQuery = '';

// ─── Render Game Cards ───────────────────────────────────────────────────────
function createGameCard(game, index) {
  const isPlayable = game.status === 'playable';
  const difficultyClass = `game-card__tag--difficulty-${game.difficulty}`;

  const card = document.createElement('a');
  card.href = isPlayable ? game.path : '#';
  card.className = 'game-card';
  card.dataset.category = game.category;
  card.dataset.title = game.title.toLowerCase();
  card.style.animationDelay = `${index * 0.05}s`;

  if (!isPlayable) {
    card.addEventListener('click', (e) => e.preventDefault());
  }

  card.innerHTML = `
    <div class="game-card__preview">
      <div class="game-card__preview-bg" style="background: ${game.bgGradient}"></div>
      <span class="game-card__emoji">${game.emoji}</span>
    </div>
    <div class="game-card__content">
      <div class="game-card__tags">
        <span class="game-card__tag game-card__tag--category">${game.category}</span>
        <span class="game-card__tag ${difficultyClass}">${game.difficulty}</span>
      </div>
      <h3 class="game-card__title">${game.title}</h3>
      <p class="game-card__description">${game.description}</p>
      <div class="game-card__footer">
        <span class="game-card__status game-card__status--${game.status}">
          <span class="game-card__status-dot"></span>
          ${isPlayable ? 'Playable' : 'Coming Soon'}
        </span>
        <span class="game-card__play-btn ${!isPlayable ? 'game-card__play-btn--disabled' : ''}">
          ${isPlayable ? '▶ Play' : '🔒 Soon'}
        </span>
      </div>
    </div>
  `;

  // 3D tilt effect on hover
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });

  return card;
}

function renderGames() {
  gamesGrid.innerHTML = '';

  const filtered = GAMES.filter(game => {
    const matchesFilter = activeFilter === 'all' || game.category === activeFilter;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery) ||
                          game.description.toLowerCase().includes(searchQuery) ||
                          game.category.toLowerCase().includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    noResults.classList.add('visible');
  } else {
    noResults.classList.remove('visible');
  }

  filtered.forEach((game, index) => {
    gamesGrid.appendChild(createGameCard(game, index));
  });

  gamesCount.textContent = `${filtered.length} of ${GAMES.length} games`;
}

// ─── Filter & Search Event Listeners ─────────────────────────────────────────
filterTags.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-tag')) {
    document.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
    e.target.classList.add('active');
    activeFilter = e.target.dataset.filter;
    renderGames();
  }
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderGames();
});

// ─── Navbar Scroll Effect ────────────────────────────────────────────────────
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = scrollY;
});

// ─── Particle Canvas Animation ───────────────────────────────────────────────
let particles = [];
const PARTICLE_COUNT = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.hue = Math.random() > 0.5 ? 260 : 190; // Purple or Cyan
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 70%, 65%, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }
}

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        const opacity = (1 - dist / 150) * 0.08;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  drawConnections();
  requestAnimationFrame(animateParticles);
}

// ─── Initialize ──────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

resizeCanvas();
initParticles();
animateParticles();
const statGames = document.getElementById('stat-games');
if (statGames) statGames.textContent = GAMES.length;
renderGames();
