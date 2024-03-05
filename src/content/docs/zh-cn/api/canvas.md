---
title: Canvas
description: Canvas
---

## sliderValidation

🧿 滑块验证功能

```typescript
/**
 * @Class sliderValidation
 * @param { string } url 背景图片地址
 * @param { string | Element } container 滑块容器
 * @param { number } width 滑块大小 默认42px
 * @param { () => void } callback 滑块验证成功回调函数
 * @return { void } 
 * @desc 📝 滑块验证功能
 * @example 
  import { sliderValidation } from './lazy-js-utils'

  sliderValidation('/assets/image.jpg', document.body)
 */
```

## Canvas

🧿 快速拿到 canvas 和 ctx

```typescript
/**
 * @Class Canvas
 * @param { number } width canvas宽度
 * @param { number } height canvas高度
 * @desc 📝 快速拿到canvas和ctx
 * @return { { canvas, ctx } } 
 * @example 
  import { Canvas } from './lazy-js-utils'

  const { canvas, ctx } = new Canvas(150,150)
 */
```

## getImageData

🧿 快速获取 canvas 的 imageData

```typescript
/**
 * @Class getImageData
 * @param { string } src 图片地址
 * @desc 📝 快速获取canvas的imageData
 * @return { { data, width, height } } 
 * @example 
  import { getImageData } from './lazy-js-utils'

  const { data, width, height } = await getImageData('/assets/image.jpg')
 */
```

## CreateSignatureCanvas

🧿CreateSignatureCanvas

```typescript
/**
 * @Class CreateSignatureCanvas
 * @param { number } width canvas宽度
 * @param { number } height canvas高度
 * @desc 📝 生成一个签名的canvas模板, 默认监听键盘事件ctrl+z撤销 ctrl+x恢复
 * @return { signature } 
 * @example 
  import { CreateSignatureCanvas } from './lazy-js-utils'

  const signature = new CreateSignatureCanvas(400, 400)
  document.body.appendChild(signature.canvas)
  const base64 = signature.save()
  signature.clear() // 清除签名
  signature.undo() // 撤销上一步
  signature.redo() // 恢复上一步
 */
```

## DotImageCanvas

🧿 将图片的像素转为点阵图片

```typescript
/**
 * @Class DotImageCanvas
 * @param { string } src 图片路径
 * @param { string } color 点阵的颜色 为空则取原像素颜色
 * @param { number } fontWeight 点阵的粗细
 * @param { string } bgColor 图片背景色 默认为白色
 * @desc 📝 将图片的像素转为点阵图片
 * @return { dotImage } 
 * @example 
  import { DotImageCanvas } from './lazy-js-utils'

  const dotImage = new DotImageCanvas('./img/1.jpg','red', 1, '#000')
  dotImage.append('#main')
  // 如果有更新,可以调用dotImage.repaint('xxx','xxx',x)更新，url一致回会服用上次的图片，只更新颜色和粗细
  setTimeout(() => {
    dotImage.repaint('./img/1.jpg','yellow' 1, '#000')
  }, 1000)
 */
```

## DotTextCanvas

🧿 根据文字返回一个点阵的 canvas

```typescript
/**
 * @Class DotTextCanvas
 * @param { string } text 文字
 * @param { number } fontSize 字体大小
 * @param { string } color 字体颜色
 * @param { number } fontWeight 点阵粗细
 * @desc 📝 根据文字返回一个点阵的canvas
 * @return { dotText } 
 * @example 
  import { DotTextCanvas } from './lazy-js-utils'
 
  // 可从dotText.status判断是否加载完成,如果加载完成,可以调用dotText.repaint(xxx)更新文字
  const dotText = DotTextCanvas('hello', 20, '#000', 1)
  dotText.append('#main') // 将canvas插入到指定元素中
 */
```

## removeRoundSpace

🧿 删除二维数组周围为 0 的长度，一般用于图片或者 canvas 的处理

```typescript
/**
 * @Class removeRoundSpace
 * @param { number[][] } data 二维数组
 * @desc 📝 删除二维数组周围为0的长度
 * @return { number[][] } 
 * @example 
  import { removeRoundSpace } from './lazy-js-utils'

  const data = [
   [0,0,0,0,0],
   [0,1,1,1,0],
   [0,1,1,1,0],
   [0,0,0,0,0]
  ]
  removeRoundSpace(data) // [[1,1,1],[1,1,1]]
 */
```

## Line

🧿 快速画线

```typescript
/**
 * @Class Line
 * @param { ctx: CanvasRenderingContext2D
  color: string
  isFill: boolean } 
 * @example 
  import { Line } from './lazy-js-utils'

  const line = new Line(ctx,'red')
  line.draw([0,0],[100,100])
 */
```

## Point

🧿 快速画点

```typescript
/**
 * @Class Point
 * @param { r: number
  ctx: CanvasRenderingContext2D
  color: string
  }
 * @example 
  import { Point } from './lazy-js-utils'

  const point = new Point(ctx,'red')
  point.draw(0,0,'red',10)
 */
```

## Square

🧿 快速画矩形

```typescript
/**
 * @Class Square
 * @param { r: number
  ctx: CanvasRenderingContext2D
  color: string
  }
 * @example 
  import { Point } from './lazy-js-utils'

  const square = new Square(ctx,'red')
  square.draw(0,0,'red',10)
 */
```
