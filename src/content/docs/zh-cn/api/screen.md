---
title: Screen
description: Screen
---

## useCamera

🧿 调用摄像头

```typescript
/**
 * @func useCamera
 * @param {
 * {
 *  width: number
 *  height: number
 * } 
 * } video宽高 
 * @param { container: string | HTMLVideoElement = 'video' } video容器
 * @desc 📝 调用摄像头
 * @example
  import { useCamera } from 'lazy-js-utils'

  <video></video>
  useCamera(
    video: {
      width: 300,
      height: 300
    },
    'video'
  )
 */
```

## useShare

🧿 通过调用本机的共享机制作为 Web Share API 的一部分。

```typescript
/**
 * @func useShare
 * @param { string } url URL
 * @param { string } text 文本
 * @param { string } title 标题
 * @param { file } files 文件
 * @return { void }
 * @desc 📝 通过调用本机的共享机制作为 Web Share API 的一部分。
 * @example
  import { useShare } from 'lazy-js-utils'

  useShare({
    url: 'https://www.baidu.com',
    text: '分享文本',
    title: '分享标题',
  })
 */
```

## useVideo

🧿video 的封装

```typescript
/**
* @func useVideo
* @param { { src: string, type: string }[] } sources 生成的video的source
* @param { 
*  { 
*    container: string | Element, 
*    controls: boolean,
*    width:number,
*    height:number,
*    className:string,
*    style:string
*  }
* } options video的配置项
* @return {
* {
*  play:function,
*  playRest:function,
*  playRate:function,
*  playTime:function,
*  playProgress:function
* }
* } video的操作方法
* @desc 📝 video的封装
* @example 
  import { useVideo } from 'lazy-js-utils'

  // play 播放 或 暂停
  // playRest 重新播放
  // playRate 播放速率 2倍速 3倍速 4倍速 5倍速 playTime(n)
  // playTime 设置一个播放时间，如果之前有记录播放时间，则从记录的时间开始播放 platTime(n)
  // playProgress 快进n秒 playProgress(n) 或后退n秒 playProgress(-n)
  const { play, playReset, playRate, playTime, playProgress } = useVideo(
    [
      {
        src:
          'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4',
        type: 'video/mp4',
      },
      {
        src:
          'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.webm',
        type: 'video/webm',
      },
    ],
    {
      container: '#main',
      width: 1000,
      height: 600,
      className: 'bg-red',
    },
  )
*/
```

## picInPic

🧿 给 video 开启画中画模式

```typescript
/**
 * @func picInPic
 * @param { string | HTMLVideoElement } video 背景图片地址
 * @return { () => void } 开启关闭画中画模式
 * @desc 📝 给video开启画中画模式
 * @example
  import { picInPic } from 'lazy-js-utils'

  const toggle = picInPic('#video')
  toggle() // 开启关闭画中画模式
 */
```

## shareScreen

🧿 浏览器屏幕分享

```typescript
/**
 * @func shareScreen
 * @param { string | HTMLVideoElement } container 屏幕分享的展示容器
 * @param { () => void } callback  停止分享时的回调
 * @return { void } 
 * @desc 📝 浏览器屏幕分享
 * @example
  import { shareScreen } from 'lazy-js-utils'

  shareScreen('#main',() => {
    console.log("已停止分享");
  });
 */
```

## fullScreen

🧿 浏览器全屏

```typescript
/**
 * @func fullScreen
 * @return { void } 
 * @desc 📝 浏览器全屏
 * @example 
  import { fullScreen } from 'lazy-js-utils'
 
  fullScreen()
 */
```

## exitFullScreen

🧿 退出浏览器全屏

```typescript
/**
 * @func exitFullScreen
 * @return { void } 
 * @desc 📝 退出浏览器全屏
 * @example 
  import { exitFullScreen } from 'lazy-js-utils'

  exitFullScreen()
 */
```
