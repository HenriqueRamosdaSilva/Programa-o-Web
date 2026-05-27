const jwt = require('jsonwebtoken');

// Middleware para verificar se o usuário está logado
function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(401).json({ erro: 'Token não enviado' }); // [cite: 114, 186]
    }

    // Extrai o token do formato "Bearer TOKEN"
    const token = authHeader.split(' ')[1]; // [cite: 115]

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ erro: 'Token inválido ou expirado' }); // [cite: 118]
        }

        // Injeta os dados decodificados do token na requisição
        req.usuario = decoded; // [cite: 122]
        next(); // [cite: 123]
    });
}

// Middleware Genérico de Autorização (Desafio do roteiro)
function autorizarRole(roleNecessaria) {
    return (req, res, next) => {
        if (!req.usuario) {
            return res.status(500).json({ erro: 'Usuário não carregado no escopo' }); // [cite: 370]
        }

        // Verifica se a role do usuário coincide com a necessária para a rota
        if (req.usuario.role !== roleNecessaria) {
            return res.status(403).json({ erro: 'Acesso negado: privilégios insuficientes' }); // 
        }

        next(); // [cite: 375]
    };
}

module.exports = { autenticarToken, autorizarRole };