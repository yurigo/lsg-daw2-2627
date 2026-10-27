// ES module imports keep the server and its routers in separate files.
import express from "express";
import usersRouter from "./routes/users.route.js";
import restaurantsRouter from "./routes/restaurants.route.js";
import { validarCabeceras } from "./middlewares/validateHeaders.middleware.js";

const app = express()
const port = 3000

// Parse JSON request bodies before route handlers access req.body.
app.use(express.json());

function logging(req, res, next) {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
}

// app.use(validarCabeceras) esto seria para todos


app.use("/api/v1/users", usersRouter);
app.use(logging);
app.use("/api/v1/restaurants", validarCabeceras, restaurantsRouter);


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