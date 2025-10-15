---
title: Date
description: Date
---

## formateDate
EN: Format a Date object into a string according to the provided format pattern (e.g., 'yyyy-MM-dd').

```ts
/**
   * @description EN: Format a Date object into a string according to the provided format pattern (e.g., 'yyyy-MM-dd').
   */
```

## getDateList

Generates a list of dates starting from a given date.

```ts
/**
 * Generates a list of dates starting from a given date.
 *
 * @param {string} start - The start date in the format 'YYYY-MM-DD' or 'YYYY/MM/DD'.
 * @param {number} [day] - The number of days to generate. If negative, dates will be generated in reverse order.
 * @returns {string[]} An array of date strings in the format 'YYYY-MM-DD'.
 *
 * @example
 * ```typescript
 * getDateList('2023-01-01', 5);
 * // Returns ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06']
 * ```
 */
```

## getDaysOfMonth

Returns the number of days in a given month.

```ts
/**
 * Returns the number of days in a given month.
 *
 * @param {number} currentMonth - The month for which to get the number of days (0-based, where 0 = January, 11 = December).
 * @returns {number} The number of days in the specified month.
 */
```

## createCalendar

返回当前月份的日历数组信息
EN: Generate a 6x7 calendar grid for the specified month index (0-based), returning an array of weeks with day numbers.

```ts
/**
 * 返回当前月份的日历数组信息
 * @description EN: Generate a 6x7 calendar grid for the specified month index (0-based), returning an array of weeks with day numbers.
 * @param currentMonth 今天的月份-1 从0开始
 * @returns number[][]
 */
```

## compareDate

比较2个月份的大小
EN: Compare two full dates (YYYY-MM-DD or YYYY/MM/DD) returning -1/0/1 when date1 is less/equal/greater than date2.

```ts
/**
 * 比较2个月份的大小
 * @description EN: Compare two full dates (YYYY-MM-DD or YYYY/MM/DD) returning -1/0/1 when date1 is less/equal/greater than date2.
 * @param date1 '2021-02-01' | '2021/02/01'
 * @param date2 '2021-03-02' | '2021/03/02'
 * @param separator '-' | '/' 默认 '-'
 * @returns -1 | 1 | 0
 */
```

## compareTime

比较两个时间的大小
EN: Compare two times given as 'HH:MM'. Returns 0 if equal, 1 if time1 > time2, -1 if time1 < time2.

```ts
/**
 * 比较两个时间的大小
 *
 * 该函数接受两个时间字符串，格式为 'HH:MM'，并比较它们的大小。
 * 返回值为 0 表示两个时间相同，1 表示第一个时间大于第二个时间，-1 表示第一个时间小于第二个时间。
 * @description EN: Compare two times given as 'HH:MM'. Returns 0 if equal, 1 if time1 > time2, -1 if time1 < time2.
 *
 * @param {string} time1 - 第一个时间字符串，格式为 'HH:MM'
 * @param {string} time2 - 第二个时间字符串，格式为 'HH:MM'
 * @returns {number} - 返回 0 表示两个时间相同，1 表示第一个时间大于第二个时间，-1 表示第一个时间小于第二个时间
 */
```

## compareDateTime

比较2个日期时间的大小
EN: Compare two date-time strings and return -1 if date1 < date2, 1 if date1 > date2, or 0 if equal.

```ts
/**
 * 比较2个日期时间的大小
 * @description EN: Compare two date-time strings and return -1 if date1 < date2, 1 if date1 > date2, or 0 if equal.
 * @param date1 '2021-02-01 12:00:01' | '2021/02/01 12:00:01'
 * @param date2 '2021-03-02 12:00:00' | '2021/03/02 12:00:00'
 * @param separator '-' | '/' 默认 '-'
 * @returns -1 | 1 | 0
 */
```

## getFirstDay

获取当前周的周一日期
EN: Return the ISO date string for Monday of the current week (YYYY-MM-DD).

```ts
/**
 * 获取当前周的周一日期
 * @description EN: Return the ISO date string for Monday of the current week (YYYY-MM-DD).
 * @returns
 */
```

## getDifferenceDays

_暂无文档注释，欢迎补充。_
