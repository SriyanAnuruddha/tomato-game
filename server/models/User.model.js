const { Model, DataTypes } = require('sequelize')
//import sequalize instance/object
const sequelizeObj = require("../configs/DBconfig")


class User extends Model { }

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    highestScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, { sequelize: sequelizeObj, modelName: 'user' })

module.exports = User;