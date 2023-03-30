import db from "./_db.mjs";
import User from "./_UserModel.mjs"
import Message from "./_MessageModel.mjs"

User.hasMany(Message)
Message.belongsTo(User)

await db.sync({ alter: true })

export {
    User,
    Message
}