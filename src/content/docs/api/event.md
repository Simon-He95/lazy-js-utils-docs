---
title: Event
description: Event
---

## createElement

Create a DOM element with optional attributes and innerHTML.

```ts
/**
 * Create a DOM element with optional attributes and innerHTML.
 *
 * @param tag - tag name to create (e.g. 'div')
 * @param attributes - optional attributes object to set on the element
 * @param innerHTML - optional innerHTML to insert
 * @param options - optional ElementCreationOptions for custom elements
 * @returns the created HTMLElement
 */
```

## createFragment

Create and return a DocumentFragment. Useful as a lightweight container

```ts
/**
 * Create and return a DocumentFragment. Useful as a lightweight container
 * for building up DOM nodes before inserting them into the live document.
 *
 * @returns DocumentFragment
 */
```

## dragEvent

Unified drag event helper that supports mouse and touch.

```ts
/**
 * Unified drag event helper that supports mouse and touch.
 * It normalizes touch events to look like mouse events (clientX/clientY etc.).
 *
 * @param target - Element or selector to attach drag handlers to
 * @param options - Handlers: dragStart, dragMove, dragEnd
 * @param trigger - When true, move events only fire after a start
 * @returns A stop function to remove all listeners
 */
```

## findElement

Find element(s) by CSS selector.

```ts
/**
 * Find element(s) by CSS selector.
 *
 * - If `selector` is a string and `all` is truthy, returns a NodeList of matches.
 * - If `selector` is a string and `all` is falsy, returns the first matched
 *   HTMLElement or null.
 * - If `selector` is an array of selectors, returns an array of Elements
 *   matching all selectors (flattened).
 * - If an actual HTMLElement or NodeList is passed as `selector`, it is
 *   returned unchanged (passthrough) which makes this helper safe to call
 *   on union-typed variables.
 *
 * @param selector - CSS selector, array of selectors, HTMLElement, NodeList, or falsy
 * @param all - when true, return all matched nodes; when an HTMLElement is
 *   passed, it is used as the `currentNode` to query from. Default is false.
 * @param currentNode - Root node to query from (defaults to `document`).
 */
```

## insertElement

Insert an element into a parent node.

```ts
/**
 * Insert an element into a parent node.
 *
 * `parent` may be an HTMLElement or a selector string (the implementation uses
 * `mount` which resolves strings). `element` may be an HTMLElement,
 * DocumentFragment, or HTML string. If `target` is supplied, the element is
 * inserted before that child; otherwise it is appended.
 *
 * @param parent - parent element or selector
 * @param element - element, fragment or HTML string to insert
 * @param target - optional node to insert before
 */
```

## removeElement

Remove an element from the DOM.

```ts
/**
 * Remove an element from the DOM.
 *
 * Accepts an HTMLElement (or ChildNode/DocumentFragment) or a selector string.
 * If a selector is provided it will be resolved via `findElement` (caller
 * should resolve before calling if passing a selector).
 *
 * @param el - Element or selector to remove
 * @returns the parent HTMLElement that contained the removed node, or null
 */
```

## useClick

Attach a click listener to a target (element or selector).

```ts
/**
 * Attach a click listener to a target (element or selector).
 * The listener will be mounted when the element becomes available and can be stopped.
 *
 * @param target - A DOM element, selector string, or Document to attach the listener to
 * @param callback - MouseEvent handler
 * @returns A function that stops the listener. If called before the element exists, it will cancel mounting.
 */
```

## useElementBounding

Watch an element's bounding rect and invoke callback when you want to sample it.

```ts
/**
 * Watch an element's bounding rect and invoke callback when you want to sample it.
 * The function installs a mount handler to obtain the element and returns a
 * scroll listener stop function so callers can keep the rect up-to-date on scroll.
 *
 * @param element - Element or selector to measure
 * @param callback - Receives the element's DOMRect
 * @returns Stop function for the scroll listener
 */
```

