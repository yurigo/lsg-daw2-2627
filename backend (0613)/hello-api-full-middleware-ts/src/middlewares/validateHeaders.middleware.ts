import type { Request, Response, NextFunction } from "express";

export function validarCabeceras(req: Request, res: Response, next: NextFunction) {
    // console.log(req.headers);

    if (req.headers['x-api-key'] !== 'daw2') {
        return res.status(401).json({ error: "falta api key" })
    }

    return next()
}

export function myPoweredBy(req: Request, res: Response, next: NextFunction) {
    res.set({
        'x-powered-by': "DAW2",
    });
    next();
}