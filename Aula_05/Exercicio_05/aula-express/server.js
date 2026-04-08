const express = require('express');
const app = express();
app.get('/api/alunos', (req, res) => {
    const alunos = [
        { id: 1, nome: 'Henrique Ramos', curso: 'Sistemas de Informação' },
        { id: 2, nome: 'Alerrandro', curso: 'Direito da informação' },
        { id: 3, nome: 'Marcelo', curso: 'Engenharia computacional gotica' },
        { id: 4, nome: 'Yassushi', curso: 'Pedagogia Sistemas de Informação'}
    ];

    res.json(alunos);
});

app.listen(3000, () => { 
   console.log('Servidor rodando'); 
}); 