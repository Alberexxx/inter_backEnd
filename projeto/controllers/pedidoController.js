const express = require('express');
const router = express.Router();
const pedido = require("../models/pedido")
const userAuht = require('../middlewares/userAuth')


// --------> CRUD <-------- //

//READ
router.get('/pedidos', (req, res) => {
    res.render("statusPedido")
})


//CREATE
router.get('/add', (req, res) => {

    pedido.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;