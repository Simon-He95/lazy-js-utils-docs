---
title: To
description: To
---

## arrayToExcel

Convert an array of objects into an Excel-compatible HTML table and

```ts
/**
 * Convert an array of objects into an Excel-compatible HTML table and
 * trigger a download as an .xls file.
 *
 * Each item may be a primitive value or an object with display metadata
 * (value, width, colspan, rowspan, style).
 *
 * @param options - Data and output options
 */
```

## arrayToTree

Convert a flat array of records into a tree structure.

```ts
/**
 * Convert a flat array of records into a tree structure.
 *
 * Example: pass an array with id/pid and this will nest children under the
 * configured `children` key. `options` can override the id/pid/children
 * property names.
 *
 * @param {Record<string, any>[]} array Source array of records.
 * @param {number|string} [parentId] Parent id to start building from.
 * @param {ArrayToTreeOptions} [options] Optional keys configuration.
 * @returns {Record<string, any>} A tree node (root node is returned).
 */
```

## base64ToBlob

Convert a base64 data URL to a `Blob`.

```ts
/**
 * Convert a base64 data URL to a `Blob`.
 *
 * @param {string} s Base64 data URL (e.g. 'data:image/png;base64,...').
 * @returns {Blob} A Blob containing the decoded bytes.
 */
```

## base64ToFile

Convert a base64 data URL to a File object.

```ts
/**
 * Convert a base64 data URL to a File object.
 *
 * @param s - Base64 data URL (e.g. 'data:image/png;base64,...')
 * @param filename - Desired filename for the File
 * @returns A File built from the decoded base64 data
 */
```

## toAbsolutePath

将相对路径转换为基于当前工作目录的绝对路径
EN: Convert a relative filesystem path to an absolute path using process.cwd(); returns the original path if already absolute.

```ts
/**
 * 将相对路径转换为基于当前工作目录的绝对路径
 * @param {string} url 要转换的路径
 * @returns {string} 绝对路径
 * @description EN: Convert a relative filesystem path to an absolute path using process.cwd(); returns the original path if already absolute.
 */
```

## toSlice

Fast slice implementation that copies elements from `start` to the end into

```ts
/**
 * Fast slice implementation that copies elements from `start` to the end into
 * a new array. Designed to be faster than `Array.prototype.slice` in tight
 * loops for array-like structures.
 *
 * @param list - Array-like or string
 * @param start - Start index (defaults to 0)
 * @returns A new array containing the sliced values
 */
```

## fileToBase64

Read a File/Blob and return a data URL (base64 string).

```ts
/**
 * Read a File/Blob and return a data URL (base64 string).
 * @param {File|Blob} file
 * @returns {Promise<string>}
 */
```

## urlToBase64

Load an image from `url` and draw to canvas to return data URL (base64).

```ts
/**
 * Load an image from `url` and draw to canvas to return data URL (base64).
 * Note: this requires the image to be CORS-enabled for canvas access.
 *
 * @param {string} url Image URL.
 * @returns {Promise<string>} Base64 data URL.
 */
```

## toObject

Convert an array of plain objects into an object keyed by property names.

```ts
/**
 * Convert an array of plain objects into an object keyed by property names.
 *
 * For each key present in the input objects, the returned object will have an
 * array of values collected from each item. Optionally restrict keys via
 * `filter`.
 *
 * @param arr - Input array of plain objects.
 * @param filter - Optional list of keys to include.
 * @returns Object mapping keys to arrays of values.
 */
```

## toArray

Ensure value is an array. If input is already an array it is returned as-is;

```ts
/**
 * Ensure value is an array. If input is already an array it is returned as-is;
 * otherwise the value is wrapped in a single-element array.
 *
 * @param array - Value or array of values.
 * @returns An array containing the original value(s).
 */
```

## treeToArray

Flatten a tree into an array. The root node is included and children are

```ts
/**
 * Flatten a tree into an array. The root node is included and children are
 * recursively appended. The `children` property is removed from returned
 * objects.
 *
 * @param {Record<string, any>} tree Root node.
 * @param {string} [children] Children key name.
 * @returns {Record<string, any>[]} Flattened node array.
 */
```

## fileToBlob

Convert a File to a Blob (preserves provided MIME type).

```ts
/**
 * Convert a File to a Blob (preserves provided MIME type).
 *
 * @param file - File to convert
 * @param type - Optional MIME type for the resulting Blob
 * @returns A Blob built from the file's ArrayBuffer
 */
```

## fileToArrayBuffer

Read a File/Blob as an ArrayBuffer and return a Uint8Array.

```ts
/**
 * Read a File/Blob as an ArrayBuffer and return a Uint8Array.
 *
 * @param {File} file File or Blob to read.
 * @returns {Promise<Uint8Array>} Resolves with file bytes.
 */
```

## blobToUrl

Create an object URL for a Blob.

```ts
/**
 * Create an object URL for a Blob.
 *
 * @param blob - Blob to create a URL for
 * @returns A blob URL that can be used as a src/href
 */
```

## rgbToHex

Convert an `rgb(r,g,b)` CSS color string to hex format `#rrggbb`.

```ts
/**
 * Convert an `rgb(r,g,b)` CSS color string to hex format `#rrggbb`.
 *
 * Returns `undefined` when input doesn't match `rgb(...)` pattern.
 *
 * @param {string} style CSS rgb string, e.g. 'rgb(255, 255, 255)'.
 * @returns {string | undefined} Hex color string or undefined.
 */
```

## hexToRgb

Convert a hex color string to rgb or rgba string.

```ts
/**
 * Convert a hex color string to rgb or rgba string.
 *
 * Accepts short and full hex formats like '#fff' or '#ffffff'.
 *
 * @param {string} hex Hex color string (with leading '#').
 * @param {number} [opacity] Optional opacity for rgba result.
 * @returns {string} 'rgb(r,g,b)' or 'rgba(r,g,b,a)'.
 */
```
