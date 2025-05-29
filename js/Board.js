class Board {
  constructor(size = 100) {
    this.size = size;
    this.cells = [];
    this.element = document.getElementById("game-board");
    this.blessings = [];
    this.curses = [];
  }

   // Initialize the board with spaces
  initialize() {
    for (let i = 1; i <= this.size; i++) {
      const cell = new Cell(i);
      this.cells.push(cell);
    }

    this.createBlessings();

    this.createCurses();

    this.applySpecialCells();

    this.createBoardElement();
  }

  createBlessings() {
    const blessingDefinitions = [
      {
        effect: (player, game) => {
          player.addLives(1);
        },
        message: "Goddes Lari's Divine Light: Gain 1 Life!",
        gifSrc: "./assets/images/blessing1.gif",
        soundSrc: "./assets/sounds/blessing1.mp3",
      },
      {
        effect: (player, game) => {
          player.addLives(2);
        },
        message: "Goddes Joice's Angel's Touch: Gain 2 lives!",
        gifSrc: "./assets/images/blessing2.gif",
        soundSrc: "./assets/sounds/blessing2.mp3",
      },
      {
        effect: (player, game) => {
          const move = 5;
          const newPosition = Math.min(player.position + move, 100);
          player.moveTo(newPosition, this);
        },
        message: "God Tim's Swift Wind: Move forward 5 spaces!",
        gifSrc: "./assets/images/blessing3.gif",
        soundSrc: "./assets/sounds/blessing3.mp3",
      },
      {
        effect: (player, game) => {
          const move = 10;
          const newPosition = Math.min(player.position + move, 100);
          player.moveTo(newPosition, this);
        },
        message: "God Konstantinos' Eagle's Flight: Move forward 10 spaces!",
        gifSrc: "./assets/images/blessing4.gif",
        soundSrc: "./assets/sounds/blessing4.mp3",
      },
      {
        effect: (player, game) => {
          player.addLives(1);
        },
        message: "Goddes Noemi's Healing Potion: Gain 1 life!",
        gifSrc: "./assets/images/blessing5.gif",
        soundSrc: "./assets/sounds/blessing5.mp3",
      },
      {
        effect: (player, game) => {
          const move = 3;
          const newPosition = Math.min(player.position + move, 100);
          player.moveTo(newPosition, this);
        },
        message: "Goddes Dani's Lucky Charm: Move forward 3 spaces!",
        gifSrc: "./assets/images/blessing6.gif",
        soundSrc: "./assets/sounds/blessing6.mp3",
      },
      {
        effect: (player, game) => {
          player.addLives(1);
        },
        message: "Goddes Thathsara's Fairy Dust: Gain 1 life!",
        gifSrc: "./assets/images/blessing7.gif",
        soundSrc: "./assets/sounds/blessing7.mp3",
      },
      {
        effect: (player, game) => {
          const move = 7;
          const newPosition = Math.min(player.position + move, 100);
          player.moveTo(newPosition, this);
        },
        message: "God Felix's Rainbow Bridge: Move forward 7 spaces!",
        gifSrc: "./assets/images/blessing8.gif",
        soundSrc: "./assets/sounds/blessing8.mp3",
      },
      {
        effect: (player, game) => {
          player.addLives(2);
        },
        message: "God Alex's Unicorn Blessing: Gain 2 lives!",
        gifSrc: "./assets/images/blessing9.gif",
        soundSrc: "./assets/sounds/blessing5.mp3",
      },
      {
        effect: (player, game) => {
          const move = 15;
          const newPosition = Math.min(player.position + move, 100);
          player.moveTo(newPosition, this);
        },
        message: "Overlord D's Teleportation Scroll: Move forward 15 spaces!",
        gifSrc: "./assets/images/blessing10.gif",
        soundSrc: "./assets/sounds/blessing3.mp3",
      },
      {
        effect: (player, game) => {
          player.addLives(1);
        },
        message: "Overlord J's Guardian Angel: Gain 1 life!",
        gifSrc: "./assets/images/blessing11.gif",
        soundSrc: "./assets/sounds/blessing7.mp3",
      },
      {
        effect: (player, game) => {
          player.addLives(3);
          const move = 20;
          const newPosition = Math.min(player.position + move, 100);
          player.moveTo(newPosition, this);
        },
        message: "Kay's Divine Intervention: Move forward 20 spaces and Gain 3 more lives!",
        gifSrc: "./assets/images/blessing12.gif",
        soundSrc: "./assets/sounds/blessing12.mp3",
      },
    ];

    const availablePositions = Array.from({ length: this.size - 2 }, (_, i) => i + 2);
    const shuffledPositions = this.shuffleArray(availablePositions).slice(0,12);

    blessingDefinitions.forEach((def, index) => {
      const position = shuffledPositions[index];
      const blessing = new Blessing(
        position,
        def.effect,
        def.message,
        def.gifSrc,
        def.soundSrc
      );
      this.blessings.push(blessing);
    });
  }

  createCurses() {
    const curseDefinitions = [
      {
        effect: (player, game) => {
          player.loseLives(1);
        },
        message: "Goddes Lari's Shadow Touch: Lose 1 life!",
        gifSrc: "./assets/images/curse1.gif",
        soundSrc: "./assets/sounds/curse1.mp3",
      },
      {
        effect: (player, game) => {
          player.loseLives(2);
        },
        message: "Goddes Joice's Demon's Grasp: Lose 2 lives!",
        gifSrc: "./assets/images/curse2.gif",
        soundSrc: "./assets/sounds/curse2.mp3",
      },
      {
        effect: (player, game) => {
          const move = 5;
          const newPosition = Math.max(player.position - move, 1);
          player.moveTo(newPosition, this);
        },
        message: "God Tim's Quicksand: Move back 5 spaces!",
        gifSrc: "./assets/images/curse3.gif",
        soundSrc: "./assets/sounds/curse3.mp3",
      },
      {
        effect: (player, game) => {
          const move = 10;
          const newPosition = Math.max(player.position - move, 1);
          player.moveTo(newPosition, this);
        },
        message: "God Konstantinos' Time Reversal: Move back 10 spaces!",
        gifSrc: "./assets/images/curse4.gif",
        soundSrc: "./assets/sounds/curse4.mp3",
      },
      {
        effect: (player, game) => {
          player.loseLives(1);
        },
        message: "Goddes Noemi's Poison Dart: Lose 1 life!",
        gifSrc: "./assets/images/curse5.gif",
        soundSrc: "./assets/sounds/curse5.mp3",
      },
      {
        effect: (player, game) => {
          const move = 3;
          const newPosition = Math.max(player.position - move, 1);
          player.moveTo(newPosition, this);
        },
        message: "Goddes Dani's Tripping Trap: Move back 3 spaces!",
        gifSrc: "./assets/images/curse6.gif",
        soundSrc: "./assets/sounds/curse6.mp3",
      },
      {
        effect: (player, game) => {
          player.loseLives(1);
        },
        message: "Goddes Thathsara's Evil Spell: Lose 1 life!",
        gifSrc: "./assets/images/curse7.gif",
        soundSrc: "./assets/sounds/curse7.mp3",
      },
      {
        effect: (player, game) => {
          const move = 7;
          const newPosition = Math.max(player.position - move, 1);
          player.moveTo(newPosition, this);
        },
        message: "God Felix's Slippery Slope: Move back 7 spaces!",
        gifSrc: "./assets/images/curse8.gif",
        soundSrc: "./assets/sounds/curse8.mp3",
      },
      {
        effect: (player, game) => {
          player.loseLives(2);
        },
        message: "God Alex's Dragon's Breath: Lose 2 lives!",
        gifSrc: "./assets/images/curse9.gif",
        soundSrc: "./assets/sounds/curse9.mp3",
      },
      {
        effect: (player, game) => {
          const move = 15;
          const newPosition = Math.max(player.position - move, 1);
          player.moveTo(newPosition, this);
        },
        message: "Overlord D's Cursed Teleport: Move back 15 spaces!",
        gifSrc: "./assets/images/curse10.gif",
        soundSrc: "./assets/sounds/curse10.mp3",
      },
      {
        effect: (player, game) => {
          player.loseLives(1);
        },
        message: "Overlord J's Dark Magic: Lose 1 life!",
        gifSrc: "./assets/images/curse11.gif",
        soundSrc: "./assets/sounds/curse11.mp3",
      },
      {
        effect: (player, game) => {
          // player.loseLives(2);
          player.moveTo(1, this);
        },
        message: "Kay's Ultimate Curse: Back to start!",
        gifSrc: "./assets/images/curse12.gif",
        soundSrc: "./assets/sounds/curse12.mp3",
      },
    ];

    const availablePositions = Array.from(
      { length: this.size - 2 },
      (_, i) => i + 2
    ).filter((pos) => !this.blessings.some((b) => b.id === pos));

    const shuffledPositions = this.shuffleArray(availablePositions).slice(
      0,
      12
    );

    curseDefinitions.forEach((def, index) => {
      const position = shuffledPositions[index];
      const curse = new Curse(
        position,
        def.effect,
        def.message,
        def.gifSrc,
        def.soundSrc
      );
      this.curses.push(curse);
    });
  }

  // Apply blessings and curses to the board
  applySpecialCells() {
    for (const blessing of this.blessings) {
      this.cells[blessing.id - 1] = blessing;
    }
    for (const curse of this.curses) {
      this.cells[curse.id - 1] = curse;
    }
  }

  // Create the visual board
  createBoardElement() {
    if (!this.element) return;

    this.element.innerHTML = '';
    const rows = Math.round(Math.sqrt(this.size));
    const cols = Math.round(Math.sqrt(this.size));

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let index;
        if (row % 2 === 0) {
          // Even rows go left to right
          index = (rows - 1 - row) * cols + col;
        } else {
          // Odd rows go right to left
          index = (rows - 1 - row) * cols + (cols - 1 - col);
        }

        const cell = this.cells[index];
        const cellElement = cell.createCellElement();

        this.element.appendChild(cellElement);
      }
    }
  }

  // Get a cell by ID
  getCell(id) {
    return this.cells[id - 1];
  }

   // Utility function to shuffle an array
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
