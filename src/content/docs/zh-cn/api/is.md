---
title: Is
description: Is
---

## isAbsolute

判断是否是绝对路径
EN: Return true when the provided path looks like an absolute path. Matches Unix absolute paths, Windows drive letters, or leading slashes/backslashes.

```ts
/**
 * 判断是否是绝对路径
 * @description EN: Return true when the provided path looks like an absolute path. Matches Unix absolute paths, Windows drive letters, or leading slashes/backslashes.
 * @param {string} url Path or URL string to test.
 * @returns {boolean} True when the path appears absolute.
 */
```

## isArray

判断是否是数组
EN: Alias for Array.isArray.

```ts
/**
 * 判断是否是数组
 * @description EN: Alias for Array.isArray.
 */
```

## isBlob

判断是否是blob
EN: Check whether a value is a Blob object.

```ts
/**
 * 判断是否是blob
 * @description EN: Check whether a value is a Blob object.
 * @param o - candidate value
 * @returns boolean
 */
```

## isBool

判断是否是boolean类型
EN: Check whether a value is a boolean.

```ts
/**
 * 判断是否是boolean类型
 * @description EN: Check whether a value is a boolean.
 * @param value - candidate value
 * @returns boolean
 */
```

## isBottom

Determine whether the document is scrolled to the bottom (within `distance`).
EN: Returns true when the document scroll position is at or near the bottom.

```ts
/**
 * Determine whether the document is scrolled to the bottom (within `distance`).
 * @description EN: Returns true when the document scroll position is at or near the bottom.
 * @param {number} [distance] Additional threshold in pixels.
 * @returns {boolean}
 */
```

## isBrowser

判断当前环境是否具有浏览器全局（window）
EN: True in environments where `globalThis.window` is defined (typical browsers).

```ts
/**
 * 判断当前环境是否具有浏览器全局（window）
 * @description EN: True in environments where `globalThis.window` is defined (typical browsers).
 */
```

## isContainCn

判断是否包含中文
EN: Returns true if the input string contains any CJK Unified Ideographs (Chinese characters).

```ts
/**
 * 判断是否包含中文
 * @description EN: Returns true if the input string contains any CJK Unified Ideographs (Chinese characters).
 * @param s - input string
 * @returns boolean
 */
```

## isDate

判断是否是日期格式
EN: Check whether a value is a Date instance.

```ts
/**
 * 判断是否是日期格式
 * @description EN: Check whether a value is a Date instance.
 * @param d - candidate value
 * @returns boolean
 */
```

## isDef

判断元素不是undefined
EN: Determine whether a value is defined (not undefined).

```ts
/**
 * 判断元素不是undefined
 * @description EN: Determine whether a value is defined (not undefined).
 * @param v - candidate value
 * @returns boolean
 */
```

## isElement

判断元素是HTMLElement
EN: Check whether a value is an HTMLElement.

```ts
/**
 * 判断元素是HTMLElement
 * @description EN: Check whether a value is an HTMLElement.
 * @param element - candidate value
 * @returns boolean
 */
```

## isEqual

深度比较两个值是否相等
EN: Deep equality check for plain objects and arrays.

```ts
/**
 * 深度比较两个值是否相等
 * @description EN: Deep equality check for plain objects and arrays.
 * @param {any} o1 First value.
 * @param {any} o2 Second value.
 * @returns {boolean} True when values are deeply equal.
 */
```

## isESModule

判断对象是ESModule
EN: Detect if an object is an ES module (common __esModule or Symbol.toStringTag).

```ts
/**
 * 判断对象是ESModule
 * @description EN: Detect if an object is an ES module (common __esModule or Symbol.toStringTag).
 * @param obj - candidate object
 * @returns boolean
 */
```

## isFalse

判断是否是false
EN: Check whether a value is the boolean false.

```ts
/**
 * 判断是否是false
 * @description EN: Check whether a value is the boolean false.
 * @param v - candidate value
 * @returns boolean
 */
```

## isFileType

判断文件类型
EN: Test if a filename/path has a given extension.

```ts
/**
 * 判断文件类型
 * @description EN: Test if a filename/path has a given extension.
 * @param { string } file 文件路径
 * @param { string } appendix 文件类型
 * @returns boolean
 */
```

