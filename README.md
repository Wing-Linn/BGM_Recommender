# Vibe Check — 根据你当前的状态推荐一首歌

> Tell me how you feel. I'll find the perfect song.

一个基于情绪分析的 BGM 推荐器。输入你此刻的状态，应用会分析你的情绪、能量值、心境和时间场景，从 60 首横跨 15+ 流派的歌曲库中为你匹配最合适的那一首。

---

## 功能一览

### 核心推荐
- **自然语言情绪分析** — 用你自己的话描述感受，系统通过关键词识别 + 加权聚合算法提取情绪维度
- **多维度匹配引擎** — 综合 mood（情绪类型）、energy（能量值）、valence（心境值）、context（场景标签）、time of day（时段）五个维度打分
- **Top 3 推荐** — 主推一首 + 两首备选，每首附带匹配度和推荐理由

### 创意生成
- **动态情绪背景** — 渐变光晕随情绪实时变化颜色与流动速度（开心→暖金，悲伤→深蓝，愤怒→暗红，梦幻→紫青）
- **人格标签** — 为你生成一个电影感角色原型（如「雨窗诗人」「夜路驾驶者」）
- **电影场景** — 描述一个与你当前状态契合的电影画面（如「最后一班夜车」「雨中漫步」）

### 交互体验
- 10 个一键快捷情绪预设
- "Surprise me" 随机情绪生成
- 原生分享 / 剪贴板复制
- 全程 framer-motion 动画过渡

---

## 技术架构

| 层级 | 技术 |
|------|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 5 |
| 样式 | Tailwind CSS 3 |
| 动画 | Framer Motion |
| 图标 | Lucide React |
| 字体 | Inter (Google Fonts) |

### 项目结构

```
src/
├── App.tsx                    # 主应用，三阶段流程控制
├── types.ts                   # 类型定义
├── data/
│   └── songs.ts               # 60 首歌曲数据库
├── lib/
│   ├── analyzer.ts            # 情绪分析引擎（关键词映射 + 加权聚合）
│   ├── recommender.ts         # 推荐打分算法（五维度加权）
│   └── generators.ts          # 人格 & 电影场景生成器
└── components/
    ├── DynamicBackground.tsx   # 情绪驱动的动态背景
    ├── StateInput.tsx          # 输入界面 + 快捷预设
    ├── Analyzing.tsx           # 分析中加载动画
    └── ResultDisplay.tsx      # 结果展示（歌曲卡 + 人格 + 场景 + 分享）
```

### 推荐算法

```
总分 = mood匹配(40%) + energy匹配(25%) + valence匹配(20%) + context标签(15%) + 时段加分(5%)
```

- **mood 匹配**：歌曲 mood 数组是否包含用户情绪，部分匹配按关联度给分
- **energy 匹配**：歌曲能量值与用户能量值的差值越小越好
- **valence 匹配**：心境值（快乐/悲伤程度）的差值越小越好
- **context 标签**：歌曲标签与用户场景的关键词重叠度
- **时段加分**：夜间场景匹配 night 标签歌曲，早晨匹配高 valence 歌曲

---

## 本地运行

```bash
npm install
npm run dev
```

打开浏览器访问 `http://localhost:5173`

### 构建验证

```bash
npm run build      # 生产构建
npm run typecheck  # 类型检查
```

---

## 使用示例

| 输入 | 检测情绪 | 推荐方向 |
|------|---------|---------|
| "I feel amazing and full of energy" | happy · energy 8 | 欢快流行 / 放克舞曲 |
| "I just went through a breakup" | heartbroken · energy 2 | 伤感民谣 / 情感独立 |
| "I'm overwhelmed with stress" | stressed · energy 7 | 氛围环境 / 缓解焦虑 |
| "I feel nostalgic on this rainy night" | nostalgic · night | 合成波 / 梦幻流行 |
| "I need to focus on studying" | focused · energy 5 | 极简氛围 / 钢琴古典 |
| "I am furious and need to let off steam" | angry · energy 9 | 金属 / 另类摇滚 |

---

## 歌曲库覆盖

60 首歌曲横跨以下流派：

Ambient · Pop · Indie · Folk · Classical · Synthwave · Downtempo · Electronica · Funk · Disco · Hip Hop · Rock · Metal · R&B · Soul · Dream Pop · Trip Hop · Psychedelic · Jazz · Lo-fi · Chanson · Nu Metal · Alternative

---

## License

MIT
