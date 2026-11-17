# VLA 历史记忆：论文精读站点

在线入口：[主导航页](https://221zhong.github.io/web-test/)。本站围绕 VLA 的历史信息维护组织为两个可独立阅读的专题：历史关键事件检测，以及 KV Cache 与事件记忆。每篇精读均为独立子网页，可持续扩充。

## 专题一：历史关键事件检测

该专题研究 VLA 如何从连续观测中识别值得长期保留的状态转移，并避免把稠密视频或机器人轨迹全部写入记忆。P0 建立候选、确认、提交和维护链条；P1 补充表征、在线实例定位与历史增强机制；P2 给出“未来能否找回记忆”的评测标准。

| 优先级 | 工作 | 在线精读页面 | 关注点 |
| --- | --- | --- | --- |
| P0 | DDM-Net | [打开网页](https://221zhong.github.io/web-test/papers/ddm-net/) | 以 motion 与 appearance 的多层差分确认通用事件边界 |
| P0 | FlowGEBD | [打开网页](https://221zhong.github.io/web-test/papers/flowgebd/) | 以稀疏轨迹和 flow normalization 低成本生成因果边界候选 |
| P0 | CAG-QIL | [打开网页](https://221zhong.github.io/web-test/papers/cag-qil/) | 在线 proposal 的 pending / active / committed 提交决策 |
| P0 | Hierarchical Event Memory | [打开网页](https://221zhong.github.io/web-test/papers/hierarchical-event-memory/) | 多尺度事件 proposal memory 与近期细、远期粗的长期维护 |
| P0 | KEMO | [打开网页](https://221zhong.github.io/web-test/papers/kemo/) | 机器人运动显著性、因果峰值与视觉去重驱动的关键帧写入 |
| P1 | Motion-Aware Self-Supervision | [打开网页](https://221zhong.github.io/web-test/papers/motion-aware-ssl/) | 以可微 motion module 学习对边界敏感的自监督表征 |
| P1 | OadTR | [打开网页](https://221zhong.github.io/web-test/papers/oadtr/) | 用历史 Transformer 与训练期未来表征预测识别当前动作 phase |
| P1 | OAT | [打开网页](https://221zhong.github.io/web-test/papers/oat/) | 多尺度 anchor proposal 与不可回改的在线实例定位 |
| P1 | MATR | [打开网页](https://221zhong.github.io/web-test/papers/matr/) | 选择性历史队列，以及先终点、后起点的实例解码 |
| P1 | HAT | [打开网页](https://221zhong.github.io/web-test/papers/hat/) | 以未来监督历史模块增强程序性第一视角动作定位 |
| P1 | Event-VStream | [打开网页](https://221zhong.github.io/web-test/papers/event-vstream/) | motion、语义与预测线索共同触发事件写入和持久记忆更新 |
| P2 | Ego4D Episodic Memory | [打开网页](https://221zhong.github.io/web-test/papers/ego4d-episodic-memory/) | 用 NLQ、VQ、MQ 验证历史事件能否被语言、对象和活动查询找回 |

该专题的汇总入口：[P1 / P2 总览](https://221zhong.github.io/web-test/papers/)。

## 专题二：KV Cache 与事件记忆

该专题关注 VLA / Video-LLM 在固定显存预算下，如何复用、选择、压缩、检索与分层维护 KV Cache。它与专题一的关系是：专题一决定何时形成或提交关键事件，专题二决定已写入信息以何种 KV 表征保存、压缩与读取。

| 优先级 | 工作 | 在线精读页面 | 关注点 |
| --- | --- | --- | --- |
| P0 | VLA-Cache | [打开网页](https://221zhong.github.io/web-test/papers/vla-cache/) | 跨控制步的自适应视觉 token / KV 复用 |
| P0 | KEMO | [打开网页](https://221zhong.github.io/web-test/papers/kemo/) | 事件驱动关键帧写入与 VLA memory 融合 |
| P0 | StreamMem | [打开网页](https://221zhong.github.io/web-test/papers/streammem/) | query-agnostic 的固定容量流式 KV memory |
| P0 | HERMES | [打开网页](https://221zhong.github.io/web-test/papers/hermes/) | 将 KV cache 组织为浅层细节、深层摘要的分层记忆 |
| P0 | OxyGen | [打开网页](https://221zhong.github.io/web-test/papers/oxygen/) | VLA 多任务的跨任务 KV 共享与跨帧连续调度 |
| P1 | ReKV | [打开网页](https://221zhong.github.io/web-test/papers/rekv/) | 视频 KV 的外部存储、query 检索与回载 |
| P1 | LiveVLM | [打开网页](https://221zhong.github.io/web-test/papers/livevlm/) | 在线视频的短期 / 长期 KV 与即时问答 |
| P1 | InfiniPot-V | [打开网页](https://221zhong.github.io/web-test/papers/infinipot-v/) | 时间冗余与 value 显著性驱动的固定 KV 预算 |
| P1 | StreamKV | [打开网页](https://221zhong.github.io/web-test/papers/streamkv/) | 语义事件段的 KV 摘要、检索与分层压缩 |
| P1 | Video-MemComp | [打开网页](https://221zhong.github.io/web-test/papers/video-memcomp/) | Taylor 敏感度和逐层动态 KV 预算 |
| P2 | VidKV | [打开网页](https://221zhong.github.io/web-test/papers/vidkv/) | Video LLM 的超低比特 Key / Value KV 量化 |

## 目录结构

```text
index.html                 # 主导航
style.css                  # 共享样式
papers/<paper-slug>/
  ├── index.html           # 单篇精读
  └── figures/             # 原图与网页展示版本
```

新增页面时，创建独立子目录并在 [主导航页](https://221zhong.github.io/web-test/) 增加入口即可。
