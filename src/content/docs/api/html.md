---
title: Html
description: Html
---

## escapeHtml

转义html
EN: Escape HTML special characters in a string to their entity equivalents.

```ts
/**
 * 转义html
 * @description EN: Escape HTML special characters in a string to their entity equivalents.
 * @param { string } s 字符串
 * @returns
 */
```

## htmlTransform

htmlparser
EN: Parse an HTML string into a DOM-like structure, allow transformations via callbacks, and return the transformed HTML string.

```ts
/**
 * htmlparser
 * @description EN: Parse an HTML string into a DOM-like structure, allow transformations via callbacks, and return the transformed HTML string.
 * @param { string } s 字符串
 * @param options {}
 * @param { (key: string, value?: string) => void } options.setAttribs 设置属性
 * @param { (str: string) => void } options.beforeInsert 插入前
 * @param { (s: string) => void } options.afterInsert 插入后
 * @param { (key: string, value?: string) => void } options.renameAttribs 重命名
 * @returns
 */
```

## unescapeHtml

反转义html
EN: Convert HTML entities back into their corresponding characters.

```ts
/**
 * 反转义html
 * @description EN: Convert HTML entities back into their corresponding characters.
 * @param { string } s 字符串
 * @returns
 */
```

## stylesReg
EN: Extract inline style attributes from HTML-like strings and call `callback` with each style and the full matching block.

```ts
/**
 *
 * @param { string } str 字符串模板
 * @param { Function } callback 读取style时的回调
 * @returns
 * @description EN: Extract inline style attributes from HTML-like strings and call `callback` with each style and the full matching block.
 */
```

## getStyles
EN: Extract inline style attributes from HTML-like strings and call `callback` with each style and the full matching block.

```ts
/**
 *
 * @param { string } str 字符串模板
 * @param { Function } callback 读取style时的回调
 * @returns
 * @description EN: Extract inline style attributes from HTML-like strings and call `callback` with each style and the full matching block.
 */
```
