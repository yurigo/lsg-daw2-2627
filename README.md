# JavaScript examples for DAW 2

This repository contains small, independent examples used to study JavaScript in
the browser and in Node.js. The examples are deliberately small: several are
teaching exercises rather than production-ready applications. Read the guide in
each folder before running or modifying its code.

## Project map

| Project | Main topic | Guide |
| --- | --- | --- |
| `frontend (0612)/hello-arrays` | Arrays, objects, callbacks, and destructuring | [Arrays guide](frontend%20%280612%29/hello-arrays/README.md) |
| `frontend (0612)/hello-functions` | Functions, parameters, scope, and closures | [Functions guide](frontend%20%280612%29/hello-functions/README.md) |
| `frontend (0612)/hello-clases` | Classes and a p5.js animation | [Classes guide](frontend%20%280612%29/hello-clases/README.md) |
| `frontend (0612)/hello-vite` | Vite modules and p5.js instance mode | [Vite guide](frontend%20%280612%29/hello-vite/README.md) |
| `backend (0613)/hello-world-node` | Running JavaScript with Node.js | [Node guide](backend%20%280613%29/hello-world-node/README.md) |
| `backend (0613)/hello-api` | Express routers and REST-style HTTP endpoints | [API guide](backend%20%280613%29/hello-api/README.md) |

## Running the examples

Each folder is a separate project; run commands from that project's directory.
For package-managed projects, install the declared dependencies with `pnpm
install` before using their scripts.

- The `hello-arrays` and `hello-vite` browser projects use Vite. Run `pnpm dev`
  and open the local URL printed by Vite. Their `pnpm build` script creates a
  production build.
- `hello-functions` and `hello-clases` are static examples. Open their
  `index.html` files in a browser; `hello-clases` loads p5.js from a CDN and
  therefore needs network access.
- `hello-world-node` and `hello-api` run with Node.js. Use `pnpm start`; the API
  listens on port 3000.

## How to use the guides

The guides explain what each source file and example demonstrates, point out
important limits in the teaching code, and link to the relevant MDN reference.
Where an example extends the material beyond the class demonstration, it is
marked **EXTRA**. Browser and Node.js APIs are linked to their official
documentation; p5.js and Express-specific behavior is linked to their project
documentation.

## References

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Node.js documentation](https://nodejs.org/docs/latest/api/)
