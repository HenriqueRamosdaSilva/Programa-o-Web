const express = require('express');
const app = express();

app.use(express.json());

let produtos = [
    { id: 1, nome: 'Teclado', preco: 150.00 },
    { id: 2, nome: 'Mouse', preco: 20.00 }
];

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto = {
        id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
        nome,
        preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const produto = produtos.find(p => p.id === parseInt(id));

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    }
    res.json(produto);
});

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const index = produtos.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado para atualização." });
    }

    produtos[index] = { ...produtos[index], nome, preco };
    res.json(produtos[index]);
});


app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado para exclusão." });
    }

    const produtoRemovido = produtos.splice(index, 1);
    res.json({ mensagem: "Produto removido com sucesso!", produto: produtoRemovido });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});