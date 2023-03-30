import jwt from "jsonwebtoken"
import { secret } from "../config.mjs"

function authorizationMiddleware(request, response, next) {

    try {

        // Authorization: "bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEYW5pZWxpbiIsImlhdCI6MTY4MDE4NzQyOCwiZXhwIjoxNjgwMTkxMDI4fQ.dhAviucbpUMCS7zh3n--9BGbhrDcZmQ9ugfiy3K_CkA"
        // Dividimos no " " >-----^  para obter o token.
        const token = request.headers.authorization?.split(" ")[1]
        const payload = jwt.verify(token, secret)
        response.locals.userId = payload.userId
        return next()

    } catch (error) {

        response.status(403).send("Forbidden")

    }


}

export default authorizationMiddleware