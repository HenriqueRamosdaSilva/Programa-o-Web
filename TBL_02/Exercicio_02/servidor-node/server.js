const http = require('http'); 
const servidor = http.createServer((req, res) => { 
    res.setHeader('Content-Type', 'application/json');
    console.log(req.url)

    if (req.url === '/teste') {
        if(req.method === 'GET'){
            res.writeHead(200);
            return res.end(JSON.stringify({ 
                mensagem: " requisição realizada com sucesso!",
                metodo: req.method 
            }));
        }else {
            res.writeHead(405); 
            return res.end(JSON.stringify({ 
                erro: `Esse metodo não e permitido.`,
            }));
        }
    }else {
        res.writeHead(404);
        res.end(JSON.stringify({ erro: "Caminho não encontrado. Tente /teste" }));
    }
});

servidor.listen(3000)