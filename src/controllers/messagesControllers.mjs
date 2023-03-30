import { Message } from "../db/models.mjs"

async function newMessageController (request, response) {
    try {
        await Message.create({ ...request.body, UserId: response.locals.userId })
        response.send()
    } catch (error) {
        console.error(error)
        response.status(500).send()
    }
}

async function getMessagesController (_, response) {
    try {
        const messages = await Message.findAll({
            order: [["createdAt", "DESC"]],
            limith: 100
        })
        response.json(messages)
    } catch (error) {
        console.error(error)
        response.status(500).send()
    }
}

export {
    newMessageController,
    getMessagesController
}