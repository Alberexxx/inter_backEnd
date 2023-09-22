const express = require('express');
const router = express.Router();
const endereco = require("../models/endereco")


// --------> CRUD <-------- //

//READ
router.get('/get', (req, res) => {
    endereco.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.get('/add', (req, res) => {

   endereco.create({
    

   }).then(() => {
    
   }).catch((err) => {
    res.send(err)
   })
})


//UPDATE


//DELETE




module.exports = router;