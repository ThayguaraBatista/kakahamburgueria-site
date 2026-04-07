# KAKA BURGUER - Site HTML/CSS/JS

## 📋 Descrição
Site completo da hamburgueria KAKA BURGUER convertido para HTML, CSS e JavaScript puro, pronto para rodar no VSCode ou qualquer navegador.

## 🎨 Características
- **Design Moderno**: Tema preto e laranja responsivo
- **Páginas Completas**: Home, Sobre, Cardápio, Pedidos e Contato
- **Sistema de Pedidos**: Carrinho funcional com opções de personalização
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Sem Dependências**: Apenas HTML, CSS e JavaScript vanilla

## 📁 Estrutura de Arquivos
```
html-version/
├── index.html          # Página inicial
├── sobre.html          # Página sobre a empresa
├── cardapio.html       # Cardápio completo
├── pedidos.html        # Sistema de pedidos
├── contato.html        # Formulário de contato
├── styles.css          # Estilos globais
├── script.js           # Scripts gerais
├── menu-data.js        # Dados do cardápio
├── orders.js           # Lógica de pedidos
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Método 1: Abrir direto no navegador
1. Baixe todos os arquivos para uma pasta no seu computador
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Método 2: Usar o VSCode com Live Server
1. Abra a pasta no VSCode
2. Instale a extensão "Live Server" se ainda não tiver
3. Clique com botão direito no `index.html`
4. Selecione "Open with Live Server"
5. O site abrirá automaticamente com auto-reload

### Método 3: Servidor local Python
```bash
# Python 3
python -m http.server 8000

# Depois abra no navegador:
# http://localhost:8000
```

## 📱 Páginas Disponíveis

### 🏠 Home (index.html)
- Hero section com chamada para ação
- Features: Receitas Exclusivas, Ingredientes Premium, Entrega Rápida
- Navegação para cardápio e pedidos

### 📖 Sobre (sobre.html)
- História da empresa
- Valores: Paixão, Qualidade e Comunidade
- Informações sobre a equipe

### 🍔 Cardápio (cardapio.html)
- **7 Hambúrgueres**: Brasa Vini, Super Brasa, Brasa Gorgonzola, Braseiro, Brasa Empanado, Brasa Bacon, Brasa Tradicional
- **8 Bebidas**: Coca-Cola, Coca-Cola Zero, Guaraná Antarctica (1L e latas)
- **5 Adicionais**: Bacon, Queijo Cheddar, Salada, Batata Frita, Cebola Empanada
- Modal para visualizar imagens ampliadas

### 🛒 Pedidos (pedidos.html)
- Sistema de carrinho funcional
- Opções de personalização para hambúrgueres:
  - Tipo de queijo (Cheddar ou Mussarela)
  - Ponto da carne (Mal passado, Ao ponto, Bem passado)
  - Observações personalizadas
- Opções de entrega:
  - Retirada (Grátis)
  - Entrega (R$ 5,00)
- Formas de pagamento:
  - PIX
  - Cartão de Crédito
  - Cartão de Débito
  - Dinheiro (com opção de troco)
- Cálculo automático de totais

### 📧 Contato (contato.html)
- Informações de contato completas
- Formulário funcional
- Horário de funcionamento
- Links para redes sociais

## 🎨 Cores do Tema
```css
--primary: #FF6B00    /* Laranja */
--black: #000000      /* Preto */
--white: #FFFFFF      /* Branco */
--gray: #808080       /* Cinza */
--dark-gray: #1a1a1a  /* Cinza escuro */
```

## ⚙️ Funcionalidades JavaScript

### Menu Mobile
- Hamburger menu responsivo
- Navegação suave

### Carrinho de Pedidos
- Adicionar/remover itens
- Alterar quantidades
- Cálculo automático de totais
- Persistência no localStorage

### Formulários
- Validação de campos
- Formatação automática de telefone
- Feedback visual
- Mensagens de sucesso/erro

### Animações
- Scroll suave
- Fade-in ao scroll
- Hover effects
- Modal transitions

## 💾 Dados Salvos (localStorage)
O site usa localStorage para simular persistência de dados:
- `orders`: Pedidos realizados
- `contactMessages`: Mensagens de contato enviadas

## 📱 Responsividade
- **Desktop**: Layout completo com 3 colunas
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout de 1 coluna com menu hamburger

## 🔧 Personalização

### Mudar Cores
Edite as variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary: #FF6B00; /* Sua cor aqui */
}
```

### Adicionar/Remover Itens do Cardápio
Edite o arquivo `menu-data.js`:
```javascript
menuItems.push({
    id: 20,
    name: "Novo Item",
    description: "Descrição",
    price: 15.00,
    image: "url-da-imagem",
    category: "Burguers" // ou "Bebidas" ou "Adicionais"
});
```

### Mudar Informações de Contato
Edite diretamente no arquivo `contato.html`

## 🌐 Compatibilidade
- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers

## 📝 Notas Importantes

1. **Imagens**: As imagens usam URLs do Unsplash como placeholder. Para produção, substitua pelas imagens reais da hamburgueria.

2. **Pedidos**: Os pedidos são salvos apenas no localStorage do navegador (dados locais). Para um sistema real, você precisará de um backend.

3. **Formulário de Contato**: O formulário simula o envio. Para funcionamento real, conecte a um serviço de email ou backend.

4. **Taxa de Entrega**: Configurada como R$ 5,00. Edite no arquivo `orders.js` para alterar.

## 🚀 Próximos Passos para Produção

1. **Backend**: Implementar servidor para processar pedidos reais
2. **Banco de Dados**: Salvar pedidos e mensagens
3. **Pagamento**: Integrar gateway de pagamento (Mercado Pago, PagSeguro, etc.)
4. **WhatsApp**: Adicionar integração para enviar pedidos via WhatsApp
5. **Google Maps**: Adicionar mapa com localização
6. **SEO**: Otimizar meta tags e estrutura
7. **Analytics**: Adicionar Google Analytics ou similar

## 💡 Dicas de Uso no VSCode

1. **Extensões Recomendadas**:
   - Live Server (para auto-reload)
   - Prettier (formatação de código)
   - HTML CSS Support
   - JavaScript (ES6) code snippets

2. **Atalhos Úteis**:
   - `Alt + L + O`: Abrir com Live Server
   - `Ctrl + /`: Comentar linha
   - `Ctrl + Shift + F`: Buscar em todos os arquivos

3. **Debug**:
   - Abra o Console do navegador (F12)
   - Verifique erros e logs
   - Use `console.log()` para debug

## 📞 Suporte
Para dúvidas ou problemas, verifique:
- Console do navegador para erros JavaScript
- Network tab para problemas de carregamento
- Certifique-se de que todos os arquivos estão na mesma pasta

## 🎉 Pronto!
Seu site está pronto para usar! Abra o `index.html` e navegue entre as páginas.

**Bom apetite! 🍔🔥**
