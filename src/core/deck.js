function shuffle(cards) {
  const cloned = [...cards];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function createDeck(seedCards, duplicateCount = 4) {
  const deck = [];
  seedCards.forEach((card) => {
    for (let i = 0; i < duplicateCount; i += 1) {
      deck.push({ ...card, uid: `${card.id}-${i}-${Math.random().toString(16).slice(2, 8)}` });
    }
  });
  return shuffle(deck);
}

function drawCards(state, count) {
  const hand = [];
  for (let i = 0; i < count; i += 1) {
    const card = state.deck.pop();
    if (!card) {
      break;
    }
    hand.push(card);
  }
  return hand;
}

module.exports = {
  createDeck,
  drawCards,
  shuffle
};
