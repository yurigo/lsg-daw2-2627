# Hello clases

This browser example models moving balls with a JavaScript class and draws them
with [p5.js](https://p5js.org/). Open `index.html` in a browser with network
access; p5.js is loaded from a CDN before the two local scripts.

## Files

- `index.html` loads p5.js, then `pelota.js` (the `Pelota` class), then
  `sketch.js` (the animation that uses the class). Script order matters because
  the class must exist before `sketch.js` creates instances.
- `pelota.js` defines a ball's data and its `draw` and `update` behaviors.
- `sketch.js` initializes the canvas, updates/draws balls each frame, and adds
  a ball when the mouse is clicked.

## The class and animation

`class Pelota` is a blueprint for ball objects. Its constructor receives
position (`x`, `y`), diameter (`d`), velocity (`vx`, `vy`), and an optional
`epilepsia` boolean. The constructor derives the radius `r` and assigns color
channels. When the flag is true, p5.js `random` picks color values; otherwise,
the ball is red. The parameter name is inherited from the exercise; the visual
behavior is simply randomized color.

`draw()` sets the fill color and draws a circle. `update()` checks whether the
circle's edge has crossed the canvas boundary and reverses the corresponding
velocity component; then it advances the position by one velocity step. This is
a simple frame-based model, not a time-based physics simulation. A ball that
starts outside the canvas or moves very quickly can behave less smoothly.

In `sketch.js`, `setup()` runs once: it creates a 600-by-600 canvas and pushes
`MAX` ball instances into `pelotas`. `draw()` runs repeatedly: it clears the
background, loops through the array to draw each ball, updates each ball, and
draws a stationary red ball at the mouse position. `mouseClicked()` constructs
and appends another ball with randomized size and velocity.

The `forEach` callback receives the current ball, its index, and the array.
The optional-chaining expressions (`p?.x`, `arr[i + 1]?.x`) yield `undefined`
when the next ball does not exist. Consequently, the final iteration attempts
to draw a line with undefined endpoint coordinates; the `arr.length > i`
condition is true even on that iteration. This is part of the current example,
not a guard that excludes the final ball.

**EXTRA — design improvement:** A safer next-neighbor condition is
`i < arr.length - 1`. For animation stability, a production implementation
would also account for elapsed time and keep positions inside the canvas after
a collision.

## References

- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: `Array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN: `Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [p5.js reference](https://p5js.org/reference/)
- [p5.js `setup()`](https://p5js.org/reference/p5/setup/)
- [p5.js `draw()`](https://p5js.org/reference/p5/draw/)
- [p5.js `mouseClicked()`](https://p5js.org/reference/p5/mouseClicked/)
