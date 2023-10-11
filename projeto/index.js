const express = require("express");
const app = express();
const connection = require('./database/connection')
const session = require("express-session")

app.use(express.urlencoded({ extended: true })); // Para analisar dados de formulário
app.use(express.json()); //Para analisar dados JSON

//session
app.use(
    session({
    secret: "aojd5emfe2cmckeol78dsnkkzmajqnuwbuw",
    cookie: { maxAge: 604800}
}))





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
const productController = require('./controllers/produtoController')
const avaliacao_siteController = require('./controllers/avaliacao_siteController')
const carrinhoController = require('./controllers/carrinhoController')
const categoriaController = require('./controllers/categoriaController')
const usuarioController = require('./controllers/usuarioController')
const comentario_produtoController = require('./controllers/comentario_produtoController')
const userAdminController = require('./controllers/userAdminController')
const pedidoController = require('./controllers/pedidoController')
const enderecoController = require('./controllers/enderecoController')
const pagamentoController = require("./controllers/pagamentoController")
const loginController = require("./controllers/loginController")


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
app.use('/', usuarioController)
//app.use('/', avaliacao_siteController)
app.use('/', carrinhoController)
app.use('/', categoriaController)
//app.use('/', comentario_produtoController)
app.use('/', pedidoController)
app.use('/', productController)
app.use('/', userAdminController)
//app.use('/', enderecoController)
app.use("/", pagamentoController)
app.use("/", loginController)



// Rotas
app.get("/home",(req, res) => {
    res.render("index")
    
});


















app.listen(8080,() => {
    console.log("Servidor rodando"); 
 });