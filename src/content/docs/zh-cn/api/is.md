---
title: Is
description: Is
---

## isRelative

🧿 判断是否是相对路径

```typescript
/**
 * @func isReg
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是相对路径
 * @example
  import { isRelative } from 'lazy-js-utils'

  isRelative('../index.md') // true
```

## isAbsolute

🧿 判断是否为绝对路径

```typescript
/**
 * @func isAbsolute
 * @param { string } url 路径
 * @desc 📝 判断是否为绝对路径
 * @return { boolean }
 * @example
  import { isAbsolute } from 'lazy-js-utils'

  isAbsolute('/foo/bar') // true
 */
```

## isArray

🧿 判断是否为数组

```typescript
/**
 * @func isArray
 * @param { any } o 判断的对象
 * @desc 📝 判断是否为数组
 * @example
  import { isArray } from 'lazy-js-utils'

  isArray([1, 2, 3]) // true
 */
```

## isBlob

🧿 判断是否为 Blob 对象

```typescript
/**
 * @func isBlob
 * @param { any } o 判断的对象
 * @desc 📝 判断是否为Blob对象
 * @return { boolean }
 * @example
  import { isBlob } from 'lazy-js-utils'

  isBlob(new Blob()) // true
 */
```

## isBool

🧿 判断是否为布尔值

```typescript
/**
 * @func isBool
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否为布尔值
 * @example
  import { isBool } from 'lazy-js-utils'

  isBool(true) // true
```

## isBottom

🧿 判断是否为浏览器底部

```typescript
/**
 * @func isBottom
 * @param { number } distance 距离底部的距离
 * @return { boolean }
 * @desc 📝 判断是否为浏览器底部
 * @example
  import { isBottom } from 'lazy-js-utils'

  isBottom() // true or false 是否触底
  isBottom(100) // true or false 是否到达底部100px的距离
```

## isBrowser

🧿 判断是否为浏览器环境

```typescript
/**
 * @func isBool
 * @return { boolean }
 * @desc 📝 判断是否为浏览器环境
 * @example
  import { isBrowser } from 'lazy-js-utils'

  isBrowser() // true | false
```

## isContainCn

🧿 判断字符串中是否含有中文

```typescript
/**
 * @func isContainCn
 * @param { string } str 判断的字符串
 * @return { boolean }
 * @desc 📝 判断字符串中是否含有中文
 * @example
  import { isContainCn } from 'lazy-js-utils'

  isContainCn('hello world') // false
  isContainCn('你好，世界') // true
```

## isDate

🧿 判断是否为日期对象

```typescript
/**
 * @func isDate
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断字符串中是否含有中文
 * @example
  import { isDate } from 'lazy-js-utils'

  isDate(new Date()) // true
```

## isDef

🧿 判断是否不为 undefined

```typescript
/**
 * @func isDef
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断字符串中是否含有中文
 * @example
  import { isDef } from 'lazy-js-utils'

  isDef(undefined) // false
```

## isUndef

🧿 判断是否为 undefined

```typescript
/**
 * @func isUndef
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否为undefined
 * @example
  import { isUndef } from 'lazy-js-utils'

  isDef(undefined) // true
```

## isElement

🧿 判断是否为 DOM 元素

```typescript
/**
 * @func isElement
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否为DOM元素
 * @example
  import { isElement } from 'lazy-js-utils'

  isElement(document.body) // true
```

## isEmail

🧿 判断是否为邮箱

```typescript
/**
 * @func isEmail
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否为邮箱
 * @example
  import { isEmail } from 'lazy-js-utils'

  isEmail('https://github.com') // false
```

## isEqual

🧿 判断是否相等

```typescript
/**
 * @func isEqual
 * @param { any } o1 判断的对象1
 * @param { any } o2 判断的对象2
 * @return { boolean }
 * @desc 📝 判断是否相等
 * @example
  import { isEqual } from 'lazy-js-utils'

  isEqual(1, 1) // true
  isEqual(1, 2) // false
  isEqual([1, 2], [1, 2]) // true
```

## isEsModule

🧿 判断是否为 ES 模块

```typescript
/**
 * @func isEsModule
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否为ES模块
 * @example
  import { isEsModule } from 'lazy-js-utils'

  isEsModule({}) // false
```

## isExist

🧿 判断路径是否存在

```typescript
/**
 * @func isExist
 * @param { string } url 判断的路径
 * @return { boolean }
 * @desc 📝 判断路径是否存在
 * @example
  import { isExist } from 'lazy-js-utils'

  isExist('./package.json') // true
```

