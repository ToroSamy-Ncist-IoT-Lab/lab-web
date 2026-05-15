---
title: 示例：智能实验室控制台
description: 演示如何写一篇「可复刻」的项目说明
---

## 简介

这是一个**示例项目文档**。真实使用时，请替换为仓库地址、依赖版本与截图。

## 仓库

```bash
git clone https://github.com/your-org/demo-lab-console.git
cd demo-lab-console
```

## 本地运行

```bash
pnpm install
pnpm dev
```

## 目录结构（示例）

- `apps/web` — 前端
- `packages/core` — 共享逻辑
- `docs/` — 架构说明

## 常见问题

1. **端口占用**：修改 `.env` 中 `PORT`。
2. **依赖安装失败**：检查 Node 版本是否与 `.node-version` 一致。

> 把每个真实实验室项目按此模板补一篇，新生即可按图索骥。
