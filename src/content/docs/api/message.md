---
title: Message
description: Message
---

## createEventBus

🧿 创建一个事件总线, 用于事件的发布和订阅

```typescript
/**
 * @func createEventBus    
 * @desc 📝 创建一个事件总线, 用于事件的发布和订阅
 * @returns { 
 * { 
 *  data: Record<string, Function[]>; 
 *  emit: (event: string, data?: any) => void;
 *  on: (event: string, fn: (data?: any) => void) => void; 
 *  off: (event: string, fn: Function) => void
 *  } 
 * } 
 * @example 
  import { createEventBus } from 'lazy-js-utils'

  const bus = createEventBus()
  bus.on('test', (data) => {
    console.log(data) // hi
  })

  bus.emit('test','hi')
 */
```

## useStorageListen

🧿 新开页, 监听 storage 的变化

```typescript
/**
 * @func useStorageListen    
 * @desc 📝 新开页, 监听storage的变化
 * @param { (type: string, newValue: any, oldValue: any) => void) } callback 回调函数
 * @returns { () => void } stop 停止监听
 * @example 
  import { useStorageListen, sendStorage } from 'lazy-js-utils'

  useStorageListen((type, newValue, oldValue) => {
    if(type === 'add'){
      // 新增
      console.log(type, newValue, oldValue)
    }
  })

  sendStorage('add', {
    user: 'simon',
    auth: 'admin'
  })
 */
```
