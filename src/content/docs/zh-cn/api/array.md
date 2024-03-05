---
title: Array
description: Array
---

## chunk

🧿 数组分割

```typescript
/**
 * @func chunk
 * @param { any[] } arr 数组
 * @param { number } size 以多少为基准分割
 * @returns  分割后的数组
 * @example
export function chunk(arr: any[], size = 1) {
  if (size < 1)
    return []
  const result = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))

  return result
}

console.log(chunk([1, 3, 5, 7], 2)); // [ [1, 3], [5, 7]]
 */
```

## countBy

🧿 统计数组中某一项的结果

```typescript
/**
 * @func countBy
 * @param { any[] } array 数组
 * @param { Function } iterator 迭代数组函数
 * @returns 结果的个数
 * @example
export function countBy(
  array: any[],
  iterator: (item: Record<string, any>) => any,
) {
  return array.reduce((result, item) => {
    const val = iterator(item)
    if (!result[val])
      result[val] = 1
    else result[val]++
    return result
  }, {} as Record<string, number>)
}

// const array = [
//   { 'user': '1', 'active': true },
//   { 'user': '2', 'active': false },
//   { 'user': '3', 'active': true },
//   { 'user': '4', 'active': true },
//   { 'user': '5', 'active': true },
// ]
// console.log(countBy(array, (item) => {
//   return item.active
// })) // { true: 4, false: 1 }
 */
```

## diff

🧿 对比 2 个数组中的相同或不同的部分

```typescript
/**
 * @func diff
 * @param { array1: any[] } 数组1
 * @param { array2: any[] } 数组2
 * @param {
 * {
 *  compare: 'same' | 'different'
 *  result: 'value' | 'index'
 * }
 * } 样式
 * @desc 📝 设置css变量值
 * @example
  import { diff } from 'lazy-js-utils'

  const arr1 = [1, 3, 5]
  const arr2 = [1, 4, 5]
  diff(arr1, arr2, { compare: 'same', result: 'value' }) // [1, 5]
  diff(arr1, arr2, { compare: 'same', result: 'index' }) // [0, 2]
  diff(arr1, arr2, { compare: 'different', result: 'value' }) // [ [3, 4] ]
  diff(arr1, arr2, { compare: 'different', result: 'index' }) // [1]
 */
```

## filterEmpty

🧿 过滤空值的数组

```typescript
/**
 /**
 * @func filterEmpty
 * @param { any[] } array 数组
 * @returns 过滤空值后的数组
 * @example
export function filterEmpty(array: any[]) {
  return array.filter(Boolean)
}
 */
```

## flatten

🧿 数组扁平化

```typescript
/**
 * @func flatten
 * @param { Record<string, any> | Record<string, any>[] } o 对象或者数组
 * @param { string }flattenProps 展开的属性默认为children
 * @param { boolean }onlyLastNode  只保留最后一层级的数据
 * @returns 一层的数组
 * @example
    const obj = {
      a: '1',
      children: [
        {
          b: '12',
          children: {
            e: '44'
          }
        },
        {
          c: '33', children: [
            { dd: '5' }
          ]
        }
      ]
    }

    console.log(flatten(obj))
 */
```

## forEach

🧿 一个可中断的 forEach

```typescript
/**
 * @func forEach
 * @param { element:string | HTMLElement } 元素
 * @param { style: string } 样式
 * @param { callback: (css: string) => void } 样式
 * @desc 📝 如果返回值不是undefined，那么就会中断循环
 * @example
  import { forEach } from 'lazy-js-utils'

  const arr = [1, 2, 3, 4, 5]
  const result = forEach(arr, (item, index) => {
    if (item === 3) {
      return 'break'
    }
  }) // 'break'
 */
```

## forEachBack

🧿 逆序遍历数组

```typescript
/**
 * @func forEach 逆序遍历
 * @param { T[] } arr 数组
 * @param { (item: T, i: number) => void } callback 回调
 * @returns
 * @example
 *
 * import { forEachBack } from 'lazy-js-utils'
 *
 * const arr = [1, 2, 3, 4, 5]
 *
 * forEachBack(arr, (item, i) => {
 *   console.log(item)
 * })
 */
```

## mapBack

🧿 逆序遍历数组

```typescript
/**
 * @func mapBack 逆序遍历
 * @param { T[] } arr 数组
 * @param { (item: T, i: number) => void } callback 回调
 * @param { boolean } [reverse] 结果是否颠倒顺序
 * @returns
 * @example
 *
 * import { mapBack } from 'lazy-js-utils'
 *
 * const arr = [1, 2, 3, 4, 5]
 *
 * mapBack(arr, (item, i) => {
 *   console.log(item)
 *   return item
 * })
 */
```

## getAverage

🧿 获取数组的平均值