## useEventListener

Add an event listener to a target. The function supports Window, Document, Element,

```ts
/**
 * Add an event listener to a target. The function supports Window, Document, Element,
 * MediaQueryList or selector string. Listener is automatically cleaned up when unmounted.
 *
 * @template T - Event name type from WindowEventMap & DocumentEventMap
 * @param target - Target to attach to (element, selector, window, document, or media query list)
 * @param eventName - Event name
 * @param callback - Event handler
 * @param useCapture - Options for addEventListener (capture or options object)
 * @param autoRemove - If true the listener will remove itself after first call
 * @returns A function that stops/removes the listener
 */
```

## useFocus

Focus the first input within the provided target when it becomes available.

```ts
/**
 * Focus the first input within the provided target when it becomes available.
 *
 * @param target - Element, selector, or 'body' to search input within
 */
```

## useHover

Listen for hover enter/leave on a target and invoke callback with the hover state.

```ts
/**
 * Listen for hover enter/leave on a target and invoke callback with the hover state.
 *
 * @param target - Element or selector to observe
 * @param callback - Called with (isHover, event)
 * @returns A function that stops both listeners
 */
```

## useIntersectionObserver

Observe intersection changes for an element and call callback with entries.

```ts
/**
 * Observe intersection changes for an element and call callback with entries.
 * `options.root` may be a selector string; if so it will be resolved via `findElement`.
 *
 * @param element - Element or selector to observe
 * @param callback - Receives IntersectionObserverEntry[] when the observer fires
 * @param options - IntersectionObserver options (root may be selector string)
 * @returns A stop function that disconnects the observer
 */
```

## useInterval

A small helper around setInterval which exposes pause/resume controls.

```ts
/**
 * A small helper around setInterval which exposes pause/resume controls.
 * If fn is not a function undefined is returned.
 *
 * @param fn - Callback function to run on each interval
 * @param duration - Interval duration in milliseconds
 * @returns Controls object with isActive, pause and resume methods, or undefined
 */
```

## useKeyBoard

Listen for specific keyboard shortcut string, e.g. "Ctrl+Shift+X".

```ts
/**
 * Listen for specific keyboard shortcut string, e.g. "Ctrl+Shift+X".
 * Calls the callback when the generated key string matches the provided one.
 *
 * @param c - Shortcut string to match
 * @param callback - Called with the matched code when it occurs
 * @returns A stop function that removes the keydown listener
 */
```

## useMouse

Throttled mousemove listener. The callback will be called at most once per `delay` ms.

```ts
/**
 * Throttled mousemove listener. The callback will be called at most once per `delay` ms.
 *
 * @param callback - MouseEvent handler
 * @param delay - Minimum ms between invocations
 * @returns A stop function to remove the listener
 */
```

## useMutationObserver

Observe DOM mutations on a parent node and invoke callback when changes occur.

```ts
/**
 * Observe DOM mutations on a parent node and invoke callback when changes occur.
 *
 * @param element - The node or selector to observe
 * @param callback - MutationCallback invoked with mutations
 * @param options - MutationObserverInit options (defaults to { childList: true })
 * @returns A stop function to disconnect the observer
 */
```

## useResizeObserver

Call the callback when the window is resized, returning the viewport width and height.

```ts
/**
 * Call the callback when the window is resized, returning the viewport width and height.
 *
 * @param callback - Receives (width, height)
 * @returns A stop function for the resize listener
 */
```

## useWindowScroll

Listen to document scroll and call callback with current scrollLeft/scrollTop.

```ts
/**
 * Listen to document scroll and call callback with current scrollLeft/scrollTop.
 *
 * @param callback - Receives (left, top)
 * @returns A stop function for the scroll listener
 */
```

## useTimeout

Run a function once after a delay and return a stop function.

