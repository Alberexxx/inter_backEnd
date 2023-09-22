const Sequelize = require("sequelize")
const connection = require("../database/connection")

const usuario = connection.define("users", {
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
    }, sexo: {
        type: Sequelize.STRING, 
        primaryKey: true
    }, telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }

})



//Product.sync({force: true})

module.exports = usuario