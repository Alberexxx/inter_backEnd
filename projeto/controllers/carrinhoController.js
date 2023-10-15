const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const carrinho = require("../models/carrinho")
const produto = require("../models/product")
const usuario = require("../models/usuario")
const item = require('../models/itemCarrinho') 

router.get('/carrinho', (req, res) => {
  
    
    
        var idUsuario = 6;
        let items;
       
        carrinho.findOne({where: {usuarioIdUsuario: idUsuario}})
            .then(carrinhoResult => {
                if (!carrinhoResult) {
                    throw new Error("Carrinho não encontrado.");
                }
                return item.findAll({where: {carrinhoIdCarrinho: carrinhoResult.id_carrinho}});
            })
            .then(resultItems => {
                if (!resultItems || resultItems.length === 0) {
                    throw new Error("Itens não encontrados ou vazios.");
                }
                items = resultItems; // Atribua o valor de resultItems a items
                const productIds = items.map(item => item.productIdProduto);
                return produto.findAll({where: {id_produto: productIds}});
            })
            .then(produtos => {
                if (!produtos || produtos.length === 0) {
                    throw new Error("Produtos não encontrados ou vazios.");
                }
                res.render("carrinho", {items: items, produtos: produtos});
            })
            .catch(err => {
                res.status(500).send(err.message);
            });

})

router.post("/getValor", (req, res) => {
    
    res.render("pagamento", {valor: req.body.valor})

})

module.exports = router;