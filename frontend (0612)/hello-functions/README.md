# Hello functions

This static browser example compares JavaScript function forms, parameters,
scope, callbacks, and closures. Load `index.html` and inspect the developer
console; the page itself contains a heading, not an interactive exercise.

## Files

- `index.html` supplies the document structure and loads `index.js` as a
  module.
- `index.js` runs each demonstration and prints its result.

## What the examples teach

### Parameters, return values, and rest parameters

`suma(a, b = 10_000)` is a function declaration with a default parameter.
Calling it with only `3` gives `10_003`; the active call supplies `10` as the
second argument, so it gives `13`. Numeric separators (`10_000`) improve
readability and do not change the number.

`sumalosTodos(primero, ...todos)` uses a **rest parameter**: the first argument
is bound to `primero` and any remaining arguments are collected in an array
named `todos`. The function rejects a first argument below 10 by logging an
error, then uses `reduce` to add the rest to the first number. Its validation is
intentionally limited: it does not validate every value or handle an omitted
first argument as a useful input.

### Function forms

- `suma` is a function declaration. Declarations are hoisted within their
  scope, so they can generally be called before their position in the source.
- `resta` is a function expression assigned to a `const`; it is called after
  the assignment has executed.
- `multiplicacion` is a block-bodied arrow function with an explicit `return`.
- `division` is an expression-bodied arrow function; its expression is
  returned implicitly.

All four forms can accept parameters and return values, but arrow functions do
not have their own `this`, `arguments`, or constructor behavior.
In the active calls, `resta(3, 5)` returns `-2` and `multiplicacion(3, 5)`
returns `15`; the division function is defined but not called in this example.

### Block scope

The outer `const a` is `1000`. Inside the braces, a second `const a` shadows
that name and is `10`; the outer binding is visible again after the block.
`e` is declared with `let` outside the block and remains visible inside it.
The loop's `let i` and body-local `const` bindings are block-scoped. The
commented `var` lines contrast `var`'s function scope and redeclaration rules;
they are not executed.

### Callbacks and `this`

`forEach` invokes each callback with an element (and, when requested, its index
and source array). The first callback is a normal function; the second is an
arrow function. Because this file is an ES module, top-level `this` is
`undefined`. A normal callback also receives `undefined` as `this` here because
no `thisArg` is supplied and modules are strict-mode code. The arrow callback
captures the surrounding lexical `this`, which is also `undefined` in this
module. Thus these two particular logs look the same; they do **not** imply
that normal functions and arrows handle `this` identically in every context.

### Closure and lexical scope

`operate` defines `operation` inside itself. The inner function reads `a` and
`b` from the surrounding `operate` scope even though those bindings are declared
after the function expression. The call happens after both assignments, so the
closure can add them and return `5`. A closure is a function together with
access to its surrounding lexical environment.

## References

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN: Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN: `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN: `Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
