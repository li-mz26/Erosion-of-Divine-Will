const { HERO_POOL, STARTING_DECK } = require('../config/heroes');
const { createDeck, drawCards } = require('./deck');

function pickHero() {
  return HERO_POOL[Math.floor(Math.random() * HERO_POOL.length)];
}

function createInitialState() {
  const deck = createDeck(STARTING_DECK, 6);
  const player = {
    hero: pickHero(),
    hp: 4,
    maxHp: 4,
    hand: []
  };

  const enemy = {
    hero: pickHero(),
    hp: 4,
    maxHp: 4,
    hand: []
  };

  const state = {
    turn: 1,
    phase: 'prepare',
    deck,
    logs: ['欢迎来到《侵蚀天意：新三国卡牌》原型。'],
    player,
    enemy
  };

  state.player.hand = drawCards(state, 4);
  state.enemy.hand = drawCards(state, 4);
  return state;
}

function nextTurn(state) {
  state.turn += 1;
  state.phase = 'draw';
  state.player.hand.push(...drawCards(state, 2));
  state.logs.unshift(`第 ${state.turn} 回合开始，摸牌阶段。`);
  if (state.logs.length > 6) {
    state.logs.pop();
  }
}

module.exports = {
  createInitialState,
  nextTurn
};
