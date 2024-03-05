---
title: Javascript
description: Javascript
---

## listenStack

🧿 监听目标元素的事件栈

```typescript
/**
 * @func listenStack
 * @param { string | Element } target 目标元素
 * @return { () => void } stop 停止监听
 * @desc 📝 监听目标元素的事件栈
 * @example 
  import { listenStack } from 'lazy-js-utils'

  const stop = listenStack(document.body)
 */
```

## copy

🧿 通过 js 将内容放入剪贴板中

```typescript
/**
 * @func copy
 * @param { string } text 要复制的内容
 * @return { boolean } 是否复制成功
 * @desc 📝 通过js将内容放入剪贴板中
 * @example 
  import { copy } from 'lazy-js-utils'

  copy('nihaoya')
 */
```

## sleep

🧿 睡眠函数

```typescript
/**
 * @func sleep
 * @param { number } time 睡眠时间(单位:毫秒)
 * @param { () => void } callback  睡眠结束后的回调函数
 * @return { void }
 * @desc 📝 睡眠函数
 * @example 
  import { sleep } from 'lazy-js-utils'

  sleep(1000, () => {
    console.log('睡眠结束')
  })
  // await sleep(1000)
 */
```

## curry

🧿 函数柯里化

```typescript
/**
 * @func curry
 * @param { Function } fn 待柯里化的函数
 * @return { Function } 被柯里化的函数
 * @desc 📝 函数柯里化
 * @example 
  import { curry } from 'lazy-js-utils'

  const add = (a, b) => a + b
  const add1 = curry(add)
  const add2 = add1(1)
  const add3 = add2(2)
  add3(3) // 6
 */
```
