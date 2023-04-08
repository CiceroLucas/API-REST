const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Retorna os pedidos'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).send({
        msg: 'O pedido foi criado'
    })
})

router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        msg: 'Detalhes do pedido',
        id_pedido: id
    })
    
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'Pedido excluido'
    })
})

module.exports = router