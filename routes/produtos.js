const express = require('express')
const router = express.Router()

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Retorna os produdos'
    })
})

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        msg: 'Insere um produto'
    })
})

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id==='especial') {
        res.status(200).send({
            msg: 'Você descobriu um ID especial'
        })
    } else {
        res.status(200).send({
            msg: 'Você passou um ID'
        })
    }
})

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        msg: 'Produto alterado'
    })
})

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'Produto excluido'
    })
})

module.exports = router