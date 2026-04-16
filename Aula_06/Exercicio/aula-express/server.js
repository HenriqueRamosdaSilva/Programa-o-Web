const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes'); 


app.use(express.json());
app.use('/produtos', produtosRoutes);
app.use('/usuarios', usuariosRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});