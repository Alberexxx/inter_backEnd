const express = require('express');
const router = express.Router();
//const usuario = require("../models/pedido")


// --------> CRUD <-------- //

//READ
router.get('/pagamento', (req, res) => {
   res.render("pagamento")
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