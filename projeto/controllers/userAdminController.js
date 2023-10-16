const express = require('express');
const router = express.Router();
const userAdmin = require("../models/userAdmin")
const pedidos = require("../models/pedido")
const produtos = require("../models/product")

// --------> CRUD <-------- //

//READ
router.get('/admin/painel', (req, res) => {
   pedidos.findAndCountAll({}).then( pedidosResult => {
      produtos.findAndCountAll({}).then( produtosResult => {
         res.render('painel', {pedidos: pedidosResult.rows, totalVendas: pedidosResult.count, produtosCadastrados:produtosResult.count })

      }) 
   })
})


//CREATE
router.get('/add', (req, res) => {

   userAdmin.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;