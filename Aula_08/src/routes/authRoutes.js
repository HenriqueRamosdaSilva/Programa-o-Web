const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { autenticarToken, autorizarRole } = require('../middlewares/authMiddleware');

// Rotas públicas
router.post('/register', authController.registrar);
router.post('/login', authController.login);

// Rota protegida apenas por autenticação (/me)
router.get('/me', autenticarToken, authController.perfilMe);

// Rota protegida por autenticação E por papel específico (/admin)
router.get('/admin', autenticarToken, autorizarRole('admin'), (req, res) => {
    res.json({ 
        mensagem: `Bem-vindo à Área Administrativa, ${req.usuario.usuario}!`,
        painel: "Configurações confidenciais do sistema."
    }); // 
});

module.exports = router;