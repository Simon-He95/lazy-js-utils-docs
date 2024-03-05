---
title: Parse
description: Parse
---

## parse

🧿 字符串转换为对象

```typescript
/**
 * @func parse
 * @param { string } str 待拷贝的对象
 * @return { 
 * {
 *  sep?: string
 *  eq?: string
 *  camel?: boolean
 * }
 *  } ParseOptions parse的配置
 * @desc 📝 深度拷
 * @example 
  import { parse } from 'lazy-js-utils'

  const str = 'a.data=nihao&a.age=17'
  parse(str) // { a: { data: 'nihao', age: '17' } }
 */
```

## parseCss

🧿 解析 html 中的 css, 返回所有的 class 和对应的 css 对象

```typescript
/**
 * @func parseCss
 * @param { Object } a 待比较的对象
 * @param { Object } b 待比较的对象
 * @param { string[] | RegExp } ignoreKeys 忽略指定的keys可以为数组或者正则表达式
 * @return { Array } 去重后的数组
 * @desc 📝 去除数组中重复的元素,包括对象
 * @example 
  import { parseCss } from 'lazy-js-utils'

  const str = `
  <style scoped>
  .test > .abc{
    color: red;
  }
  .test #abc{
    color: red;
    background: yellow;
    font-size:14px;
  }
  .a {
    background:yellow;
  }
  </style>
  `
  console.log(parseCss(str))
// {
//  '.test > .abc': 'color: red;',
//  '.test #abc': 'color: red;background: yellow;font-size:14px;',
//  '.a': 'background:yellow;'
// }

 */
```

## parseURL

🧿 解析 url

```typescript
/**
 * @func parseUrl
 * @param { Object } a 待比较的对象
 * @param { Object } b 待比较的对象
 * @param { string[] | RegExp } ignoreKeys 忽略指定的keys可以为数组或者正则表达式
 * @return { 
 * {
 *  protocol,
 *  auth,
 *  host,
 *  pathname,
 *  search,
 *  hash
 *  }
 * } 
 * @desc 📝 解析url
 * @example 
  import { parseURL } from 'lazy-js-utils'

  const url = 'https://www.baidu.com:8080/a/b/c?name=123#abc'
  console.log(parseURL(url))
// {
//  protocol: 'https',
//  auth: '',
//  host: 'www.baidu.com:8080',
//  pathname: '/a/b/c',
//  search: '?name=123',
//  hash: '#abc'
// }

 */
```

## mapTransform

🧿 将对象中的 key 根据映射关系转换成新的对象

```typescript
/**
 * @func mapTransform
 * @param { Record<string, any> } o 待处理的对象
 * @param { Record<string, string> } map 转换的映射
 * @param { boolean } keepRest 是否保留未转换的key
 * @return { Object } 转换后的对象
 * @desc 📝 将对象中的key转换为指定的key,包括对象
 * @example 
  import { mapTransform, mapTransformBack } from 'lazy-js-utils'

  const o1 = {
  a: {
    data: 'nihao',
    age: '17'
  }
}
  mapTransform(o, { 'a.data': 'data', 'a.age': 'age' }) // { data: 'nihao', age: '17' }

  const o2 = {
    data: 'nihao',
    age: '17'
  }
  mapTransformBack(o2, { 'data': 'a.data', 'age': 'a.age' }) // { a: { data: 'nihao', age: '17' } }
 */
```

## stringify

🧿 将对象转换为字符串

```typescript
/**
 * @func stringify
 * @param { Record<string, any> } o 待处理的对象
 * @param { 
 * {
 *  sep?: string
 *  eq?: string
 *  hyp?: boolean
 *  px?: boolean
 *  encode?: boolean
 * }
 *  } StringifyOptions stringify的配置
 * @return { string } 转换后的字符串
 * @desc 📝 将对象中的key转换为指定的key,包括对象
 * @example 
  import { stringify } from 'lazy-js-utils'

  const o1 = {
    a: {
      data: 'nihao',
      age: '17'
    }
  }
  stringify(o1) // a.data=nihao&a.age=17
  stringify(o1, { sep: '&', eq: '=', hyp: true, px: true, encode: true }) // a-data=nihao&a-age=17
 */
```

## transformKey

🧿 将对象中的 key 修改为指定的 key

```typescript
/**
 * @func transformKey
 * @param { RRecord<string, any> | Record<string, any>[] } o 待处理的对象
 * @param { Record<string, string> } StringifyOptions stringify的配置
 * @return { string } 转换后的字符串
 * @desc 📝 将对象中的key转换为指定的key,包括对象
 * @example 
  import { transformKey } from 'lazy-js-utils'

  const o1 = {
    a: {
      data: 'nihao',
      age: '17'
    }
  }
  transformKey(o1, { 'a.data': 'say' }) // { a: { say: 'nihao', age: '17' } }
 */
```

## traverse

🧿 数组或者对象的遍历

```typescript
/**
 * @func traverse
 * @param { RRecord<string, any> | Record<string, any>[] } o 待处理的对象
 * @param { Record<string, string> } StringifyOptions stringify的配置
 * @return { string } 转换后的字符串
 * @desc 📝 将对象中的key转换为指定的key,包括对象
 * @example 
  import { traverse } from 'lazy-js-utils'

  const arr = [
      {
        name: 'simon',
        family: {
          bro: 'simonBro',
        },
        people: {
          name: 'simonPeople',
          family: {
            bro: 'simonPeopleBro',
          },
        },
      }, {
        name: 'kitty',
        family: {
          bro: 'kittyBro',
        },
        people: {
          name: 'kittyPeople',
          family: {
            bro: 'kittyPeopleBro',
          },
        },
      },
    ]
  traverse(arr, {
      'family.bro': function (target: any, index: number) {
        console.log('traverse~', target, index)
      },
      people(target: any, index: number) {
        target.name = 'haha'
        console.log('traverse~', target, index)
      },
      'people.family': function (target: any, index: number, item: any) {
        console.log('traverse~', target, index, item)
      },
    })
    --- output ---
     [
        {
          "family": {
            "bro": "simonBro",
          },
          "name": "simon",
          "people": {
            "family": {
              "bro": "simonPeopleBro",
            },
            "name": "haha",
          },
        },
        {
          "family": {
            "bro": "kittyBro",
          },
          "name": "kitty",
          "people": {
            "family": {
              "bro": "kittyPeopleBro",
            },
            "name": "haha",
          },
        },
      ]
    --- output end ---
 */
```
