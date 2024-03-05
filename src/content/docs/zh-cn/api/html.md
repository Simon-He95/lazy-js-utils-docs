---
title: Html
description: Html
---

## escapeHtml

🧿 将字符串转义为 HTML 实体

```typescript
/**
 * @func escapeHtml
 * @param { string } html 字符串
 * @desc 📝 设置css变量值
 * @return { string } 转义后的字符串
 * @example
  import { escapeHtml } from 'lazy-js-utils'

  escapeHtml('<div>hello world</div>') // &lt;div&gt;hello world&lt;/div&gt;
 */
```

## unescapeHtml

🧿 将 HTML 实体转义为字符串

```typescript
/**
 * @func unescapeHtml
 * @param { string } html HTML实体字符串
 * @desc 📝 获取数组的平均值
 * @return { string } 转义后的字符串
 * @example
  import { unescapeHtml } from 'lazy-js-utils'

  unescapeHtml('&lt;div&gt;hello world&lt;/div&gt;') // <div>hello world</div>
 */
```

## htmlTransform

🧿html 字符串 ast 遍历函数

```typescript
/**
 * @func htmlTransform
 * @param { string } html html字符串
 * @param { style: string } 样式
 * @param { Record<string, (node: Element, update: Update) => void> } options 参数
 * @desc 📝 html ast遍历函数
 * @example
  import { htmlTransform } from 'lazy-js-utils'

   const code = await htmlTransform('<div class="_ee">hello</div><view bindtap="xx"></view>', {
      div(node, { setAttribs, beforeInsert, afterInsert }) {
        node.name = 'p'
        setAttribs('age', '19')
        beforeInsert('<span>hi</span>')
        afterInsert('<span>你好</span>')
      },
      '*': function (node) {
        // 所有的节点都会进入这里
        console.log(node)
      },
      '$attr$_ee': function (node) {
        // $attr开头会匹配存在_ee属性的节点
        console.log(node)
      },
      '$attr$bindtap': function (node, { renameAttribs }) {
        renameAttribs('bindtap', 'onTap')
      },
    })
 */
```

## getStyles

🧿 对 html 中的 style 内联样式进行处理

```typescript
/**
 * @func getStyles
 * @param { string } html html字符串
 * @param { style: string } 样式
 * @param { Record<string, (node: Element, update: Update) => void> } options 参数
 * @desc 📝 html ast遍历函数
 * @example
  import { getStyles } from 'lazy-js-utils'

  const template = ` <template>
    <div class="red yellow my-class my_class my$c class1" style="background: yellow;color:red;" >asdas</div>
    <div class="red yellow my-class my_class my$c class1" style="background: yellow" />
  </template>
  <style scoped>
  .red {
    color: red;
    font-size: 14px;
  }
  .red .a {
    color: yellow;
  }
  </style>
  `

  console.log(getStyles(str, (style, block, index) => {
    console.log(style)
    return style + 'nihao'
  }))

 */
```
