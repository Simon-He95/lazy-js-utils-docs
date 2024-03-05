---
title: Perf
description: Perf
---

## useRic

- 包裹了 requestIdleCallback 和 cancelIdleCallback 的一个封装函数
- 兼容了浏览器的不同版本
- 简化了调用方式

```typescript
/**
 * @func useRic
 * @desc 📝 打印
 * @param { Function[] } tasks 待执行的任务数组
 * @param { number } timeout 超时时间(单位:毫秒)
 * @param { () => void } callback 执行完成后的回调函数
 * @return { () => void } 停止函数
 * @example
  import { useRic } from 'lazy-js-utils'

  // useRic(tasks,()=>{console.log('end')}) // 默认第二个参数为2000的简写
  const tasks: Function[] = [
    () => {
      for (let i = 0; i < 3000; i++) {
        console.log(i);
      }
      console.log("first task");
    },
    () => {
      for (let i = 0; i < 30000; i++) {
        console.log(i);
      }
      console.log("second task");
    },
    () => {
      for (let i = 0; i < 30000; i++) {
        console.log(i);
      }
      console.log("third task");
    },
  ];
  // 封装前的场景
  requestIdleCallback(fn, { timeout: 1000 });
  function fn(deadline: Deadline) {
    console.log("deadline", deadline);
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && tasks.length > 0) {
      tasks.shift()();
    }
    if (tasks.length > 0) {
      requestIdleCallback(fn1);
    }
  }

  // 封装后的场景 更加简短方便
  const stop = useRic(tasks, 1000)
 */
```

## useRaf

- 包裹了 requestAnimationFrame 和 cancelAnimationFrame 的封装函数
- 兼容了浏览器的不同版本
- 简化了调用方式

```typescript
/**
 * @func useRaf
 * @desc 📝 打印
 * @param { Function } fn 待执行的函数
 * @param { number } timeout 超时时间(单位:毫秒)
 * @param { Boolean } autoStop 执行一次后停止动画
 * @return { () => void } 停止函数
 * @example
  import { useRaf } from 'lazy-js-utils'

  const count = ref(0)
  // 封装前的场景
  const animationId = requestAnimationFrame(fn)

  function fn(timestamp) {
    if (start === null) {
      start = timestamp
    }
    else {
      const delta = timestamp - start
      if (delta > 1000) {
        count.value++
        if (count.value > 10) {
          cancelAnimationFrame(animationId)
        }
      }
    }
    requestAnimationFrame(fn)
  }
  // 封装后的场景 更加简短方便
  const stop = useRaf(() => {
    count.value++
    if (count.value > 10) {
      stop()
    }
  }，1000)
 */
```

## fileSplice

大文件切片处理函数

```typescript
/**
 * @func fileSplice
 * @desc 📝 打印
 * @param { File } file 文件对象
 * @param { number } size 切片大小(单位:字节) = 100kb // 切片的数量超过100就设定最大切片数量为100,大小为 File.size / 100
 * @return { Array } 切片数组
 * @example
  import { fileSplice } from 'lazy-js-utils'

  fileSplice(file: File, chunkSize: number = 1024 * 100) 
  const chunks = fileSplice(file, 1024 * 1024) // [ { file: Blob, filename: string } ]
 */
```

## memorizeFn

根据参数返回一个能缓存结果的函数

```typescript
/**
 * @func memorizeFn
 * @desc 📝 根据参数返回一个能缓存结果的函数
 * @param { Function } fn 待缓存的函数
 * @return { Function } 
 * @example
  import { memorizeFn } from 'lazy-js-utils'

  let count = 0
  const fn = memorizeFn(()=> count++)
  fn()
  fn()
  console.log(count) // => 1
 */
```

## debounce

函数防抖

```typescript
/**
 * @func debounce
 * @desc 📝 函数防抖
 * @param { Function } fn 待防抖的函数
 * @param { number } delay 延迟时间
 * @return { Function } 
 * @example
  import { debounce } from 'lazy-js-utils'

  const f = debounce(() => {
  console.log('debounce')
}, 1000)
 */
```

## throttle

函数节流

```typescript
/**
 * @func throttle
 * @desc 📝 函数节流
 * @param { Function } fn 待节流的函数
 * @param { number } delay 延迟时间
 * @return { Function } 
 * @example
  import { throttle } from 'lazy-js-utils'

  const f = throttle(() => {
    console.log('throttle')
  }, 1000)
 */
```

## preload

预加载图片或视频

```typescript
/**
 * @func preload
 * @desc 📝 预加载图片或视频
 * @param { string[] | string } list 预加载的资源列表
 * @param { string } style 可额外注入的样式
 * @return { (HTMLImageElement | HTMLVideoElement)[] } result 预加载的资源列表
 * @example
  import { preload } from 'lazy-js-utils'

  const imageAssets = [
    'https://img.alicdn.com/imgextra/i3/O1CN01QX0Z2Y1JZQ5Z5Z5ZT_!!6000000000001-2-tps-750-750.png',
    'https://img.alicdn.com/imgextra/i3/O1CN01QX0Z2Y1JZQ5Z5Z5ZT_!!6000000000001-2-tps-750-750.png',
  ]
  preload(imageAssets) 
 */
```

## lazyLoad

自动懒加载图片或视频

```typescript
/**
 * @func lazyLoad
 * @desc 📝 自动懒加载图片或视频
 * @param { string | HTMLElement } element 需要懒加载的元素的父容器
 * @param { string } loadingUrl 自定义加载中的图片
 * @return { void } 
 * @example
  import { lazyLoad } from 'lazy-js-utils'

  // app下的图片或视频会自动根据是否可见懒加载
  lazyLoad(document.getElementById('app'))
*/
```

## once

只执行一次的函数

```typescript
/**
 * @func once
 * @desc 📝 只执行一次的函数
 * @param { Function } fn 待执行一次的函数
 * @return { Function }
 * @example
  import { once } from 'lazy-js-utils'

  document.addEventListener('click', once(() => {
    console.log('click')
  }))
  document.click() // click
  document.click() // 
 */
```

## getLru

删除最近最少使用的缓存

```typescript
/**
 * @func getLru
 * @desc 📝 删除最近最少使用的缓存
 * @param { number } max 最大缓存数量
 * @return { 
 *  get,
 *  set,
 *  max,
 *  size,
 *  cache,
 *  } 
 * @example
  import { getLru } from 'lazy-js-utils'

  const lru = getLru(3)
  lru.set('a', 1)
  lru.set('b', 2)
  lru.set('c', 3)
  lru.set('d', 4)
  console.log(lru.cache) // => { 'b' => 2, 'c' => 3, 'd' => 4 }
*/
```