## isFn

判断是否是函数
EN: Check whether a value is a function.

```ts
/**
 * 判断是否是函数
 * @description EN: Check whether a value is a function.
 * @param o - candidate value
 * @returns boolean
 */
```

## isIPv4

判断是否为 IPv4 地址
EN: Test whether a string is a valid IPv4 address.

```ts
/**
 * 判断是否为 IPv4 地址
 * @description EN: Test whether a string is a valid IPv4 address.
 * @param {string} ip Candidate IP string.
 * @returns {boolean}
 */
```

## isIPv6

判断是否为 IPv6 地址
EN: Test whether a string matches common IPv6 patterns.

```ts
/**
 * 判断是否为 IPv6 地址
 * @description EN: Test whether a string matches common IPv6 patterns.
 * @param {string} ip Candidate IP address.
 * @returns {boolean}
 */
```

## isIdCard

判断是否为身份证号（中国身份证格式的简单校验）
EN: Heuristic check for Chinese ID card numbers (15 or 18 digits with possible 'X').

```ts
/**
 * 判断是否为身份证号（中国身份证格式的简单校验）
 * @description EN: Heuristic check for Chinese ID card numbers (15 or 18 digits with possible 'X').
 * @param {string} s Candidate ID string.
 * @returns {boolean}
 */
```

## isLeapYear

判断是否为闰年
EN: Returns true for leap years (divisible by 400 or divisible by 4 and not by 100).

```ts
/**
 * 判断是否为闰年
 * @description EN: Returns true for leap years (divisible by 400 or divisible by 4 and not by 100).
 * @param {number} year Year number.
 * @returns {boolean}
 */
```

## isMap

判断是否是 Map
EN: Check whether a value is a Map instance.

```ts
/**
 * 判断是否是 Map
 * @description EN: Check whether a value is a Map instance.
 * @param {any} o Candidate value.
 * @returns {o is Map<any, any>} True if the internal [[Class]] is 'Map'.
 */
```

## isMobile

判断是否是手机号
EN: Check whether a string looks like a mobile phone number (China-focused pattern).

```ts
/**
 * 判断是否是手机号
 * @description EN: Check whether a string looks like a mobile phone number (China-focused pattern).
 * @param s - phone number string
 * @returns boolean
 */
```

## isNaN

判断是否为 NaN
EN: Wraps Number.isNaN for a consistent helper.

```ts
/**
 * 判断是否为 NaN
 * @description EN: Wraps Number.isNaN for a consistent helper.
 * @param o Candidate value.
 * @returns {boolean}
 */
```

## isNil

判断是否为 null 或 undefined
EN: Returns true when the value is strictly null or undefined.

```ts
/**
 * 判断是否为 null 或 undefined
 * @description EN: Returns true when the value is strictly null or undefined.
 * @param {any} value Candidate value.
 * @returns {value is null | undefined}
 */
```

## isNull

判断是否为 null
EN: Check if a value is strictly `null`.

```ts
/**
 * 判断是否为 null
 * @description EN: Check if a value is strictly `null`.
 * @param {any} o Candidate value.
 * @returns {o is null} True when the value is exactly null.
 */
```

## isNum

判断是否为数字
EN: Check whether a value has type 'number'.

```ts
/**
 * 判断是否为数字
 * @description EN: Check whether a value has type 'number'.
 * @param {any} o Candidate value.
 * @returns {o is number}
 */
```

## isObject

判断是否为对象类型
EN: Returns true for values with typeof 'object' (note: arrays/null are objects too).

```ts
/**
 * 判断是否为对象类型
 * @description EN: Returns true for values with typeof 'object' (note: arrays/null are objects too).
 * @param {any} value Candidate value.
 * @returns {boolean}
 */
```

## isPlainObject

Check whether value is a plain object (i.e. {}).

```ts
/**
 * Check whether value is a plain object (i.e. {}).
 *
 * @param {any} o Candidate value.
 * @returns {o is Record<any, any>} True when `o` is a plain object.
 */
```

## isPostCode

判断是否为邮政编码
EN: Simplified check for a 6-digit postal code (China-style).

