const express = require('express');
const router = express.Router();
const pedido = require("../models/pedido")
const userAuht = require('../middlewares/userAuth')
const item_Pedido = require("../models/itemPedido")
const carrinho = require("../models/carrinho")
const item_carrinho = require("../models/itemCarrinho")

// --------> CRUD <-------- //

//READ
router.get('/pedidos', (req, res) => {
    res.render("statusPedido")
})

router.post('/finalizarPedido', (req, res) => {
    var dataHoraAtual = new Date();
    var dataAtual = dataHoraAtual.toISOString().split('T')[0];
    var horaAtual = dataHoraAtual.toTimeString().split(' ')[0];
    var dataHora = dataAtual + " " + horaAtual;

    var pagamento = req.body.opcao;
    var endereco = req.body.cep + " | " + req.body.numero + " | " + req.body.endereco + " | " + req.body.referencia;

    var user_id = 6;

    carrinho.findOne({ where: { usuarioIdUsuario: user_id } })
        .then(carrinhoResult => {
            item_carrinho.findAll({ where: { carrinhoIdCarrinho: carrinhoResult.id_carrinho } })
                .then(itemResult => {
                    pedido.create({
                        data_realizacao: dataHora,
                        frete: "000",
                        status: "processando",
                        endereco: endereco,
                        formaPagamento: pagamento,
                        ValorTotal: req.body.valorTotal,
                        usuarioIdUsuario: user_id
                    }).then(pedidoResult => {
                        if (itemResult.length > 0) {
                            const createItemPromises = itemResult.map(i => {
                                return item_Pedido.create({
                                    quantidade: i.quantidade,
                                    PedidoIdPedido: pedidoResult.id_pedido,
                                    productIdProduto: i.productIdProduto
                                });
                            });

                            Promise.all(createItemPromises)
                                .then(() => {
                                    res.redirect("/PedidoFinalizado");
                                })
                                .catch((err) => {
                                    res.send("Erro ao criar os itens do pedido");
                                });
                        } else {
                            res.send("Nenhum item no carrinho encontrado");
                        }
                    }).catch((err) => {
                        res.send("Erro ao criar pedido");
                    });
                }).catch((err) => {
                    res.send("Erro ao encontrar itens do carrinho");
                });
        }).catch((err) => {
            res.send("Erro ao localizar o carrinho");
        });
});


/*router.post('/finalizarPedido', (req, res) => {
    var dataHoraAtual = new Date();
    var dataAtual = dataHoraAtual.toISOString().split('T')[0];
    var horaAtual = dataHoraAtual.toTimeString().split(' ')[0];
    var dataHora = dataAtual + " " + horaAtual

    var pagamento = req.body.opcao
    var endereco = req.body.cep + " | " + req.body.numero + " | " +  req.body.endereco + " | " + req.body.referencia 

    var user_id = 6

    carrinho.findOne({where: {usuarioIdUsuario: user_id}}).then( carrinhoResult => {
        item_carrinho.findAll({where: {carrinhoIdCarrinho: carrinhoResult.id_carrinho}}).then( itemResult => {

            pedido.create({
                    data_realizacao: dataHora ,
                    frete: "000",
                    status: "processando",
                    endereco: endereco,
                    formaPagamento: pagamento,
                    ValorTotal: "10000",
                    usuarioIdUsuario: user_id
                }).then( pedidoResult => {

                    itemResult.forEach( i => {

                        if(i !== undefined) {
                            item_Pedido.create({
                            quantidade: i.quantidade,
                            PedidoIdPedido: pedidoResult.id_pedido,
                            productIdProduto: i.productIdProduto
                        })
                        } else {
                            res.send("nenhum item do carrinho encontrado")
                        }
                        
                        
                    }).catch( (err) => {res.send("erro ao criar os itens")});

                        res.redirect("/PedidoFinalizado")

                }).catch( (err) => {res.send("erro ao criar pedido")})

        }).catch( (err) => {res.send("erro ao encontrar itens do carrinho")})
    }).catch( (err) => {
        res.send("erro ao localizar o carrinho")
    })

    
})*/

router.get("/pedidoFinalizado", (req, res) => {
    item_carrinho.destroy({
        where: {
            carrinhoIdCarrinho: 5
        }
    }).then( () => {
        res.render("confirmacaoPedido")
    })
})

router.get("/confirmacaoPedido" , (req, res) => {
    res.render("confirmacaoPedido")
})

router.get("/excluirItems" , (req, res) => {
    item_carrinho.destroy({
        where: {
            carrinhoIdCarrinho: 6
        }
    }).then( () => {
        res.render("pagamento")
    })

})
module.exports = router;