```ts
/**
 * Run a function once after a delay and return a stop function.
 * If fn is not a function, undefined is returned.
 *
 * @param fn - Function to run after the delay
 * @param duration - Delay in milliseconds (default 0)
 * @returns A function that clears the timeout, or undefined if fn is not a function
 */
```

## collisionDetection

Return whether two elements overlap (axis-aligned bounding box collision).

```ts
/**
 * Return whether two elements overlap (axis-aligned bounding box collision).
 *
 * @param o1 - Element, selector, or null-like value for the first object
 * @param o2 - Element, selector, or null-like value for the second object
 * @returns true if the two bounding boxes overlap, false otherwise
 */
```

## download

Trigger a download by creating a temporary anchor and clicking it.

```ts
/**
 * Trigger a download by creating a temporary anchor and clicking it.
 *
 * @param href - URL to download
 * @param download - suggested filename
 */
```

## IMeta

Mount meta/script/link elements and optionally set document.title.

```ts
/**
 * Mount meta/script/link elements and optionally set document.title.
 * The created nodes are inserted into document.head and a function to remove
 * the created fragment is returned.
 *
 * @param options - Head options (title, meta, script, link)
 * @returns A function that removes the inserted nodes from the head
 */
```

## IScript

Mount meta/script/link elements and optionally set document.title.

```ts
/**
 * Mount meta/script/link elements and optionally set document.title.
 * The created nodes are inserted into document.head and a function to remove
 * the created fragment is returned.
 *
 * @param options - Head options (title, meta, script, link)
 * @returns A function that removes the inserted nodes from the head
 */
```

## ILink

Mount meta/script/link elements and optionally set document.title.

```ts
/**
 * Mount meta/script/link elements and optionally set document.title.
 * The created nodes are inserted into document.head and a function to remove
 * the created fragment is returned.
 *
 * @param options - Head options (title, meta, script, link)
 * @returns A function that removes the inserted nodes from the head
 */
```

## HeadOptions

Mount meta/script/link elements and optionally set document.title.

```ts
/**
 * Mount meta/script/link elements and optionally set document.title.
 * The created nodes are inserted into document.head and a function to remove
 * the created fragment is returned.
 *
 * @param options - Head options (title, meta, script, link)
 * @returns A function that removes the inserted nodes from the head
 */
```

## useHead

Mount meta/script/link elements and optionally set document.title.

```ts
/**
 * Mount meta/script/link elements and optionally set document.title.
 * The created nodes are inserted into document.head and a function to remove
 * the created fragment is returned.
 *
 * @param options - Head options (title, meta, script, link)
 * @returns A function that removes the inserted nodes from the head
 */
```

## useLongPress

Fire callback when the target receives a long mouse press (mousedown -> mouseup after ms).

```ts
/**
 * Fire callback when the target receives a long mouse press (mousedown -> mouseup after ms).
 *
 * @param el - target element or selector
 * @param ms - duration threshold in milliseconds
 * @param callback - invoked when a long press is detected
 * @returns A stop function to remove listeners
 */
```

## useBlur

Call callback when focus is lost from the given element.

```ts
/**
 * Call callback when focus is lost from the given element.
 * Internally it uses click listeners to determine when clicks happen inside/outside.
 *
 * @param el - Target element or selector
 * @param callback - Called when focus is lost (click outside)
 * @returns A stop function to remove listeners
 */
```

## createTextNode

Create a DOM Text node from a string.

```ts
/**
 * Create a DOM Text node from a string.
 *
 * @param {string} text Text content.
 * @returns {Text} A DOM Text node.
 */
```

## useRange

Get the bounding client rect for a caret/cursor position at the start of a node.

```ts
/**
 * Get the bounding client rect for a caret/cursor position at the start of a node.
 * Useful for positioning popups next to inline nodes. If the container has offsets
 * the caller may need to subtract them.
 *
 * @param target - Node to measure
 * @returns DOMRect representing the range bounding box
 */
```
