-- 1. Criar o banco de dados (opcional, caso já não tenha)
CREATE DATABASE kaka_burguer;
USE kaka_burguer;

-- 2. Criar a tabela de categorias (boa prática para organização)
CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

-- 3. Criar a tabela de produtos
CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- 4. Inserir as categorias
INSERT INTO categorias (nome) VALUES ('Burguers'), ('Bebidas'), ('Adicionais');

-- 5. Inserir os produtos baseados no seu menu-data.js
INSERT INTO produtos (nome, descricao, preco, imagem, categoria_id) VALUES 
('Brasa Vini', 'Pão brioche, queijo cheddar ou mussarela, blend (120g), bacon, cebola caramelizada, geleia de pimenta, molho grill e cebola empanada', 25.00, 'assets/imagens/brasa-vini.jpg', 1),
('Super Brasa', '2 queijo cheddar ou mussarela, 02 blends (120g cada) e bacon (fatiado)', 24.00, 'assets/imagens/superbrasa.jpg', 1),
('Brasa Gorgonzola', 'Pão brioche, queijo cheddar ou mussarela, blend (120g), bacon, cebola caramelizada e gorgonzola', 21.00, 'assets/imagens/brasagorgonzola.jpg', 1),
('Coca-Cola 1L', 'Refrigerante Coca-Cola garrafa de 1 litro gelada', 9.00, 'assets/imagens/coca1litro.png', 2);