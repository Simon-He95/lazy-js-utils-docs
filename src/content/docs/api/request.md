---
title: Request
description: Request
---

## VFetch

Class fetch请求封装
EN: Fetch request wrapper class

```ts
/**
 * Class fetch请求封装
 * @description EN: Fetch request wrapper class
 */
```

## asyncPool

并行执行任务
EN: Execute tasks in parallel with a concurrency limit

```ts
/**
 * 并行执行任务
 * @description EN: Execute tasks in parallel with a concurrency limit
 * @param { number } limit 并行数量 默认 4
 * @param { Function[] } tasks 任务队列
 * @returns
 */
```

## sendBeacon

将分析数据发送到 Web 服务
EN: Convenience wrapper around navigator.sendBeacon triggered on document visibility change (page hide).

```ts
/**
 * 将分析数据发送到 Web 服务
 * @description EN: Convenience wrapper around navigator.sendBeacon triggered on document visibility change (page hide).
 * @param { string } url 接收数据的 URL
 * @param { BodyInit } [analyticsData] ArrayBuffer 、 TypedArray 、 DataView 、 Blob 、字符串文字或对象、包含要发送的数据的 FormData 或 URLSearchParams 对象。
 * @returns a function to remove the event listener (provided by useEventListener)
 */
```
