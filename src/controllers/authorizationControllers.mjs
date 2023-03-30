import jwt from "jsonwebtoken"
import { secret } from "../config.mjs"
import { User } from "../db/models.mjs"

async function newAuthorizationTokenController (request, response) {
    try {
        const user = await User.findOne({
            where: {
                username: request.body.username,
                password: request.body.password
            }
        })
        if ( user ) {
            const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' })
            response.status(200).json( { token } )
            return
        }
        response.status(401).send("Unauthorized")
    } catch (error) {
        console.error(error)
        response.status(500).send()
    }
}

export {
    newAuthorizationTokenController
}