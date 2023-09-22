const Sequelize = require("sequelize")
const connection = require("../database/connection")

const Pedido = connection.define("Pedidos", {
    id_pedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, data_realizacao: {
        type: Sequelize.DATE,
        allowNull: false
    }, frete: {
        type: Sequelize.DECIMAL,
        allowNull: true
    }, status: {
        type: Sequelize.STRING,
        allowNull: true
    }, endereco: {
        type: Sequelize.STRING,
        allowNull: true
    }

})



//Product.sync({force: true})

module.exports = Pedido