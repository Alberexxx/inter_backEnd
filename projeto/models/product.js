const Sequelize = require("sequelize")
const connection = require("../database/connection")

const Product = connection.define("products", {
    id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, nome_produto: {
        type: Sequelize.STRING,
        allowNull: false
    }, preco: {
        type: Sequelize.DECIMAL,
        allowNull: true
    }, descricao: {
        type: Sequelize.STRING,
        allowNull: true
    }, foto: {
        type: Sequelize.STRING,
        allowNull: true
    }
})
 


//Product.sync({force: true})

module.exports = Product

/**/