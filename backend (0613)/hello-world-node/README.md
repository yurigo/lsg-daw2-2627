# Hello world: Node.js

This is the smallest server-side JavaScript example in the repository. Install
dependencies with `pnpm install`, then run `pnpm start` (or `pnpm dev`) from
this folder. The terminal prints **Hello world!** in blue.

## Files and execution

- `index.js` imports the `chalk` package using ES module syntax and writes a
  colored string to standard output with `console.log`.
- `package.json` marks the project as an ES module (`"type": "module"`), lists
  `chalk`, and defines the `start`, `dev`, and `ejemplo` scripts. The `test`
  script is a placeholder that deliberately exits with an error; no automated
  tests are configured here.
- `pnpm-lock.yaml` records resolved package versions and is maintained by pnpm.
- `.gitignore` excludes local/generated files from version control.

Node.js runs JavaScript outside a browser. Unlike browser code, this file
doesn't manipulate a document or use browser APIs. Chalk adds ANSI color codes
for compatible terminals; output may appear without color in unsupported
terminals or redirected output.

## References

- [Node.js: Running scripts](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line)
- [Node.js: ECMAScript modules](https://nodejs.org/api/esm.html)
- [MDN: `console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)
- [Chalk documentation](https://github.com/chalk/chalk)
