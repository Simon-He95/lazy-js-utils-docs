---
title: String
description: String
---

## camelize

Convert a kebab-case string (hyphen-separated) to camelCase or PascalCase.

```ts
/**
 * Convert a kebab-case string (hyphen-separated) to camelCase or PascalCase.
 *
 * Examples:
 *  - camelize('my-variable') => 'myVariable'
 *  - camelize('my-variable', true) => 'MyVariable'
 *
 * @param s - input string in kebab-case
 * @param pascalCase - if true, return PascalCase (first letter capitalized)
 * @returns the camelized string
 */
```

## getUrlParam

Parse query parameters from a URL or a raw query string into an object.

```ts
/**
 * Parse query parameters from a URL or a raw query string into an object.
 *
 * @param s - full URL or query string (if omitted, uses window.location.search)
 * @returns an object mapping keys to values, or undefined if no query present
 */
```

## hyphenate

Convert a PascalCase or camelCase string to kebab-case (hyphen-separated).
EN: Convert camelCase or PascalCase to kebab-case.

```ts
/**
 * Convert a PascalCase or camelCase string to kebab-case (hyphen-separated).
 *
 * Example: "MyVariableName" -> "my-variable-name"
 *
 * @param s - input string in camelCase or PascalCase
 * @returns the hyphenated (kebab-case) string
 * @description EN: Convert camelCase or PascalCase to kebab-case.
 */
```

## pwdLevel

Compute a simple password strength level (0-4) based on presence of

```ts
/**
 * Compute a simple password strength level (0-4) based on presence of
 * lowercase, uppercase, digits and symbols. If the string is shorter than
 * `minimum` the level is 0.
 *
 * @param s - input string or number (coerced to string)
 * @param minimum - minimum length required (default: 6)
 * @returns strength level from 0 (weak) to 4 (strong)
 */
```

## trim

Trim whitespace from a string in different ways.

```ts
/**
 * Trim whitespace from a string in different ways.
 *
 * @param s - input string
 * @param type - one of 'all' | 'pre' | 'around' | 'post'
 *  - 'all'   : remove all whitespace
 *  - 'pre'   : remove leading whitespace
 *  - 'post'  : remove trailing whitespace
 *  - 'around' (default) : remove leading and trailing whitespace
 * @returns trimmed string
 */
```

## useJSONParse

Parse a JavaScript object-like string into a value using Function.

```ts
/**
 * Parse a JavaScript object-like string into a value using Function.
 * This allows parsing strings that are not strictly JSON (for example,
 * containing functions or unquoted property names). Use with caution as
 * it executes the input string as code.
 *
 * Example: useJSONParse("{ name: 'simon', age: 14 }") => { name: 'simon', age: 14 }
 *
 * @param str - string containing a JS expression representing a value
 * @returns the parsed value
 */
```

## spaceFormat

Normalize repeated whitespace in a string by replacing runs of whitespace
EN: Replace consecutive whitespace characters with a single replacer string.

```ts
/**
 * Normalize repeated whitespace in a string by replacing runs of whitespace
 * characters with a single replacer string (default is a single space).
 *
 * @param str - input string
 * @param replacer - replacement for runs of whitespace (default: ' ')
 * @returns normalized string
 * @description EN: Replace consecutive whitespace characters with a single replacer string.
 */
```

## parseLrc

Parse an LRC formatted lyrics string into an array of time/lyric pairs.

```ts
/**
 * Parse an LRC formatted lyrics string into an array of time/lyric pairs.
 * Each returned entry has the shape { time: seconds, words: string }.
 *
 * @param lrc - lyrics string using [MM:SS.xx] timestamp prefixes per line
 * @returns array of parsed lyric entries
 * @example
 * const lrc = `[00:12.34]First line\n[00:25.67]Second line`
 * parseLrc(lrc)
 */
```

## parseTime

Parse a time string (HH:MM:SS or MM:SS) into total seconds.

```ts
/**
 * Parse a time string (HH:MM:SS or MM:SS) into total seconds.
 *
 * Example: '01:02:03' => 1 * 3600 + 2 * 60 + 3
 *
 * @param timeStr - time string in H:M:S or M:S form
 * @returns number of seconds represented by the string
 */
```

## hash

Fast string hash that returns a small alphanumeric token for the input.

```ts
/**
 * Fast string hash that returns a small alphanumeric token for the input.
 * This is non-cryptographic and intended for short, human-friendly keys.
 *
 * @param str - input string to hash
 * @returns 6-character base36 hash string
 */
```

## transformWithBack

Replace matched parts of `code` (by provided regex rules) with stable hashes

```ts
/**
 * Replace matched parts of `code` (by provided regex rules) with stable hashes
 * and return a restore function that converts the hashes back to original
 * fragments. This is useful to protect segments during formatting or
 * transformations.
 *
 * @param code - Original code string to transform
 * @param rules - Array of RegExp rules to match fragments to replace
 * @returns A tuple: [transformedCode, restoreFunction]
 *
 * @example
 * ```ts
 * const code = 'const str = "hello world"; const num = 123;';
 * const rules = [/"[^"]*"/g, /\d+/g]; // match strings and numbers
 * const [transformed, restore] = transformWithBack(code, rules);
 * // process transformed...
 * const final = restore(transformed)
 * ```
 */
```

## escapeRegExp

Escape special characters in a string so it can be used safely inside a
EN: Escape special characters so the string can be used inside a RegExp pattern.

```ts
/**
 * Escape special characters in a string so it can be used safely inside a
 * regular expression pattern.
 *
 * @param str - input string
 * @returns escaped string safe for use in RegExp constructors
 * @description EN: Escape special characters so the string can be used inside a RegExp pattern.
 */
```

## compareVersion

Compare two semantic version strings (dot-separated numeric parts).

```ts
/**
 * Compare two semantic version strings (dot-separated numeric parts).
 *
 * Without an operator returns -1, 0, or 1. With an operator it returns a
 * boolean result of the comparison.
 *
 * @param version1 - first version string (e.g. '1.2.3')
 * @param version2 - second version string
 * @param operator - optional comparison operator ('>', '<', '=', '>=', '<=', '!=')
 * @returns number (-1, 0, 1) when operator is omitted, otherwise boolean
 */
```

## findMatchEndOffset

Find the offset from the start of `code` to the matching closing

```ts
/**
 * Find the offset from the start of `code` to the matching closing
 * bracket for a given opening bracket character. Useful when scanning
 * forward in code to find where a structure ends.
 *
 * @param matchStr - the opening bracket character to match (e.g. '{', '(', '[')
 * @param code - the code string to search (search starts from the beginning)
 * @returns offset from the start of the input to the matching closing bracket
 * @throws if no matching closing bracket is found
 */
```

## findMatchStartOffset

Find the offset from the end of `code` to the matching opening

```ts
/**
 * Find the offset from the end of `code` to the matching opening
 * bracket for a given closing bracket character. This is useful when
 * parsing snippets to find where a matching start bracket appears.
 *
 * @param matchStr - the closing bracket character to match (e.g. ')', '}', ']')
 * @param code - the code string to search (search starts from the end)
 * @returns offset from the end of the input to the matching opening bracket
 * @throws if no matching opening bracket is found
 */
```
