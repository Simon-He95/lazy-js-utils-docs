---
title: Number
description: Number
---

## calNum

计算数字

```typescript
/**
 * @func calNum
 * @desc 📝 计算数字
 * @param { ...number } n 数字
 * @return { string } 数字
 * @example
  import { calNum } from 'lazy-js-utils'

  console.log(calNum.add(0.1, 0.2, 0.2)) // 0.5
  console.log(calNum.div(0.1, 0.2, 0.2)) // 2.5
  console.log(calNum.sub(0.1, 0.2, 0.2)) // -0.3
  console.log(calNum.mul(0.1, 0.2, 0.2)) // 0.004
 */
```

## formateNum

将数字格式化

```typescript
/**
 * @func formateNum
 * @desc 📝 将数字格式化
 * @param { number } num 数字
 * @param { number } decimals 小数位数, 默认为2
 * @param {  'floor' | 'ceil' } integer 小数截取方式 floor:向下取整 ceil:向上取整
 * @return { string } 中文
 * @example 
  import { formateNum } from 'lazy-js-utils'

  formateNum(number: number | string, decimals = 2, integer: 'floor' | 'ceil' = 'ceil') => string
  console.log(formateNum(12253.123, 2)) // '12,253.12'
 */
```

## uppercaseNum

将数字转换为大写字母

```typescript
/**
 * @func uppercaseNum
 * @desc 📝 将数字转换为大写字母
 * @param { number } number  数字
 * @example
  import { uppercaseNum } from 'lazy-js-utils'

  uppercaseNum(num: number | string) => string
  console.log(uppercaseNum(1)) // '一'
 */
```
