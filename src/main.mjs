import express from "express"

import authorizationMiddleware from "./middlewares/authorization.mjs";
import jsonMiddleware from "./middlewares/jsonMiddleware.mjs";
import corsMiddleware from "./middlewares/corsMiddleware.mjs";

import { getUsersController, newUserController } from "./controllers/usersControllers.mjs";
import { getMessagesController, newMessageController } from "./controllers/messagesControllers.mjs";
import { newAuthorizationTokenController } from "./controllers/authorizationControllers.mjs";

const app = express()

app.use(corsMiddleware)

app.get("/",(_,response)=>{
    response.send("Ok!")
})

app.post("/users/",jsonMiddleware, newUserController)

app.get("/users/", getUsersController)

app.post("/users/authotizations/", jsonMiddleware, newAuthorizationTokenController)

app.post("/messages/", authorizationMiddleware, jsonMiddleware, newMessageController)

app.get("/messages/", authorizationMiddleware, getMessagesController)

app.listen( process.env.PORT, ()=>{
    console.log("Express on work...");
})