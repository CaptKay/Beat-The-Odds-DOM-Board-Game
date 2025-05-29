class Player {
  constructor(id = 1) {
    this.id = id;
    this.position = 1;
    this.lives = 3;
    this.element = null;
    this.createPlayerElement();
  }

    createPlayerElement() {
    const playerElement = document.createElement("img");
    playerElement.className = "player-token";
    playerElement.id = `player-${this.id}`;
    playerElement.src = "./assets/images/player1.png";
    this.element = playerElement;
    return playerElement;
  }

  //You look into creating animated player movement
  moveTo(position, board) {
    this.position = position;

    const cellElement = document.getElementById(`cell-${position}`);
    if (cellElement && this.element) {
      cellElement.appendChild(this.element);
    }
  }

  addLives(count) {
    this.lives += count;
    document.getElementById("lives-count").textContent = this.lives;
  }

  loseLives(count) {
    this.lives -= count;
    if (this.lives < 0) this.lives = 0;
    document.getElementById("lives-count").textContent = this.lives;
  }
}
