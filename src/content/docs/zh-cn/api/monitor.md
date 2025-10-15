---
title: Monitor
description: Monitor
---

## calFps

计算并输出当前帧率
EN: Track frames with `requestAnimationFrame` and log the averaged FPS once per second.

```ts
/**
 * 计算并输出当前帧率
 * @description EN: Track frames with `requestAnimationFrame` and log the averaged FPS once per second.
 * @returns { () => void } 取消帧率监听的停止函数
 */
```

## getDevice

获取当前环境设备信息 os 手机设备 dev 浏览器环境
EN: Determine OS and device/browser identifiers from the

```ts
/**
 * 获取当前环境设备信息 os 手机设备 dev 浏览器环境
 * @description EN: Determine OS and device/browser identifiers from the
 * user agent string and return a DeviceType describing the environment.
 * @returns {DeviceType} 设备信息
 */
```

## monitorPef

检测性能指标
EN: Collect navigation and timing metrics via the Performance API and return them as a record; fall back gracefully when unsupported.

```ts
/**
 * 检测性能指标
 * @description EN: Collect navigation and timing metrics via the Performance API and return them as a record; fall back gracefully when unsupported.
 * @returns { Record<string, number> | null } 性能指标对象；若无法获取则返回 null
 */
```

## timeCost

检测函数执行耗时
EN: Measure and log the execution time (seconds) of the provided synchronous function.

```ts
/**
 * 检测函数执行耗时
 * @description EN: Measure and log the execution time (seconds) of the provided synchronous function.
 * @param { Function } fn 需要测量的函数
 * @returns { number } 函数执行耗时（秒）
 */
```

## getLocation

获取当前地理坐标
EN: Resolve the current geolocation coordinates with optional high-accuracy, timeout, and cache controls.

```ts
/**
 * 获取当前地理坐标
 * @description EN: Resolve the current geolocation coordinates with optional high-accuracy, timeout, and cache controls.
 * @param { boolean } [enableHighAccuracy=false] 是否启用高精度模式
 * @param { number } [timeout=5000] 允许的最大定位耗时（毫秒）
 * @param { number } [maximumAge=0] 允许的最大缓存位置时间（毫秒）
 * @returns { Promise<GeolocationCoordinates> }
 */
```
