// Dados do cardápio
const menuItems = [
    // Burguers
    {
        id: 7,
        name: "Brasa Vini",
        description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), bacon, cebola caramelizada, geleia de pimenta, molho grill e cebola empanada",
        price: 25.00,
        image: "assets/imagens/brasa-vini.jpg",
        category: "Burguers"
    },
    {
        id: 2,
        name: "Super Brasa",
        description: "2 queijo cheddar ou mussarela (opção do cliente), 02 blends (120g cada) e bacon (fatiado)",
        price: 24.00,
        image: "assets/imagens/superbrasa.jpg",
        category: "Burguers"
    },
    {
        id: 6,
        name: "Brasa Gorgonzola",
        description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), bacon, cebola caramelizada e gorgonzola",
        price: 21.00,
        image: "assets/imagens/brasagorgonzola.jpg",
        category: "Burguers"
    },
    {
        id: 4,
        name: "Braseiro",
        description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), bacon e cebola caramelizada",
        price: 18.00,
        image: "assets/imagens/braseiro.jpg",
        category: "Burguers"
    },
    {
        id: 3,
        name: "Brasa Empanado",
        description: "Pão brioche, molho grill, queijo cheddar ou mussarela, blend (120g) e 2 anéis de cebola empanada",
        price: 16.00,
        image: "assets/imagens/brasa-empanado.jpg",
        category: "Burguers"
    },
    {
        id: 5,
        name: "Brasa Bacon",
        description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), molho grill e bacon",
        price: 16.00,
        image: "assets/imagens/brasa-bacon.jpg",
        category: "Burguers"
    },
    {
        id: 1,
        name: "Brasa Tradicional",
        description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), molho grill e blend (120g)",
        price: 14.00,
        image: "assets/imagens/brasa-tradicional.jpg",
        category: "Burguers"
    },
    
    // Bebidas
    {
        id: 8,
        name: "Coca-Cola 1L",
        description: "Refrigerante Coca-Cola garrafa de 1 litro gelada",
        price: 9.00,
        image: "assets/imagens/coca1litro.png",
        category: "Bebidas"
    },
    {
        id: 9,
        name: "Coca-Cola Zero 1L",
        description: "Refrigerante Coca-Cola Zero garrafa de 1 litro gelada",
        price: 9.00,
        image: "assets/imagens/cocazero1litro.png",
        category: "Bebidas"
    },
    {
        id: 10,
        name: "Guaraná Antarctica 1L",
        description: "Refrigerante Guaraná Antarctica garrafa de 1 litro gelada",
        price: 8.00,
        image: "assets/imagens/guarana.png",
        category: "Bebidas"
    },
    {
        id: 11,
        name: "Coca-Cola Lata",
        description: "Refrigerante Coca-Cola lata 350ml gelada",
        price: 6.00,
        image: "assets/imagens/cocacola.png",
        category: "Bebidas"
    },
    {
        id: 12,
        name: "Coca-Cola Zero Lata",
        description: "Refrigerante Coca-Cola Zero lata 350ml gelada",
        price: 6.00,
        image: "assets/imagens/cocazero.png",
        category: "Bebidas"
    },
    {
        id: 19,
        name: "Guaraná Antarctica Lata",
        description: "Refrigerante Guaraná Antarctica lata 350ml gelada",
        price: 5.00,
        image: "assets/imagens/guarana.png",
        category: "Bebidas"
    },
    {
        id: 18,
        name: "Guaraná Antarctica Zero Lata",
        description: "Refrigerante Guaraná Antarctica Zero lata 350ml gelada",
        price: 5.00,
        image: "assets/imagens/guaranazero.png",
        category: "Bebidas"
    },
    
    // Adicionais
    {
        id: 13,
        name: "Bacon",
        description: "Porção extra de bacon crocante (2 fatias)",
        price: 3.00,
        image: "assets/imagens/bacon.png",
        category: "Adicionais"
    },
    {
        id: 14,
        name: "Queijo Cheddar",
        description: "Porção extra de queijo cheddar (1 fatia)",
        price: 2.00,
        image: "assets/imagens/queijo-cheddar.avif",
        category: "Adicionais"
    },
    {
        id: 15,
        name: "Salada",
        description: "Alface, cebola e tomate",
        price: 1.00,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
        category: "Adicionais"
    },
    {
        id: 16,
        name: "Batata Frita",
        description: "Porção de batata frita crocante e dourada (300g)",
        price: 12.00,
        image: "assets/imagens/batatafrita.png",
        category: "Adicionais"
    },
    {
        id: 17,
        name: "Cebola Empanada",
        description: "Porção de anéis de cebola empanada crocante (2 anéis)",
        price: 2.00,
        image: "assets/imagens/cebolaempanada.png",
        category: "Adicionais"
    },
    {
        id: 20,
        name: "Blend",
        description: "Blend de carne artesanal (120g)",
        price: 6.00,
        image: "assets/imagens/blend.png",
        category: "Adicionais"
    },
    {
        id: 21,
        name: "Molho Gorgonzola",
        description: "Porção extra de molho gorgonzola cremoso",
        price: 3.00,
        image: "https://images.unsplash.com/photo-1643845258471-564274a30654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Jnb256b2xhJTIwY2hlZXNlJTIwc2F1Y2UlMjBibHVlfGVufDF8fHx8MTc3MzkyMTczOXww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Adicionais"
    },
    {
        id: 22,
        name: "Ovo",
        description: "Ovo frito para adicionar ao hambúrguer",
        price: 1.00,
        image: "https://images.unsplash.com/photo-1620572860868-45824e869129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGVnZyUyMHN1bm55JTIwc2lkZXxlbnwxfHx8fDE3NzM5MjE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "Adicionais"
    },
    {
        id: 23,
        name: "Sachê de Maionese",
        description: "Sachê individual de maionese",
        price: 0.50,
        image: "assets/imagens/images-sache.jpg",
        category: "Adicionais"
    },
    {
        id: 24,
        name: "Sachê de Ketchup",
        description: "Sachê individual de ketchup",
        price: 0.50,
        image: "assets/imagens/images-sache.jpg",
        category: "Adicionais"
    },
    {
        id: 25,
        name: "Sachê de Mostarda",
        description: "Sachê individual de mostarda",
        price: 0.50,
        image: "assets/imagens/images-sache.jpg",
        category: "Adicionais"
    },
    {
        id: 26,
        name: "Geleia de Pimenta",
        description: "Geleia de pimenta artesanal picante",
        price: 3.00,
        image: "assets/imagens/geleiadepimenta.png",
        category: "Adicionais"
    }
];