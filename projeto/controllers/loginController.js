const express = require('express');
const router = express.Router();
const usuario = require("../models/usuario")
const bcrypt = require("bcryptjs")
const userAuht = require('../middlewares/userAuth')


// --------> CRUD <-------- //

//READ
router.get('/login', (req, res) => {

   //req.query.mensagem
   var mensagem = "ja exite o cadrastr"
   res.render("login", {mensagem: mensagem})
})

//authenticate

router.post("/authenticate", (req, res) => {

   var email = req.body.email;
   var senha = req.body.senha;
 
   usuario.findOne({where: {email: email}}).then(user => {
     if( user != undefined) {
       var correct = bcrypt.compareSync(senha, user.senha);
 
       if (correct) {
         req.session.usuario = {
           id: user.id,
           email: user.email
         }
         res.redirect('/home')
         
       } else {
         res.redirect('/login')
       } 
 
     } else {
       res.redirect('/login')

     }
   })
 })

router.post("/verificaEmailSenha", (req, res) => {
  var email = req.body.email
  var senha = req.body.senha

  usuario.findOne({where: {email: email}}).then(user => {
    if(user != undefined) {

      var correct = bcrypt.compareSync(senha, user.senha)

      if(correct) {
        res.send("")
      } else {
        res.send("senha ou email incorretos")
      }

    } else {
      res.send("email ou senha incorretos")
    }
  })

})

router.post("/verificaSenha", (req, res) => {
  var email = req.body.email;
  usuario.findOne({where: {email: email}}).then(user => {
    if(user != undefined) {
      res.send("não existe uma conta com esse email ")
    } else {
      res.send("")
    }
  })

})

//testes
 router.get('/session', (req, res) => {
   
   req.session.dados = {nome: "Alberes"}
   //res.json({email: req.body.email, senha: req.body.senha} )
   res.json(req.session.dados)

 })

 router.get("/session/get" , (req, res) => {
   res.json({nome: req.session.dados})
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
router.get('/verJson', (req, res) => {
  res.json({
    nome: 'Alberes',
    sobrenome: "borges",
    idade: 21
})
})

//DELETE




module.exports = router;