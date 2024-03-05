---
title: To
description: To
---

## treeToArray

🧿 将树结构转换为数组

```typescript
/**
 * @func treeToArray
 * @param { Record<string, any> } tree 树结构数据
 * @param { string } children 子节点字段名
 * @return { Array }
 * @desc 📝 将树结构转换为数组
 * @example 
  import { treeToArray } from 'lazy-js-utils'

  const tree = {
    id: 1,
    label: '一级',
    parent_id: 0,
    children: [
      {
        id: 2,
        label: '二级',
        parent_id: 1
      },
      {
        id: 3,
        label: '二级',
        parent_id: 1
      }
    ]
  }

  const arr = treeToArray(tree)
  console.log(arr)
  // [
  //   { "id": 1, "parent_id": 0, "label": "一级" },
  //   { "id": 2, "parent_id": 1, "label": "二级" },
  //   { "id": 3, "parent_id": 1, "label": "二级" }
  // ]
 */
```

## arrayToTree

🧿 将树结构转换为数组

```typescript
/**
 * @func arrayToTree
 * @param { Record<string, any>[] } array 数组
 * @param { string | number } rootId  根节点id
 * @param { 
 * { 
 *  id: 'id',
 *  pid: 'pid',
 *  children: 'children'
 * }
 * } options  配置项
 * @return { Array }
 * @desc 📝 将树结构转换为数组
 * @example 
  import { arrayToTree } from 'lazy-js-utils'

  const arr = [
    { id: 1, parent_id: 0, label: '一级' },
    { id: 2, parent_id: 1, label: '二级' },
    { id: 3, parent_id: 1, label: '二级' },
  ]
  console.log(arrayToTree(arr, { pid: 'parent_id' }))
  // [
  //   {
  //     id: 1,
  //     parent_id: 0,
  //     label: '一级',
  //     children: [
  //       {id: 2, parent_id: 1, label: '二级', children: []},
  //       {id: 3, parent_id: 1, label: '二级', children: []}
  //     ]
  //   }
  // ]
 */
```

## arrayToExcel

🧿 将数组转换为 excel,并下载

```typescript
/**
 * @func arrayToExcel
 * @param {
 * {
 *  data: Record<string, any>[]
 *  filename?: string
 *  title?: string[]
 *  filter?: string[]
 * }
 * } options 配置项
 * @return { void }
 * @desc 📝 将数组转换为excel,并下载
 * @example 
  import { arrayToExcel } from 'lazy-js-utils'

  const arr = [
    { id: 1, parent_id: 0, label: '一级' },
    { id: 2, parent_id: 1, label: '二级' },
    { id: 3, parent_id: 1, label: '二级' },
  ]
  arrayToExcel({
    data: arr,
    filename: '测试',
    title: ['id', 'parent_id', 'label'],
    filter: ['id', 'parent_id', 'label']
  })
 */
```

## toObject

🧿 将数组转换成对象

```typescript
/**
 * @func toObject
 * @param { Array<any> } arr 数组
 * @param { string[] = [] } filter 保留filter中的key
 * @return { boolean } 
 * @desc 📝 将数组转换成对象
 * @example 
  import { toObject } from 'lazy-js-utils'
 
  const arr = [{
    a: 1,
  }, {
    a: 3,
    3: 5,
  }]
  const data = toObject(arr, ['a']) // { a: [ 1, 3 ] }
 */
```

## toArray

🧿 将数组中截取尾部换成新数组

```typescript
/**
 * @func toArray
 * @param { any[] } list 原数组
 * @param { number } start 开始位置
 * @param { number } end 结束位置
 * @return { Array<any> } 新数组
 * @desc 📝 slice的效果，但是更好的兼容性
 * @example 
  import { toArray } from 'lazy-js-utils'

  const arr = [ 1, 3, 5, 7, 9 ]
  toArray(arr, 2) // [ 5, 7, 9 ]
 */
```

## toAbsolutePath

🧿 将相对路径转换为绝对路径

```typescript
/**
 * @func toAbsolutePath
 * @param { string } url 相对路径
 * @return { string } 绝对路径
 * @desc 📝 将相对路径转换为绝对路径
 * @example 
  import { toAbsolutePath } from 'lazy-js-utils'

  toAbsolutePath('/a/b/c') // http://localhost:8080/a/b/c
*/
```

## toBase64

🧿 将 url、File、Blob 类型转换为 base64

```typescript
/**
 * @func toBase64
 * @param { File | string | Blob } list 原数组
 * @return { Promise<string> } base64
 * @desc 📝 将url、File、Blob类型转换为base64
 * @example 
  import { toBase64 } from 'lazy-js-utils'

  const file = new File([''], 'test.png')
  toBase64(file).then(res => {
    console.log(res) // data:image/png;base64,
  })
*/
```

## base64ToBlob

🧿 将 base64 转换为 Blob

```typescript
/**
 * @func base64ToBlob
 * @param { string } s base64
 * @return { Blob } blob
 * @desc 📝 将base64转换为Blob
 * @example 
  import { base64ToBlob } from 'lazy-js-utils'

  const blob = base64ToBlob('data:image/png;base64,')
*/
```

## base64ToFile

🧿 将 base64 转换为 File

```typescript
/**
 * @func base64ToFile
 * @param { string } s base64
 * @param { string } filename 文件名
 * @return { File } file
 * @desc 📝 将base64转换为File
 * @example 
  import { base64ToFile } from 'lazy-js-utils'

  const file = base64ToFile('data:image/png;base64,','test.png')
*/
```
