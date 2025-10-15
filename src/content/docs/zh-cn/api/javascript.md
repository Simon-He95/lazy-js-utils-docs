---
title: Javascript
description: Javascript
---

## listenStack

监听目标元素的子元素变化的栈
EN: Observe mutations (childList, subtree, attributes) on a target element and log a collapsed group trace when changes occur.

```ts
/**
 * 监听目标元素的子元素变化的栈
 * @description EN: Observe mutations (childList, subtree, attributes) on a target element and log a collapsed group trace when changes occur.
 * @param { string | Element } target 元素
 * @returns
 */
```

## copy

获取电脑粘贴板的内容
EN: Copy the provided string to the system clipboard using a temporary textarea and execCommand.

```ts
/**
 * 获取电脑粘贴板的内容
 * @description EN: Copy the provided string to the system clipboard using a temporary textarea and execCommand.
 * @param { string } s 内容
 * @returns
 */
```

## curry

柯里化
EN: Create a curried version of the provided function.

```ts
/**
 * 柯里化
 * @description EN: Create a curried version of the provided function.
 * @param { Function } f 函数
 * @returns 函数
 */
```

## sleep

等待函数
EN: Pause execution for `ms` milliseconds and resolve a Promise.

```ts
/**
 * 等待函数
 * @param { number }  ms 延迟秒数
 * @returns
 * @description EN: Pause execution for `ms` milliseconds and resolve a Promise.
 */
```

## parallel

并行执行
EN: Execute `fn` over `tasks` in parallel and return a Promise resolved with all results.

```ts
/**
 * 并行执行
 * @param { any[] } tasks 数组
 * @param { (...args: any[]) => any } fn 函数
 * @returns
 * @description EN: Execute `fn` over `tasks` in parallel and return a Promise resolved with all results.
 */
```

## promiseFinally

Promise 最终处理
EN: Run `fn` (sync or async) and always call `finalFn`, mirroring JavaScript `try/finally` behaviour for returned values and errors.

```ts
/**
 * Promise 最终处理
 * @description EN: Run `fn` (sync or async) and always call `finalFn`, mirroring JavaScript `try/finally` behaviour for returned values and errors.
 * @param { Function | Promise<any> } fn 可以是函数或已存在的 Promise
 * @param { Function } finalFn 最终一定会执行的回调
 * @returns { Promise<any> }
 */
```

## timeout

超时函数
EN: Run `fn` (which may be async) but reject with an Error(msg) if it doesn't finish within `ms` milliseconds.

```ts
/**
 * 超时函数
 * @param { Function } fn 函数
 * @param { number } ms 时间
 * @param { string } msg 错误消息
 * @returns
 * @description EN: Run `fn` (which may be async) but reject with an Error(msg) if it doesn't finish within `ms` milliseconds.
 */
```

## noop

空函数
EN: A no-op helper that performs no action; useful as a default callback placeholder.

```ts
/**
 * 空函数
 * @description EN: A no-op helper that performs no action; useful as a default callback placeholder.
 */
```

## chainFns

链式调用
EN: Compose multiple functions into one that calls them in sequence, returning the last non-undefined result.

```ts
/**
 * 链式调用
 * @description EN: Compose multiple functions into one that calls them in sequence, returning the last non-undefined result.
 * @param { Function[] } fns 函数数组
 * @returns
 */
```

## nextTick

下一次执行任务
EN: Schedule a callback to run on the next microtask (via Promise). Falls back to MutationObserver or setTimeout when Promises are unavailable.

```ts
/**
 * 下一次执行任务
 * @description EN: Schedule a callback to run on the next microtask (via Promise). Falls back to MutationObserver or setTimeout when Promises are unavailable.
 * @param { () => any } flushCallbacks 待执行的回调函数
 */
```

## singleModel

单例模式
EN: Create a singleton proxy for a class so constructing it always returns the same instance.

```ts
/**
 * 单例模式
 * @description EN: Create a singleton proxy for a class so constructing it always returns the same instance.
 */
```

## useWebWorker

webWorker
EN: Create a simple WebWorker wrapper. Accepts a script URL or a function which will be converted to a URL. Returns helpers to post messages and register handlers.

```ts
/**
 * webWorker
 * @param { string } [url] url自定义worker文件路径 或者 worker函数
 * @description EN: Create a simple WebWorker wrapper. Accepts a script URL or a function which will be converted to a URL. Returns helpers to post messages and register handlers.
 */
```

## useServiceWorker

注册 Service Worker
EN: Register a ServiceWorker from a script URL or an inline function that is transformed into a blob URL.

```ts
/**
 * 注册 Service Worker
 * @description EN: Register a ServiceWorker from a script URL or an inline function that is transformed into a blob URL.
 * @param { string | (() => void) } url Service Worker 脚本地址，或一个将在 Worker 中执行的函数
 * @param { RegistrationOptions } options Service Worker 注册配置项
 * @returns { Promise<ServiceWorkerRegistration> }
 */
```

