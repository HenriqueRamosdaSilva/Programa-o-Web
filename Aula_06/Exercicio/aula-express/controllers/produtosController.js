const produtos = [
    { id: 1, nome: "Teclado ", preco: 250.00 },
    { id: 2, nome: "Mouse ", preco: 15.00 },
    { id: 3, nome: "Fone ", preco: 20.00 },
    { id: 4, nome: "GTA VI ", preco: 1500.00 },
    { id: 5, nome: "Ferrari ", preco: 15000000.00 }
];

const produtosController = {
    listarTodos: (req, res) => {
        res.status(200).json({
            mensagem: "Sucesso",
            dados: produtos
        });
    },

    buscarPorId: (req, res) => {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ 
                erro: "ERRO",
                mensagem: "O parâmetro ID deve ser um número." 
            });
        }
        const produto = produtos.find(p => p.id === parseInt(id));

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.status(200).json({
            mensagem: "Sucesso",
            dados: produto
        });
    },

    totalProdutos: (req, res) => {
        res.status(200).json({
            total: produtos.length
        });
    }


    };



module.exports = produtosController;