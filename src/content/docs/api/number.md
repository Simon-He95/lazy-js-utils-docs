---
title: Number
description: Number
---

## calNum

add 数字求和
EN: Helper for basic arithmetic operations that mitigates

```ts
/**
 * add 数字求和
 * sub 数字求差
 * mul 数字相乘
 * div 数字相除
 * @description EN: Helper for basic arithmetic operations that mitigates
 * floating-point rounding errors by scaling operands. Provides add, sub,
 * mul and div methods accepting numbers or numeric strings.
 */
```

## formateNum

数字格式化
EN: Format a number with thousands separators and a fixed number of decimal places. Supports rounding via 'floor' or 'ceil'.

```ts
/**
 * 数字格式化
 * @param { number } number 数字
 * @param { number } decimals 小数位
 * @param { 'floor' | 'ceil' } integer 向上截取 ｜ 向下截取 默认 'ceil'
 * @returns
 * @description EN: Format a number with thousands separators and a fixed number of decimal places. Supports rounding via 'floor' or 'ceil'.
 */
```

## uppercaseNum

大写数字
EN: Convert a number to Chinese uppercase currency representation (e.g., 壹贰叁元...).

```ts
/**
 * 大写数字
 * @param { number } n 数字
 * @returns 返回大写数字
 * @description EN: Convert a number to Chinese uppercase currency representation (e.g., 壹贰叁元...).
 */
```

## multiply

乘倍
EN: Multiply numeric inputs or repeat strings `multiple` times. If `i` is numeric, returns numeric product; otherwise repeats string.

```ts
/**
 * 乘倍
 * @param { number | string } i
 * @param { number } multiple 倍数
 * @returns
 * @description EN: Multiply numeric inputs or repeat strings `multiple` times. If `i` is numeric, returns numeric product; otherwise repeats string.
 */
```

## isEven

判断偶数
EN: Return true if `n` is an even integer (coerced to number).

```ts
/**
 * 判断偶数
 * @param { number } n 数字
 * @returns
 * @description EN: Return true if `n` is an even integer (coerced to number).
 */
```
