---
title: Log
description: Log
---

## interceptError

🧿 异常拦截

```typescript
/**
 * @func interceptError
 * @param { function } fn 可能存在异常的函数
 * @return { Promise<string> }
 * @desc 📝 异常拦截
 * @example 
  import { interceptError } from 'lazy-js-utils'

  interceptError(fn: Function) => Promise<any>
  interceptError(() => { throw new Error('error') }).catch(err=>{ console.log(err) })
 */
```

## globalErrorCapture

🧿 全局异常捕获

```typescript
/**
 * @func globalErrorCapture
 * @desc 📝 页面加载完成后,全局异常捕获,并定位到错误位置
 * @example
  import { globalErrorCapture } from 'lazy-js-utils'

  globalErrorCapture()
 */
```

## log

🧿 突出日志打印

```typescript
/**
 * @func log
 * @param { string } msg 日志信息
 * @param { Record<string, string | number> | string } style 样式
 * @param { 'warn' | 'error' | 'log' } type 类型
 * @desc 📝 突出日志打印
 * @example
  import { log } from 'lazy-js-utils'

  log('这是一个错误',{
    color: 'red',
    fontSize: '20px',
    fontWeight: 'bold'
  }, 'error')
 */
```

## debugWarn

🧿 自定义的警告输出

```typescript
/**
 * @func debugWarn
 * @param { string } name 警告名称
 * @param { string } message 消息
 * @desc 📝 自定义的警告输出
 * @example
  import { debugWarn } from 'lazy-js-utils'

  debugWarn('vite-plugin-xx', 'xxx module is not found')
 */
```
