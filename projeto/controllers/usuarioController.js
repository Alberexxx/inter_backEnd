const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const usuario = require("../models/usuario")
const carrinho = require("../models/carrinho")

router.use(express.json()); //Para analisar dados JSON


// --------> CRUD <-------- //

//READ
router.get('', (req, res) => {
    usuario.findAll().then((   ) => {
        
        
    }).catch((err) => {
        res.send(err)
    })
})

router.get("/perfil", (req, res) => {
  var id = 6;
  usuario.findOne({where: {id_usuario: id}}).then( user => {
      res.render("perfil", {usuario: user})
  })
})


//CREATE
/*router.post('/login/create', (req, res) => {

    var email = req.body.email;
    var senha = req.body.senha;
    var nome = req.body.nome
  
    usuario.findOne({where: {email: email}}).then( user => {
      if(user == undefined) {
  
        var salt = bcrypt.genSaltSync(3);
        var hash = bcrypt.hashSync(senha, salt);
  
        
        usuario.create({
          email: email,
          senha: hash,
          nome: nome

        }).then((novoUsuario) => {
            
          carrinho.create({


          }).then((carrinho) => {
            novoUsuario.addCarrinho(carrinho).then(() => {
                res.redirect("home")
            })
          })
        }).catch((err) => {
          res.send(err)
          return;
        })

  
      } else {
        //res.redirect(`/login?mensagem=${encodeURIComponent('já existe um cadastro com esse email!!, tente usar outro.')}`)
        res.redirect("/pagamento")
     }
 })

})  */

//rota de re_redirecionamento para a home



router.post('/login/create', (req, res) => {
  var email = req.body.email;
  var senha = req.body.senha;
  var nome = req.body.nome;

  usuario.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      var salt = bcrypt.genSaltSync(3);
      var hash = bcrypt.hashSync(senha, salt);

      usuario
        .create({
          email: email,
          senha: hash,
          nome: nome,
        })
        .then((usuario) => {
          carrinho.create({
            usuarioIdUsuario: usuario.id_usuario,
          }).then(() => {
            req.session.usuario = {
              id: usuario.id_usuario,
              email: usuario.email,
              nome: usuario.nome
            }
            res.redirect('/home');
          });
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.redirect(
        `/login?mensagem=${encodeURIComponent(
          'Já existe um cadastro com esse email, tente usar outro.'
        )}`
      );
    }
  });
});



router.get("/redirect", (req, res) => {
    res.redirect("/re-redirect")
})

router.get("/re-redirect", (req,res) => {
    res.redirect("login")
})


router.get('/ajax', (req, res) => {
  res.render('ajax')
})


router.post('/sua-endpoint-aqui', (req, res) => {
  var mensagemId = req.body.inputId;

  res.send(mensagemId);
});

router.post('/validaEmail', (req, res) => {
  var email = req.body.inputId;

  usuario.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) { 
      res.send("")
    } else {
      res.send("o email já está em uso.")
    }
  })

})








module.exports = router;