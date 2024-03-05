---
title: Speak
description: Speak
---

## speech

🧿 文字转语音

```typescript
/**
 * @func speech
 * @param {
 *  options: SpeechOptions | string = 
 * { 
 *  text: '', 
 *  lang: 'zh-CN', 
 *  volume: 1,
 *  rate: 1, 
 *  pitch: 1, 
 *  voice: null 
 * }
 * } SpeechOptions 配置参数
 * @return {
    cancel: () => void
    pause: () => void
    resume: () => void
    speak: (options: string | SpeechOptions | undefined) => void
  }
 * @desc 📝 文字转语音
 * @example
  import { speech } from 'lazy-js-utils'
  
  const {speak,cancel,resume,pause} = speech('你好')
  speak()
 */
```
