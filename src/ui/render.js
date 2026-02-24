function drawPanel(ctx, x, y, width, height, title) {
  ctx.fillStyle = '#111827';
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#334155';
  ctx.strokeRect(x, y, width, height);
  ctx.fillStyle = '#f8fafc';
  ctx.font = '18px sans-serif';
  ctx.fillText(title, x + 12, y + 28);
}

function drawCard(ctx, card, x, y, width, height) {
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#475569';
  ctx.strokeRect(x, y, width, height);
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '14px sans-serif';
  ctx.fillText(card.name, x + 10, y + 24);
  ctx.font = '12px sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(card.effect, x + 10, y + 46);
}

function renderGame(ctx, canvas, state) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPanel(ctx, 24, 20, canvas.width - 48, 140, `敌方：${state.enemy.hero.name}（${state.enemy.hero.camp}）`);
  ctx.fillStyle = '#f97316';
  ctx.fillText(`HP: ${state.enemy.hp}/${state.enemy.maxHp}`, 40, 70);

  drawPanel(ctx, 24, 180, canvas.width - 48, 220, `我方：${state.player.hero.name}（${state.player.hero.camp}）`);
  ctx.fillStyle = '#22c55e';
  ctx.fillText(`HP: ${state.player.hp}/${state.player.maxHp}`, 40, 230);

  state.player.hand.slice(0, 3).forEach((card, index) => {
    drawCard(ctx, card, 40 + index * 150, 250, 130, 120);
  });

  drawPanel(ctx, 24, 420, canvas.width - 48, 180, `战报（第 ${state.turn} 回合）`);
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '14px sans-serif';
  state.logs.forEach((line, idx) => {
    ctx.fillText(`- ${line}`, 40, 460 + idx * 24);
  });

  ctx.fillStyle = '#38bdf8';
  ctx.font = '16px sans-serif';
  ctx.fillText('点击屏幕进入下一回合', 40, canvas.height - 28);
}

module.exports = {
  renderGame
};