```ts
/**
 * 判断是否为邮政编码
 * @description EN: Simplified check for a 6-digit postal code (China-style).
 * @param {string|number} s Candidate value.
 * @returns {boolean}
 */
```

## isPromise

判断是否为 Promise
EN: Check whether a value is a Promise instance.

```ts
/**
 * 判断是否为 Promise
 * @description EN: Check whether a value is a Promise instance.
 * @param {any} o Candidate value.
 * @returns {o is Promise<any>}
 */
```

## isReg

判断是否是正则
EN: Check whether a value is a RegExp instance.

```ts
/**
 * 判断是否是正则
 * @description EN: Check whether a value is a RegExp instance.
 * @param o Candidate value.
 * @returns {o is RegExp} True when the value is a regular expression.
 */
```

## isRelative

判断路径是否为相对路径
EN: Returns true for strings starting with './' or '../'.

```ts
/**
 * 判断路径是否为相对路径
 * @description EN: Returns true for strings starting with './' or '../'.
 * @param {string} str Path string.
 * @returns {boolean}
 */
```

## isSameDay

判断两个日期是否为同一天
EN: Compares year, month and date to determine whether two Date

```ts
/**
 * 判断两个日期是否为同一天
 * @description EN: Compares year, month and date to determine whether two Date
 * objects represent the same calendar day.
 * @param {Date} dateLeft First date.
 * @param {Date} dateRight Second date.
 * @returns {boolean}
 */
```

## isSet

判断是否为 Set
EN: Check whether a value is a Set instance.

```ts
/**
 * 判断是否为 Set
 * @description EN: Check whether a value is a Set instance.
 * @param {any} o Candidate value.
 * @returns {o is Set<any>} True when the internal [[Class]] is 'Set'.
 */
```

## isStr

判断是否为字符串
EN: Check whether a value has type 'string'.

```ts
/**
 * 判断是否为字符串
 * @description EN: Check whether a value has type 'string'.
 * @param {any} o Candidate value.
 * @returns {o is string}
 */
```

## isSupportCamera

判断当前环境是否支持摄像头采集（getUserMedia）
EN: Heuristic detection for getUserMedia support across legacy vendor prefixes.

```ts
/**
 * 判断当前环境是否支持摄像头采集（getUserMedia）
 * @description EN: Heuristic detection for getUserMedia support across legacy vendor prefixes.
 * @returns {boolean}
 */
```

## isSupportWebp

判断当前浏览器是否支持 WebP
EN: Returns true when the current browser can encode a WebP

```ts
/**
 * 判断当前浏览器是否支持 WebP
 * @description EN: Returns true when the current browser can encode a WebP
 * data URL from a canvas (a common heuristic for WebP support).
 * @returns {boolean}
 */
```

## isSymbol

判断是否为 symbol
EN: Check whether a value has type 'symbol'.

```ts
/**
 * 判断是否为 symbol
 * @description EN: Check whether a value has type 'symbol'.
 * @param {any} o Candidate value.
 * @returns {o is symbol}
 */
```

## isTrue

判断是否是true
EN: Check whether a value is the boolean literal true.

```ts
/**
 * 判断是否是true
/**
 * \u5224\u65ad\u662f\u5426\u662ftrue
 * @description EN: Check whether a value is the boolean literal true.
 * @param v - candidate value
 * @returns v is true
 */
```

## isType

判断值是否匹配指定的类型标签
EN: Flexible type checker that accepts a shorthand type string

```ts
/**
 * 判断值是否匹配指定的类型标签
 * @description EN: Flexible type checker that accepts a shorthand type string
 * (like 'str', 'array', 'map') or multiple types separated by '|'. The
 * implementation delegates to specific `isX` helpers.
 * @param s Candidate value to test.
 * @param type Type label or pipe-separated labels.
 * @returns boolean True when any of the provided type labels match.
 */
```

## isUndef

判断是否为 undefined
EN: Returns true when the value is exactly `undefined`.

```ts
/**
 * 判断是否为 undefined
 * @description EN: Returns true when the value is exactly `undefined`.
 * @param o Candidate value.
 * @returns {o is undefined}
 */
```

## isUrl

判断是否是 URL
EN: Simple check whether a string looks like an HTTP/HTTPS URL.

