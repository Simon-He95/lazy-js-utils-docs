---
title: Random
description: Random
---

## randomDate

随机日期函数
EN: Return a random Date between `start` and `end` (dates as strings). Defaults to 1999/01/1 -> today.

```ts
/**
 * 随机日期函数
 * @param { string } start 开始日期 默认 '1999/01/1
 * @param { string } [end] 截止日期
 * @returns
 * @description EN: Return a random Date between `start` and `end` (dates as strings). Defaults to 1999/01/1 -> today.
 */
```

## randomHexColor

随机hex颜色
EN: Generate a random 6-digit hex color string like `#a1b2c3`.

```ts
/**
 * 随机hex颜色
 * @returns
 * @description EN: Generate a random 6-digit hex color string like `#a1b2c3`.
 */
```

## randomRange

获取随机范围值
EN: Return a random integer between min and max inclusive.

```ts
/**
 * 获取随机范围值
 * @param min 最小值 默认 MIN_SAFE_INTEGER
 * @param max 最大值 默认 MAX_VALUE
 * @returns
 * @description EN: Return a random integer between min and max inclusive.
 */
```

## randomRgba

随机rgba颜色
EN: Generate a random `rgba(r,g,b,a)` color string with optional opacity.

```ts
/**
 * 随机rgba颜色
 * @param { number } [opacity] 透明度 默认 1
 * @returns
 * @description EN: Generate a random `rgba(r,g,b,a)` color string with optional opacity.
 */
```

## randomArray

随机打乱数组
EN: Shuffle an array in-place using the Fisher–Yates algorithm.

```ts
/**
 * 随机打乱数组
 * @description EN: Shuffle an array in-place using the Fisher–Yates algorithm.
 * @param array any[]
 * @returns array
 */
```

## uuid

Generate a UUID-like string.

```ts
/**
 * Generate a UUID-like string.
 *
 * If `len` is provided a random string of that length is returned using the
 * provided radix. Otherwise a RFC-like UUID of 36 chars is returned.
 *
 * @param {number} [len] Length of id to generate.
 * @param {number|'hex'} [radix] Radix to use for character selection or 'hex'.
 * @returns {string} Generated id string.
 */
```
