const http = require('http'); 
const servidor = http.createServer((req, res) => { 
    res.setHeader('Content-Type', 'application/json');
    console.log(req.url)
    
    if (req.url.startsWith('/usuario/')) {
        const partes = req.url.split('/');
        const idRaw = partes[2];
        const idNovo = parseInt(idRaw);

        if (isNaN(idNovo)) {
            res.writeHead(400); 
            return res.end(JSON.stringify({ erro: "ID inválido. Use apenas números." }));
        }
        const resposta = {
            id: idNovo,
            nome: `Henrique ${idNovo}`,
            curso: "Sistemas de Informação"
        }
        res.writeHead(200); 
        res.end(JSON.stringify(resposta));
    }
});

servidor.listen(3000, () => {
    console.log("Servidor rodando! Teste em: http://localhost:3000/usuario/5");
});