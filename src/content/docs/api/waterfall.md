---
title: Waterfall
description: Waterfall
---

## waterfall

创建图片瀑布流并挂载到目标容器
EN: Create a simple waterfall (masonry) layout for images and mount it into the target container. Returns an `append` function to add more images.

```ts
/**
 * 创建图片瀑布流并挂载到目标容器
 * @description EN: Create a simple waterfall (masonry) layout for images and mount it into the target container. Returns an `append` function to add more images.
 * @param { string[] } imageList 图片 URL 列表
 * @param { MaybeElement | number } target 目标容器或直接传入宽度（当传数字时表示宽度并默认挂载到 body）
 * @param { number } width 图片显示宽度（像素），默认为 200
 * @param { number } space 图片间距（像素），默认 20
 * @returns {(imageList: string[]) => void} 返回一个函数，用于追加更多图片到瀑布流
 */
```
