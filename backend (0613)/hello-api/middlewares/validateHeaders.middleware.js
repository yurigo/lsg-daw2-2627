export function validarCabeceras(req, res, next) {
    // console.log(req.headers);

    if (req.headers['x-api-key'] !== 'daw2') {
        return res.status(401).json({ error: "falta api key" })
    }

    return next()
}