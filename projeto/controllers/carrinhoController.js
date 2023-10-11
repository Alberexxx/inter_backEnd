const express = require('express');
const router = express.Router();
const carrinho = require("../models/carrinho")
const produto = require("../models/product")
const usuario = require("../models/usuario")

router.get('/carrinho', (req, res) => {
    produto.findAll().then((produto) => {

        res.render("carrinho", {produtos: produto})
        
    }).catch((err) => {
        res.send(err)
    })
   
})

router.post("/outros-dados" , (req, res) => {
    
})

// --------> CRUD <-------- //

//READ
router.get('', (req, res) => {
    carrinho.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.get('', (req, res) => {

   carrinho.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;