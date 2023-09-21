const express = require("express");
const app = express();
const connection = require('./database/connection')


//import dos models
const product = require('./models/product')
const user = require('./models/user')
const userAdmin = require('./models/userAdmin')
const pedido = require('./models/pedido')
const comentario_produto = require('./models/comentario_produto')
const categoria = require('./models/categoria')
const carrinho = require('./models/carrinho')
const avaliacao_site = require('./models/user')

//import dos controllers
const productController = require('./controllers/ProductController')
const avaliacao_siteController = require('./controllers/avaliacao_siteController')
const carrinhoController = require('./controllers/carrinhoController')
const categoriaController = require('./controllers/categoriaController')
const userController = require('./controllers/userController')
const comentario_produtoController = require('./controllers/comentario_produtoController')
const userAdminController = require('./controllers/userAdminController')
const pedidoController = require('./controllers/pedidoController')


//view engine
app.set('view engine', 'ejs')

//diretorio padrao para busca de arquivos estaticos
app.use(express.static('public'))

//body-parser
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log('conexão estabelecida com sucesso');
    }).catch((err) => {
        console.log(err);k
    })

//utilizacao dos modulos
app.use('/', userController)
app.use('/', avaliacao_siteController)
app.use('/', carrinhoController)
app.use('/', categoriaController)
app.use('/', comentario_produtoController)
app.use('/', pedidoController)
app.use('/', productController)
app.use('/', userAdminController)

 // Rotas

app.get("/",(req, res) => {
    res.render("index")
});

app.get('/getProducts', (req, res) => {
    Product.findAll().then((products) => {
        
        res.json(products)
    }).catch((err) => {
        res.send(err)
    })
})



app.get('/addProducts/:nome', (req, res) => {
   var nome_produto = req.params.nome

   Product.create({
    nome_produto: nome_produto

   }).then(() => {
    res.redirect("/getProducts")
   })
})

















app.listen(8080,() => {
    console.log("Servidor rodando"); 
 });