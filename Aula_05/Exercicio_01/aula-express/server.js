const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Bem vindo ao meu sistema de rotas basicas');
});

app.get('/sobre', (req, res) => {
    res.send('Esse e um sistema de rotas basicas que desenvolvi para praticar o Node.js.');
});

app.get('/contato', (req, res) => {
    res.send('Voce pode entrar em contato comigo através do e-mail: hramosdasilva1202@gmail.com');
});

app.listen(3000, () => { 
   console.log('Servidor rodando'); 
}); 