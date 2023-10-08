const express = require('express');
const router = express.Router();
const product = require("../models/product")
const slugify = require("slugify")
const multer = require("multer")



//multer

const storage = multer.memoryStorage();
const upload = multer({ storage });





router.get('/addProduto', (req, res) => {
    res.render("addProduto")
 })
 








// --------> CRUD <-------- //

//READ
router.get('/admin/produtos', (req, res) => {
    product.findAll().then((products) => {
        
       // res.json(products)
       res.render('produtos')
    }).catch((err) => {
        res.send(err)
    })
})


//CREATE
router.post('/produtos/save', upload.single('foto'), (req, res) => {
   var nome_produto = req.body.nome
   var preco = req.body.preco
   var desc = req.body.desc
 

  if (!req.file) {

    return res.status(400).send('Nenhum arquivo enviado');
  }

   const { originalname, mimetype, buffer } = req.file;

   product.create({
    nome_produto: nome_produto,
    preco: preco,
    descricao: desc,
    originalname: originalname,
    mimetype: mimetype,
    foto: buffer

   }).then(() => {
    console.log(req.file);
    res.send(req.file)

   //res.redirect("/getProducts")
   }).catch((err) => {
    res.send(err)
   })
})

//teste
/*router.get('/imagem/:id', (req, res) => {
    
    product.findByPk(req.params.id).then(produto => {

        res.setHeader('Content-Type', produto.mimetype);
        res.send(produto.foto);

    })

  });
*/

//UPDATE


//DELETE

router.post("/carrinho/delete", (req,res) => {
    var id = req.body.id;

    if (id != undefined ) {

        if(!isNaN(id)){

            Category.destroy({
                where: {
                    id:id
                }
            }).then(() => {
                res.redirect("/admin/categories")
            })


        }else {
            res.redirect("/admin/categories")
        }

    } else {
    }
})



module.exports = router;