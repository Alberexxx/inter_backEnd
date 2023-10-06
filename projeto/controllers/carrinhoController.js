const express = require('express');
const router = express.Router();
const carrinho = require("../models/carrinho")
const produto = require("../models/product")

router.get('/carrinho', (req, res) => {
    produto.findAll().then((produto) => {

        res.render("carrinho", {produtos: produto})
        
    }).catch((err) => {
        res.send(err)
    })
   
})



// --------> CRUD <-------- //

//READ
router.get('/get', (req, res) => {
    carrinho.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.get('/add', (req, res) => {

   carrinho.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;