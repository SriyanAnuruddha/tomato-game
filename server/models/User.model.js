const { Model, DataTypes } = require('sequelize')
// import sequalize instance/object
const sequelizeObj = require("../configs/DBconfig")

// Create a User model by inheriting the Model class
class User extends Model { }

// Initilize User Model
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