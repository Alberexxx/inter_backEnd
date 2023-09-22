const express = require('express');
const router = express.Router();
const avaliacao = require("../models/avaliacao_site")


// --------> CRUD <-------- //

//READ
router.get('/get', (req, res) => {
    avaliacao.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.get('/add', (req, res) => {

   avaliacao.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;