## isFalse

🧿 判断是否是 false

```typescript
/**
 * @func isFalse
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是false
 * @example
  import { isFalse } from 'lazy-js-utils'

  isFalse(false) // true
```

## isTrue

🧿 判断是否是 true

```typescript
/**
 * @func isTrue
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是true
 * @example
  import { isTrue } from 'lazy-js-utils'

  isTrue(true) // true
```

## isFile

🧿 判断是否是文件

```typescript
/**
 * @func isFile
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是文件
 * @example
  import { isFile } from 'lazy-js-utils'

  isFile('./package.json') // true
```

## isFileType

🧿 判断文件类型

```typescript
/**
 * @func isFileType
 * @param { string } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断文件类型
 * @example
  import { isFileType } from 'lazy-js-utils'

  // const isCss = isFileType('./useEventListener.css', 'css') // true
```

## isFn

🧿 判断是否是函数

```typescript
/**
 * @func isFn
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是函数
 * @example
  import { isFn } from 'lazy-js-utils'

  isFn(() => {}) // true
```

## isGo

🧿 判断当前环境是否是 go

```typescript
/**
 * @func isGo
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是函数
 * @example
  import { isGo } from 'lazy-js-utils'

  isGo() // false
```

## isRust

🧿 判断当前环境是否是 rust

```typescript
/**
 * @func isRust
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断当前环境是否是rust
 * @example
  import { isRust } from 'lazy-js-utils'

  isRust() // false
```

## isIdCard

🧿 判断是否是身份证

```typescript
/**
 * @func isIdCard
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是身份证
 * @example
  import { isIdCard } from 'lazy-js-utils'

  isIdCard('asss') // false
```

## isIPv4

🧿 判断是否是 IPv4

```typescript
/**
 * @func isIPv4
 * @param { string } ip 判断的ip
 * @return { boolean }
 * @desc 📝 判断是否是IPv4
 * @example
  import { isIPv4 } from 'lazy-js-utils'

  isIPv4('xxx') // false
```

## isIPv6

🧿 判断是否是 IPv6

```typescript
/**
 * @func isIPv6
 * @param { string } ip 判断的ip
 * @return { boolean }
 * @desc 📝 判断是否是IPv6
 * @example
  import { isIPv6 } from 'lazy-js-utils'

  isIPv6('xxx') // false
```

## isLeapYear

🧿 判断某一年是否是闰年

```typescript
/**
 * @func isLeapYear
 * @param { number } year 判断的年份
 * @return { boolean }
 * @desc 📝 判断某一年是否是闰年
 * @example
  import { isLeapYear } from 'lazy-js-utils'

  isLeapYear(2020) // true
```

## isMap

🧿 判断是否是 Map

```typescript
/**
 * @func isMap
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是Map
 * @example
  import { isMap } from 'lazy-js-utils'

  isMap(new Map) // true
```

## isMobile

🧿 判断是否是手机号

```typescript
/**
 * @func isisMobileMap
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是手机号
 * @example
  import { isMobile } from 'lazy-js-utils'

  isMobile('13122211332') // true
```

## isNaN

🧿 判断是否是 NaN

```typescript
/**
 * @func isNaN
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是NaN
 * @example
  import { isNaN } from 'lazy-js-utils'

  isNaN(NaN) // true
```

## isNil

🧿 判断是否是 null 或者 undefined

```typescript
/**
 * @func isNil
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是null或者undefined
 * @example
  import { isNil } from 'lazy-js-utils'

  isNil(null) // true
```

## isNull

🧿 判断是否是 null

```typescript
/**
 * @func isNull
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是null
 * @example
  import { isNull } from 'lazy-js-utils'

  isNull(null) // true
```

## isNum

🧿 判断是否是数字

```typescript
/**
 * @func isNum
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是数字
 * @example
  import { isNum } from 'lazy-js-utils'

  isNum(1) // true
```

## isObject

🧿 判断是否是对象

```typescript
/**
 * @func isObject
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是对象
 * @example
  import { isObject } from 'lazy-js-utils'

  isObject({}) // true
  isObject([]) // true
```

## isPlainObject

🧿 判断是否是{}

```typescript
/**
 * @func isPlainObject
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是{}
 * @example
  import { isPlainObject } from 'lazy-js-utils'

  isPlainObject({}) // true
  isObject([]) // false
```

