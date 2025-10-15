---
title: Script
description: Script
---

## addLink

Add a <link rel="stylesheet"> tag to document head and return a remover.

```ts
/**
 * Add a <link rel="stylesheet"> tag to document head and return a remover.
 *
 * @param {string} href Stylesheet URL.
 * @returns {() => void} Function that removes the link element.
 */
```

## addScript

Add a <script> tag to the document head and return a remover function.

```ts
/**
 * Add a <script> tag to the document head and return a remover function.
 *
 * @param {string} src Script URL to add to the page.
 * @returns {() => void} Function that removes the inserted script.
 */
```

## addStyle

Inject CSS into the document head.

```ts
/**
 * Inject CSS into the document head.
 *
 * `s` may be a CSS string or an object of rules. If `scoped` is provided the
 * style will be transformed to a scoped variant via `addStyleScoped`.
 *
 * @param {string|StyleObject} s CSS string or style object.
 * @param {string} [scoped] Optional scope id to scope the styles.
 * @returns {() => void} Function to remove the injected style.
 */
```

## addStyleScoped

_暂无文档注释，欢迎补充。_
