---
title: Array
description: Array
---

## diff

比较两个数组，返回相同项或不同项（值或索引）
EN: Compare two arrays and return either same/different items or their indices.

```ts
/**
 * 比较两个数组，返回相同项或不同项（值或索引）
 * @description EN: Compare two arrays and return either same/different items or their indices.
 * @param {any[]} array1 First array.
 * @param {any[]} array2 Second array.
 * @param {Options} [options] Comparison options.
 * @returns {any[] | number[][]} Depending on options, returns matching values, indices, or paired differences.
 */
```

## forEach

遍历数组并允许通过返回值提前退出
EN: Iterate over an array and allow early return if the callback returns a defined value.

```ts
/**
 * 遍历数组并允许通过返回值提前退出
 * @description EN: Iterate over an array and allow early return if the callback returns a defined value.
 * @param {T[]} array Input array to iterate.
 * @param {(value: T, index: number, array: T[]) => any} callback Callback invoked for each element.
 * @returns {any} The first defined (non-undefined) return value from the callback, or undefined.
 */
```

## getAverage

计算数字数组的平均值并格式化为指定小数位
EN: Compute the average of a number array and return it formatted to a fixed number of decimal places.

```ts
/**
 * 计算数字数组的平均值并格式化为指定小数位
 * @description EN: Compute the average of a number array and return it formatted to a fixed number of decimal places.
 * @param {number[]} array Input numbers.
 * @param {number} [fraction] Number of decimal places to keep.
 * @returns {string} Formatted average as string (from toFixed).
 */
```

## quickFilter

快速筛选数组项，支持简易条件或正则
EN: Filter an array quickly by simple conditions or regex expressions. Keys can be 'prop=value' or regex literals.

```ts
/**
 * 快速筛选数组项，支持简易条件或正则
 * @description EN: Filter an array quickly by simple conditions or regex expressions. Keys can be 'prop=value' or regex literals.
 * @param {any[]} array Input array of objects.
 * @param {string | string[]} key Filter key or array of keys.
 * @returns {any[]} Filtered array.
 */
```

## quickFind

快速建立基于主键的查找结构（支持增删改）
EN: Build a quick-find helper for arrays keyed by a primary field. Returns an object with find/set/delete utilities.

```ts
/**
 * 快速建立基于主键的查找结构（支持增删改）
 * @description EN: Build a quick-find helper for arrays keyed by a primary field. Returns an object with find/set/delete utilities.
 * @template T Record-like item type.
 * @param {T[]} array Input array of records.
 * @param {keyof T | string} id Property name used as primary key.
 * @returns {QuickFind<T>} QuickFind wrapper instance.
 */
```

## sort

数组排序，支持多字段和升降顺序
EN: Sort an array by specified fields. `match` can be a string/number or an array of fields; prefix a field with '-' for descending order.

```ts
/**
   * 数组排序，支持多字段和升降顺序
   * @description EN: Sort an array by specified fields. `match` can be a string/number or an array of fields; prefix a field with '-' for descending order.
   * @param {T[]} array Input array to sort.
   * @param {Array<string|number>|number|string} match Field(s) or mode to sort by (e.g. ['-age','name'] or '1').
   * @returns {T[]} Sorted array.
   */
```

## sortByOrder

根据指定顺序对数组排序
EN: Sort items in `array` according to the given `order` sequence. Items not in `order` will be placed after ordered items. Use `key` to pick nested values (dot path supported).

```ts
/**
 * 根据指定顺序对数组排序
 * @description EN: Sort items in `array` according to the given `order` sequence. Items not in `order` will be placed after ordered items. Use `key` to pick nested values (dot path supported).
 * @param {T[]} array The input array to sort.
 * @param {Array<string|number>} order An array specifying the desired order of values. Use "*" in `order` to mark the insertion index for remaining items.
 * @param {string} [key] Optional dot-separated key name to extract the value from objects in `array`.
 * @returns {T[]} A new array sorted according to `order`.
 */
```

## uniqueArray

数组去重函数
EN: Remove duplicates from an array. Optionally dedupe by specified key paths (supports nested paths like 'target.age').

```ts
/**
 * 数组去重函数
 * @description EN: Remove duplicates from an array. Optionally dedupe by specified key paths (supports nested paths like 'target.age').
 * @param { any[] } array 数组
 * @param { string[] } keys 可选，指定比较的键路径数组，如 ['name', 'target.age']。如果指定了keys，则只要这些指定的键值都相同，就认为是同一项进行去重
 * @returns 去重后的数组
 * @example
 * // 基本去重
 * uniqueArray([1, 2, 2, 3]) // [1, 2, 3]
 *
 * // 按指定键去重
 * uniqueArray([
 *   { name: 'Tom', age: 20 },
 *   { name: 'Tom', age: 25 },
 *   { name: 'Jerry', age: 20 }
 * ], ['name']) // [{ name: 'Tom', age: 20 }, { name: 'Jerry', age: 20 }]
 *
 * // 按多个键去重
 * uniqueArray([...], ['name', 'age']) // 只有name和age都相同才认为是重复项
 *
 * // 按嵌套键去重
 * uniqueArray([...], ['target.age']) // 支持深层嵌套访问
 */
```

## chunk

将数组拆分为指定大小的块
EN: Split an array into chunks of the given size.

```ts
/**
 * 将数组拆分为指定大小的块
 * @description EN: Split an array into chunks of the given size.
 * @param {T[]} arr Input array to split.
 * @param {number} [size] Maximum size of each chunk.
 * @returns {T[][]} Array of chunked arrays.
 */
```

## countBy

按照迭代器结果统计数组中元素出现次数
EN: Count elements in an array grouped by the value returned from the iterator.

```ts
/**
 * 按照迭代器结果统计数组中元素出现次数
 * @description EN: Count elements in an array grouped by the value returned from the iterator.
 * @param { any[] } array Input array to count.
 * @param { Function } iterator Function that maps each item to a key.
 * @returns {Record<string, number>} Map from key to its occurrence count.
 */
```

## flatten

将嵌套结构扁平化为数组
EN: Flatten a nested tree-like structure into a flat array. The property used for children can be customized.

```ts
/**
 * 将嵌套结构扁平化为数组
 * @description EN: Flatten a nested tree-like structure into a flat array. The property used for children can be customized.
 * @param { Record<string, any> | Record<string, any>[] } o Object or array to flatten.
 * @param { string } [flattenProps] Property name that holds children.
 * @param { boolean } [onlyLastNode] When true, only keep leaf nodes.
 * @param { any[] } [result] Internal accumulator used during recursion.
 * @returns { any[] } Flattened array of nodes.
 */
```

## filterEmpty

/**
EN: Remove empty/falsey values from an array (filters with Boolean).

```ts
/**
/**
 * 过滤数组中的空值（falsey 值）
 * @description EN: Remove empty/falsey values from an array (filters with Boolean).
 * @param {T[]} array Input array.
 * @returns {T[]} Filtered array with truthy values only.
 */
```
