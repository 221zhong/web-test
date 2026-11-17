# VLA 历史记忆：论文精读站点

在线入口：[主导航页](https://221zhong.github.io/web-test/)。本站围绕 VLA 的历史信息维护组织为三个可独立阅读的专题：历史关键事件检测、KV Cache 与事件记忆，以及 VLA 的在线记忆。每篇精读均为独立子网页，可持续扩充。

## 专题一：历史关键事件检测

该专题研究 VLA 如何从连续观测中识别值得长期保留的状态转移，并避免把稠密视频或机器人轨迹全部写入记忆。P0 建立候选、确认、提交和维护链条；P1 补充表征、在线实例定位与历史增强机制；P2 给出“未来能否找回记忆”的评测标准。

专题总览：[历史关键事件检测专题](https://221zhong.github.io/web-test/papers/)。

12 篇精读统一为七节结构（核心摘要 / 事件流水线定位 / 问题与动机 / 方法拆解 / 证据与实验 / 优点局限与 VLA 适配 / 落地清单），左侧为页内粘性目录，页首决策卡给出「最小可复用件 / 主要风险 / 复现门槛」。数字只保留论文报告值，无法核验处标注「未在已核验的公开材料中确认」。

方法图优先取作者公开的 LaTeX 源码原图；只有 PDF 排版图时，按该 figure 的包围盒精确裁切（不含图注、正文、页眉页脚、页码与相邻图表），图注写明「PDF 第 N 页 Figure M（按图区域裁切）」；无法干净裁切时才改用按正文重绘的示意图并标注「本站重绘」与对应原图号。

| 优先级 | 工作 | 发表信息 | 在线精读页面 | 关注点 |
| --- | --- | --- | --- | --- |
| P0 | DDM-Net | CVPR 2022 · 2021-12 | [打开网页](https://221zhong.github.io/web-test/papers/ddm-net/) | 以 motion 与 appearance 的多层差分确认通用事件边界 |
| P0 | FlowGEBD | WACV 2024 · 2024-04 | [打开网页](https://221zhong.github.io/web-test/papers/flowgebd/) | 以稀疏轨迹和 flow normalization 低成本生成因果边界候选 |
| P0 | CAG-QIL | ICCV 2021 · 2021-10 | [打开网页](https://221zhong.github.io/web-test/papers/cag-qil/) | 在线 proposal 的 pending / active / committed 提交决策 |
| P0 | Hierarchical Event Memory | ICCV 2025 · 2025-08 | [打开网页](https://221zhong.github.io/web-test/papers/hierarchical-event-memory/) | 多尺度事件 proposal memory 与近期细、远期粗的长期维护 |
| P0 | KEMO | arXiv 预印本 · 2026-06 | [打开网页](https://221zhong.github.io/web-test/papers/kemo/) | 机器人运动显著性、因果峰值与视觉去重驱动的关键帧写入 |
| P1 | Motion-Aware Self-Supervision | WACV 2023 · 2022-10 | [打开网页](https://221zhong.github.io/web-test/papers/motion-aware-ssl/) | 以可微 motion module 学习对边界敏感的自监督表征 |
| P1 | OadTR | ICCV 2021 · 2021-06 | [打开网页](https://221zhong.github.io/web-test/papers/oadtr/) | 用历史 Transformer 与训练期未来表征预测识别当前动作 phase |
| P1 | OAT | ECCV 2022 · 2022-10 | [打开网页](https://221zhong.github.io/web-test/papers/oat/) | 多尺度 anchor proposal 与不可回改的在线实例定位 |
| P1 | MATR | ECCV 2024 · 2024-08 | [打开网页](https://221zhong.github.io/web-test/papers/matr/) | 选择性历史队列，以及先终点、后起点的实例解码 |
| P1 | HAT | ECCV 2024 · 2024-08 | [打开网页](https://221zhong.github.io/web-test/papers/hat/) | 以未来监督历史模块增强程序性第一视角动作定位 |
| P1 | Event-VStream | arXiv 预印本 · 2026-01 | [打开网页](https://221zhong.github.io/web-test/papers/event-vstream/) | motion、语义与预测线索共同触发事件写入和持久记忆更新 |
| P2 | Ego4D Episodic Memory | CVPR 2022 · 2021-10 | [打开网页](https://221zhong.github.io/web-test/papers/ego4d-episodic-memory/) | 用 NLQ、VQ、MQ 验证历史事件能否被语言、对象和活动查询找回 |

## 专题二：KV Cache 与事件记忆

该专题关注 VLA / Video-LLM 在固定显存预算下，如何复用、选择、压缩、检索与分层维护 KV Cache。它与专题一的关系是：专题一决定何时形成或提交关键事件，专题二决定已写入信息以何种 KV 表征保存、压缩与读取。

专题总览：[KV Cache 与事件记忆专题](https://221zhong.github.io/web-test/papers/kv-cache-event-memory/)。

| 优先级 | 工作 | 发表信息 | 在线精读页面 | 关注点 |
| --- | --- | --- | --- | --- |
| P0 | VLA-Cache | NeurIPS 2025 · 2025-02 | [打开网页](https://221zhong.github.io/web-test/papers/vla-cache/) | 跨控制步的自适应视觉 token / KV 复用 |
| P0 | KEMO | arXiv 预印本 · 2026-06 | [打开网页](https://221zhong.github.io/web-test/papers/kemo/) | 事件驱动关键帧写入与 VLA memory 融合 |
| P0 | StreamMem | arXiv 预印本 · 2025-08 | [打开网页](https://221zhong.github.io/web-test/papers/streammem/) | query-agnostic 的固定容量流式 KV memory |
| P0 | HERMES | arXiv 预印本 · 2026-01 | [打开网页](https://221zhong.github.io/web-test/papers/hermes/) | 将 KV cache 组织为浅层细节、深层摘要的分层记忆 |
| P0 | OxyGen | NeurIPS 2026 · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/oxygen/) | VLA 多任务的跨任务 KV 共享与跨帧连续调度 |
| P1 | ReKV | ICLR 2025 · 2025-03 | [打开网页](https://221zhong.github.io/web-test/papers/rekv/) | 视频 KV 的外部存储、query 检索与回载 |
| P1 | LiveVLM | DAC 2026 · 2025-05 | [打开网页](https://221zhong.github.io/web-test/papers/livevlm/) | 在线视频的短期 / 长期 KV 与即时问答 |
| P1 | InfiniPot-V | NeurIPS 2025 · 2025-06 | [打开网页](https://221zhong.github.io/web-test/papers/infinipot-v/) | 时间冗余与 value 显著性驱动的固定 KV 预算 |
| P1 | StreamKV | AAAI 2026 · 2025-11 | [打开网页](https://221zhong.github.io/web-test/papers/streamkv/) | 语义事件段的 KV 摘要、检索与分层压缩 |
| P1 | Video-MemComp | ACM MM 2026 · 2026-10 | [打开网页](https://221zhong.github.io/web-test/papers/video-memcomp/) | Taylor 敏感度和逐层动态 KV 预算 |
| P2 | VidKV | arXiv 预印本 · 2025-03 | [打开网页](https://221zhong.github.io/web-test/papers/vidkv/) | Video LLM 的超低比特 Key / Value KV 量化 |

## 专题三：在线记忆

该专题讨论 VLA 在闭环操控中如何写入、保存、检索并在动作端使用任务内历史。前两个专题停在感知侧的表征与预算，这一层必须落在控制回路里：写入的东西要在几十到几百个控制步之后改变动作，而每一步都要付延迟与显存。所选工作均为**因果在线**设定，推理时只能访问当前与过去的观测/动作；性能数字来自各论文自己的模型与协议，不能横向排名。

专题总览：[在线记忆专题](https://221zhong.github.io/web-test/papers/online-memory/)。

| 优先级 | 工作 | 发表信息 | 在线精读页面 | 关注点 |
| --- | --- | --- | --- | --- |
| P0 | MemoryVLA | ICLR 2026 · 2025-08 | [打开网页](https://221zhong.github.io/web-test/papers/memoryvla/) | 感知/认知 token 巩固为 memory bank，检索后条件化 diffusion 动作专家 |
| P0 | MemoryVLA++ | arXiv 预印本 · 2026-06 | [打开网页](https://221zhong.github.io/web-test/papers/memoryvla-plus/) | 记忆指导的 latent world model，同时利用过去状态与未来演化 |
| P0 | MEM | 技术报告 · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/mem/) | 短期稠密视频 + 长期文本摘要的双尺度具身记忆 |
| P0 | MemER | ICLR 2026 · 2025-10 | [打开网页](https://221zhong.github.io/web-test/papers/memer/) | 高层提议并检索关键帧，低层策略凭稀疏历史证据动作 |
| P0 | SimpleMemVLA | arXiv 预印本 · 2026-09 | [打开网页](https://221zhong.github.io/web-test/papers/simplememvla/) | 不设独立记忆模块，原生带时间戳视频 + KV 前缀复用 |
| P1 | Chameleon | arXiv 预印本 · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/chameleon/) | 几何落地的事件 token 写入可微 memory stack，按控制状态索引 |
| P1 | ReMem-VLA | arXiv 预印本 · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/remem-vla/) | 帧级与 chunk 级 recurrent queries 兼顾短时与长时上下文 |
| P1 | VPWEM | arXiv / RA-L · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/vpwem/) | 滑窗 working memory 与固定数量 episodic token 的常数开销 |
| P1 | NativeMEM | arXiv 预印本 · 2026-07 | [打开网页](https://221zhong.github.io/web-test/papers/nativemem/) | 复用 VLA 编码器把每帧压成单 token，先训 tokenizer 再微调 |
| P1 | EvoMem-VLA | arXiv 预印本 · 2026-10 | [打开网页](https://221zhong.github.io/web-test/papers/evomem-vla/) | 有序状态对的 directional delta token 记录状态改变 |
| P2 | MIKASA-Robo | ICLR 2026 · 2025-02 | [打开网页](https://221zhong.github.io/web-test/papers/mikasa-robo/) | 32 个原始任务 / VLA 版 90 个语言条件任务、10 类记忆 |
| P2 | RoboMME | ICML 2026 · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/robomme/) | 在 π0.5 上横评 14 种 memory variant |
| P2 | RMBench | arXiv 预印本 · 2026-03 | [打开网页](https://221zhong.github.io/web-test/papers/rmbench/) | 9 个按记忆复杂度分层的任务，适合机制消融 |

## 目录结构

```text
index.html                 # 主导航
style.css                  # 共享样式
papers/<paper-slug>/
  ├── index.html           # 单篇精读
  └── figures/             # 原图与网页展示版本
```

新增页面时，创建独立子目录并在 [主导航页](https://221zhong.github.io/web-test/) 增加入口即可。
