---
title: Event
description: Event
---

## createElement

🧿 创建元素和属性

```typescript
/**
 * @func createElement
 * @param { string } tag 标签名
 * @param { Record<string, string> } attributes 属性
 * @desc 📝 创建元素和属性
 * @return { HTMLElement } el
 * @example
  import { createElement } from 'lazy-js-utils'

  const p = createElement('p',{
    id: 'test',
    class: 'test',
    style: 'xxx'
  })
 */
```

## findElement

🧿 查找元素

```typescript
/**
 * @func findElement
 * @param { string | string[] } selector 选择器
 * @param { boolean } all 是否返回所有
 * @param { HTMLElement } currentNode 当前节点 默认为 document
 * @desc 📝 查找元素
 * @return { HTMLElement ｜HTMLElement[] } selectors
 * @example
  import { findElement } from 'lazy-js-utils'

  const p = findElement('p') // 查找第一个 p 标签
  const p = findElement('p', true) // 查找所有 p 标签
  const result = findElement(['p', 'div']) // 查找第一个 p 标签和 div 标签
  const result = findElement(['p', 'div'], true) // 查找所有 p 标签和 div 标签
 */
```

## insertElement

🧿 插入元素

```typescript
/**
 * @func insertElement
 * @param { HTMLElement | string } parent 父节点
 * @param { HTMLElement | string } element 待插入的元素
 * @param { HTMLElement ｜ null } target 目标元素
 * @desc 📝 插入元素
 * @return { void }
 * @example
  import { insertElement, createElement } from 'lazy-js-utils'

  const div = createElement('div')
  insertElement('main', div) // 将 div 插入到 main 中最后一个节点
  insertElement('main', '.button') // 将 button 插入到 main 中class为button的元素前面
 */
```

## removeElement

🧿 删除元素

```typescript
/**
 * @func removeElement
 * @param { HTMLElement ｜ string } target 目标元素
 * @desc 📝 删除元素
 * @return { HTMLElement } parentNode 父节点
 * @example
  import { insertElement, removeElement } from 'lazy-js-utils'
  
  const div = removeElement('div')
  insertElement('main', div) // 将 div 插入到 main 中最后一个节点
  removeElement(div) // 将div元素从父节点中移除
 */
```

## useElementBounding

🧿 获取元素位置

```typescript
/**
 * @func useElementBounding
 * @param {  Element | string } target 目标元素
 * @param { (rect: DOMRect) => void } callback 回调函数
 * @desc 📝 获取元素位置
 * @return { () => void } 停止事件监听函数
 * @example
  import { useElementBounding } from 'lazy-js-utils'

  useElementBounding('div', (rect) => {
    console.log(rect)
  })
 */
```

## useIntersectionObserver

🧿 监听元素是否进入视口

```typescript
/**
 * @func useIntersectionObserver
 * @param { Element | string } target 目标元素
 * @param { (rect: DOMRect) => void } callback 回调函数
 * @param { { root?: Element | Document | string | null; rootMargin?: string; threshold?: number | number[] } } IntersectionObserverOptions 参数
 * @desc 📝 监听元素是否进入视口
 * @return { () => void } 停止事件监听函数
 * @example
  import { useIntersectionObserver } from 'lazy-js-utils'

  useIntersectionObserver('div', (entries) => {
    console.log(entries)
  })
 */
```

## useMutationObserver

🧿 监听元素变化

```typescript
/**
 * @func useMutationObserver
 * @param { Element | string } target 目标元素
 * @param { (mutations: MutationRecord[], observer: MutationObserver) => void } callback 回调函数 callback 回调函数
 * @param { { childList?: boolean; attributes?: boolean; characterData?: boolean; subtree?: boolean; attributeOldValue?: boolean; characterDataOldValue?: boolean; attributeFilter?: string[] } } options 参数
 * @desc 📝 监听元素变化
 * @return { () => void } 停止事件监听函数
 * @example
  import { useMutationObserver } from 'lazy-js-utils'

  useMutationObserver('div', (mutations, observer) => {
    console.log(mutations, observer)
  })
 */
```

## useResizeObserver

🧿 监听窗口大小变化

```typescript
/**
 * @func useResizeObserver
 * @param { ( width: number, height: number ) => void } callback 回调函数
 * @desc 📝 监听窗口大小变化
 * @return { () => void } 停止事件监听函数
 * @example
  import { useResizeObserver } from 'lazy-js-utils'

  useResizeObserver((width, height) => {
    console.log('窗口大小:', width, height)
  })
 */
```

## useWindowScroll

🧿 监听滚动条位置

```typescript
/**
 * @func useWindowScroll
 * @param { ( left: number, top: number ) => void } callback 回调函数
 * @desc 📝 监听滚动条位置
 * @return { () => void } 停止事件监听函数
 * @example
  import { useWindowScroll } from 'lazy-js-utils'

  useWindowScroll((left, top) => {
    console.log('滚动条位置:', left, top)
  })
 */
```

## useInterval

🧿 定时器执行函数

```typescript
/**
 * @func useInterval
 * @param { () => void } fn 执行函数
 * @param { number } duration 间隔时间
 * @desc 📝 定时器执行函数
 * @return { () => void } 停止事件监听函数
 * @example
  import { useInterval } from 'lazy-js-utils'

  // 每秒打印一次
  let count = 0
  const stop = useInterval(() => {
    console.log('hi')
    count ++
  }, 1000)
  // 第五次后停止
  if (count === 5) {
    stop()
  }
 */
```

