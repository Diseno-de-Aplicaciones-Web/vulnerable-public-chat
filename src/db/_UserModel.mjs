import { DataTypes } from "sequelize"
import db from "./_db.mjs"

const User = db.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
});

export default User