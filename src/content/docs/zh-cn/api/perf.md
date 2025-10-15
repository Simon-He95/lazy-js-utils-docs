---
title: Perf
description: Perf
---

## debounce

防抖函数
EN: Return a debounced version of `fn` that delays invocation until `time` milliseconds have passed without a new call.

```ts
/**
 * 防抖函数
 * @param { Function } fn 函数
 * @param { number } time 时间（毫秒）
 * @returns { Function } 返回被防抖包装的函数
 * @description EN: Return a debounced version of `fn` that delays invocation until `time` milliseconds have passed without a new call.
 */
```

## fileSplice
EN: Split a large `File` into chunks for parallel processing using web workers and return chunk details.

```ts
/**
 *
 * @param { File } _file 文件
 * @param { number } _chunkSize 切分大小 默认 1024 * 100
 * @returns
 * @description EN: Split a large `File` into chunks for parallel processing using web workers and return chunk details.
 */
```

## getLru
EN: Create and return a small LRU cache object with `get`, `set`, `cache`, `max` and `size()`.

```ts
/**
 *
 * @param max 最大存储量 默认 50
 * @returns
 * @description EN: Create and return a small LRU cache object with `get`, `set`, `cache`, `max` and `size()`.
 */
```

## lazyLoad

在容器元素中为图片/视频添加懒加载（IntersectionObserver）支持。
EN: Observe images/videos inside the provided container and load their `data-src` when they enter the viewport. Returns a stop function to cancel observation.

```ts
/**
 * 在容器元素中为图片/视频添加懒加载（IntersectionObserver）支持。
 * @param { MaybeElement } element 容器元素或选择器
 * @param { string } loadingUrl 占位 loading 图片 URL（当元素无 data-src 时使用）
 * @returns { Function } 停止懒加载的函数
 * @description EN: Observe images/videos inside the provided container and load their `data-src` when they enter the viewport. Returns a stop function to cancel observation.
 */
```

## memorizeFn

函数缓存结果
EN: Return a memoized version of `fn` that caches results by JSON-stringified arguments up to maxSize.

```ts
/**
 * 函数缓存结果
 * @param { Function } fn 函数
 * @param { Map<string, any> } cache 缓存对象
 * @param { number } maxSize 最大缓存条目数，默认为100
 * @returns { Function } 带缓存的函数
 * @description EN: Return a memoized version of `fn` that caches results by JSON-stringified arguments up to maxSize.
 */
```

## preload

图片视频预加载函数

```ts
/**
 * 图片视频预加载函数
 * @param { string[] } list 图片数组
 * @param { string } style 设置样式
 * @returns { HTMLImageElement[] } 图片数组
 */
```

## prefetch

借助浏览器空闲时间去加载一些图片资源
EN: Preload images or videos using requestIdleCallback (via `useRic`) to avoid blocking main work.

```ts
/**
 * 借助浏览器空闲时间去加载一些图片资源
 * @param { string[] } list 图片或视频地址数组
 * @param { number } timeRemaining 浏览器空闲时间大于多少去加载
 * @returns { Function } 停止加载的函数
 * @description EN: Preload images or videos using requestIdleCallback (via `useRic`) to avoid blocking main work.
 */
```

## throttle

截流函数
EN: Create a throttled version of `fn` that ensures `fn` runs at most once every `stop` milliseconds.

```ts
/**
 * 截流函数
 * @param { Function } fn 要执行的函数
 * @param { number } stop 限流时间窗口（毫秒）
 * @returns { Function } 返回被节流包装后的函数
 * @description EN: Create a throttled version of `fn` that ensures `fn` runs at most once every `stop` milliseconds.
 */
```

## useRaf

使用 requestAnimationFrame 执行一个函数，并提供停止执行的功能。
EN: Run a callback using requestAnimationFrame with optional throttling (via `delta`) and an option to auto-stop after one invocation.

```ts
/**
 * 使用 requestAnimationFrame 执行一个函数，并提供停止执行的功能。
 * @description EN: Run a callback using requestAnimationFrame with optional throttling (via `delta`) and an option to auto-stop after one invocation.
 *
 * @param {function(number): void} fn - Callback invoked each animation frame with the timestamp.
 * @param {object} [options] - Configuration.
 * @param {number} [options.delta] - Minimum time (ms) between invocations.
 * @param {boolean} [options.autoStop] - If true, stop after the first invocation.
 * @param {boolean} [options.immediate] - If true, invoke immediately on first frame.
 * @returns {function(): void} Stop function that cancels the scheduled frames.
 */
```

