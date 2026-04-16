// lista de usuários (simulação) 
const usuarios = [ 
   { id: 1, nome: 'Ana' }, 
   { id: 2, nome: 'Carlos' } 
]; 
 
// listar todos 
function listarUsuarios(req, res) { 
   res.status(200).json({
            mensagem: "Sucesso",
            dados: usuarios
        });
} 
 
// buscar por id 
function buscarUsuario(req, res) { 
 
   const id = parseInt(req.params.id); 



    if (isNaN(id)) {
    return res.status(400).json({ 
        erro: "ERRO",
        mensagem: "O parâmetro ID deve ser um número." 
    });
}
 
   const usuario = usuarios.find(u => u.id === id); 
 
   if (!usuario) { 
       return res.status(404).json({ erro: 'Usuário não encontrado' }); 
   } 
 
   res.status(200).json({
    mensagem: "Sucesso",
    dados: usuario
});
} 
 
module.exports = { 
   listarUsuarios, 
   buscarUsuario 
}; 