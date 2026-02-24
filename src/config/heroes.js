const HERO_POOL = [
  { id: 'caocao', name: '曹操', camp: '魏', hp: 4, skill: '奸雄', desc: '受到伤害后，可获得造成伤害的牌。' },
  { id: 'guanyu', name: '关羽', camp: '蜀', hp: 5, skill: '武圣', desc: '可将红色手牌当【杀】使用。' },
  { id: 'zhouyu', name: '周瑜', camp: '吴', hp: 4, skill: '反间', desc: '令一名敌方猜花色，猜错则失去体力。' },
  { id: 'diaochan', name: '貂蝉', camp: '群', hp: 3, skill: '离间', desc: '令两名男性角色互相决斗。' }
];

const STARTING_DECK = [
  { id: 'sha', name: '杀', type: 'attack', effect: '造成1点伤害。' },
  { id: 'shan', name: '闪', type: 'defense', effect: '抵消一次【杀】。' },
  { id: 'tao', name: '桃', type: 'support', effect: '回复1点体力。' },
  { id: 'juedou', name: '决斗', type: 'trick', effect: '与目标轮流出【杀】。' },
  { id: 'wuzhong', name: '无中生有', type: 'trick', effect: '摸两张牌。' }
];

module.exports = {
  HERO_POOL,
  STARTING_DECK
};
