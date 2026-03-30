
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tbl02',
    password: 'Henrique1207',
    port: 5432,
});
module.exports = pool;



const http = require('http');
const servidor = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.url)

    if (req.url === '/usuarios' && req.method === 'GET') {

        try {
            const resultado = await pool.query('SELECT * FROM usuarios');
            const dados = resultado.rows;
            return res.end(JSON.stringify(dados));

        } catch (erro) {
            console.error("Erro ao listar:", erro);
            res.statusCode = 500;
            return res.end(JSON.stringify({ erro: "Erro ao listar usuários" }));
        }
    }
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Caminho não encontrado" }));


});
// http://localhost:3000/usuarios
servidor.listen(3000)