const express = require('express');
const router = express.Router();
const pedido = require("../models/pedido")


// --------> CRUD <-------- //

//READ
router.get('/get', (req, res) => {
    pedido.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
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