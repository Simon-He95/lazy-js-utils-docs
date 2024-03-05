---
title: Monitor
description: Monitor
---

## getDevice

🧿 获取系统信息

```typescript
/**
 * @func getDevice
 * @desc 📝 获取系统信息
 * @return { { os: 'android', dev: 'chrome' } } os:系统 dev:浏览器
 * @example 
  import { getDevice } from 'lazy-js-utils'

  console.log(getDevice()) // { os: 'android', dev: 'chrome' }
 */
```

## getLocation

🧿 基于 promise 封装的获取地理位置信息

```typescript
/**
 * @func getLocation
 * @param { 
 * {
 *  enableHighAccuracy: boolean,
 *  timeout: number,
 *  maximumAge: number
 * }
 * } options 配置项 { 高精度，超时时间，缓存时间 }
 * 
 * @desc 📝 基于promise封装的获取地理位置信息
 * @return { 
 * Promise<{
 *  enableHighAccuracy: boolean = false,
 *  timeout: number = 5000,
 *  maximumAge: number = 0
 *  }>
 * } 
 * @example 
  import { getLocation } from 'lazy-js-utils'

  console.log(await getLocation()) //  { enableHighAccuracy: boolean = false, timeout: number = 5000, maximumAge: number = 0 }
 */
```

## calFps

🧿 计算 FPS

```typescript
/**
 * @func calFps
 * @return { () => void } 停止函数
 * @desc 📝 计算FPS
 * @example 
  import { calFps } from 'lazy-js-utils'

  const stop = calFps()
  stop() // 停止计算
 */
```

## monitorPef

🧿 数字化浏览器性能指标

```typescript
/**
 * @func monitorPef
 * @return { void }
 * @desc 📝 数字化浏览器性能指标
 * @example
  import { monitorPef } from 'lazy-js-utils'

  monitorPef() 
  // 重定向时间	0
  // 重定向次数	0
  // 首屏时间	414
  // 上一页卸载时间	0
  // 浏览器读取缓存时间	28.200000047683716
  // DNS解析时间	0
  // TCP完成握手时间	0.3097000000476837
  // HTTP请求响应完成时间	0.026600000143051146
  // DOM开始加载前所花费时间	0.36460000014305116
  // DOM加载完成时间	2.600299999952316
  // 脚本加载时间	0.00040000009536743164
  // onload事件时间	0
  // 页面完全加载时间	3.0144000000953675
 */
```

## timeCost

🧿 计算函数执行时间

```typescript
/**
 * @func timeCost
 * @desc 📝 计算函数执行时间
 * @param { Function } fn 函数
 * @return { void } 
 * @example
  import { timeCost } from 'lazy-js-utils'

  timeCost(()=>{
    let a = 1
    for(let i=0;i<1000;i++){
      a++
    }
  }) // 输出: timeCost: 0.046s
 */
```
