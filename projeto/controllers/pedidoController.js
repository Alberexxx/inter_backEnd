const express = require('express');
const router = express.Router();
const pedido = require("../models/pedido")
const userAuht = require('../middlewares/userAuth')


// --------> CRUD <-------- //

//READ
router.get('/pedidos', (req, res) => {
    res.render("statusPedido")
})

router.post('/finalizarPedido', (req, res) => {
    var dataHoraAtual = new Date();
    var dataAtual = dataHoraAtual.toISOString().split('T')[0];
    var horaAtual = dataHoraAtual.toTimeString().split(' ')[0];
    var dataHora = dataAtual + " " + horaAtual

    var valor = req.body.valor
    var pagamento = req.body.pagamento
    var endereco = req.body.cep + " | " + req.body.numero + " | " +  req.body.endereco + " | " + req.body.referencia 

    var idUsuario = 6

  pedido.create({
        data_realizacao: dataHora,
        frete: "GRATIS",
        status: "processando",
        endereco: endereco,
        formaPagmento: pagamento,
        valorTotal: valor,
        usuarioIdUsuario: idUsuario
  }).then( () => {
    res.render("home")
  })
    
})

module.exports = router;