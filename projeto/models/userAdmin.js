const Sequelize = require("sequelize")
const connection = require("../database/connection")

const UserAdmin = connection.define("usersAdmin", {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: true
    }, senha: {
        type: Sequelize.STRING,
        allowNull: true
    }, foto: {
        type: Sequelize.STRING,
        allowNull: true
    }

})


//Product.sync({force: true})

module.exports = UserAdmin