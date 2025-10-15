---
title: Common
description: Common
---

## _toString

`Object.prototype.toString` 的安全引用
EN: Cached reference to `Object.prototype.toString` for reliable type inspection.

```ts
/**
 * `Object.prototype.toString` 的安全引用
 * @description EN: Cached reference to `Object.prototype.toString` for reliable type inspection.
 */
```

## ESM_STATIC_IMPORT_RE

匹配静态 ESM `import` 语句
EN: Regular expression that captures static ESM import statements, including specifiers and imported bindings.

```ts
/**
 * 匹配静态 ESM `import` 语句
 * @description EN: Regular expression that captures static ESM import statements, including specifiers and imported bindings.
 */
```

## DYNAMIC_IMPORT_RE

匹配动态 `import()` 调用
EN: Regular expression that extracts the expression inside dynamic `import()` calls.

```ts
/**
 * 匹配动态 `import()` 调用
 * @description EN: Regular expression that extracts the expression inside dynamic `import()` calls.
 */
```

## EXPORT_DECAL_RE

匹配具名导出的声明语句
EN: Regular expression that locates `export function|const|class ...` declarations and captures their names.

```ts
/**
 * 匹配具名导出的声明语句
 * @description EN: Regular expression that locates `export function|const|class ...` declarations and captures their names.
 */
```

## EXPORT_NAMED_RE

匹配具名导出的花括号语法
EN: Regular expression that captures `export { ... }` statements, optionally with re-export specifiers.

```ts
/**
 * 匹配具名导出的花括号语法
 * @description EN: Regular expression that captures `export { ... }` statements, optionally with re-export specifiers.
 */
```

## EXPORT_STAR_RE

匹配 `export *` 语句
EN: Regular expression used to detect star exports, optionally capturing aliased names and source specifiers.

```ts
/**
 * 匹配 `export *` 语句
 * @description EN: Regular expression used to detect star exports, optionally capturing aliased names and source specifiers.
 */
```

## EXPORT_DEFAULT_RE

匹配默认导出语句
EN: Regular expression that identifies `export default` statements.

```ts
/**
 * 匹配默认导出语句
 * @description EN: Regular expression that identifies `export default` statements.
 */
```

## hasOwn

判断对象是否拥有指定的自有属性
EN: Check whether the given object has an own property named `key`.

```ts
/**
 * 判断对象是否拥有指定的自有属性
 * @description EN: Check whether the given object has an own property named `key`.
 * @param { object } obj 需要检查的对象
 * @param { string } key 属性名
 * @returns { boolean }
 */
```

## mount

挂载：等待元素存在然后执行回调。支持选择器字符串或直接传入 DOM 对象。
EN: Wait for one or more elements (or selectors) to become available and invoke the provided callback with the resolved elements. Useful for mounting listeners or components when DOM nodes may not exist yet.

```ts
/**
 * 挂载：等待元素存在然后执行回调。支持选择器字符串或直接传入 DOM 对象。
 * - 最后一个参数必须是回调，前面的参数为要等待/解析的元素或选择器。
 * - 回调会在元素可用时被调用，并接收解析后的元素参数。
 *
 * @param ...args - 多个元素或选择器，最后一个参数为回调函数
 * @returns void
 * @description EN: Wait for one or more elements (or selectors) to become available and invoke the provided callback with the resolved elements. Useful for mounting listeners or components when DOM nodes may not exist yet.
 */
```

## unmount

浏览器卸载时
EN: Register a callback to run when the window unloads.

```ts
/**
 * 浏览器卸载时
 * @description EN: Register a callback to run when the window unloads.
 * @param { (ev: Event) => void } callback 回调
 * @returns { (ev: Event) => void }
 */
```

## assign

兼容的 Object.assign 别名
EN: Alias for Object.assign, provided for convenience and consistent imports.

```ts
/**
 * 兼容的 Object.assign 别名
 * @description EN: Alias for Object.assign, provided for convenience and consistent imports.
 */
```

## beforeUnmount

浏览器关闭前
EN: Register a callback to run before the window unloads (beforeunload).

```ts
/**
 * 浏览器关闭前
 * @description EN: Register a callback to run before the window unloads (beforeunload).
 * @param { (ev: Event) => void } callback 回调
 * @returns { (ev: Event) => void }
 */
```
