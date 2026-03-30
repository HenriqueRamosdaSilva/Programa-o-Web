const http = require('http'); 
 
const servidor = http.createServer((req, res) => { 
 
   if (req.url === '/api') { 
 
       res.setHeader('Content-Type', 'application/json'); 
 
       const dados = { 
           nome: 'Carlos', 
           idade: 28 
       }; 
 
       res.end(JSON.stringify(dados)); 
 
   } else { 
       res.end('Rota inválida'); 
   } 
 
}); 
 
servidor.listen(3000); 