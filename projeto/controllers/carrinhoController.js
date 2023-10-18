const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const carrinho = require("../models/carrinho")
const produto = require("../models/product")
const usuario = require("../models/usuario")
const pedido = require("../models/pedido")
const item_Pedido = require("../models/itemPedido");
const item_carrinho = require('../models/itemCarrinho');

/*router.get('/carrinho', (req, res) => {
  
    var userId = 6

    carrinho.findOne({where: {usuarioIdUsuario: userId}}).then((carrinhoResult) => {
        item_carrinho.findAll({where: {carrinhoIdCarrinho: carrinhoResult.id_carrinho}}).then((itemResult) => {
            produto.findAll({ where: {id_produto: itemResult.productIdProduto }}).then( (produtoResult) => {
                res.render("carrinho", {produtos: produtoResult, items: itemResult})
            })
        })
    })
    


})*/

router.get('/carrinho', (req, res) => {
    var userId = 6;

    carrinho.findOne({ where: { usuarioIdUsuario: userId } }).then((carrinhoResult) => {
        if (carrinhoResult) {
            item_carrinho.findAll({ where: { carrinhoIdCarrinho: carrinhoResult.id_carrinho } }).then((itemResult) => {
                if (itemResult && itemResult.length > 0 && itemResult[0].productIdProduto) {
                    const productIds = itemResult.map(item => item.productIdProduto);

                    produto.findAll({ where: { id_produto: productIds } }).then((produtoResult) => {
                        res.render("carrinho", { produtos: produtoResult, items: itemResult });
                    }).catch((error) => {
                        console.error("Erro ao buscar produtos:", error);
                        res.render("carrinho");
                    });
                } else {
                    console.error("productIdProduto não está definido em itemResult.");
                    res.render("carrinho", {items: undefined});
                }
            }).catch((error) => {
                
                console.error("Erro ao buscar itens do carrinho:", error);
                res.render("carrinho", {items: undefined});
            });
        } else {
            console.error("Carrinho não encontrado para o usuário.");
            res.render("carrinho", {items: undefined});
        }
    }).catch((error) => {
        console.error("Erro ao buscar carrinho:", error);
        res.render("carrinho", {items: undefined});
    });
});



/*
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
*/


/*router.get('/testarForeach', (req, res) => {
    var dataHoraAtual = new Date();
    var dataAtual = dataHoraAtual.toISOString().split('T')[0];
    var user_id = 6

    carrinho.findOne({where: {usuarioIdUsuario: user_id}}).then( carrinhoResult => {
        item_carrinho.findAll({where: {carrinhoIdCarrinho: carrinhoResult.id_carrinho}}).then( itemResult => {

            pedido.create({
                    data_realizacao: dataAtual ,
                    frete: "000",
                    status: "processando",
                    endereco: "rua tal",
                    formaPagamento: "pix",
                    valorTotal: "R$100",
                    usuarioIdUsuario: user_id
                }).then( pedidoResult => {

                    itemResult.forEach( i => {
                        item_Pedido.create({
                            quantidade: i.quantidade,
                            PedidoIdPedido: pedidoResult.id_pedido,
                            productIdProduto: i.productIdProduto
                        })
                    })
                        
                })
        })
    })

    res.render("pagamento")

})

*/



module.exports = router;