---
title: Object
description: Object
---

## deepMerge

深合并
EN: Recursively merge source plain objects into the target object.

```ts
/**
 * 深合并
 * @param target 对象
 * @param sources 其他对象
 * @returns
 * @description EN: Recursively merge source plain objects into the target object.
 */
```

## generateKeyObject

_暂无文档注释，欢迎补充。_

## mapTransform

_暂无文档注释，欢迎补充。_

## mapTransformBack

_暂无文档注释，欢迎补充。_

## stringify

Serialize a plain object to a query-string-like representation.
EN: Convert a plain object to a delimited key-value string with optional formatting (used for style strings, query strings, etc.).

```ts
/**
 * Serialize a plain object to a query-string-like representation.
 *
 * Options allow customizing separators, equality sign, whether to hyphenate
 * keys, append `px` to numeric values, and URL-encode values.
 *
 * @param {Record<string,string|number>} o Input object.
 * @param {StringifyOptions} [options] Formatting options.
 * @returns {string} Serialized string.
 * @description EN: Convert a plain object to a delimited key-value string with optional formatting (used for style strings, query strings, etc.).
 */
```

## transformKey
EN: Rename and/or relocate keys in an object (or array of objects) using a mapping; supports nested paths and optional deletion of empty containers.

```ts
/**
   * @description EN: Rename and/or relocate keys in an object (or array of objects) using a mapping; supports nested paths and optional deletion of empty containers.
   */
```

## traverse

通过函数的方式获取对象中指定的数据
EN: Walk a target object or array and invoke callback functions for specified paths, passing (value, index, target).

```ts
/**
 * 通过函数的方式获取对象中指定的数据
 * @param { Record<any, any> | any[] } target 对象或数组
 * @param { Record<string, Function> } options {}
 * @returns
 * @description EN: Walk a target object or array and invoke callback functions for specified paths, passing (value, index, target).
 */
```

## deepClone

Deep clone a value.

```ts
/**
 * Deep clone a value.
 *
 * Performs a deep clone for plain objects and arrays. Built-in collection
 * types (Set, Map, WeakMap, WeakSet, RegExp, Date) are cloned via their
 * constructors. Functions and `null` are returned as-is. A per-call WeakMap
 * is used to handle circular references and to preserve object identity
 * within the cloned structure.
 *
 * @param {any} target Value to deep clone.
 * @returns {any} Deep-cloned value.
 */
```

## deepCompare

深比较
EN: Deep-compare two values (objects/arrays/primitives), optionally ignoring keys. Returns errors and messages describing differences.

```ts
/**
 * 深比较
 * @param { any } comp1 对象1
 * @param { any } comp2 对象2
 * @param { string[] | RegExp } ignoreKeys 忽律某项属性的比较
 * @returns
 * @description EN: Deep-compare two values (objects/arrays/primitives), optionally ignoring keys. Returns errors and messages describing differences.
 */
```

## objectToMap

Convert an object to a Map. Keys that look like JSON objects ("{...}") are

```ts
/**
 * Convert an object to a Map. Keys that look like JSON objects ("{...}") are
 * parsed back to objects using JSON.parse.
 *
 * @param {Record<string, any>} obj Input object.
 * @returns {Map<any, any>} Map representation.
 */
```

## mapToObject

Convert a Map to a plain object. Non-string keys are JSON.stringified.

```ts
/**
 * Convert a Map to a plain object. Non-string keys are JSON.stringified.
 *
 * @param {Map<any, any>} map Input Map.
 * @returns {Record<string, any>} Plain object representation.
 */
```