## isPkg

🧿 判断是否是路径下是否有 package.json

```typescript
/**
 * @func isPkg
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是路径下是否有package.json
 * @example
  import { isPkg } from 'lazy-js-utils'

  isPkg() // true
```

## isPostCode

🧿 判断是否是邮编

```typescript
/**
 * @func isPostCode
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是邮编.json
 * @example
  import { isPostCode } from 'lazy-js-utils'

  isPostCode(200512) // true
```

## isPromise

🧿 判断是否是 Promise

```typescript
/**
 * @func isPromise
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是Promise
 * @example
  import { isPromise } from 'lazy-js-utils'

  isPromise(new Promise()) // true
```

## isPromise

🧿 判断是否是 Promise

```typescript
/**
 * @func isPromise
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是Promise
 * @example
  import { isPromise } from 'lazy-js-utils'

  isPromise(new Promise()) // true
```

## isNm

🧿 判断是否是 nodemodules 依赖

```typescript
/**
 * @func isNm
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是nodemodules依赖
 * @example
  import { isNm } from 'lazy-js-utils'

  isNm('lazy-js-utils') // true
```

## isReg

🧿 判断是否是正则

```typescript
/**
 * @func isReg
 * @param { string } rootPath 路径
 * @return { boolean }
 * @desc 📝 判断是否是正则
 * @example
  import { isReg } from 'lazy-js-utils'

  isReg(/a/) // true
```

## isSameDay

🧿 判断是否是同一天

```typescript
/**
 * @func isSameDay
 * @param { Date } date1 日期1
 * @param { Date } date2 日期2
 * @return { boolean }
 * @desc 📝 判断是否是同一天
 * @example
  import { isSameDay } from 'lazy-js-utils'

  isSameDay(new Date(), new Date()) // true
```

## isSet

🧿 判断是否是 Set

```typescript
/**
 * @func isSet
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是Set
 * @example
  import { isSet } from 'lazy-js-utils'

  isSet(new Set) // true
```

## isStr

🧿 判断是否是字符串

```typescript
/**
 * @func isStr
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是字符串
 * @example
  import { isStr } from 'lazy-js-utils'

  isStr('hi') // true
```

## isSupportCamera

🧿 判断是否支持摄像头

```typescript
/**
 * @func isSupportCamera
 * @return { boolean }
 * @desc 📝 判断是否支持摄像头
 * @example
  import { isSupportCamera } from 'lazy-js-utils'

  isSupportCamera() // true
```

## isSupportWebp

🧿 判断是否支持 webp

```typescript
/**
 * @func isSupportWebp
 * @return { boolean }
 * @desc 📝 判断是否支持摄像头
 * @example
  import { isSupportWebp } from 'lazy-js-utils'

  isSupportWebp() // true
```

## isSymbol

🧿 判断是否是 Symbol

```typescript
/**
 * @func isSymbol
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是Symbol
 * @example
  import { isSymbol } from 'lazy-js-utils'

  isSymbol(symbol('xx')) // true
```

## isType

🧿 判断是否是???类型

```typescript
/**
 * @func isType
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是???类型
 * @example
  import { isType } from 'lazy-js-utils'

  // 判断是否是对象{}或者number类型
  isType({},'o|n') // true
```

## isUrl

🧿 判断是否是 url

```typescript
/**
 * @func isUrl
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是url
 * @example
  import { isUrl } from 'lazy-js-utils'

  isUrl('http://www.baidu.com') // true
```

## isVideo

🧿 判断是否是视频

```typescript
/**
 * @func isVideo
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是视频
 * @example
  import { isVideo } from 'lazy-js-utils'

  isVideo('../xxx.mp4') // true
```

## isWeakMap

🧿 判断是否是 WeakMap

```typescript
/**
 * @func isWeakMap
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是WeakMap
 * @example
  import { isWeakMap } from 'lazy-js-utils'

  isWeakMap(new WeakMap()) // true
```

## isWeakSet

🧿 判断是否是 WeakSet

```typescript
/**
 * @func isWeakSet
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是WeakSet
 * @example
  import { isWeakSet } from 'lazy-js-utils'

  isWeakSet(new WeakSet()) // true
```

## isWin

🧿 判断是否是 windows

```typescript
/**
 * @func isWin
 * @param { any } o 判断的对象
 * @return { boolean }
 * @desc 📝 判断是否是windows
 * @example
  import { isWin } from 'lazy-js-utils'

  isWin() // false
```
