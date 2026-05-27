const express = require('express'); 
const jwt = require('jsonwebtoken'); 
 
const app = express(); 
app.use(express.json()); 
 
const SECRET = 'segredo_super_forte'; 
 
// "Banco de dados" 
const usuarios = [ 
   { id: 1, usuario: 'admin', senha: '123', role: 'admin' }, 
   { id: 2, usuario: 'joao', senha: '123', role: 'user' } 
]; 
 
// LOGIN 
app.post('/login', (req, res) => { 
   const { usuario, senha } = req.body; 
 
   const user = usuarios.find(u => u.usuario === usuario && u.senha === senha); 
 
   if (!user) { 
       return res.status(401).json({ erro: 'Credenciais inválidas' }); 
   } 
 
   const token = jwt.sign( 
       { 
           id: user.id, 
           usuario: user.usuario, 
           role: user.role 
       }, 
       SECRET, 
       { expiresIn: '1h' } 
   ); 
 
   res.json({ token }); 
}); 
 
// MIDDLEWARE DE AUTENTICAÇÃO 
function autenticarToken(req, res, next) { 
   const authHeader = req.headers['authorization']; 
 
   if (!authHeader) { 
       return res.status(401).json({ erro: 'Token não enviado' }); 
   } 
 
   const token = authHeader.split(' ')[1]; 
 
   jwt.verify(token, SECRET, (err, decoded) => { 
       if (err) { 
           return res.status(403).json({ erro: 'Token inválido' }); 
       } 
 
       req.usuario = decoded; 
       next(); 
   }); 
} 
 
// MIDDLEWARE DE AUTORIZAÇÃO (ROLE) 
function autorizarRole(roleNecessaria) { 
   return (req, res, next) => { 
       if (!req.usuario) { 
           return res.status(500).json({ erro: 'Usuário não carregado' }); 
       } 
 
       if (req.usuario.role !== roleNecessaria) { 
           return res.status(403).json({ erro: 'Acesso negado' }); 
       } 
 
       next(); 
   }; 
} 
 
// ROTAS 
 
app.get('/perfil', autenticarToken, (req, res) => { 
   res.json({ usuario: req.usuario }); 
}); 
 
app.get('/admin', 
   autenticarToken, 
   autorizarRole('admin'), 
(req, res) => { 
res.json({ mensagem: 'Área administrativa' }); 
} 
); 
app.listen(3000, () => { 
console.log('Servidor rodando em http://localhost:3000'); 
});