---
title: Log
description: Log
---

## throwError

抛出具有作用域前缀的自定义错误
EN: Throw a namespaced `CustomerError` so invariant violations carry contextual scope information.

```ts
/**
 * 抛出具有作用域前缀的自定义错误
 * @description EN: Throw a namespaced `CustomerError` so invariant violations carry contextual scope information.
 * @param { string } scope 错误发生的作用域标识
 * @param { string } m 错误信息内容
 * @returns { never }
 */
```

## debugWarn

开发环境警告输出
EN: Emit a warning in non-production builds, accepting either an error instance or scope/message pair.

```ts
/**
 * 开发环境警告输出
 * @description EN: Emit a warning in non-production builds, accepting either an error instance or scope/message pair.
 * @param { Error | string } scope 错误对象或作用域标识
 * @param { string } [message] 当 scope 为字符串时对应的警告信息
 * @returns { void }
 */
```

## globalErrorCapture

全局错误捕获
EN: Capture global window `error` events and log structured error information.

```ts
/**
 * 全局错误捕获
 * @description EN: Capture global window `error` events and log structured error information.
 * @returns { () => void } 注销监听器的清理函数
 */
```

## interceptError

拦截并标准化函数错误
EN: Wrap a function so that thrown values and rejected Promises are normalized into standard `Error` instances.

```ts
/**
 * 拦截并标准化函数错误
 * @description EN: Wrap a function so that thrown values and rejected Promises are normalized into standard `Error` instances.
 * @param { T } fn 需要包装的函数
 * @returns { T }
 */
```

## log

日志输出
EN: Print styled logs to console with optional level, CSS styles, and extra arguments.

```ts
/**
 * 日志输出
 * @description EN: Print styled logs to console with optional level, CSS styles, and extra arguments.
 * @param { string | number } s 日志内容
 * @param {{ type?: 'warn' | 'error' | 'log'; style?: Record<string, string | number> | string; args?: any[] }} [options] 控制打印类型、样式与追加参数
 * @returns { void }
 */
```
