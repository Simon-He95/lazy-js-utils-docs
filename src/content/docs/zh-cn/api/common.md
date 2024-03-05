---
title: Common
description: Common
---


## hasOwn

🧿 判断对象是否有某个属性

```typescript
/**
 * @func hasOwn
 * @desc 📝 打印
 * @param { Object } obj 需要判断的对象
 * @param { string } key 需要判断的属性
 * @return { boolean } 
 * @example 
  import { hasOwn } from 'lazy-js-utils'

  const obj = {
    name: 'lazy',
    age: 18
  }
  hasOwn(obj,'name') // true
 */
```

## EXPORT_DEFAULT_RE

🧿 正则匹配 export default

```typescript
/**
 * @func EXPORT_DEFAULT_RE
 * @desc 📝 正则匹配export default
 * @example 
  import { EXPORT_DEFAULT_RE } from 'lazy-js-utils'

  const str = 'export default { name: "lazy" }'
  str.match(EXPORT_DEFAULT_RE) // ["export default { name: "lazy" }"]
 */
```

## DYNAMIC_IMPORT_RE

🧿 正则匹配动态 import

```typescript
/**
 * @func DYNAMIC_IMPORT_RE
 * @desc 📝 正则匹配动态import default
 * @example 
  import { DYNAMIC_IMPORT_RE } from 'lazy-js-utils'

  const str = 'const a = import("./a.js")'
  str.match(DYNAMIC_IMPORT_RE) // ["import("./a.js")"]
 */
```

## EXPORT_DECAL_RE

🧿 正则匹配 export

```typescript
/**
 * @func EXPORT_DECAL_RE
 * @desc 📝 正则匹配export
 * @example 
  import { EXPORT_DECAL_RE } from 'lazy-js-utils'

  const str = 'export const a = 1'
  str.match(EXPORT_DECAL_RE) // ["export const a = 1"]
 */
```

## EXPORT_NAMED_RE

🧿 正则匹配 export

```typescript
/**
 * @func EXPORT_NAMED_RE
 * @desc 📝 正则匹配export
 * @example 
  import { EXPORT_NAMED_RE } from 'lazy-js-utils'

  const str = 'export { a }'
  str.match(EXPORT_NAMED_RE) // ["export { a }"]
 */
```

## EXPORT_STAR_RE

🧿 正则匹配 export

```typescript
/**
 * @func EXPORT_STAR_RE
 * @desc 📝 正则匹配export
 * @example 
  import { EXPORT_STAR_RE } from 'lazy-js-utils'

  const str = 'export * from "./a.js"'
  str.match(EXPORT_STAR_RE) // ["export * from "./a.js""]
 */
```

## EXPORT_DEFAULT_RE

🧿 正则匹配 export default

```typescript
/**
 * @func EXPORT_DEFAULT_RE
 * @desc 📝 正则匹配export
 * @example 
  import { EXPORT_DEFAULT_RE } from 'lazy-js-utils'

  const str = 'export default { name: "lazy" }'
  str.match(EXPORT_DEFAULT_RE) // ["export default { name: "lazy" }"]
 */
```
