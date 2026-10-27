import { restaurants } from "../restaurant.js";
import { menus } from "../menus.js";
// import { validarCabeceras } from "../middlewares/validateHeaders.middleware.js";

import express from 'express';

const router = express.Router();

// router.get('/events', (req, res) => {
//   res.send('events');
// });



// router.use(validarCabeceras)


router.get("/", (request, response) => {
    //request.
    response.json(restaurants)
})


router.get("/:ID", (request, response) => {

    const id = Number(request.params.ID);

    const restaurant = restaurants.find((elementoVisitado) => {
        return elementoVisitado.id === id;
    })

    if (!restaurant) return response.status(404).json({ message: "restaurante no encontrado" })

    response.json(restaurant);
})

router.post("/", (req, res) => {
    const newRestaurant = req.body;

    const newID = restaurants.length + 1;

    restaurants.push({
        ...newRestaurant,
        id: newID,
    });

    res.status(201).json({ inserted: newID })
});

router.put("/:ID", (req, res) => {

    const dataToChange = req.body;
    const idToFind = Number(req.params.ID);

    const foundElement = restaurants.find((elem) => {
        return elem.id === idToFind;
    })

    foundElement.name = dataToChange.name;

    res.status(200).json({ changed: foundElement });
});

router.delete("/:ID", (req, res) => {

    const id = Number(req.params.ID);

    const restaurantIndex = restaurants.findIndex((elementoVisitado) => {
        //return true;
        return elementoVisitado.id === id;
    })

    if (restaurantIndex === -1) {
        return res.status(404).json({ "error": "id not found" })
    }

    const deleted = restaurants.splice(restaurantIndex, 1);

    res.json({ "message": "restaurante borrado!!" });
});


router.get("/:ID/menus", (req, res) => {
    const restaurantID = Number(req.params.ID);


    const restaurant = restaurants.find((elementoVisitado) => {
        return elementoVisitado.id === restaurantID;
    })

    if (!restaurant) return response.status(404).json({ message: "restaurante no encontrado" })

    // restaurant.menus    

    // const menusDelRestaurante = menus.filter(m => {
    //     return restaurant.menus.includes(m.id);
    // })

    const menusDelRestaurante = restaurant.menus.map(m => {
        return menus.find((elem) => elem.id === m)
    })


    res.json(menusDelRestaurante)
})


export default router;

