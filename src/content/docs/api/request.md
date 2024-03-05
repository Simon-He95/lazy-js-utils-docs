---
title: Request
description: Request
---

## VFetch

- 基于 fetch 的 axios api 式 promise 请求封装
- 重复请求上一个请求如果没有完成，则会取消上一个请求，并重新发起请求

```typescript
/**
 * @Class VFetch
 * @param {
 *{
 *  url: string // 请求地址
 *  keepalive?: boolean // 属性用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据
 *  body?: any  // body参数 {},GET请求会合并到url后面
 *  integrity?: string  // 属性指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值。
 *  referrer?: string  // 属性用于设定fetch()请求的referer标头。
 *  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'same-origin'
 *  method?: Method // 请求类型 默认GET 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' 支持vFetch.get | post | delete | put的形式
 * credentials?: Credentials // 请求是否带上cookie 默认omit 'include' | 'same-origin' | 'omit'
 *  params?: Record<string, string>  // 请求参数 根据bodyType决定是否会被序列化
 *  responseType?: ResponseType // 返回类型 默认json 'formData' | 'text' | 'blob' | 'arrayBuffer' | 'json'
 *  bodyType?: BodyType // 请求类型 默认json 'json' | 'form' | 'file'
 *  cache?: Cache // 缓存类型 默认不缓存 'no-cache' | 'default' | 'force-cache' | 'only-if-cached'
 *  redirect?: Redirect // 属性指定 HTTP 跳转的处理方法。可能的取值如下： 默认follow follow：跟随重定向，error：抛出错误，manual：手动处理
 *  mode?: Mode // cors, no-cors, same-origin 默认cors cors：跨域，no-cors：不跨域，same-origin：同源
 *  signal?: AbortSignal // 取消请求的信号
 *  cancel?: () => void // 取消请求的方法
 *  transformResponse?: (response: Response) => Response // 响应数据转换
 *}
 * }
 * @desc 📝 基于fetch的axios api 式promise请求封装
 * @example 
  import { VFetch } from 'lazy-js-utils'
  
  const request = new VFetch({
  baseURL: 'http://localhost:3001/',
  interceptors: {
    response: {
      success(data) {
        console.log('拦截', data)
        return `${data}nihao`
      },
    },
    request: {
      success(data) {
        // data.headers.token = 'test'
        return data
      },
      },
    },
  })
  request.get({
    url: 'nihao',
    responseType: 'text',
  }).then((res: any) => {
    console.log(res)
  })

  request.get({ // 取消上一个请求
    url: 'nihao',
    responseType: 'text',
  }).then((res: any) => {
    console.log(res)
  })
 */
```

## asyncPool

🧿 限制并发数的异步池

```typescript
/**
 * @func asyncPool
 * @param { string } str css内容
 * @return { string } 
 * @desc 📝 https重定向
 * @example 
  import { asyncPool } from 'lazy-js-utils'

  const tasks = [
    () => new Promise((resolve)=> setTimeout(()=> resolve('success'))),
    () => new Promise((resolve)=> setTimeout(()=> resolve('success'))),
    () => new Promise((resolve)=> setTimeout(()=> resolve('success'))),
    () => new Promise((resolve)=> setTimeout(()=> resolve('success'))),
    () => new Promise((resolve)=> setTimeout(()=> resolve('success'))),
    () => new Promise((resolve)=> setTimeout(()=> resolve('success')))
  ]
  asyncPool(4, tasks).then(res=>{
    console.log(res) // ['success', 'success', 'success', 'success', 'success', 'success']
  })
 */
```

# sendBeacon

🧿 页面关闭时数据上报

```typescript
/**
 * @func sendBeacon
 * @param { url: string | URL, analyticsData?: BodyInit | null } 地址 和 数据
 * @return { void }
 * @desc 📝 页面关闭时数据上报
 * @example
  import { sendBeacon } from 'lazy-js-utils'
  
  sendBeacon('http://www.baidu.com', {a:1})
 */
```