```ts
/**
 * 判断是否是 URL
 * @description EN: Simple check whether a string looks like an HTTP/HTTPS URL.
 * @param {string} url The candidate URL string.
 * @returns {boolean} True if the string begins with "http://" or "https://".
 */
```

## isVideo

判断是否为视频文件（基于扩展名）
EN: Returns true when the filepath ends with a known video file extension.

```ts
/**
 * 判断是否为视频文件（基于扩展名）
 * @description EN: Returns true when the filepath ends with a known video file extension.
 * @param {string} filepath Path or filename.
 * @returns {boolean}
 */
```

## isWeakMap

判断是否为 WeakMap
EN: Check whether a value is a WeakMap instance.

```ts
/**
 * 判断是否为 WeakMap
 * @description EN: Check whether a value is a WeakMap instance.
 * @param {any} o Candidate value.
 * @returns {o is WeakMap<any, any>}
 */
```

## isWeakSet

判断是否为 WeakSet
EN: Check whether a value is a WeakSet instance.

```ts
/**
 * 判断是否为 WeakSet
 * @description EN: Check whether a value is a WeakSet instance.
 * @param {any} o Candidate value.
 * @returns {o is WeakSet<any>}
 */
```

## isWin

判断是否为 Windows 平台
EN: Returns true when running on Windows (platform 'win32').

```ts
/**
 * 判断是否为 Windows 平台
 * @description EN: Returns true when running on Windows (platform 'win32').
 * @returns {boolean}
 */
```

## isSocketUrl

判断是否为 WebSocket URL
EN: Returns true for URLs that start with ws:// or wss://.

```ts
/**
 * 判断是否为 WebSocket URL
 * @description EN: Returns true for URLs that start with ws:// or wss://.
 * @param {string} url URL string.
 * @returns {boolean}
 */
```

## isBase64

Check whether a string is a base64 data URL.
EN: Validate whether a string is a data URL that contains base64-encoded content.

```ts
/**
 * Check whether a string is a base64 data URL.
 *
 * @description EN: Validate whether a string is a data URL that contains base64-encoded content.
 * @param {string} base64 Candidate string.
 * @returns {boolean} True when the string looks like a base64 data URL.
 */
```

## isTrainNumber

判断是否为火车车次（简单校验）
EN: Heuristic check for train numbers using common prefixes and 1-4 digits.

```ts
/**
 * 判断是否为火车车次（简单校验）
 * @description EN: Heuristic check for train numbers using common prefixes and 1-4 digits.
 * @param {string} s Candidate train number string.
 * @returns {boolean}
 */
```

## isNameCn

判断是否为中文姓名（含·）
EN: Test whether a string is a Chinese personal name (2-16 CJK chars or middle dot).

```ts
/**
 * 判断是否为中文姓名（含·）
 * @description EN: Test whether a string is a Chinese personal name (2-16 CJK chars or middle dot).
 * @param {string} s Candidate name string.
 * @returns {boolean}
 */
```

## isNameEn

判断输入是否为英文姓名样式
EN: Simple heuristic to test for English name-like strings (letters and spaces, 2-22 chars).

```ts
/**
 * 判断输入是否为英文姓名样式
 * @description EN: Simple heuristic to test for English name-like strings (letters and spaces, 2-22 chars).
 * @param {string} s Candidate string.
 * @returns {boolean}
 */
```

## isSoldierId

判断是否是军官证
EN: Heuristic check for a soldier/officer ID string. This function uses a simple regex and may not cover all real-world formats; it is intended as a lightweight validator rather than authoritative verification.

```ts
/**
 * 判断是否是军官证
 * @description EN: Heuristic check for a soldier/officer ID string. This function uses a simple regex and may not cover all real-world formats; it is intended as a lightweight validator rather than authoritative verification.
 * @param {string} s Candidate ID string.
 * @returns {boolean} True when the string matches the expected pattern.
 */
```

## isVersion

判断是否为版本号
EN: Check whether a version string consists of dot-separated numeric parts.

```ts
/**
 * 判断是否为版本号
 * @description EN: Check whether a version string consists of dot-separated numeric parts.
 * @param {string} version Version string, e.g. '1.2.3'.
 * @returns {boolean}
 */
```

## isDivElement

