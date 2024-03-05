---
title: Scroll
description: Scroll
---

## getScrollPosition

🧿 获取滚动条位置

```typescript
/**
 * @func getScrollPosition
 * @param { Element } el 滚动的元素
 * @desc 📝 获取滚动条位置
 * @example
  import { getScrollPosition } from 'lazy-js-utils'

  const { x, y } = getScrollPosition()
 */
```

## scrollToTop

🧿 平缓滚动到顶部

```typescript
/**
 * @func scrollToTop
 * @desc 📝 平缓滚动到顶部
 * @return { () => void } stop 停止滚动
 * @example
  import { scrollToTop } from 'lazy-js-utils'

  const stop = scrollToTop()
 */
```

## scrollToView

🧿 平缓滚动到指定元素

```typescript
/**
 * @func scrollToView
 * @param { string | Element } el 滚动的元素 
 * @param { ScrollIntoViewOptions } options 滚动的配置 
 * @desc 📝 平缓滚动到指定元素
 * @example
  import { scrollToView } from 'lazy-js-utils'

  scrollToView('#main')
 */
```
