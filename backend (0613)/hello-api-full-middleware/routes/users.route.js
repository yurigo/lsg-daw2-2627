import { users } from "../users.js";
// import { validarCabeceras } from "../middlewares/validateHeaders.middleware.js";

import express from 'express';

const router = express.Router();

// router.get('/events', (req, res) => {
//   res.send('events');
// });

// router.use(validarCabeceras)



function miPrimerMiddleware(request, response, next) {
    next();
}

router.use(miPrimerMiddleware)

router.get("/", function (request, response) {
    //request.
    response.json(users)
})

// router.get("/users/1", (request, response) => {
//     response.json(users[0]);
// })
// router.get("/users/2", (request, response) => {
//     response.json(users[1]);
// })

function validateID(req, res, next) {
    const id = Number(req.params.ID);

    // const user = users.find((elementoVisitado) => {
    //     //return true;
    //     return elementoVisitado.id === id;
    // })

    const index = users.findIndex((elementoVisitado) => {
        //return true;
        return elementoVisitado.id === id;
    })

    req.DATA = {
        index,
        user: users[index]
    }

    // if (index === -1) return res.status(404).json({ message: "🦄🦄🦄🦄🦄 Usuario no encontrado 🦄🦄🦄🦄🦄" })
    if (index === -1) return next("USER NOT FOUND");

    next();
}


router.get("/:ID", validateID, (request, response) => {
    const user = request.DATA.user;
    response.json(user);
})

router.post("/", (req, res) => {
    const newUser = req.body;

    const newID = users.length + 1;

    users.push({
        ...newUser,
        id: newID,
    });

    res.status(201).json({ inserted: newID })
});

router.put("/:ID", validateID, (req, res) => {

    const dataToChange = req.body;
    const foundElement = request.DATA.user;
    foundElement.name = dataToChange.name;
    res.status(200).json({ changed: foundElement });
});

router.delete("/:ID", validateID, (req, res) => {
    const deleted = users.splice(req.DATA.index, 1);
    res.json({ "message": "usuario borrado!!" });
});


export default router;

