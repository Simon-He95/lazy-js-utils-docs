---
title: Compress
description: Compress
---

## compressCss

🧿css 压缩

```typescript
/**
 * @func compressCss
 * @param { string } css字符串
 * @desc 📝 css压缩
 * @return { string } 压缩后的css字符串
 * @example
  import { compressCss } from 'lazy-js-utils'

  const css = `
  .test {
    width: 100px;
    height: 100px;
    background: red;
  }
  `
  compressCss(css) // .test{width:100px;height:100px;background:red}
 */
```

## compressImage

🧿 利用 canvas 图片质量调整压缩,并输出指定类型

```typescript
/**
 * @func compressImage
 * @param { string | File } source 图片
 * @param { 
 * {
 *  quality: number
 *  maxWidth: number
 *  maxHeight: number
 *  type: 'base64' | 'blob'
 * }
 *  } options 参数
 * @desc 📝 利用canvas图片质量调整压缩,并输出指定类型
 * @return { Promise<string | Blob> } 压缩后的图片
 * @example
  import { compressImage } from 'lazy-js-utils'

  compressImage('https://www.baidu.com/img/bd_logo1.png', {
    quality: 0.5,
    maxWidth: 100,
    maxHeight: 100,
    type: 'base64'
  }).then(res => {
    console.log(res)
  })
 
 */
```
