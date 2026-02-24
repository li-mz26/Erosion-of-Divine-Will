# 侵蚀天意：新三国卡牌（微信小游戏）

这是一个用于快速起步的微信小游戏原型项目，包含：

- 微信小游戏基础入口（`game.js` + `game.json`）
- 新三国主题武将与卡牌基础数据
- 简单的回合推进与摸牌逻辑
- Canvas 原型 UI（点击屏幕进入下一回合）

## 目录结构

```text
.
├── game.js
├── game.json
├── project.config.json
├── src
│   ├── config
│   │   └── heroes.js
│   ├── core
│   │   ├── deck.js
│   │   └── game-state.js
│   └── ui
│       └── render.js
└── package.json
```

## 本地开发

1. 使用微信开发者工具导入本目录。
2. 项目类型选择「小游戏」。
3. `appid` 可先使用 `touristappid` 调试，正式发布前替换为你的小游戏 AppID。

## 下一步建议

- 加入武将技能触发系统（出牌阶段、受伤阶段等）
- 补齐战斗结算（伤害、濒死、胜负）
- 设计对战模式（PVE 剧情 / PVP 排位）
- 增加美术资源与音效
