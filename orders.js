// Estado do carrinho
let cart = [];
let selectedItem = null;
let deliveryFee = 0;

// Renderizar itens do pedido
function renderOrderItems() {
    const burgersGrid = document.getElementById('orderBurgersGrid');
    const drinksGrid = document.getElementById('orderDrinksGrid');
    const addonsGrid = document.getElementById('orderAddonsGrid');

    // Burguers
    menuItems.filter(item => item.category === 'Burguers').forEach(item => {
        burgersGrid.innerHTML += createOrderItemHTML(item);
    });

    // Bebidas
    menuItems.filter(item => item.category === 'Bebidas').forEach(item => {
        drinksGrid.innerHTML += createOrderItemHTML(item);
    });

    // Adicionais
    menuItems.filter(item => item.category === 'Adicionais').forEach(item => {
        addonsGrid.innerHTML += createOrderItemHTML(item);
    });
}

function createOrderItemHTML(item) {
    return `
        <div class="menu-item" onclick="openAddItemModal(${item.id})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                    <div class="menu-item-price">R$ ${item.price.toFixed(2)}</div>
                    <button class="btn btn-primary" style="padding: 8px 16px;" onclick="event.stopPropagation(); openAddItemModal(${item.id})">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Abrir modal de adicionar item
function openAddItemModal(itemId) {
    selectedItem = menuItems.find(item => item.id === itemId);
    if (!selectedItem) return;

    document.getElementById('selectedItemId').value = itemId;
    document.getElementById('itemModalTitle').textContent = selectedItem.name;
    document.getElementById('itemModalImage').src = selectedItem.image;

    // Mostrar/ocultar campos baseado na categoria
    const isBurger = selectedItem.category === 'Burguers';
    document.getElementById('cheeseTypeGroup').style.display = isBurger ? 'block' : 'none';
    document.getElementById('meatDonenessGroup').style.display = isBurger ? 'block' : 'none';

    document.getElementById('addItemModal').classList.add('active');
}

function closeAddItemModal() {
    document.getElementById('addItemModal').classList.remove('active');
    document.getElementById('addItemForm').reset();
}

// Adicionar ao carrinho
function addToCart(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const itemId = parseInt(formData.get('selectedItemId'));
    const item = menuItems.find(i => i.id === itemId);
    
    if (!item) return;

    const cartItem = {
        ...item,
        quantity: 1,
        cheeseType: formData.get('cheeseType') || '',
        meatDoneness: formData.get('meatDoneness') || '',
        notes: formData.get('notes') || ''
    };

    // Verificar se item já existe no carrinho com as mesmas opções
    const existingIndex = cart.findIndex(i => 
        i.id === cartItem.id && 
        i.cheeseType === cartItem.cheeseType && 
        i.meatDoneness === cartItem.meatDoneness &&
        i.notes === cartItem.notes
    );

    if (existingIndex >= 0) {
        cart[existingIndex].quantity++;
    } else {
        cart.push(cartItem);
    }

    updateCart();
    closeAddItemModal();
}

// Atualizar carrinho
function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-state" style="padding: 40px 20px;"><p class="text-gray">Carrinho vazio</p></div>';
    } else {
        cartItemsDiv.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${item.cheeseType ? `<p>Queijo: ${item.cheeseType}</p>` : ''}
                    ${item.meatDoneness ? `<p>Ponto: ${item.meatDoneness}</p>` : ''}
                    ${item.notes ? `<p>Obs: ${item.notes}</p>` : ''}
                    <p style="color: var(--primary); font-weight: bold;">R$ ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                    <span style="color: white; min-width: 20px; text-align: center;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${index})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateTotals();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Atualizar totais
function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;

    document.getElementById('subtotalAmount').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('deliveryFee').textContent = `R$ ${deliveryFee.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `R$ ${total.toFixed(2)}`;
}

// Modal de Checkout
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Adicione itens ao carrinho primeiro!');
        return;
    }
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('checkoutForm').reset();
    document.getElementById('addressGroup').style.display = 'none';
    document.getElementById('changeGroup').style.display = 'none';
}

// Atualizar taxa de entrega
function updateDeliveryFee() {
    const deliveryOption = document.querySelector('input[name="deliveryOption"]:checked').value;
    const addressGroup = document.getElementById('addressGroup');
    const addressField = document.querySelector('textarea[name="customerAddress"]');
    
    if (deliveryOption === 'entrega') {
        deliveryFee = 5.00;
        addressGroup.style.display = 'block';
        addressField.required = true;
    } else {
        deliveryFee = 0;
        addressGroup.style.display = 'none';
        addressField.required = false;
    }
    
    updateTotals();
}

// Toggle campo de troco
function toggleChangeField() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const changeGroup = document.getElementById('changeGroup');
    const changeField = document.querySelector('input[name="changeFor"]');
    
    if (paymentMethod === 'dinheiro') {
        changeGroup.style.display = 'block';
        changeField.required = false;
    } else {
        changeGroup.style.display = 'none';
        changeField.required = false;
    }
}

// Finalizar pedido
function placeOrder(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const orderData = {
        customerName: formData.get('customerName'),
        customerPhone: formData.get('customerPhone'),
        deliveryOption: formData.get('deliveryOption'),
        customerAddress: formData.get('customerAddress'),
        paymentMethod: formData.get('paymentMethod'),
        changeFor: formData.get('changeFor'),
        items: cart,
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        deliveryFee: deliveryFee,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + deliveryFee,
        timestamp: new Date().toISOString()
    };

    console.log('Pedido realizado:', orderData);
    
    // Salvar no localStorage (simulação)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Limpar carrinho
    cart = [];
    deliveryFee = 0;
    updateCart();
    
    closeCheckoutModal();
    openSuccessModal();
}

function openSuccessModal() {
    document.getElementById('successModal').classList.add('active');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Fechar modais ao clicar fora
document.getElementById('addItemModal').addEventListener('click', function(e) {
    if (e.target === this) closeAddItemModal();
});

document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) closeCheckoutModal();
});

document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) closeSuccessModal();
});

// Inicializar
if (document.getElementById('orderBurgersGrid')) {
    renderOrderItems();
    updateCart();
}