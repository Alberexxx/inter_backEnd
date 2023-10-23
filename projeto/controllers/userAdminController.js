const express = require('express');
const router = express.Router();
const userAdmin = require("../models/userAdmin")
const pedidos = require("../models/pedido")
const produtos = require("../models/product")

const adminAuth = require("../middlewares/adminAuth")

// --------> CRUD <-------- //

//READ
router.get('/admin/painel', adminAuth , (req, res) => {
   pedidos.findAndCountAll({
      order: [
        ['id_pedido', 'DESC']]})
        .then( pedidosResult => {
      produtos.findAndCountAll({}).then( produtosResult => {

         pedidos.sum('ValorTotal').then( total => {
            res.render('painel', {pedidos: pedidosResult.rows, totalVendas: pedidosResult.count, produtosCadastrados:produtosResult.count, total: total })

         })


      }) 
   })
})


//CREATE


//UPDATE


//DELETE




module.exports = router;