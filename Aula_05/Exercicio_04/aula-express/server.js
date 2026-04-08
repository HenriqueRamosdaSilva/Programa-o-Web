const express = require('express');
const app = express();

app.get('/busca', (req, res) => {
    const valorRecebido = req.query.nome;

    res.json({
        resultado: valorRecebido || "Nenhum nome foi enviado na busca"
    });
});
app.listen(3000, () => { 
   console.log('Servidor rodando'); 
}); 

///busca?nome=valor