## useTimeout

🧿 定时器执行函数

```typescript
/**
 * @func useTimeout
 * @param { () => void } fn 执行函数
 * @param { number } duration 间隔时间
 * @desc 📝 定时器执行函数
 * @return { () => void } 停止事件监听函数
 * @example
  import { useTimeout } from 'lazy-js-utils'

  // 一秒后打印
  const stop = useTimeout(() => {
    console.log('hi')
  }, 1000)
 */
```

## useKeyBoard

🧿 监听键盘事件, 执行函数

```typescript
/**
 * @func useKeyBoard
 * @param { string } press 键盘按键
 * @param { (code: string) => void } callback 回调函数
 * @desc 📝 监听键盘事件, 执行函数
 * @return { () => void } 停止事件监听函数
 * @example
  import { useKeyBoard } from 'lazy-js-utils'

  // 监听键盘按键
  const stop = useKeyBoard('Ctrl+c', () => {
    console.log('用户按下了 Ctrl+c')
  })
 */
```

## dragEvent

🧿 点击拖拽松开事件封装

```typescript
/**
 * @func dragEvent
 * @param { string | HTMLElement } target 目标元素
 * @param { { dragStart: (e) => void , dragMove: (e) => void , dragEnd: (e) => void } } options 绑定事件参数
 * @param { boolean } trigger 默认false,在容器上移动就会触发，为true时，只有按下在目标元素上移动才会触发
 * @desc 📝 dragEvent会在移动端是切换touch事件,在PC端是用mouse事件，保持接收的event对象基本是一致的
 * @return { () => void } 停止事件监听函数
 * @example
  import { dragEvent } from 'lazy-js-utils'

  const stop = dragEvent('#main', {
    dragStart(e) {
      console.log('start', e.clientX, e.clientY)
    },
    dragMove(e) {
      console.log('move',  e.clientX, e.clientY)
    },
    dragEnd(e) {
      console.log('end',  e.clientX, e.clientY)
    },
  })
 */
```

## useEventListener

🧿 给元素添加事件函数

```typescript
/**
 * @func useEventListener
 * @param { string | HTMLElement } target 目标元素
 * @param { string } eventName 事件名称
 * @param { (e)=>void } callback 回调函数
 * @param { AddEventListenerOptions } useCapture { once?: boolean; passive?: boolean; signal?: AbortSignal; }
 * @param { boolean } autoRemove 是否自动移除事件
 * @desc 📝 给元素添加事件函数
 * @return { () => void } 停止事件监听函数
 * @example
  import { useEventListener } from 'lazy-js-utils'

  const remove = useEventListener('#btn',
    'click',
    () => {
      console.log('click')
    }
  )
  useEventListener(document,'DOMContentLoaded', () => {
    console.log('我就执行一次,然后事件就被自动移除了')
  }, false, true)
 */
```

## useMouse

🧿 监听鼠标移动

```typescript
/**
 * @func useMouse
 * @param { callback: (e: MouseEvent) => void, delay = 0 } callback 回调函数，delay x毫秒内只执行一次
 * @desc 📝 监听鼠标移动
 * @return { e } MouseEvent
 * @example
  import { useMouse } from 'lazy-js-utils'

  useMouse((e)=>{
    console.log(e.clientX, e.clientY)
  })
 */
```

## useClick

🧿 监听鼠标点击事件

```typescript
/**
 * @func useClick
 * @param { target: string | HTMLElement, callback: (e: MouseEvent) => void } target 目标元素，callback 回调函数
 * @desc 📝 监听鼠标点击事件
 * @return { void }
 * @example
  import { useClick } from 'lazy-js-utils'

  useClick('#btn', (e)=>{
    console.log(e.target)
  })
 */
```

## useHover

🧿 监听元素 hover 事件

```typescript
/**
 * @func useHover
 * @param { target: string | HTMLElement, callback: (isHover: boolean, e: MouseEvent) => void } target 目标元素，callback 回调函数
 * @desc 📝 监听元素hover事件
 * @return { () => void }
 * @example
  import { useHover } from 'lazy-js-utils'

  useHover('#btn', (isHover,e)=>{
    if(isHover){
      console.log('hover')
  })
 */
```

## useFocus

🧿 自动聚焦

```typescript
/**
 * @func useFocus
 * @param { target: string | HTMLElement } target 目标元素
 * @desc 📝 自动聚焦
 * @return { void }
 * @example
  import { useFocus } from 'lazy-js-utils'

  <-- #html
  <div class="input-wrapper"><input type="text"/></div>
  -->
  useFocus('.input-wrapper')
 */
```

## download

🧿 下载

```typescript
/**
 * @func download
 * @param { string } href 下载链接
 * @param { string } download 下载文件名
 * @desc 📝 下载
 * @return { void }
 * @example
  import { download } from 'lazy-js-utils'

  download('https://www.baidu.com/img/bd_logo1.png', 'baidu.png')
 */
```

## collisionDetection

🧿 碰撞检测

```typescript
/**
 * @func collisionDetection
 * @param { string | HTMLElement } o1 目标元素1
 * @param { string | HTMLElement } o2 目标元素2
 * @desc 📝 碰撞检测
 * @return { void }
 * @example
  import { collisionDetection } from 'lazy-js-utils'

  collisionDetection('#o1', '#o2') // true
 */
```
