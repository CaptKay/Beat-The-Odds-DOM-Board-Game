# Beat The Odds Board Game

A magical board game inspired by Snakes and Ladders, where players navigate through a mystical journey filled with divine blessings and dark curses.

## About the Game

**Bleat The Odds** is a modern twist on the classic board game Snakes and Ladders. Instead of snakes and ladders, players encounter magical blessings that help them on their journey and dangerous curses that hinder their progress.

### Game Features

- **100-space game board** arranged in a serpentine pattern
- **Life system** - Start with 3 lives and manage them carefully
- **12 unique blessings** that provide beneficial effects
- **12 challenging curses** that create obstacles
- **Animated effects** with custom SVG animations for each blessing and curse
- **Sound effects** to enhance the gaming experience
- **Multiple game screens** - Start screen, game screen, and end screen
- **Responsive design** that works on different screen sizes

### The Magic System

**Blessings** (Green Spaces):
- Grant extra lives to the player
- Provide forward movement bonuses
- Help players progress faster toward victory

**Curses** (Red Spaces):
- Drain player's life force
- Force backward movement
- Create challenging setbacks in the journey

## How to Play

### Game Setup
1. Open the game in your web browser
2. Click the "Start Game" button on the welcome screen
3. You begin with **3 lives** at position 1 on the board

### Basic Gameplay
1. **Roll the Dice**: Click the "Roll Dice" button to roll a six-sided die
2. **Move Forward**: Your player token moves forward by the number shown on the dice
3. **Land on Spaces**: Depending on where you land, different effects occur:
   - **Normal spaces** (white/beige): No effect, continue playing
   - **Blessing spaces** (green): Receive beneficial effects
   - **Curse spaces** (red): Receive harmful effects

### Blessing Effects
When you land on a blessing space, you may receive:
- **Extra Lives**: Gain 1 or 2 additional lives
- **Bonus Movement**: Move forward 3, 5, 7, 10, 15, or even 20 spaces
- **Divine Protection**: Various protective effects

**Example Blessings:**
- Divine Light: Gain 1 life
- Angel's Touch: Gain 2 lives
- Swift Wind: Move forward 5 spaces
- Eagle's Flight: Move forward 10 spaces
- Teleportation Scroll: Move forward 15 spaces
- Divine Intervention: Move forward 20 spaces

### Curse Effects
When you land on a curse space, you may experience:
- **Life Loss**: Lose 1 or 2 lives
- **Backward Movement**: Move back 3, 5, 7, 10, or 15 spaces
- **Severe Penalties**: Some curses can send you back to the start

**Example Curses:**
- Shadow Touch: Lose 1 life
- Demon's Grasp: Lose 2 lives
- Quicksand: Move back 5 spaces
- Time Reversal: Move back 10 spaces
- Cursed Teleport: Move back 15 spaces
- Ultimate Curse: Return to the starting position

### Winning and Losing

**Victory Conditions:**
- Reach or pass space 100 on the board
- You win regardless of how many lives you have remaining

**Defeat Conditions:**
- Your lives drop to 0 or below
- Game ends immediately when you run out of lives

### Game Controls
- **Roll Dice Button**: Click to roll the dice and move
- **Effect Displays**: Click anywhere on blessing/curse animations to dismiss them
- **Play Again**: Available on the end screen to restart the game

## Technical Information

### Files Structure
```
blessings-and-curses/
├── index.html                  # Main game file
├── css/styles.css             # Game styling
├── js/                        # JavaScript game logic
│   ├── main.js               # Game initialization
│   ├── Game.js               # Main game controller
│   ├── Board.js              # Board management
│   ├── Player.js             # Player logic
│   ├── Dice.js               # Dice functionality
│   ├── Space.js              # Base space class
│   ├── Blessing.js           # Blessing effects
│   └── Curse.js              # Curse effects
└── assets/                    # Game assets
    ├── images/               # Visual assets
    └── sounds/               # Audio effects
```

### Browser Requirements
- Modern web browser with JavaScript enabled
- Chrome, Firefox, Safari, or Edge recommended
- No additional plugins required

### Installation
1. Download all project files
2. Ensure the folder structure matches the layout above
3. Open `index.html` in your web browser
4. Start playing!

## Game Tips and Strategy

1. **Manage Your Lives**: Keep track of your remaining lives and play cautiously when you're down to 1 life
2. **Risk vs. Reward**: Sometimes taking risks can pay off with powerful blessings
3. **Stay Positive**: Even if you encounter several curses, blessings can quickly turn the tide
4. **Learn the Board**: After a few games, you'll start to remember where some blessings and curses are located

## Customization

The game is built with modular JavaScript classes, making it easy to customize:
- Add new blessing and curse effects
- Modify the number of lives
- Change board size
- Add new sound effects and animations
- Implement multiplayer functionality

## Play Online

🎮 **[Play the game now!](https://captkay.github.io/Beat-The-Odds-DOM-Board-Game/)**

You can play the game directly in your browser without downloading anything. The game is hosted on GitHub Pages and is always available online.

## Installation

### Option 1: Play Online (Recommended)
Simply visit the [game page](https://captkay.github.io/Beat-The-Odds-DOM-Board-Game/) and start playing immediately!

### Option 2: Download and Play Locally
1. Download all project files
2. Ensure the folder structure matches the layout above
3. Open `index.html` in your web browser
4. Start playing!

## Credits

Built with vanilla HTML, CSS, and JavaScript. 

### Assets Attribution
- **Sound Effects**: Sourced from [ZapSplat](https://www.zapsplat.com/) - Professional sound effects library
- **GIF Animations**: Sourced from [Giphy](https://giphy.com/) - The world's largest GIF platform
- **SVG Animations**: Custom-created animated placeholders for development

### Technology Stack
- Vanilla JavaScript (ES6+)
- HTML5 & CSS3
- SVG animations
- Audio Web API

---

**🌟 [Play Beat The Odds Online](https://captkay.github.io/Beat-The-Odds-DOM-Board-Game/) 🌟**

**Enjoy your mystical journey through the realm of Blessings and Curses!**