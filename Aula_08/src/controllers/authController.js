const jwt = require('jsonwebtoken');
const usuarios = require('../config/db');

// Cadastro de usuário
exports.registrar = (req, res) => {
    const { usuario, senha, role } = req.body; // [cite: 246, 413]

    // Validação básica de entrada
    if (!usuario || !senha) {
        return res.status(400).json({ erro: 'Preencha usuário e senha' }); // [cite: 94]
    }

    // Verifica se usuário já existe
    const existe = usuarios.find(u => u.usuario === usuario);
    if (existe) {
        return res.status(400).json({ erro: 'Este usuário já está cadastrado' });
    }

    // Define 'user' como padrão se nenhuma role for enviada
    const novoUsuario = {
        id: usuarios.length + 1,
        usuario,
        senha, // Em produção, use bcrypt aqui! [cite: 195]
        role: role || 'user'
    };

    usuarios.push(novoUsuario);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', usuario: novoUsuario.usuario });
};

// Login
exports.login = (req, res) => {
    const { usuario, senha } = req.body; // [cite: 91]

    const user = usuarios.find(u => u.usuario === usuario && u.senha === senha); // [cite: 95]
    if (!user) {
        return res.status(401).json({ erro: 'Credenciais inválidas' }); // [cite: 97]
    }

    // Geração do token contendo id, usuario e a role no payload
    const token = jwt.sign(
        { id: user.id, usuario: user.usuario, role: user.role }, // [cite: 343, 344, 345]
        process.env.SECRET_KEY, // [cite: 238]
        { expiresIn: '1h' } // [cite: 107]
    );

    res.json({ token }); // [cite: 108]
};

// Rota protegida /me (Perfil)
exports.perfilMe = (req, res) => {
    // Retorna os dados extraídos do token pelo middleware
    res.json({
        mensagem: 'Dados obtidos com sucesso do seu Token JWT',
        dadosToken: req.usuario
    });
};