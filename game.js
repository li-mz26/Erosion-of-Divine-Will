const { createInitialState, nextTurn } = require('./src/core/game-state');
const { renderGame } = require('./src/ui/render');

const systemInfo = wx.getSystemInfoSync();
const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');

canvas.width = systemInfo.windowWidth;
canvas.height = systemInfo.windowHeight;

const state = createInitialState();
renderGame(ctx, canvas, state);

wx.onTouchStart(() => {
  nextTurn(state);
  renderGame(ctx, canvas, state);
});
