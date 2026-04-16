const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.listarTodos);

router.get('/total', produtosController.totalProdutos);

router.get('/:id', produtosController.buscarPorId);



module.exports = router;