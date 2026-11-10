// ES module imports keep the server and its routers in separate files.
import pino from "pino"
import morgan from "morgan"
import express from "express";

import type {
    Request,
    Response,
    NextFunction
} from "express";

import chalk from "chalk";
import usersRouter from "./routes/users.route.js";
import restaurantsRouter from "./routes/restaurants.route.js";
import { validarCabeceras, myPoweredBy } from "./middlewares/validateHeaders.middleware.js";


// const logger = require('pino')()
const logger = pino();

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')

const app = express()
const port = 3000

function suma(a: number, b: number) {
    return a + b;
}

suma(port, port);

app.use(morgan('tiny'));
app.disable("x-powered-by");
app.use(myPoweredBy);


// Parse JSON request bodies before route handlers access req.body.
app.use(express.json());

function logging(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method}: ${req.originalUrl}`);
    child.info(`${req.method}: ${req.originalUrl}`);
    next();
}

function sendError(error: Error, req: Request, res: Response, next: NextFunction) {
    res.status(404).json({ middleware: "error", error: error })
}
function logError(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(chalk.bgRed(`error: ${error}`));
    next(error);
}


// app.use(validarCabeceras) esto seria para todos


app.use(logging);

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/restaurants", validarCabeceras, restaurantsRouter);


// Start listening for HTTP requests on the configured local port.
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
    console.log(`Example app listening on port http://localhost:${port}/api/v1/users`)
    console.log(`Example app listening on port http://localhost:${port}/api/v1/restaurants`)
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

// app.get("/*path", (req, res) => { res.status(404).json({ message: "resource not found" }) })
//     .post("/*path", (req, res) => { res.status(404).json({ message: "resource not found" }) })
//     .put("/*path", (req, res) => { res.status(404).json({ message: "resource not found" }) })
//     .delete("/*path", (req, res) => { res.status(404).json({ message: "resource not found" }) })

app.all("/*path", (req, res) => { res.status(404).json({ message: "resource not found" }) })

app.use(logError);
app.use(sendError);