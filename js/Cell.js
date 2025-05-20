class Cell {
  constructor(id, type = "normal") {
    this.id = id;
    this.type = type;
    this.element = null;
  }

  createCellElement() {
    const cellElement = document.createElement("div");
    cellElement.className = `cell ${this.type}-cell`;
    cellElement.id = `cell-${this.id}`;
    cellElement.textContent = this.id;
    this.element = cellElement;
    return cellElement;
  }

  onLand(player, game) {
    console.log(`Player landed on cell ${this.id}`);
    return true;
  }
}