## noopFalse

始终返回 false 的函数
EN: Returns a constant false value, handy for event handlers that must cancel default behaviour.

```ts
/**
 * 始终返回 false 的函数
 * @description EN: Returns a constant false value, handy for event handlers that must cancel default behaviour.
 */
```

## updateDetection

检测首页中script src是否存在更新
EN: s is the check interval in ms (default 2000). callback is invoked when an update is detected.

```ts
/**
 * 检测首页中script src是否存在更新
 * @param { number } s 检测时间间隔 默认 2000
 * @param callback 如果页面检测出有更新则会被调用
 * @description EN: s is the check interval in ms (default 2000). callback is invoked when an update is detected.
 * @returns
 */
```

## streamToUrl

将流文件转为base64
EN: Convert an ArrayBuffer (binary stream) into a data URL (base64) using a Blob and helper.

```ts
/**
 * 将流文件转为base64
 * @param { ArrayBuffer } stream 流
 * @returns
 * @description EN: Convert an ArrayBuffer (binary stream) into a data URL (base64) using a Blob and helper.
 */
```

## useReader

读取 ReadableStream
EN: Read from a `ReadableStreamDefaultReader`, optionally process each chunk, and return the concatenated string.

```ts
/**
 * 读取 ReadableStream
 * @description EN: Read from a `ReadableStreamDefaultReader`, optionally process each chunk, and return the concatenated string.
 * @param { ReadableStreamDefaultReader<Uint8Array> } reader `stream.getReader()` 的返回值
 * @param { (value?: string) => any } [callback] 对每个文本块进行处理的回调
 * @returns { Promise<string> }
 */
```

## useSwitch

轮询返回数组中的值
EN: Cycle through the provided options on each call, returning to the first value after reaching the end.

```ts
/**
 * 轮询返回数组中的值
 * @description EN: Cycle through the provided options on each call, returning to the first value after reaching the end.
 * @param { any[] } options 需要轮换返回的值列表
 * @returns { () => any }
 */
```

## catchAwait

捕获 Promise 错误
EN: Await a promise and return a tuple `[error, result]`, optionally merging extra fields into the error object.

```ts
/**
 * 捕获 Promise 错误
 * @description EN: Await a promise and return a tuple `[error, result]`, optionally merging extra fields into the error object.
 * @param { Promise<T> } promise 需要处理的 Promise
 * @param { object } [errorExt] 发生错误时附加到错误对象的额外信息
 * @returns { Promise<[U | undefined, T | undefined]> }
 */
```

## executeStr

执行字符串表达式
EN: Evaluate the provided string as JavaScript expression and return its value. Use with caution.

```ts
/**
 * 执行字符串表达式
 * @description EN: Evaluate the provided string as JavaScript expression and return its value. Use with caution.
 * @param { string } str 需要执行的表达式字符串
 * @returns { any }
 */
```

## handleImageError

图片加载失败时轮换备用图
EN: Return an error handler that swaps an image's `src` with fallback URLs each time a load failure occurs.

```ts
/**
 * 图片加载失败时轮换备用图
 * @description EN: Return an error handler that swaps an image's `src` with fallback URLs each time a load failure occurs.
 * @param { string[] } errorImageSrc 备用图片地址列表
 * @returns { (event: Event) => void }
 */
```

## replaceAsync
EN: Perform asynchronous replacements on matches in a string using a sync or async replacer.

```ts
/**
 * @description EN: Perform asynchronous replacements on matches in a string using a sync or async replacer.
 * @param {string} str The source string
 * @param {string|RegExp} searchValue Pattern to search for
 * @param {string|Function} replaceValue Replacement string or async replacer function
 */
```

## reduceAsync

异步 reduce
EN: Perform an asynchronous reduction over an array, awaiting each reducer invocation before proceeding.

```ts
/**
 * 异步 reduce
 * @description EN: Perform an asynchronous reduction over an array, awaiting each reducer invocation before proceeding.
 * @param { K[] } arr 待处理的数组
 * @param { (acc: T, item: K, index: number, arr: K[]) => Promise<T> | T } reducer 异步或同步累加器
 * @param { T } initialValue 初始值
 * @returns { Promise<T> }
 */
```

## retryAsync

异步重试
EN: Retry an asynchronous function up to `retries` times before rethrowing the last error.

```ts
/**
 * 异步重试
 * @description EN: Retry an asynchronous function up to `retries` times before rethrowing the last error.
 * @param { () => Promise<T> } fn 待执行的异步函数
 * @param { number } retries 最大重试次数
 * @returns { Promise<T> }
 */
```
