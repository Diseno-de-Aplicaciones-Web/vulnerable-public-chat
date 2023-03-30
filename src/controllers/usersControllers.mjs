import { User } from "../db/models.mjs"

async function newUserController (request, response) {
    try {
        const newUser = await User.create(request.body)
        response.json( newUser )
    } catch (error) {
        if ( error.name === "SequelizeUniqueConstraintError" ) {
            response.status(400).send("Username already in use")
            return
        }
        console.error(error)
        response.status(500).send()
    }
}

async function getUsersController(_, response) {
    try {
        const users = await User.findAll({attributes:["username"]})
        const userNames = users.map( user => user.username )
        response.status(200).json( userNames )
    } catch (error) {
        console.error(error)
        response.status(500).send()
    }
}

export {
    newUserController,
    getUsersController
}