class Blessing extends Cell {
  constructor(id, effect, message, gifSrc, soundSrc) {
    super(id, "blessing");
    this.effect = effect;
    this.message = message;
    this.gifSrc = gifSrc;
    this.soundSrc = soundSrc;
    this.sound = new Audio(soundSrc);
  }

  onLand(player, game) {
    console.log(`Player landed on blessing ${this.id}: ${this.message}`);

    game.displayEffect(this.gifSrc, this.message, this.sound);

    this.effect(player, game);
  }
}
