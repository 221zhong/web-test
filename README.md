# VLA 历史关键事件检测：论文精读站点

这是一个 GitHub Pages 友好的静态研究笔记站点。根目录 [`index.html`](./index.html) 只承担导航；每篇论文均部署在独立子目录，方便持续新增。

## 当前 P0 页面

| 优先级 | 工作 | 页面 |
| --- | --- | --- |
| P0-1 | DDM-Net | [精读](./papers/ddm-net/index.html) |
| P0-2 | FlowGEBD | [精读](./papers/flowgebd/index.html) |
| P0-3 | CAG-QIL | [精读](./papers/cag-qil/index.html) |
| P0-4 | Hierarchical Event Memory | [精读](./papers/hierarchical-event-memory/index.html) |
| P0-5 | KEMO | [精读](./papers/kemo/index.html) |

## 目录结构

```text
.
├── index.html                 # 只做导航与路线总览
├── style.css                  # 共享样式
└── papers/
    └── <paper-slug>/
        ├── index.html         # 单篇精读
        └── figures/           # 作者原始图与网页展示版本
```

## 图像原则

- 仅保留研究动机、模型架构或核心机制图；实验结果只以数据表和文字解释。
- 优先使用作者公开的 arXiv LaTeX 源码图，同时保存可展示的 PNG 和必要的原始 PDF/PNG。
- CAG-QIL 未找到可核验的作者公开 LaTeX 方法图，因此其页面刻意不使用 PDF 裁图。
- 不提供 ZIP 离线包。

## 新增页面

创建 `papers/<paper-slug>/index.html` 和同级 `figures/`，然后在根页增加导航卡片即可。页面中的图片必须使用相对路径，确保 GitHub Pages 可直接访问。
