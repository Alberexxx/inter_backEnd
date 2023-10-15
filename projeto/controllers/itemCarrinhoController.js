const express = require('express');
const router = express.Router();
const item = require("../models/itemCarrinho");
const usuario = require('../models/usuario');
const carrinho = require("../models/carrinho")


// --------> CRUD <-------- //

//add produto pelo pagina do produto
router.get('/addItem/:preco/:quantidade/:id_produto', (req, res) => {

     var id_produto =   7  //req.body.id_produto
     var preco_unitario = req.params.preco
     var quantidade = req.params.quantidade

     var id =  6   //req.session.usuario.id
   // var id_produto = req.body.id_produto
    //var preco_unitario = req.body.preco
   // var quantidade = req.body.quantidade

    carrinho.findOne({where: {usuarioIdUsuario: id}}).then( carrinho => {
       item.create({
            quantidade: quantidade,
            preco_unitario: preco_unitario,
            carrinhoIdCarrinho: carrinho.id_carrinho,
            productIdProduto: id_produto

       }).then(() => {
            res.send("OK")
       }).catch(() => {

       })
    })
})

//add produto no carrinho pela home
router.post('/addItemCarrinho', (req, res) => {

    var id_produto =  req.body.idroduto
    var preco_unitario = req.body.preco
    var quantidade = 1

    var id =  7   //req.session.usuario.id
  // var id_produto = req.body.id_produto
   //var preco_unitario = req.body.preco
  // var quantidade = req.body.quantidade

   carrinho.findOne({where: {usuarioIdUsuario: id}}).then( carrinho => {
      item.create({
           quantidade: quantidade,
           preco_unitario: preco_unitario,
           carrinhoIdCarrinho: carrinho.id_carrinho,
           productIdProduto: id_produto

      }).then(() => {
           res.send("")
      }).catch(() => {

      })
   })
})





module.exports = router;