## useRic

浏览器空闲时期被调用
EN: Schedule tasks during browser idle periods using requestIdleCallback (with a fallback). Executes queued tasks when the browser has available idle time and returns a stop function to cancel remaining tasks.

```ts
/**
 * 浏览器空闲时期被调用
 * @param { Function[] } tasks 函数队列
 * @param {object} [options] 选项对象，可提供 timeRemaining/timeout/callback
 * @returns { Function } 停止调度的函数
 * @description EN: Schedule tasks during browser idle periods using requestIdleCallback (with a fallback). Executes queued tasks when the browser has available idle time and returns a stop function to cancel remaining tasks.
 */
```

## once

只执行一次函数
EN: Wrap `fn` so it only runs once; subsequent calls are ignored.

```ts
/**
 * 只执行一次函数
 * @param { Function } fn 函数
 * @returns { Function } 函数
 * @description EN: Wrap `fn` so it only runs once; subsequent calls are ignored.
 */
```

## createChunk

创建并计算文件分片的哈希信息
EN: Create a file chunk and compute its MD5 hash using ArrayBuffer; returns chunk metadata.

```ts
/**
 * 创建并计算文件分片的哈希信息
 * @param { File } file 要分片的文件
 * @param { number } index 分片索引
 * @param { number } chunkSize 分片大小
 * @returns { Promise<ChunkInfo> } 分片信息（start/end/index/hash）
 * @description EN: Create a file chunk and compute its MD5 hash using ArrayBuffer; returns chunk metadata.
 */
```

## HybridMap

HybridMap 是一个支持对象和原始类型（如字符串、数字、布尔值等）作为 key 的 Map 实现。
EN: A Map-like collection that stores object keys in a WeakMap and primitive keys in a Map.

```ts
/**
 * HybridMap 是一个支持对象和原始类型（如字符串、数字、布尔值等）作为 key 的 Map 实现。
 * @description EN: A Map-like collection that stores object keys in a WeakMap and primitive keys in a Map.
 * - 对象类型的 key 使用 WeakMap 存储，原始类型的 key 使用 Map 存储。
 * - 这样既可以用对象做 key，也可以用字符串、数字等做 key，且对象 key 不会阻止垃圾回收。
 * - 不支持遍历和 size 属性，因为 WeakMap 无法遍历。
 *
 * 示例用法：
 * ```ts
 * const map = createHybridMap<any, string>([[{}, 'obj'], ['a', 'str']])
 * map.set(123, 'num')
 * map.set({}, 'another obj')
 * ```
 */
```

## createHybridMap

createHybridMap 是 HybridMap 的工厂函数。

```ts
/**
 * createHybridMap 是 HybridMap 的工厂函数。
 * 用于创建支持对象和原始类型作为 key 的 Map 实例。
 * @param entries 可选的初始键值对数组
 * @returns HybridMap 实例
 *
 * 示例用法：
 * ```ts
 * const map = createHybridMap<any, string>([[{}, 'obj'], ['a', 'str']])
 * map.set(123, 'num')
 * map.set({}, 'another obj')
 * ```
 */
```

## HybridSet

HybridSet 是一个支持对象和原始类型（如字符串、数字、布尔值等）作为元素的 Set 实现。
EN: A Set-like collection that stores object keys in a WeakSet and primitive values in a Set.

```ts
/**
 * HybridSet 是一个支持对象和原始类型（如字符串、数字、布尔值等）作为元素的 Set 实现。
 * @description EN: A Set-like collection that stores object keys in a WeakSet and primitive values in a Set.
 * - 对象类型的元素使用 WeakSet 存储，原始类型的元素使用 Set 存储。
 * - 这样既可以用对象做元素，也可以用字符串、数字等做元素，且对象元素不会阻止垃圾回收。
 * - 不支持遍历和 size 属性，因为 WeakSet 无法遍历。
 *
 * 示例用法：
 * ```ts
 * const set = createHybridSet<any>([{}, 'a', 123])
 * set.add('b')
 * set.add({})
 * ```
 */
```

## createHybridSet

createHybridSet 是 HybridSet 的工厂函数。

```ts
/**
 * createHybridSet 是 HybridSet 的工厂函数。
 * 用于创建支持对象和原始类型作为元素的 Set 实例。
 * @param values 可选的初始元素数组
 * @returns HybridSet 实例
 *
 * 示例用法：
 * ```ts
 * const set = createHybridSet<any>([{}, 'a', 123])
 * set.add('b')
 * set.add({})
 * ```
 */
```
