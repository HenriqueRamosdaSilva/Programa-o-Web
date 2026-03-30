const http = require('http');

let contador_de_acessos = 0;
const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/contador') {
    contador_de_acessos++;
    return res.end(JSON.stringify({ acessos: contador_de_acessos }));

    }
    res.writeHead(404);
    res.end(JSON.stringify({ erro: "Caminho não encontrado" }));

});

servidor.listen(3000)