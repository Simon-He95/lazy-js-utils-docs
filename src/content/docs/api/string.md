---
title: String
description: String
---

## camelize

驼峰化

```typescript
/**
 * @func camelize
 * @desc 📝 驼峰化
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 * @example 
  import { camelize } from 'lazy-js-utils'

  camelize(hello-world) // 'helloWorld'
 */
```

## hyphenate

连字符化

```typescript
/**
 * @func hyphenate
 * @desc 📝 连字符化
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 * @example 
  import { hyphenate } from 'lazy-js-utils'

  hyphenate(helloWorld) // 'hello-world'
 */
```

## trim

删除字符串的空白字符

```typescript
/**
 * @func trim
 * @desc 📝 删除字符串的空白字符
 * @param { string } str 需要处理的字符
 * @return { 'all' | 'pre' | 'around' | 'post' } type 处理类型
 * @example 
  import { trim } from 'lazy-js-utils'

  trim(' hello world ') // 'hello world'
  trim(' hello world ', 'pre') // 'hello world '
  trim(' hello world ', 'post') // ' hello world'
  trim(' hello world ', 'around') // 'hello world'
  trim(' hello world ', 'all') // 'helloworld'
*/
```

## pwdLevel

密码强度检测

```typescript
/**
 * @func pwdLevel
 * @desc 📝 密码强度检测
 * @param { string | number } pwd 需要检测的密码
 * @param { number } minimum 最小长度
 * @return { number } level 密码强度等级
 * @example 
  import { pwdLevel } from 'lazy-js-utils'

  pwdLevel('123456') // 0
  pwdLevel('123456', 6) // 1
  pwdLevel('123456a') // 1
  pwdLevel('123456a', 6) // 2
*/
```

## useJSONParse

parse 一些格式有问题的 JSON 字符串

```typescript
/**
 * @func useJSONParse
 * @desc 📝 密码强度检测
 * @param { string | number } pwd 需要检测的密码
 * @param { number } minimum 最小长度
 * @return { number } level 密码强度等级
 * @example 
  import { useJSONParse } from 'lazy-js-utils'

  // 漏加了引号和逗号
  const data = `{
    name:simon
    age:14
  }`
  useJSONParse(data) // { name: 'simon', age: '14' }
*/
```
