const Sequelize = require("sequelize")
const connection = require("../database/connection")
const Carrinho = require("./carrinho")
const Avaliacao = require("./avaliacao_site")
const Comentario = require("./comentario_produto")
const Product = require("./product")

const usuario = connection.define("usuarios", {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }, senha: {
        type: Sequelize.STRING,
        allowNull: false
    }, foto: {
        type: Sequelize.STRING,
        allowNull: true
    }, sexo: {
        type: Sequelize.STRING, 
        allowNull: false
    }, telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

usuario.hasOne(Carrinho);
Carrinho.belongsTo(usuario);
//
usuario.hasOne(Comentario);
Comentario.belongsTo(usuario);
//
usuario.hasMany(Avaliacao);
Avaliacao.belongsTo(usuario);
//
Product.hasMany(Avaliacao);
Avaliacao.belongsTo(Product);
//



//Comentario.sync({force:true})
//Avaliacao.sync({force:true})
//usuario.sync({force: true})
//Carrinho.sync({force: true})


module.exports = usuario