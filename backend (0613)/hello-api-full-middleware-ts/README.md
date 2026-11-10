# Hello API

This Express application demonstrates routing and common HTTP methods with
in-memory sample data. Install dependencies using `pnpm install`, then run
`pnpm start` or `pnpm dev` in this folder. The server listens on port `3000`.
Try the requests below with a browser or an HTTP client.

## Files

- `index.js` creates the Express application, enables JSON request parsing,
  mounts routers, defines three simple root-level routes, and starts the
  listener.
- `routes/users.route.js` defines list, lookup, create, update, and delete
  handlers under `/users`.
- `routes/restaurants.route.js` currently contains the same user handlers, but
  mounts under `/restaurants`. Despite the filename and URL, it imports and
  modifies the `users` array; it is a copied teaching example, not a restaurant
  data model.
- `users.js` exports the shared in-memory array used by both routers.
- `package.json` declares Express and Chalk, plus start/watch scripts. Chalk is
  not currently used by the API code. Its test script is a placeholder and
  does not run tests.
- `pnpm-lock.yaml` records the resolved package versions and is maintained by
  pnpm; `.gitignore` excludes local/generated files.

## Routes

The `express.json()` middleware parses JSON request bodies before route
handlers run. `express.Router()` creates modular route handlers. Mounting a
router with `app.use("/users", usersRouter)` prefixes every route in that
router with `/users`; the restaurant router is similarly mounted at
`/restaurants`.

| Request | Effect |
| --- | --- |
| `GET /` | Returns `Hello World!`. |
| `GET /a` and `GET /b` | Return the one-letter strings shown in the source. |
| `GET /users` | Returns the complete in-memory users array as JSON. |
| `GET /users/1` | Converts the route parameter to a number and finds the matching user. |
| `POST /users` | Adds the JSON body to the array with an assigned ID and returns status `201`. Example body: `{"name":"Erin"}`. |
| `PUT /users/1` | Replaces the matched user's `name` with the `name` from the JSON body. Example body: `{"name":"Alicia"}`. |
| `DELETE /users/1` | Removes the matching array entry. |

Use equivalent paths under `/restaurants` to observe that the second router
currently works with the same user data.

The route handlers illustrate `req.params`, `req.body`, JSON responses, status
codes, `Array.prototype.find`, `findIndex`, and `splice`. A `404` is returned
for a missing ID in the GET and DELETE handlers. The example is intentionally
not a production API: the PUT handler does not check whether a user was found
before accessing it; IDs are derived from the current array length, data is
lost when the process stops, and request bodies are not validated. Those are
useful next exercises, not guarantees provided by this code.

**EXTRA — HTTP semantics:** `GET` reads data, `POST` creates a resource,
`PUT` replaces or updates a resource, and `DELETE` removes one. This simple
example returns `200` for updates and deletes but does not implement every
detail of a complete REST API.

## References

- [Express: Hello world](https://expressjs.com/en/starter/hello-world.html)
- [Express: Routing](https://expressjs.com/en/guide/routing.html)
- [Express: Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [MDN: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
