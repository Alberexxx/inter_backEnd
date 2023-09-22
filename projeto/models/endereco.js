const Sequelize = require("sequelize")
const connection = require("../database/connection")

const endereco = connection.define("endereco", {
    id_endereco: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, cidade: {
        type: Sequelize.STRING,
        allowNull: false
    }, bairro: {
        type: Sequelize.STRING,
        allowNull: true
    },  rua: {
        type: Sequelize.STRING,
        allowNull: false
    }, numero: {
        type: Sequelize.STRING,
        allowNull: true
    }, cep: {
        type: Sequelize.STRING,
        allowNull: true
    }


})



//Product.sync({force: true})

module.exports = endereco