const Sequelize = require("sequelize")
const connection = require("../database/connection")

Categoria = require('./categoria')


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
        type: Sequelize.BLOB,
        allowNull: true
    }, mimetype: {
        type: Sequelize.STRING,
        allowNull: true
    }, originalname: {
        type: Sequelize.STRING,
        allowNull: true
    }, tamanho: {
        type: Sequelize.STRING,
        allowNull: true
    }, modelo: {
        type: Sequelize.STRING,
        allowNull: true
    }, cor: {
        type: Sequelize.STRING,
        allowNull: true
    }, nome_categoria: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

//relacionamentos
Product.belongsTo(Categoria);
//Categoria.hasMany(Product);

 
//Product.sync({force: true})


module.exports = Product

/**/