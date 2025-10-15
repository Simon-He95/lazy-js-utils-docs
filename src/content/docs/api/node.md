---
title: Node
description: Node
---

## fileCopy

将文件拷贝到另一个目录
EN: Copy given files to a destination directory via a shell command wrapper.

```ts
/**
 * 将文件拷贝到另一个目录
 * @param urls 需要被拷贝的文件路径
 * @param destination 目录
 * @returns IShellMessage
 * @description EN: Copy given files to a destination directory via a shell command wrapper.
 */
```

## getExportBundle

获取npm包导出的文件内容
EN: Read the exported module file content for an installed npm package by resolving its package.json `module` or `main` field.

```ts
/**
 * 获取npm包导出的文件内容
 * @param { string } url npm包名
 * @returns
 * @description EN: Read the exported module file content for an installed npm package by resolving its package.json `module` or `main` field.
 */
```

## getPkg

获取当前package.json 对象
EN: Read and parse a package.json file at the provided path (defaults to ./package.json) and return its JSON object.

```ts
/**
 * 获取当前package.json 对象
 * @param { string } url 路径 默认 ./package.json
 * @returns 返回json格式package.json
 * @description EN: Read and parse a package.json file at the provided path (defaults to ./package.json) and return its JSON object.
 */
```

## getPkgTool

获取当前包管理器 ‘yarn’ | 'pnpm' | 'bun' | 'npm'
EN: Determine the project's package manager (yarn|pnpm|bun|npm) by reading package.json or lockfiles.

```ts
/**
 * 获取当前包管理器 ‘yarn’ | 'pnpm' | 'bun' | 'npm'
 * @returns 返回当前package环境 ‘yarn’ | 'pnpm' | 'bun' | 'npm'
 * @description EN: Determine the project's package manager (yarn|pnpm|bun|npm) by reading package.json or lockfiles.
 */
```

## jsShell

执行 shell 命令的工具函数，支持单个或多个命令的执行。
EN: Utility to execute shell commands (single or multiple). Returns promise(s) with execution results.

```ts
/**
 * 执行 shell 命令的工具函数，支持单个或多个命令的执行。
 * @description EN: Utility to execute shell commands (single or multiple). Returns promise(s) with execution results.
 *
 * @template T - 指令类型，可以是字符串或字符串数组。
 * @param {string | string[]} commander - 要执行的命令或命令数组。
 * @param {Options | Options['stdio']} [options] - 配置选项或 stdio 配置。
 * @param {string[]} [options.args] - 传递给命令的参数数组。
 * @param {StdioOptions} [options.stdio] - 子进程的 stdio 配置，默认为 'pipe'。
 * @param {boolean} [options.errorExit=true] - 是否在命令失败时退出进程。
 * @param {boolean} [options.isLog=false] - 是否在控制台输出日志。
 * @param {string} [options.cwd] - 子进程的工作目录。
 * @param {SpawnOptions} [options.options] - 额外的子进程配置选项。
 * @returns {Promise<IShellMessage | IShellMessage[]>} - 返回一个 Promise，解析为命令执行结果或结果数组。
 *
 * @throws {Error} - 如果命令执行失败且 `errorExit` 为 true，则抛出错误。
 *
 * @example
 * // 执行单个命令
 * jsShell('ls', { isLog: true })
 *   .then(result => console.log(result))
 *   .catch(error => console.error(error));
 *
 * @example
 * // 执行多个命令
 * jsShell(['ls', 'pwd'], { isLog: true })
 *   .then(results => console.log(results))
 *   .catch(error => console.error(error));
 */
```

## transformArgv
EN: Parse process.argv into a key/value object where `--flag` without `=` yields true.

```ts
/**
 *
 * @returns 处理argv --flag如果未设置值默认为true
 * @description EN: Parse process.argv into a key/value object where `--flag` without `=` yields true.
 */
```

## useProcressNodeWorker

params: string[]
EN: Run shell-like commands inside a Node Worker thread using the bundled worker script; accepts a payload or a command string.

```ts
/**
 * @param { string | NodeWorkerPayload } payload 字符串 ｜ {
  params: string[]
  stdio?: 'inherit' | 'pipe'
}
 * @param { string } [url] 自定义worker路径
 * @returns
 * @description EN: Run shell-like commands inside a Node Worker thread using the bundled worker script; accepts a payload or a command string.
 */
```

## withTaskName

处理gulp任务
EN: Attach a displayName property to a function so tools like Gulp can show the task name.

```ts
/**
 * 处理gulp任务
 * @param name 任务名
 * @param fn 任务函数
 * @returns
 * @description EN: Attach a displayName property to a function so tools like Gulp can show the task name.
 */
```

## writeFile

重写文件
EN: Overwrite files by reading their content, transforming it via callback, and writing back the result.

```ts
/**
 * 重写文件
 * @param { string } paths 路径
 * @param { (content: string, index: number) => string } callback 回调接收文件字符串将返回的内容重新写入该文件
 * @param { string } [encoding] 默认 'utf-8'
 * @description EN: Overwrite files by reading their content, transforming it via callback, and writing back the result.
 */
```

## hasPkg

判断是否存在package.json
EN: Check whether a package.json exists at the given root path.

```ts
/**
 * 判断是否存在package.json
 * @param { string } rootPath 绝对路径
 * @returns boolean
 * @description EN: Check whether a package.json exists at the given root path.
 */
```

## isInstallPkg

_暂无文档注释，欢迎补充。_

## isExist

判断文件是否存在
EN: Return true if the given path exists on disk, false otherwise.

```ts
/**
 * 判断文件是否存在
 * @param url
 * @returns
 * @description EN: Return true if the given path exists on disk, false otherwise.
 */
```

## isGo

判断是否是在go环境
EN: Detect whether the current project is a Go project by checking for go files or go.mod.

```ts
/**
 * 判断是否是在go环境
 * @returns
 * @description EN: Detect whether the current project is a Go project by checking for go files or go.mod.
 */
```

## isRust

判断是否是rust环境
EN: Detect whether the current project is a Rust project by checking for Cargo.toml.

```ts
/**
 * 判断是否是rust环境
 * @description EN: Detect whether the current project is a Rust project by checking for Cargo.toml.
 */
```

## isWritable

同步地测试用户对 path 指定的文件或目录的权限
EN: Return true if the given file or directory is writable by the current user.

```ts
/**
 * 同步地测试用户对 path 指定的文件或目录的权限
 * @param { string } filename 文件或目录路径
 * @returns
 * @description EN: Return true if the given file or directory is writable by the current user.
 */
```

## isPkg

判断路径下是否有package.jsons
EN: Determine whether a package.json exists in the given path (defaults to process.cwd()).

```ts
/**
 * 判断路径下是否有package.jsons
 * @param { string } rootPath 默认 process.cwd()
 * @description EN: Determine whether a package.json exists in the given path (defaults to process.cwd()).
 */
```
