import { users } from "../users.js";

import express from 'express';

const router = express.Router();

// This copied router uses the users array despite its /restaurants URL prefix.
// router.get('/events', (req, res) => {
//   res.send('events');
// });



// Return the shared sample records as JSON.
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
// Look up an entry by its numeric route parameter.
router.get("/:ID", (request, response) => {

    const id = Number(request.params.ID);

    const user = users.find((elementoVisitado) => {
        //return true;
        return elementoVisitado.id === id;
    })

    if (!user) return response.status(404).json({ message: "Usuario no encontrado" })

    response.json(user);
})

// Append request fields with a generated ID and report a successful creation.
router.post("/", (req, res) => {
    const newUser = req.body;

    const newID = users.length + 1;

    users.push({
        ...newUser,
        id: newID,
    });

    res.status(201).json({ inserted: newID })
});

// Change the matched entry's name; missing IDs are not guarded in this example.
router.put("/:ID", (req, res) => {

    const dataToChange = req.body;
    const idToFind = Number(req.params.ID);

    const foundElement = users.find((elem) => {
        return elem.id === idToFind;
    })

    /*
    {
        id: 1,
        name: "Alice"
    },
    */

    /*
    {
        name: "Menganito"
    }
    */

    foundElement.name = dataToChange.name;

    res.status(200).json({ changed: foundElement });
});

// Remove an entry by its index in the shared array.
router.delete("/:ID", (req, res) => {

    const id = Number(req.params.ID);

    const userIndex = users.findIndex((elementoVisitado) => {
        //return true;
        return elementoVisitado.id === id;
    })

    if (userIndex === -1) {
        return res.status(404).json({ "error": "id not found" })
    }

    const deleted = users.splice(userIndex, 1);

    res.json({ "message": "usuario borrado!!" });
});


export default router;
