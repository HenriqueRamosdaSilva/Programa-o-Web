const express = require('express');
const app = express();

app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    
    res.json({
        id: id,
        mensagem: `O produto com ID ${id} foi carregado com sucesso.`
    });
});

app.listen(3000, () => { 
   console.log('Servidor rodando'); 
}); 