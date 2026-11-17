# VLA 历史关键事件检测：论文精读站点

在线入口：[主导航页](https://221zhong.github.io/web-test/)。根页只负责导航与研究路线总览；每篇精读均为独立子网页，可持续扩充。

## 当前 P0 / P1 页面

| 优先级 | 工作 | 在线精读页面 |
| --- | --- | --- |
| P0-1 | DDM-Net | [打开网页](https://221zhong.github.io/web-test/papers/ddm-net/) |
| P0-2 | FlowGEBD | [打开网页](https://221zhong.github.io/web-test/papers/flowgebd/) |
| P0-3 | CAG-QIL | [打开网页](https://221zhong.github.io/web-test/papers/cag-qil/) |
| P0-4 | Hierarchical Event Memory | [打开网页](https://221zhong.github.io/web-test/papers/hierarchical-event-memory/) |
| P0-5 | KEMO | [打开网页](https://221zhong.github.io/web-test/papers/kemo/) |

P1 六篇精读入口：[P1 总览](https://221zhong.github.io/web-test/papers/)。

P2 评测基准精读：[Ego4D Episodic Memory](https://221zhong.github.io/web-test/papers/ego4d-episodic-memory/)。

## KV Cache 与事件记忆

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
