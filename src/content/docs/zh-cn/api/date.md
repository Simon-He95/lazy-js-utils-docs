---
title: Date
description: Date
---

## formateDate

🧿 格式化日期

```typescript
/**
 * @func formateDate    
 * @desc 📝 格式化日期
 * @param { Date } date 日期
 * @param { string } fmt 格式 默认为'yyyy-MM-dd'
 * @returns { string } 
 * @example 
  import { formateDate } from 'lazy-js-utils'

  console.log(formateDate(new Date(), 'yyyy-MM-dd')) // '2019-01-01'
 */
```

## getDateList

🧿 获取指定日期范围内正负多少天的日期列表

```typescript
/**
 * @func getDateList    
 * @desc 📝 获取指定日期范围内正负多少天的日期列表
 * @param { string } startDate 开始日期
 * @param { number } days 正负多少天
 * @returns { string } 
 * @example 
  import { getDateList } from 'lazy-js-utils'

  console.log(getDateList('1991/3/02', 7)) // [ '1991-3-02', '1991-3-03', '1991-3-04', '1991-3-05', '1991-3-06', '1991-3-07', '1991-3-08' ]
 */
```
