const express = require("express");
const app = express();
const connection = require('./database/connection')


app.use(express.urlencoded({ extended: true })); // Para analisar dados de formulário
app.use(express.json()); //Para analisar dados JSON







//import dos models
const product = require('./models/product')
const user = require('./models/usuario')
const userAdmin = require('./models/userAdmin')
const pedido = require('./models/pedido')
const comentario_produto = require('./models/comentario_produto')
const categoria = require('./models/categoria')
const carrinho = require('./models/carrinho')
const avaliacao_site = require('./models/usuario')
const endereco = require('./models/endereco')
const item_carrinho = require('./models/itemCarrinho')





//import dos controllers
const productController = require('./controllers/productController')
const avaliacao_siteController = require('./controllers/avaliacao_siteController')
const carrinhoController = require('./controllers/carrinhoController')
const categoriaController = require('./controllers/categoriaController')
const userController = require('./controllers/usuarioController')
const comentario_produtoController = require('./controllers/comentario_produtoController')
const userAdminController = require('./controllers/userAdminController')
const pedidoController = require('./controllers/pedidoController')
const enderecoController = require('./controllers/enderecoController')


//view engine
app.set('view engine', 'ejs')

//diretorio padrao para busca de arquivos estaticos
app.use(express.static('public'))


//database
connection
    .authenticate()
    .then(() => {
        console.log('conexão estabelecida com sucesso');
    }).catch((err) => {
        console.log(err);k
    })

//utilizacao dos roteadores
//app.use('/', userController)
//app.use('/', avaliacao_siteController)
app.use('/', carrinhoController)
app.use('/', categoriaController)
//app.use('/', comentario_produtoController)
//app.use('/', pedidoController)
app.use('/', productController)
//app.use('/', userAdminController)
//app.use('/', enderecoController)


// Rotas
app.get("/",(req, res) => {
    product.findAll().then(produto => {
        res.render("index", {produto: produto})
    })
    
});


















app.listen(8080,() => {
    console.log("Servidor rodando"); 
 });