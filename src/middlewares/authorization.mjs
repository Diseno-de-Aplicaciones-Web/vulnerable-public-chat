import jwt from "jsonwebtoken"

function authorizationMiddleware(request, response, next) {

    try {
        /**
         * Recibiremos los token JWT dentro del header Athorization de la petición
         * como tipo bearer como en el ejemplo de la siguiente linea:
         * Authorization: "bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEYW5pZWxpbiIsImlhdCI6MTY4MDE4NzQyOCwiZXhwIjoxNjgwMTkxMDI4fQ.dhAviucbpUMCS7zh3n--9BGbhrDcZmQ9ugfiy3K_CkA"
         * Dividimos en " " >-----^  para obterner el token.
         */
        const token = request.headers.authorization?.split(" ")[1]
        const payload = jwt.verify(token, process.env.SECRET)
        response.locals.userId = payload.userId
        return next()
    } catch (error) {
        response.status(403).send("Forbidden")
    }

}

export default authorizationMiddleware