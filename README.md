# VLA 历史关键事件检测：论文精读站点

在线入口：[主导航页](https://221zhong.github.io/web-test/)。根页只负责导航与研究路线总览；每篇精读均为独立子网页，可持续扩充。

## 当前 P0 页面

| 优先级 | 工作 | 在线精读页面 |
| --- | --- | --- |
| P0-1 | DDM-Net | [打开网页](https://221zhong.github.io/web-test/papers/ddm-net/) |
| P0-2 | FlowGEBD | [打开网页](https://221zhong.github.io/web-test/papers/flowgebd/) |
| P0-3 | CAG-QIL | [打开网页](https://221zhong.github.io/web-test/papers/cag-qil/) |
| P0-4 | Hierarchical Event Memory | [打开网页](https://221zhong.github.io/web-test/papers/hierarchical-event-memory/) |
| P0-5 | KEMO | [打开网页](https://221zhong.github.io/web-test/papers/kemo/) |

## 内容与图像原则

- 每篇按“论文信息 → 核心摘要 → 研究动机 → 方法论 → 实验与结果 → 优势与局限 → 总结”组织，实验部分只使用关键数值和文字。
- 方法图优先使用作者公开 LaTeX 源码；网页内使用本地相对路径，必要时同时保存原始 PDF。
- CAG-QIL 未找到可核验的作者公开 LaTeX 方法图，因此明确说明并省略图片，不以 PDF 页面裁图替代。
- 不创建 ZIP 离线包。

## 目录结构

```text
index.html                 # 主导航
style.css                  # 共享样式
papers/<paper-slug>/
  ├── index.html           # 单篇精读
  └── figures/             # 原图与网页展示版本
```

新增页面时，创建独立子目录并在 [主导航页](https://221zhong.github.io/web-test/) 增加入口即可。
