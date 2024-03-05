---
title: Node
description: Node
---

## getPkgTool

🧿 获取当前项目的包管理工具

```typescript
/**
 * @func getPkgTool
 * @return { 'yarn' | 'pnpm' | 'npm' | 'bun' }
 * @desc 📝 获取当前项目的包管理工具
 * @example 
  import { getPkgTool } from './lazy-js-utils'
  getPkgTool() // 'pnpm'
 */
```

## jsShell

🧿js 调用 shell 命令

```typescript
/**
 * @func jsShell
 * @param { string } cmd shell命令
 * @param { string } type ‘pipe’ | ‘inherit’ 在当前进程中执行 | 在新的进程中执行
 * @return { code: 0 | 1, result: string }
 * @desc 📝 基于node封装的js调用shell命令
 * @example 
  import { jsShell } from './lazy-js-utils'
 
  const { code, result } = jsShell('ls') // 默认在父进程执行，如果不需要在当前终端显示，可使用'pipe'
  if(code === 1 ){
    // something error
  }else {
    // execute successfully
    const term1 = data?.split('\n').map(item => item).join(' ')
    jsShell(`gum choose  ${term1}`)
  }
 */
```

## fileCopy

🧿 拷贝文件夹及其文件

```typescript
/**
 * @func fileCopy
 * @return { code: 0 | 1, result: string } 
 * @desc 📝 拷贝文件夹及其文件
 * @example 
  import { fileCopy } from './lazy-js-utils'

  // 将public和assets下的资源拷贝到dist目录下
  const resource = ['../public','../assets']
  const { code, result } = fileCopy(resource, '../dist')
  if(code === 0){
    // success
  }else {
    // error
    throw result
  }
 */
```

## transformArgv

🧿 处理命令行参数

```typescript
/**
 * @func transformArgv
 * @desc 📝 处理命令行参数
 * @return { Object }
 * @example 
  import { transformArgv } from './lazy-js-utils'

  // script: build --minify --mode=production --type=es5
  const args = transformArgv() // {minify: true, mode: 'production', type: 'es5'}
 */
```

## getExportBundle

🧿 返回 npm 打包文件

```typescript
/**
* @func getExportBundle
* @return { string }
* @desc 📝 返回npm打包文件
* @example 
  import { getExportBundle } from './lazy-js-utils'

  console.log(getExportBundle('vitest')) // 读取node_modules/vitest/package.json的module字段如果没有才会读取main字段, 返回打包文件的内容
*/
```

## getPkg

🧿 获取 package.json 的 Object 对象

```typescript
/**
 * @func getPkg
 * @param { string } url 路径
 * @return { Object }
 * @desc 📝 获取package.json的Object 对象
 * @example 
  import { getPkg } from './lazy-js-utils'

  const pkg1 = await getPkg() // 默认获取当前cwd下的package.json

  const pkg2 = await getPkg('../playground/package.json') // 获取playground/package.json
*/
```

## writeFile

🧿 快速修改文件内容,支持多个文件同时修改

```typescript
/**
 * @func writeFile
 * @param { string | string[] } filePath 文件路径
 * @param { (content: string, index: number) => string } callback 传入文件string类型的内容,可以修改后返回新的内容
 * @param { BufferEncoding } encoding 默认utf-8
 * @return { void }
 * @desc 📝 快速修改文件内容,支持多个文件同时修改
 * @example 
  import { writeFile } from './lazy-js-utils'

  writeFile('./a.js', (content) => {
    return content.replace('a', 'b')
  })
 */
```

## withTaskName

🧿 针对 gulpfile.js 中的 task 添加名称

```typescript
/**
 * @func withTaskName
 * @param { string } taskName 任务名称
 * @param { async () => void } asyncFunction 异步任务函数
 * @return { void }
 * @desc 📝 针对gulpfile.js中的task添加名称
 * @example 
  import { withTaskName } from './lazy-js-utils'
  import { series } from 'gulp'

  export default series(
    withTaskName('clean', async () => run('rm -rf dist')),
    withTaskName('buildPackages', async () => run('pnpm run --filter "./packages/*" --parallel build')),
  )
 */
```

## useNodeWorker

🧿 使用 node worker 父进程

```typescript
/**
 * @func useNodeWorker
 * @param { string } url worker文件路径
 * @param { any } data 传递给worker的数据
 * @return { Promise<any> }
 * @desc 📝 node worker封装
 * @example 
  import { useNodeWorker } from './lazy-js-utils'

  useNodeWorker（'./worker.js', {a: 1}.then(res => console.log(res)) // {a: 5}
 */
```

## useProcressNodeWorker

🧿 使用 node worker 子进程

```typescript
/**
 * @func useProcressNodeWorker
 * @param { (data: any) => any } callback 回调函数
 * @return { void }
 * @desc 📝 node worker封装
 * @example 
  import { useProcressNodeWorker } from './lazy-js-utils'

  useProcressNodeWorker((data)=>{
   console.log(data) // {a:1}
  data.a = data.a * 5
  return data
  }）
 */
```
