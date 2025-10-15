---
title: Screen
description: Screen
---

## exitFullscreen

退出全屏模式
EN: Exit fullscreen mode by attempting common vendor-prefixed cancel methods; returns an Error when unsupported.

```ts
/**
 * 退出全屏模式
 * @returns
 * @description EN: Exit fullscreen mode by attempting common vendor-prefixed cancel methods; returns an Error when unsupported.
 */
```

## fullScreen

全屏模式
EN: Request the browser to enter fullscreen using common vendor-prefixed APIs; returns an Error if not supported.

```ts
/**
 * 全屏模式
 * @returns
 * @description EN: Request the browser to enter fullscreen using common vendor-prefixed APIs; returns an Error if not supported.
 */
```

## picInPic

画中画模式
EN: Toggle picture-in-picture for a given video element (or selector) and return an async function to perform the toggle.

```ts
/**
 * 画中画模式
 * @param {  HTMLVideoElement | string } video video元素
 * @returns
 * @description EN: Toggle picture-in-picture for a given video element (or selector) and return an async function to perform the toggle.
 */
```

## shareScreen

分享屏幕
EN: Capture and display the user's screen media in the provided container and call callback when sharing stops.

```ts
/**
 * 分享屏幕
 * @param { MaybeElement } container 容器
 * @param { Function } callback 停止回调
 * @returns
 * @description EN: Capture and display the user's screen media in the provided container and call callback when sharing stops.
 */
```

## useCamera

录像功能

```ts
/**
 * 录像功能
 * @param video 容器大小 默认{ width: 640, height: 480 }
 * @param container 容器
 * @param autoplay 是否自动播放
 * @returns
 */
```

## useShare

分享内容

```ts
/**
 * 分享内容
 * @param options    files?: File[];
    text?: string;
    title?: string;
    url?: string;
 * @returns
 */
```

## useVideo

操作video

```ts
/**
 * 操作video
 * @param sources {
  src: string
  type: string
}
 * @param videoOptions {
  container: HTMLElement | string
  controls?: boolean
  width?: number
  height?: number
  className?: string
  style?: string
}
 * @returns
 */
```

## useRecorder

录制功能
EN: Helper that captures the current display and microphone audio, records a combined MediaStream to a WebM file and triggers a download.

```ts
/**
 * 录制功能
 * @description EN: Helper that captures the current display and microphone audio, records a combined MediaStream to a WebM file and triggers a download.
 * @param fileName - 输出文件名（不包含扩展名），默认使用当前时间戳
 * @returns A stop function which, when called, stops the recording and triggers the download.
 */
```

## useVideoSubtitle

生成弹幕内容

```ts
/**
 * 生成弹幕内容
 * @param options
 * @param name
 */
```

## useAudio

录音功能
EN: Provide simple audio recording utilities that attach to an audio element and allow toggling and downloading of recorded audio.

```ts
/**
 * 录音功能
 * @param { string | HTMLAudioElement } container 容器
 * @returns
 * @description EN: Provide simple audio recording utilities that attach to an audio element and allow toggling and downloading of recorded audio.
 */
```

## useFrequency

处理audio获取频域数组

```ts
/**
 * 处理audio获取频域数组
 * @param { FrequencyOptions } options { audio: 目标元素, fftSize: 分析细粒度 2^n 默认 512 }
 * @param { ( dataArray: Uint8Array, audioCtx: AudioContext, analyser: AnalyserNode ) => void } callback 回调
 */
```

## getVideoFrame

从视频文件中获取指定时间帧的图片
EN: Extract a frame image from a video File at the given time (seconds) and return a blob URL and Blob.

```ts
/**
 * 从视频文件中获取指定时间帧的图片
 * @param file 视频类型的File对象
 * @param time 需要截取帧的时间（单位：秒）
 * @returns Promise<{ url: string; blob: Blob }>
 * @description EN: Extract a frame image from a video File at the given time (seconds) and return a blob URL and Blob.
 */
```
