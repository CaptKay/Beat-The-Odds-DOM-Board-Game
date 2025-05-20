class Curse extends Cell {
  constructor(id, effect, message, gifSrc, soundSrc) {
    super(id, "curse");
    this.effect = effect;
    this.message = message;
    this.gifSrc = gifSrc;
    this.soundSrc = soundSrc;
    this.sound = new Audio(soundSrc);
  }

  onLand(player, game) {
    console.log(`Player landed on curse ${this.id}: ${this.message}`);

    game.displayEffect(this.gifSrc, this.message, this.sound);

    this.effect(player, game);

    if (player.lives <= 0) {
      setTimeout(() => game.endGame(false), 2000);
      return false;
    }
    return true;
  }
}
