const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite que seu HTML acesse o back-end
app.use(express.json());

// Configuração da conexão com o banco de dados SQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Seu usuário do MySQL
    password: '',      // Sua senha do MySQL
    database: 'kaka_burguer'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err);
        return;
    }
    console.log('Conectado ao banco SQL com sucesso!');
});

// ROTA DA API: Busca os itens do cardápio no banco
app.get('/api/cardapio', (req, res) => {
    const query = `
        SELECT p.id, p.nome, p.descricao, p.preco, p.imagem, c.nome as categoria 
        FROM produtos p 
        JOIN categorias c ON p.categoria_id = c.id
    `;

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});