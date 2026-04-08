const express = require('express');
const app = express();
app.get('/api/produto', (req, res) => {
    res.json({
        nome: "Notebook Gamer",
        preco: 4500.99
    });
});

app.listen(3000, () => { 
   console.log('Servidor rodando'); 
});  