判断目标是否为 HTMLDivElement
EN: Narrow type guard to detect <div> elements.

```ts
/**
 * 判断目标是否为 HTMLDivElement
 * @description EN: Narrow type guard to detect <div> elements.
 * @param {unknown} target Candidate value.
 * @returns {target is HTMLDivElement}
 */
```

## isIFrameElement

判断目标是否为 HTMLIFrameElement
EN: Narrow type guard for iframe elements.

```ts
/**
 * 判断目标是否为 HTMLIFrameElement
 * @description EN: Narrow type guard for iframe elements.
 * @param {unknown} target Candidate value.
 * @returns {target is HTMLIFrameElement}
 */
```

## isImageElement

判断目标是否为 HTMLImageElement
EN: Narrow type check to determine whether the target is an <img> element.

```ts
/**
 * 判断目标是否为 HTMLImageElement
 * @description EN: Narrow type check to determine whether the target is an <img> element.
 * @param {unknown} target Candidate value.
 * @returns {target is HTMLImageElement}
 */
```

## isNode

判断目标是否为 DOM Node
EN: Returns true when the target is a DOM Node or looks like one (has numeric nodeType).

```ts
/**
 * 判断目标是否为 DOM Node
 * @description EN: Returns true when the target is a DOM Node or looks like one (has numeric nodeType).
 * @param {unknown} target Candidate value.
 * @returns {target is Node}
 */
```

## isProxyDocument

判断目标是否为 ProxyDocument（特定实现的代理文档对象）
EN: Type guard that tests for an object whose [[Class]] is 'ProxyDocument'.

```ts
/**
 * 判断目标是否为 ProxyDocument（特定实现的代理文档对象）
 * @description EN: Type guard that tests for an object whose [[Class]] is 'ProxyDocument'.
 * @param {unknown} target Candidate value.
 * @returns {target is Document}
 */
```

## isScriptElement

判断目标是否为 HTMLScriptElement
EN: Narrow type guard for <script> elements.

```ts
/**
 * 判断目标是否为 HTMLScriptElement
 * @description EN: Narrow type guard for <script> elements.
 * @param {unknown} target Candidate value.
 * @returns {target is HTMLScriptElement}
 */
```

## isShadowRoot

判断目标是否为 ShadowRoot
EN: Type guard for ShadowRoot instances (if supported in environment).

```ts
/**
 * 判断目标是否为 ShadowRoot
 * @description EN: Type guard for ShadowRoot instances (if supported in environment).
 * @param {unknown} target Candidate value.
 * @returns {target is ShadowRoot}
 */
```

## isStyleElement

判断目标是否为 HTMLStyleElement
EN: Narrow type guard for <style> elements.

```ts
/**
 * 判断目标是否为 HTMLStyleElement
 * @description EN: Narrow type guard for <style> elements.
 * @param {unknown} target Candidate value.
 * @returns {target is HTMLStyleElement}
 */
```

## isVue

判断文件路径是否是 Vue 单文件组件（.vue）
EN: Simple check for filenames ending with '.vue'.

```ts
/**
 * 判断文件路径是否是 Vue 单文件组件（.vue）
 * @description EN: Simple check for filenames ending with '.vue'.
 * @param {string} src Path or filename.
 * @returns {boolean}
 */
```

## isComment

判断是否为 HTML 注释
EN: Test whether a string looks like an HTML comment (<!-- ... -->).

```ts
/**
 * 判断是否为 HTML 注释
 * @description EN: Test whether a string looks like an HTML comment (<!-- ... -->).
 * Matches across newlines as well.
 * @param {string} s Input string.
 * @returns {boolean}
 */
```

## isActive

判断当前页面是否处于活动（未被隐藏）状态
EN: Returns true when the document is currently visible/active

```ts
/**
 * 判断当前页面是否处于活动（未被隐藏）状态
 * @description EN: Returns true when the document is currently visible/active
 * (i.e. `document.hidden` is falsy).
 * @returns {boolean}
 */
```

## isFile

判断是否是文件
EN: Check whether the input is a File (or file path on Node.js).

```ts
/**
 * 判断是否是文件
 * @description EN: Check whether the input is a File (or file path on Node.js).
 * @param o - Blob, File or string path
 * @returns boolean
 */
```
