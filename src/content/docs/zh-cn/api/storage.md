---
title: Storage
description: Storage
---

## dbStorage

🧿 浏览器大数据存储

```typescript
/**
 * @func dbStorage
 * @returns { 
 * {
 *  add,    // add:添加
 *  read,   // read:读取
 *  remove  // remove:删除
 * } 
 * }
 * @desc 📝 浏览器大数据存储
 * @example 
  import { dbStorage } from 'lazy-js-utils'

  const { add, read, remove } = await dbStorage()
  set('key', { video:Blob }) // 添加数据或更新数据 key: string | number, value: object
  read('key') // 读取数据 key: string | number, 返回 { video:Blob }
  remove('key') // 删除数据 key: string | number
 */
```

## jsSession

🧿 操作 sessionStorage

```typescript
/**
 * @func jsSession
 * @returns { 
 * { 
 *  get,    // get:读取 
 *  set,    // set:添加
 *  delete, // delete:删除
 *  clear   // clear:清空
 * } 
 * } 
 * @desc 📝 操作sessionStorage
 * @example 
  import { jsSession } from 'lazy-js-utils'

  const { get, set, delete, clear } = jsSession()
  set('key', 'value') // 添加数据或更新数据 
  set({
    key1: 'value1',
    key2: 'value2'
  }) // 你也可以使用这样的形式一次性添加多个数据
  }) // 添加数据或更新数据 
  get('key') // 读取数据 
  delete('key') // 删除数据 
 */
```

## jsCookie

🧿 操作 cookie

```typescript
/**
 * @func jsCookie
 * @desc 📝 操作cookie
 * @returns { 
 * { 
 *  get,    // get:读取 
 *  set,    // set:添加
 *  delete, // delete:删除
 * } 
 * }
 * @example 
  import { jsCookie } from 'lazy-js-utils'

  jsCookie.set('name', 'simon') 
  console.log(jsCookie.get('name')) // 'simon' 
  jsCookie.delete('name')  
  console.log(jsCookie.get('name')) // ''
 */
```

## jsLocal

🧿 操作 localStorage

```typescript
/**
 * @func jsLocal
 * @desc 📝 操作localStorage
 * @returns { 
 * { 
 *  get,    // get:读取 
 *  set,    // set:添加
 *  delete, // delete:删除
 *  clear   // clear:清空
 * } 
 * } 
 * @example 
  import { jsLocal } from 'lazy-js-utils'

  jsLocal.set('name', 'simon') 
  console.log(jsLocal.get('name')) // 'simon' 
  jsLocal.delete('name')  
  console.log(jsLocal.get('name')) // ''
 */
```
