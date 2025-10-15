---
title: Message
description: Message
---

## createEventBus

eventbus

```ts
/**
 * eventbus
 */
```

## useStorageListen

跨标签页通信通过storage事件实现
EN: Listen to `storage` events for simple cross-tab messaging and provide a helper to send storage messages.

```ts
/**
 *  跨标签页通信通过storage事件实现
 * @description EN: Listen to `storage` events for simple cross-tab messaging and provide a helper to send storage messages.
 * @param { (type: string, newValue: any, oldValue: any) => void } callback storage数据更新回调
 * @returns
 */
```

## sendStorage

跨标签页通信通过storage事件实现
EN: Listen to `storage` events for simple cross-tab messaging and provide a helper to send storage messages.

```ts
/**
 *  跨标签页通信通过storage事件实现
 * @description EN: Listen to `storage` events for simple cross-tab messaging and provide a helper to send storage messages.
 * @param { (type: string, newValue: any, oldValue: any) => void } callback storage数据更新回调
 * @returns
 */
```

## useSocket

WebSocket helper
EN: Small wrapper around the browser WebSocket that normalizes the URL and returns helper event attachers.

```ts
/**
 * WebSocket helper
 * @description EN: Small wrapper around the browser WebSocket that normalizes the URL and returns helper event attachers.
 * @param { string } url 要连接的 URL；这应该是 WebSocket 服务器将响应的 URL。
 * @param { string | string[] } [protocols] 一个协议字符串或者一个包含协议字符串的数组。
 * @returns An object with `socket`, `receive`, `send`, `open`, `close`, and `error` helpers.
 */
```

## createChannel

_暂无文档注释，欢迎补充。_
