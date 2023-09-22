const express = require('express');
const router = express.Router();
const product = require("../models/product")
const slugify = require("slugify")



// --------> CRUD <-------- //

//READ
router.get('/getProducts', (req, res) => {
    product.findAll().then((products) => {
        
        res.json(products)
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.get('/addProducts/:nome/:preco/:desc/:foto', (req, res) => {
   var nome_produto = req.params.nome
   var preco = req.params.preco
   var desc = req.params.desc
   var foto = req.params.foto

   product.create({
    nome_produto: nome_produto,
    preco: preco,
    descricao: desc,
    foto: foto

   }).then(() => {
    res.redirect("/getProducts")
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;