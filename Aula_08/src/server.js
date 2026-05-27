require('dotenv').config(); // Sempre na primeira linha do app! [cite: 230, 264]
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json()); // Habilita o parse de JSON no Body [cite: 83]

// Injeta as rotas organizadas
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000; // [cite: 251]
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando perfeitamente em http://localhost:${PORT}`);
});