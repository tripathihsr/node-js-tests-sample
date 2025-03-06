const { expect } = require('chai');
const sinon = require("sinon");
const { Game } = require('../src/index');

describe('Game Function Group', () => {
  describe('Initialize Game', () => {
    it('Check that the game ID is between 0 and 1000', async function() {
      const game = new Game();
      expect(game.id).is.above(0).but.below(1000);
    });

    it('Check that the play date is today', async function() {
      const game = new Game();
      const currentDate = new Date().toISOString().substr(0, 10);
      expect(game.date).to.be.equal(currentDate);
    });
  });
  
  describe('Start Game', () => {
    it('Check that the game has two competitors', async function() {
      const game = new Game();
      game.start();
      expect(game.players).to.deep.equal({
        you: 'Player 1',
        opponent: 'Player 2'
      });
    });
    
    it('Check that the two competitors have different names', async function() {
      const game = new Game();
      game.start();
      expect(game.players.you).does.not.equal(game.players.opponent);
    });
  });
  
  describe('End Game', () => {
    it('Check that there are no more competitors after the game ends', async function() {
      const spyStart = sinon.spy(Game.prototype, "start");
      const spyStop = sinon.spy(Game.prototype, "stop");

      const game = new Game();

      game.start();
      game.stop();

      expect(game.players.you).to.be.equal(undefined);
      expect(game.players.opponent).to.be.equal(undefined);
      
      expect(spyStart.called).to.be.true;
      expect(spyStop.called).to.be.true;
      
      spyStart.restore();
      spyStop.restore();
    });
  });
});
