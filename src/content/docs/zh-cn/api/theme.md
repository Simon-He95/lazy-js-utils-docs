---
title: Theme
description: Theme
---

## useSystemColor

监听系统颜色模式
EN: Observe the OS color-scheme preference and invoke the callback with `light` or `dark` whenever it changes.

```ts
/**
 * 监听系统颜色模式
 * @description EN: Observe the OS color-scheme preference and invoke the callback with `light` or `dark` whenever it changes.
 * @param { (color: 'light' | 'dark') => void } callback 接收系统配色的回调
 * @returns { () => void } 解绑监听的函数
 */
```
