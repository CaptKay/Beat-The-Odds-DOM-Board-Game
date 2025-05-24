class Game {
  constructor() {
    this.board = new Board(100);
    this.player = new Player();
    this.dice = new Dice();
    this.isGameActive = false;
    this.gameIntroSound = new Audio("../assets/sounds/game-intro.mp3");
    this.winSound = new Audio("../assets/sounds/win.mp3");
    this.gameOverSound = new Audio("../assets/sounds/game-over.mp3");

    //DOM Elements
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-screen");
    this.effectDisplay = document.getElementById("effect-display");
    this.effectGif = document.getElementById("effect-gif");
    this.effectMessage = document.getElementById("effect-message");
    this.messageDisplay = document.getElementById("message-display");
    this.livesCount = document.getElementById("lives-count");
    this.endTitle = document.getElementById("end-title");
    this.endMessage = document.getElementById("end-message");

    this.initEventListeners();
  }

  initEventListeners() {
    const startButton = document.getElementById("start-button");
    const rollButton = document.getElementById("roll-button");
    const playAgainButton = document.getElementById("play-again-button");

    startButton.addEventListener("click", () => this.startGame());
    rollButton.addEventListener("click", () => this.rollDice());
    playAgainButton.addEventListener("click", () => this.reStartGame());
    // playAgainButton.addEventListener('click', ()=> this.startGame());
    this.effectDisplay.style.display = "none";

    this.effectDisplay.addEventListener("click", () => {
      this.effectDisplay.style.display = "none";
    });

    //playing a start sound
    document.addEventListener("mousemove", () => {
      this.gameIntroSound.loop = true;
      this.gameIntroSound.play();
    });
  }

  //start Game
  startGame() {
    console.log("Starting game");

    this.board.initialize();

    this.player = new Player();
    this.player.lives = 3;
    this.livesCount.textContent = this.player.lives;

    const startingCell = document.getElementById("cell-1");
    if (startingCell) {
      startingCell.appendChild(this.player.element);
    }

    this.startScreen.classList.add("hidden");
    this.gameScreen.classList.remove("hidden");
    this.gameScreen.style.display = "flex";

    this.isGameActive = true;

    this.displayMessage("Roll the dice to start your journey!");

        //stopping the start sound
    document.addEventListener("mousemove", () => {
      this.gameIntroSound.pause();
      this.gameIntroSound.currentTime = 0;
    });
  }

  //Roll Dice
  rollDice() {
    
    if (!this.isGameActive) return;
    // console.log('clicked roll dice')

    const rollValue = this.dice.roll();

    this.displayMessage(`You rolled a ${rollValue}!`);

    let newPosition = this.player.position + rollValue;

    if (newPosition >= 100) {
      newPosition = 100;
      this.player.moveTo(newPosition, this.board);
      this.endGame(true);
      return;
    }

    this.player.moveTo(newPosition, this.board);

    const cell = this.board.getCell(newPosition);

    const continueGame = cell.onLand(this.player, this);

    if (!continueGame) {
      return;
    }

    if (this.player.position >= 100) {
      this.endGame(true);
    }
  }

  //Display message to player
  displayMessage(message) {
    if (this.messageDisplay) {
      this.messageDisplay.textContent = message;
    }
  }

  //Display Blessings and Curses Effects
  displayEffect(gifSrc, message, sound) {
    if (!this.effectDisplay) return;

    this.effectGif.src = gifSrc;
    this.effectMessage.textContent = message;

    this.effectDisplay.style.display = "flex";

    if (sound) {
      sound.play();
    }

    setTimeout(() => {
      this.effectDisplay.style.display = "none";
    }, 6000);
  }

  //End the Game
  endGame(isWin) {
    this.isGameActive = false;

    this.gameScreen.classList.add("hidden");

    this.endScreen.classList.remove("hidden");

    if (isWin) {
      this.endTitle.textContent = "Victory!";
      this.endMessage.textContent =
        "You successfully navigated the board of blessings and curses!";
      this.winSound.play();
    } else {
      this.endTitle.textContent = "Game Over!";
      this.endMessage.textContent =
        "You ran out of lives! Better luck next time.";
      this.gameOverSound.play();
    }
  }

  //Restart the Game
  reStartGame() {
    window.location.reload();
  }
}
