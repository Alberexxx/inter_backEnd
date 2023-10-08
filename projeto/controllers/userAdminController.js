const express = require('express');
const router = express.Router();
const userAdmin = require("../models/userAdmin")


// --------> CRUD <-------- //

//READ
router.get('/painel', (req, res) => {
   res.render('painel')
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