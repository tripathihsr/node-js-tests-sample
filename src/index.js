class Game {
  constructor() {
    this.id = this.getId();
    this.date = new Date().toISOString().substr(0, 10);
    this.players = {};
  }

  getId() {
    return Math.floor(Math.random() * 999) + 1;
  }

  start() {
    this.players = {
      you: 'Player 1',
      opponent: 'Player 2'
    };
  }

  stop() {
    this.players = {
      you: undefined,
      opponent: undefined
    };
  }
}

module.exports = { Game };
