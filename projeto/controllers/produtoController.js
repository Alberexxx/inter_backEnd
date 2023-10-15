const express = require('express');
const router = express.Router();
const product = require("../models/product")
const slugify = require("slugify")
const multer = require("multer")



//multer

const storage = multer.memoryStorage();
const upload = multer({ storage });





router.get('/admin/addProduto', (req, res) => {
    res.render("addProduto")
 })
 




// --------> CRUD <-------- //

//READ
router.get('/admin/produtos', (req, res) => {
    product.findAll().then((produtos) => {
        
       res.render('produtos', {produtos: produtos})

    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.post('/produtos/save', upload.single('foto'), (req, res) => {
   var nome_produto = req.body.nome
   var preco = req.body.preco
   var descricao = req.body.descricao
   var tamanho = req.body.tamanho
   var modelo = req.body.modelo
   var cor = req.body.cor
   var categoria = req.body.categoria
   //var estoque = req.body.estoque

  if (!req.file) {

    return res.status(400).send('Nenhum arquivo enviado');
  }

   const { originalname, mimetype, buffer } = req.file;

   product.create({
    nome_produto: nome_produto,
    preco: preco,
    descricao: descricao,
    tamanho: tamanho,
    modelo: modelo,
    cor: cor, 
    nome_categoria: categoria,
    originalname: originalname,
    mimetype: mimetype,
    foto: buffer

   }).then(() => {
   
    res.redirect('/admin/produtos')

   
   }).catch((err) => {
    res.send(err)
   })
})

//teste
router.get('/imagem/:id', (req, res) => {
    
    product.findByPk(req.params.id).then(produto => {

        res.setHeader('Content-Type', produto.mimetype);
        res.send(produto.foto);

    })

  });


//UPDATE


//DELETE

router.post("/admin/produtos/deletar", (req,res) => {
    var id = req.body.id;

    if (id != undefined ) {

        if(!isNaN(id)){

            product.destroy({
                where: {
                    id_produto:id
                }
            }).then(() => {
                res.redirect("/admin/produtos")
            })


        }else {
            res.redirect("/admin/categories")
        }

    } else {
    }
})



module.exports = router;