```typescript
/**
 * @func getAverage
 * @param { number[] } 数字数组
 * @param { number } fraction 保留小数位数
 * @desc 📝 获取数组的平均值
 * @example
  import { getAverage } from 'lazy-js-utils'

  const arr = [1, 2, 3, 4, 5]
  getAverage(arr) // 3
  getAverage(arr, 2) // 3.00
 */
```

## quickFilter

🧿 快速过滤数组

```typescript
/**
 * @func quickFilter
 * @param { any[] } array 数组
 * @param { string | Array<string> } key 键
 * @return { any[] }
 * @desc 📝 快速过滤数组，key支持多条件和正则
 * @example
  import { quickFilter } from 'lazy-js-utils'
  
  const arr = [{
    name:'zhangsan'
  },{
    name:'lisi'
  },{
    name:'wangwu',
    age: 18
  }]

  quickFilter(arr, 'name=/lisi/') // [ { name: 'lisi' } ]
    quickFilter(arr, ['name=/lisi/','age=/18/']) // [ { name: 'lisi' }, { name: 'wangwu', age: 18 } ]
 */
```

## quickFind

🧿o(1)的根据 key 查找数组中的项

```typescript
/**
 * @func quickFind
 * @param { any[] } array 数组
 * @param { string | number } id 主键
 * @return {
 * {
 *  find: (id: any) => any
 *  set: (id: any, key: any, value?: any) => any[]
 *  delete: (id: any) => any[]
 * }
 * } 停止监听函数 
 * @desc 📝 o(1)的根据key查找数组中的项
 * @example
  import { quickFind } from 'lazy-js-utils'

  const arr = [{
    id: 1,
    name: 'zhangsan'
  },{
    id: 2,
    name: 'lisi'
  },{
    id: 3,
    name: 'wangwu'
  }]
  const qf = quickFind(arr, 'id')
  qf.find(1) // { id: 1, name: 'zhangsan' }
 */
```

## removeItem

🧿o(1)的根据 key 查找数组中的项

```typescript
/**
 * @func removeItem
 * @param { Array<unknown> } arr 数组
 * @param { unknown } item 数组中的一项
 * @returns 删除该项的数组
 * @example
  import { removeItem } from 'lazy-js-utils'

  const arr = [1,2,3]
  removeItem(arr, 2)
 */
```

## sort

🧿 数组排序

```typescript
/**
 * @func sort
 * @param { any[] } array 数组
 * @param { Array<string | number> | number | string } match匹配条件
 * @return { any[] } 排序后的数组
 * @desc 📝 数组排序
 * @example 
  import { sort } from 'lazy-js-utils'
  
  const arr = [{
    age: 1
  }, {
    age: 4
  }, {
    age: 3
  }]
  // 按照age从小到大排列
  sort(arr, 'age') // [{ age: 1 }, { age: 3 }, { age: 4 }]
  // 按照age从大到小排列
  sort(arr, '-age') // [{ age: 4 }, { age: 3 }, { age: 1 }]
  // 先按照age从小到大排列，再按照name从大到小排列
  sort(arr,['age','-name'])
 */
```

## sortByOrder

🧿 按照顺序排序

```typescript
/**
* @func sortByOrder
* @param { any[] } sortArr 数组
* @param { string[] } order 排序规则
* @return { string } prop 根据哪个属性排序 
* @desc 📝 按照顺序排序
* @example 
  import { sortByOrder } from 'lazy-js-utils'

  const order = ['name', '*', 'weight']
  const arr = [{
    props: {
      key: 'weight',
    },
  }, {
    props: {
      key: 'name',
    },
  }, {
    props: {
      key: 'width',
    },
  }, {
    props: {
      key: 'age',
    },
  }]
  sortByOrder(arr, order, 'props.key') // [{ props: { key: 'name' } }, { props: { key: 'weight' } }, { props: { key: 'width' } }, { props: { key: 'age' } }]
*/
```

## uniqueArray

🧿 数组根据值去重

```typescript
/**
* @func uniqueArray
* @param { any[] } array 数组
* @return { any[] } 去重后的数组
* @desc 📝 数组根据值去重
* @example 
  import { uniqueArray } from 'lazy-js-utils'

   const array = [
      {
        name: 'simon',
        age: '18',
      },
      {
        name: 'simon',
        age: '18',
      },{
        name:'simon'
      }
    ]
    const result = uniqueArray(array) // [{ name: 'simon', age: '18' }, { name: 'simon', age: '18' }]
*/
```

## toggleItem

🧿 数组中如果有则删除，如果没有则增加

```typescript
/**
* @func toggleItem
 * @param { Array<unknown> } arr 数组
 * @param { unknown } item
* @example 
  import { toggleItem } from 'lazy-js-utils'

   const array = [1，2，3]
    toggleItem(4) // [1,2,3,4]
    toggleItem(4) // [1,2,3]
*/
```
