import { DataTypes } from "sequelize"
import db from "./_db.mjs"

const Message = db.define('Message', {
    content: {
        type: DataTypes.STRING
    }
});


export default Message