class Dice {
  constructor() {
    this.value = 1; // create value 2 and total value later
    this.element = document.getElementById("dice"); //create a second dice later
    this.rollSound = new Audio("./assets/sounds/dice-roll.mp3");
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.updateDisplay();
    this.rollSound.play();
    return this.value;
  }

  updateDisplay() {
    if (this.element) {
      this.element.textContent = this.value; //use dice image to show the value later
    }
  }
}
