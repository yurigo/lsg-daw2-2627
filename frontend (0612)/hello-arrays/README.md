# Hello arrays

This Vite project is a console-based tour of JavaScript arrays, objects,
callbacks, and destructuring. Open the browser developer console after starting
Vite to see the results. It intentionally logs many values rather than drawing
an interface.

## Files

- `index.html` is the browser document and loads `src/main.js` as an ES module.
- `src/main.js` contains all demonstrations and imports the stylesheet and an
  image asset. The image is imported but not currently displayed.
- `src/style.css` is intentionally empty because this console-only lesson has
  no visual presentation.
- `public/favicon.svg` and `public/icons.svg` are static browser icons.
- `.gitignore` excludes dependencies, build output, logs, and local editor files.
- `package.json` defines the Vite development, build, and preview commands.
- `pnpm-lock.yaml` records exact dependency resolutions; package managers
  generate it, so it should not be edited by hand.

## Arrays and their methods

The array `a` contains the numbers 1 through 9 and 0. Arrays are ordered,
zero-indexed collections: `a[0]` is `1`, `a.length` is `10`, and the last
element is at `a[a.length - 1]`. Arrays can contain values of different types,
although keeping a consistent type is usually easier to reason about.

An **array method** is a function called on an array, such as `a.includes(3)`.
Some methods receive a callback and call it for each relevant element with the
value, index, and original array; `reduce` is different and receives the
accumulator and current value first. The examples use arrow functions as
concise callbacks.

### Methods in `src/main.js`

| Method | What it does | This example |
| --- | --- | --- |
| `includes(value)` | Returns `true` if an element is equal to `value` using SameValueZero comparison. | Tests whether `3` is present. |
| `some(callback)` | Returns `true` as soon as at least one element makes the callback truthy. Empty arrays return `false`. | Checks whether any value is greater than `2` or `100`. |
| `every(callback)` | Returns `true` only if every element makes the callback truthy. Empty arrays return `true` (vacuous truth). | Compares all numbers with `8` and `-1`. |
| `map(callback)` | Calls the callback for each present element and returns a new array of its results. It does not change the original array. | Converts each number to an object with the original value and its power of π. |
| `reduce(callback, initialValue)` | Combines values into one result by passing an accumulator and the current element to a callback. | Sums the values, starting at `0`. Supplying an initial value also makes reduction of an empty array well-defined. |
| `find(callback)` | Returns the first element that satisfies the callback, or `undefined` if none does. | Finds the first value greater than `6` (which is `8`, not the largest value). |
| `toSorted(compareFn)` | Returns a sorted copy. Without a comparator, values are sorted as strings; a numeric comparator is needed for general numeric ordering. | Shows default ordering and descending numeric ordering. The current single-digit values happen to sort numerically by default. |
| `toReversed()` | Returns a reversed copy without changing the original. | Reverses the sequence. |
| `forEach(callback)` | Calls a callback for each present element and returns `undefined`; it is for side effects, not for creating a result array. | Logs each value, its index, and the source array. |

**EXTRA — related methods worth learning:** `filter` creates a new array with
only matching elements; `findIndex` returns the first matching index (or `-1`);
`findLast` and `findLastIndex` search from the end; `flat` removes nested array
levels; and `flatMap` maps and then flattens one level. `reduceRight` combines
values from right to left. `sort` sorts the array in place, unlike `toSorted`;
`reverse` also mutates, unlike `toReversed`.
`slice(start, end)` copies a range, while `splice(start, deleteCount, ...items)`
edits the original array. `concat` joins arrays into a new array; `push` and
`unshift` add elements to the end and start; `pop` and `shift` remove and return
the end and start elements. `fill` writes one value into a range, and
`copyWithin` copies part of an array within itself. `indexOf` and `lastIndexOf`
find matching positions, while `join` combines values into a string. `at`
supports negative indexes; `with(index, value)` returns a copy with one value
replaced; `toSpliced` returns a copy with elements removed or inserted, unlike
mutating `splice`. `keys`, `values`, and `entries` return iterators, and
`toString`/`toLocaleString` convert array contents to strings.

**EXTRA — static methods:** `Array.isArray(value)` tests whether a value is an
array. `Array.from(iterable)` creates an array from an iterable or array-like
value and can map as it creates it; `Array.of(...items)` creates an array from
its arguments. `Array.fromAsync` asynchronously creates an array from an
async iterable or iterable of promises. Check browser support before using
newer methods such as `toSorted`, `toReversed`, `with`, and `fromAsync`.

### Objects and destructuring

The `user` object is an object literal: property names such as `id`, `name`,
`lastName`, and `adress` are associated with values. `console.table` presents
those properties in a table. The separate `id` variable demonstrates that a
local variable may have the same name as an object property.

`const { id: userid, adress } = user` extracts properties into local
variables. The `id: userid` syntax renames the extracted `id`; `adress` keeps
its name. The later array destructuring binds the first item to `_`, the second
to `segundo`, skips the third with `___`, and collects the rest into `rest`
using the rest syntax `...rest`. `_` and `___` are ordinary variable names,
not special discard syntax.

### Console helpers

The example adds `algo`, `println`, and `success` properties to the global
`console` object to demonstrate properties and functions. `println` and
`success` ultimately use `console.log`; the `%c` format directive applies CSS
to the logged message in browser developer tools. Extending built-in objects
like `console` is useful to observe here, but is generally discouraged in
application code because it can collide with other code.

## References

- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [MDN: Array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN: Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [MDN: Console](https://developer.mozilla.org/en-US/docs/Web/API/console)
- [Vite guide](https://vite.dev/guide/)
