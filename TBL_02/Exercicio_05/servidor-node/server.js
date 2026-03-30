
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



    if (req.url.startsWith('/usuarios/')) {
        try {
            const partes = req.url.split('/');
            const idBruto = partes[2];
            if (!idBruto || isNaN(idBruto)) {
                res.statusCode = 400;
                return res.end(JSON.stringify({ erro: "O ID e invalido" }));
            }

            const id = parseInt(idBruto);
            const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

            if (resultado.rows.length > 0) {
                return res.end(JSON.stringify(resultado.rows[0]));
            } else {

                res.statusCode = 404;
                return res.end(JSON.stringify({ mensagem: "usuário não encontrado" }));
            }

        } catch (erro) {

            console.error("Erro no banco:", erro);
            res.statusCode = 500;
            return res.end(JSON.stringify({ erro: "Erro ao buscar usuário" }));
        }
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Caminho não encontrado" }));

});
// http://localhost:3000/usuarios/2    só tem id 1 ao 6
servidor.listen(3000)