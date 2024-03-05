---
title: Css
description: Css
---

## getClasses

🧿 从 html 字符串中获取所有的 class，并返回新的 html 字符串

```typescript
/**
 * @func getClasses
 * @param { string } html html字符串
 * @param { (classes: string, block: string, index: number) => str } callback 回调函数
 * @desc 📝 从html字符串中获取所有的class，并返回新的html字符串
 * @example
  import { getClasses } from 'lazy-js-utils'

  const html = `
  <template>
    <div class="red yellow my-class my_class my$c class1" style="background: yellow" >asdas</div>
    <div class="red yellow my-class my_class my$c class1" style="background: yellow" />
  </template>
  `
  getClasses(html,(classes, block, index) => {
    console.log(classes, block, index)
    if(classes.includes('my-class')) {
      return block.replace('my-class', 'my-class-1')
    }
  })
 */
```

## getCssVar

🧿 获取元素的 css 变量值

```typescript
/**
 * @func getCssVar
 * @param { element:string | HTMLElement } 元素
 * @param { style: string } 样式
 * @param { callback: (css: string) => void } 样式
 * @desc 📝 获取元素的css变量值
 * @return { void }
 * @example
  import { getCssVar } from 'lazy-js-utils'

  <div class="wrapper" style="--main-bg-color: pink;"></div>
  getCssVar('.wrapper', '--main-bg-color', (css) => {
    console.log(css) // pink
  })
 */
```

## hasClassName

🧿 判断元素上是否有某个 class

```typescript
/**
 * @func hasClassName
 * @param { element: Element } element 元素
 * @param { string } className class名称
 * @desc 📝 判断元素上是否有某个class
 * @example
  import { hasClassName } from 'lazy-js-utils'

  <div id="main" class="isDisabled"></div>
  const main = document.getElementById('main')
  hasClassName(main, 'isDisabled') // true
 */
```

## setCssVar

🧿 设置元素的 css 变量值

```typescript
/**
 * @func setCssVar
 * @param { string ｜ HTMLElement } element 元素
 * @param { Record<string, string> } styleObj css变量对象
 * @return { void }
 * @desc 📝 设置元素的css变量值
 * @example
  import { setCssVar } from 'lazy-js-utils'
  
  <div class="wrapper"></div>
  setCssVar('.wrapper', {
    '--main-bg-color': 'pink',
    '--main-color': 'red'
  })
 */
```

## useNamespace

🧿 根据命名规范，给 class 添加命名空间

```typescript
/**
 * @func useNamespace
 * @param { string } defaultNamespace 默认命名空间
 * @return { 
 * {
 *   namespace,
 *   b,
 *   e,
 *   m,
 *   be,
 *   em,
 *   bm,
 *   bem,
 *   is,
 *   // css
 *   cssVar,
 *   cssVarName,
 *   cssVarBlock,
 *   cssVarBlockName,
 * }
 *  } namespace
 * @desc 📝 根据命名规范，给class添加命名空间
 * @example
  import { useNamespace } from 'lazy-js-utils'

  const namespace = useNamespace('vi')
  const button = namespace('button')
  button.b('primary')// vi-btn-primary
 */
```
