const express = require('express');
const router = express.Router();
const usuario = require("../models/usuario")


// --------> CRUD <-------- //

//READ
router.get('/get', (req, res) => {
    usuario.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.get('/add', (req, res) => {

   usuario.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;