// ES module imports keep the server and its routers in separate files.
import express from "express";
import usersRouter from "./routes/users.route.js";
import restaurantsRouter from "./routes/restaurants.route.js";

const app = express()
const port = 3000

// Parse JSON request bodies before route handlers access req.body.
app.use(express.json());

// Routers group related endpoints and share the prefixes given here.
app.use("/users", usersRouter);
app.use("/restaurants", restaurantsRouter);


// Start listening for HTTP requests on the configured local port.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// These small handlers demonstrate routes defined directly on the app.
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/a', (req, res) => {
    res.send('a');
})

app.get('/b', (req, res) => {
    res.send('b')
})