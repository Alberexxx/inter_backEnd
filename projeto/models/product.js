const Sequelize = require("sequelize")
const connection = require("../database/connection")

const Product = connection.define("products", {
    id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, nome_produto: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})



//Product.sync({force: true})

module.exports = Product