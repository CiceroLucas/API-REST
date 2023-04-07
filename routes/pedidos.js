const express = require('express')
const router = express.Router()

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Retorna os pedidos'
    })
})

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(201).send({
        msg: 'O pedido foi criado'
    })
})

//RETORNA DADOS DE UM PEDIDO
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        msg: 'Detalhes do pedido',
        id_pedido: id
    })
    
})

//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'Pedido excluido'
    })
})

module.exports = router