const express = require("express");
const app = express();
const connection = require('./database/connection')



//import dos models

const Product = require('./products/product')
const User = require('./users/User')


//import dos controllers

   //app.use('/', userController)

//view engine
app.set('view engine', 'ejs')

//static
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