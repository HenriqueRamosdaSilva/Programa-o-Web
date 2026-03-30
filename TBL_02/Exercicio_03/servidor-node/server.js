const http = require('http');
const { json } = require('stream/consumers');

const produtos = [
    { id: 1, nome: "Teclado ", preco: 250.00 },
    { id: 2, nome: "Mouse ", preco: 150.00 },
    { id: 3, nome: "Monitor ", preco: 1200.00 }
]
const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.url)


    if (req.url === '/api/produtos'){
        res.writeHead(200);
        return res.end(JSON.stringify(produtos));

    }else if (req.url.startsWith('/api/produtos/')) {
        const partes = req.url.split('/');
        const idBuscado = parseInt(partes[3]); 
        const produtoEncontrado = produtos.find(p => p.id === idBuscado);
        if (produtoEncontrado) {
            res.writeHead(200);
            return res.end(JSON.stringify(produtoEncontrado));
        } else {
            res.writeHead(404);
            return res.end(JSON.stringify({ erro: "Produto não encontrado" }));
        }
    }else {
        res.writeHead(404);
        res.end(JSON.stringify({ erro: "Caminho não encontrado" }));
    }
});

servidor.listen(3000)