import { useState } from "react";
import { Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import burgerImage from "figma:asset/1dbb5febf4fcff53bdbf184e704f25343eaa8463.png";
import superBrasaImage from "figma:asset/0782e9633a5e8a21c6964ad2f66bb25ffd422898.png";
import brasaEmpanadoImage from "figma:asset/2aa3ff027bb3d5f7086fa5f32b1f87999c4617f0.png";
import braseiroImage from "figma:asset/f93ad1a6a436b56911c73c31a9ce0fe62791f51c.png";
import brasaBaconImage from "figma:asset/72e10428af6e34a0fc546276059d8d2df9013da5.png";
import brasaGorgonzolaImage from "figma:asset/1705c6b624b67e6f28c7201733b4ed081f65754b.png";
import brasaViniImage from "figma:asset/62a3fc2b992f55d3a531c8e87c354c6e62158b30.png";
import cocaCola1LImage from "figma:asset/6fd8cd36bf8251f8d73d5c2eb915583f93c96173.png";
import cocaColaZero1LImage from "figma:asset/1acd73e01008cb7ec505d5ebbe6ff0e8fc53d7a7.png";
import guarana1LImage from "figma:asset/97e5aaeda5e360c580a2f5f3e240156e83b6ad69.png";
import cocaColaLataImage from "figma:asset/59eef40743255e8903be3c1c906df4f93012d409.png";
import cocaColaZeroLataImage from "figma:asset/f1c2407be53cecc238203d6f2e160ec8ac7c9db1.png";
import guaranaZeroLataImage from "figma:asset/5d27e69709bc47ef438c6bb4e412b3718b98e59a.png";
import guaranaLataImage from "figma:asset/4fcc38f89f88333810b7dde95890ec02314e1cc6.png";
import batataFritaImage from "figma:asset/358ad12e7504e3cd16b96f6e413cfff64962d0c7.png";
import saladaImage from "figma:asset/90ff3bb5237b2155001de86654f470eb1847f963.png";
import baconImage from "figma:asset/6cdc26fd287679264da6ff0341ca25f536de2db0.png";
import cheddarImage from "figma:asset/e60995c864e73dcac424e5255318f8f76b47c0fd.png";
import blendImage from "figma:asset/46f1fbeeaaa3e18cd61ef6f1ad6099b16c26f45e.png";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
  meatDoneness: string;
  cheeseType: string;
  notes?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 7,
    name: "Brasa Vini",
    description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), bacon, cebola caramelizada, geleia de pimenta, molho grill e cebola empanada",
    price: 25.00,
    image: brasaViniImage,
    category: "Burguers"
  },
  {
    id: 2,
    name: "Super Brasa",
    description: "2 queijo cheddar ou mussarela (opção do cliente), 02 blends (120g cada) e bacon (fatiado)",
    price: 24.00,
    image: superBrasaImage,
    category: "Burguers"
  },
  {
    id: 6,
    name: "Brasa Gorgonzola",
    description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), bacon, cebola caramelizada e gorgonzola",
    price: 21.00,
    image: brasaGorgonzolaImage,
    category: "Burguers"
  },
  {
    id: 4,
    name: "Braseiro",
    description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), bacon e cebola caramelizada",
    price: 18.00,
    image: braseiroImage,
    category: "Burguers"
  },
  {
    id: 3,
    name: "Brasa Empanado",
    description: "Pão brioche, molho grill, queijo cheddar ou mussarela, blend (120g) e 2 anéis de cebola empanada",
    price: 16.00,
    image: brasaEmpanadoImage,
    category: "Burguers"
  },
  {
    id: 5,
    name: "Brasa Bacon",
    description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), blend (120g), molho grill e bacon",
    price: 16.00,
    image: brasaBaconImage,
    category: "Burguers"
  },
  {
    id: 1,
    name: "Brasa Tradicional",
    description: "Pão brioche, queijo cheddar ou mussarela (opção do cliente), molho grill e blend (120g)",
    price: 14.00,
    image: burgerImage,
    category: "Burguers"
  },
  // Bebidas
  {
    id: 8,
    name: "Coca-Cola 1L",
    description: "Refrigerante Coca-Cola garrafa de 1 litro gelada",
    price: 9.00,
    image: cocaCola1LImage,
    category: "Bebidas"
  },
  {
    id: 9,
    name: "Coca-Cola Zero 1L",
    description: "Refrigerante Coca-Cola Zero garrafa de 1 litro gelada",
    price: 9.00,
    image: cocaColaZero1LImage,
    category: "Bebidas"
  },
  {
    id: 10,
    name: "Guaraná Antarctica 1L",
    description: "Refrigerante Guaraná Antarctica garrafa de 1 litro gelada",
    price: 8.00,
    image: guarana1LImage,
    category: "Bebidas"
  },
  {
    id: 11,
    name: "Coca-Cola Lata",
    description: "Refrigerante Coca-Cola lata 350ml gelada",
    price: 6.00,
    image: cocaColaLataImage,
    category: "Bebidas"
  },
  {
    id: 12,
    name: "Coca-Cola Zero Lata",
    description: "Refrigerante Coca-Cola Zero lata 350ml gelada",
    price: 6.00,
    image: cocaColaZeroLataImage,
    category: "Bebidas"
  },
  {
    id: 13,
    name: "Guaraná Lata",
    description: "Refrigerante Guaraná Antarctica lata 350ml gelada",
    price: 5.00,
    image: guaranaLataImage,
    category: "Bebidas"
  },
  {
    id: 14,
    name: "Guaraná Zero Lata",
    description: "Refrigerante Guaraná Antarctica Zero lata 350ml gelada",
    price: 5.00,
    image: guaranaZeroLataImage,
    category: "Bebidas"
  },
  // Adicionais
  {
    id: 15,
    name: "Bacon",
    description: "Porção extra de bacon crocante (2 fatias)",
    price: 3.00,
    image: baconImage,
    category: "Adicionais"
  },
  {
    id: 16,
    name: "Queijo Cheddar",
    description: "Porção extra de queijo cheddar (1 fatia)",
    price: 2.00,
    image: cheddarImage,
    category: "Adicionais"
  },
  {
    id: 17,
    name: "Salada",
    description: "Alface, cebola e tomate",
    price: 1.00,
    image: saladaImage,
    category: "Adicionais"
  },
  {
    id: 18,
    name: "Batata Frita",
    description: "Porção de batata frita crocante e dourada (300g)",
    price: 12.00,
    image: batataFritaImage,
    category: "Adicionais"
  },
  {
    id: 19,
    name: "Cebola Empanada",
    description: "Porção de anéis de cebola empanada crocante (2 anéis)",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1766589152198-38630c391dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmlvbiUyMHJpbmdzJTIwZnJpZWR8ZW58MXx8fHwxNzczNDI1NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  },
  {
    id: 20,
    name: "Blend",
    description: "Blend de carne artesanal (120g)",
    price: 6.00,
    image: blendImage,
    category: "Adicionais"
  },
  {
    id: 21,
    name: "Molho Gorgonzola",
    description: "Porção extra de molho gorgonzola cremoso",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1643845258471-564274a30654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Jnb256b2xhJTIwY2hlZXNlJTIwc2F1Y2UlMjBibHVlfGVufDF8fHx8MTc3MzkyMTczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  },
  {
    id: 22,
    name: "Ovo",
    description: "Ovo frito para adicionar ao hambúrguer",
    price: 1.00,
    image: "https://images.unsplash.com/photo-1620572860868-45824e869129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGVnZyUyMHN1bm55JTIwc2lkZXxlbnwxfHx8fDE3NzM5MjE3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  },
  {
    id: 23,
    name: "Sachê de Maionese",
    description: "Sachê individual de maionese",
    price: 0.50,
    image: "https://images.unsplash.com/photo-1656103743126-656ce0ed6291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXlvbm5haXNlJTIwc2F1Y2UlMjBwYWNrZXR8ZW58MXx8fHwxNzczOTIxNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  },
  {
    id: 24,
    name: "Sachê de Ketchup",
    description: "Sachê individual de ketchup",
    price: 0.50,
    image: "https://images.unsplash.com/photo-1528750596806-ff12e21cda04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXRjaHVwJTIwc2F1Y2UlMjBwYWNrZXR8ZW58MXx8fHwxNzczOTIxNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  },
  {
    id: 25,
    name: "Sachê de Mostarda",
    description: "Sachê individual de mostarda",
    price: 0.50,
    image: "https://images.unsplash.com/photo-1633070818236-a3e15f3e91eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YXJkJTIwc2F1Y2UlMjB5ZWxsb3d8ZW58MXx8fHwxNzczOTIxNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  },
  {
    id: 26,
    name: "Geleia de Pimenta",
    description: "Geleia de pimenta artesanal picante",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1589656613433-b06c8ea9a46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMHBlcHBlciUyMGphbSUyMHJlZCUyMHNwaWN5fGVufDF8fHx8MTc3MzkyMTc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adicionais"
  }
];

const categories: string[] = ["Burguers", "Bebidas", "Adicionais"];

export function Orders() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState<"retirada" | "entrega">("retirada");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [meatDoneness, setMeatDoneness] = useState<string>("");
  const [cheeseType, setCheeseType] = useState<string>("");
  const [itemNotes, setItemNotes] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [needsChange, setNeedsChange] = useState(false);
  const [changeFor, setChangeFor] = useState("");

  const openCustomizationDialog = (item: MenuItem) => {
    setSelectedItem(item);
    setMeatDoneness("");
    setCheeseType("");
    setItemNotes("");
  };

  const closeCustomizationDialog = () => {
    setSelectedItem(null);
    setMeatDoneness("");
    setCheeseType("");
    setItemNotes("");
  };

  const addDrinkToCart = (item: MenuItem) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { 
        ...item, 
        quantity: 1, 
        meatDoneness: "N/A", 
        cheeseType: "N/A" 
      }]);
    }
  };

  const addToCart = () => {
    if (!selectedItem || !meatDoneness || !cheeseType) {
      return;
    }

    const cartKey = `${selectedItem.id}-${meatDoneness}-${cheeseType}`;
    const existingItem = cart.find(
      (cartItem) => 
        cartItem.id === selectedItem.id && 
        cartItem.meatDoneness === meatDoneness && 
        cartItem.cheeseType === cheeseType
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === selectedItem.id && 
          cartItem.meatDoneness === meatDoneness && 
          cartItem.cheeseType === cheeseType
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { 
        ...selectedItem, 
        quantity: 1, 
        meatDoneness, 
        cheeseType,
        notes: itemNotes
      }]);
    }

    closeCustomizationDialog();
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, change: number) => {
    setCart(
      cart
        .map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryOption === "entrega" ? 5.00 : 0;
  const finalTotal = total + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Adicione itens ao carrinho antes de fazer o pedido!");
      return;
    }
    if (!customerName || !customerAddress || !customerPhone) {
      alert("Preencha todos os campos!");
      return;
    }
    if (!paymentMethod) {
      alert("Selecione uma forma de pagamento!");
      return;
    }

    // Criar pedido e salvar no localStorage para o admin
    const savedOrders = localStorage.getItem("kaka_admin_orders");
    const existingOrders = savedOrders ? JSON.parse(savedOrders) : [];
    
    // Gerar número do pedido sequencial
    const orderNumber = existingOrders.length > 0 
      ? Math.max(...existingOrders.map((o: any) => o.orderNumber)) + 1 
      : 1001;

    // Formatar itens do carrinho
    const orderItems = cart.map((item, index) => ({
      id: String(index + 1),
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      customizations: {
        meatDoneness: item.meatDoneness === "malpassada" ? "Mal passada" : 
                      item.meatDoneness === "aopointo" ? "Ao ponto" : "Bem passada",
        cheeseType: item.cheeseType === "cheddar" ? "Cheddar" : "Mussarela"
      }
    }));

    // Formatar forma de pagamento
    const paymentMethodText = 
      paymentMethod === "dinheiro" ? "Dinheiro" :
      paymentMethod === "pix" ? "PIX" :
      paymentMethod === "credito" ? "Cartão de Crédito" : "Cartão de Débito";

    // Criar pedido
    const newOrder = {
      id: Date.now().toString(),
      orderNumber,
      customerName,
      customerPhone,
      customerAddress: deliveryOption === "retirada" ? "Retirada no local" : customerAddress,
      deliveryType: deliveryOption,
      paymentMethod: paymentMethodText,
      needsChange: needsChange,
      changeFor: changeFor,
      items: orderItems,
      total: finalTotal,
      status: "pendente",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Salvar no localStorage
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem("kaka_admin_orders", JSON.stringify(updatedOrders));

    setOrderPlaced(true);
    setTimeout(() => {
      setCart([]);
      setCustomerName("");
      setCustomerAddress("");
      setCustomerPhone("");
      setPaymentMethod("");
      setNeedsChange(false);
      setChangeFor("");
      setOrderPlaced(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">Fazer</span>
            <span className="text-white"> Pedido</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Monte seu pedido e receba em casa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-card p-4 rounded-lg border border-primary/30 flex items-center justify-between gap-4"
                      >
                        {item.image && category === "Bebidas" && (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-contain rounded"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{item.name}</h3>
                          <p className="text-primary font-bold">
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                        {category === "Burguers" ? (
                          <button
                            onClick={() => openCustomizationDialog(item)}
                            className="bg-primary text-black p-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <Plus size={20} />
                          </button>
                        ) : (
                          <button
                            onClick={() => addDrinkToCart(item)}
                            className="bg-primary text-black p-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <Plus size={20} />
                          </button>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cart and Checkout */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border border-primary/30 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <ShoppingCart className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-white">Seu Pedido</h2>
              </div>

              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Carrinho vazio
                </p>
              ) : (
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 pb-4 border-b border-primary/30"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-white text-sm font-medium">{item.name}</h4>
                          {item.category === "Burguers" && (
                            <>
                              <p className="text-muted-foreground text-xs">
                                Ponto: {item.meatDoneness === "malpassada" ? "Mal passada" : item.meatDoneness === "aopointo" ? "Ao ponto" : "Bem passada"}
                              </p>
                              <p className="text-muted-foreground text-xs">
                                Queijo: {item.cheeseType === "cheddar" ? "Cheddar" : "Mussarela"}
                              </p>
                              {item.notes && item.notes.trim() !== "" && (
                                <p className="text-primary text-xs italic mt-1">
                                  📝 {item.notes}
                                </p>
                              )}
                            </>
                          )}
                          <p className="text-primary text-sm mt-1">
                            R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="bg-destructive/20 p-1 rounded hover:bg-destructive/30 transition-colors"
                        >
                          <Trash2 size={16} className="text-destructive" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="bg-secondary p-1 rounded hover:bg-muted transition-colors"
                        >
                          <Minus size={16} className="text-white" />
                        </button>
                        <span className="text-white w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="bg-secondary p-1 rounded hover:bg-muted transition-colors"
                        >
                          <Plus size={16} className="text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-6 pt-4 border-t border-primary/30">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Subtotal:</span>
                    <span className="text-white">R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Taxa de entrega:</span>
                    <span className="text-white">
                      {deliveryOption === "entrega" ? "R$ 5,00" : "Grátis"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold pt-2 border-t border-primary/30">
                    <span className="text-white">Total:</span>
                    <span className="text-primary">R$ {finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white block mb-3 font-medium">Opção de Recebimento:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDeliveryOption("retirada")}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        deliveryOption === "retirada"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/30 text-white hover:border-primary/50"
                      }`}
                    >
                      <div className="font-bold">Retirada</div>
                      <div className="text-sm">Grátis</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryOption("entrega")}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        deliveryOption === "entrega"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/30 text-white hover:border-primary/50"
                      }`}
                    >
                      <div className="font-bold">Entrega</div>
                      <div className="text-sm">R$ 5,00</div>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-white block mb-2">Nome:</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-input-background text-white px-4 py-2 rounded-lg border border-input focus:border-primary outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-white block mb-2">Endereço:</label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-input-background text-white px-4 py-2 rounded-lg border border-input focus:border-primary outline-none"
                    placeholder="Rua, número, bairro"
                  />
                </div>
                <div>
                  <label className="text-white block mb-2">Telefone:</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-input-background text-white px-4 py-2 rounded-lg border border-input focus:border-primary outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                {/* Forma de Pagamento */}
                <div>
                  <label className="text-white block mb-3 font-medium">Forma de Pagamento:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("dinheiro");
                        setNeedsChange(false);
                        setChangeFor("");
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        paymentMethod === "dinheiro"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/30 text-white hover:border-primary/50"
                      }`}
                    >
                      <div className="font-bold">💵 Dinheiro</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("pix");
                        setNeedsChange(false);
                        setChangeFor("");
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        paymentMethod === "pix"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/30 text-white hover:border-primary/50"
                      }`}
                    >
                      <div className="font-bold">📱 PIX</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("credito");
                        setNeedsChange(false);
                        setChangeFor("");
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        paymentMethod === "credito"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/30 text-white hover:border-primary/50"
                      }`}
                    >
                      <div className="font-bold">💳 Crédito</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPaymentMethod("debito");
                        setNeedsChange(false);
                        setChangeFor("");
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        paymentMethod === "debito"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/30 text-white hover:border-primary/50"
                      }`}
                    >
                      <div className="font-bold">💳 Débito</div>
                    </button>
                  </div>
                </div>

                {/* Troco para Dinheiro */}
                {paymentMethod === "dinheiro" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="needsChange"
                        checked={needsChange}
                        onChange={(e) => {
                          setNeedsChange(e.target.checked);
                          if (!e.target.checked) setChangeFor("");
                        }}
                        className="w-4 h-4 rounded border-input bg-input-background"
                      />
                      <label htmlFor="needsChange" className="text-white cursor-pointer">
                        Preciso de troco
                      </label>
                    </div>
                    
                    {needsChange && (
                      <div>
                        <label className="text-white block mb-2">Troco para quanto?</label>
                        <input
                          type="text"
                          value={changeFor}
                          onChange={(e) => setChangeFor(e.target.value)}
                          className="w-full bg-input-background text-white px-4 py-2 rounded-lg border border-input focus:border-primary outline-none"
                          placeholder="Ex: R$ 50,00"
                        />
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-black py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold"
                >
                  Finalizar Pedido
                </button>
              </form>

              {orderPlaced && (
                <div className="mt-4 bg-primary/20 border border-primary text-primary px-4 py-3 rounded-lg text-center">
                  ✓ Pedido realizado com sucesso!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Customization Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={closeCustomizationDialog}>
        <DialogContent className="bg-card border-primary/30 text-white max-w-md">
          {selectedItem && (
            <>
              <DialogTitle className="text-2xl font-bold text-primary">
                Personalize seu {selectedItem.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Escolha as opções obrigatórias para seu hambúrguer
              </DialogDescription>

              <div className="space-y-6 py-4">
                {/* Ponto da Carne */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">
                    Ponto da Carne <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup value={meatDoneness} onValueChange={setMeatDoneness}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="malpassada" id="malpassada" />
                      <Label htmlFor="malpassada" className="cursor-pointer text-white">
                        Mal passada
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="aopointo" id="aopointo" />
                      <Label htmlFor="aopointo" className="cursor-pointer text-white">
                        Ao ponto
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bempassada" id="bempassada" />
                      <Label htmlFor="bempassada" className="cursor-pointer text-white">
                        Bem passada
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Tipo de Queijo */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">
                    Tipo de Queijo <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup value={cheeseType} onValueChange={setCheeseType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cheddar" id="cheddar" />
                      <Label htmlFor="cheddar" className="cursor-pointer text-white">
                        Cheddar
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mussarela" id="mussarela" />
                      <Label htmlFor="mussarela" className="cursor-pointer text-white">
                        Mussarela
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Observações do Item */}
                <div>
                  <label className="text-white block mb-2">Observações:</label>
                  <textarea
                    value={itemNotes}
                    onChange={(e) => setItemNotes(e.target.value)}
                    className="w-full bg-input-background text-white px-4 py-2 rounded-lg border border-input focus:border-primary outline-none"
                    placeholder="Ex: Sem alface, por favor"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeCustomizationDialog}
                  className="flex-1 bg-secondary text-white py-3 rounded-lg hover:bg-muted transition-colors font-bold"
                >
                  Cancelar
                </button>
                <button
                  onClick={addToCart}
                  disabled={!meatDoneness || !cheeseType}
                  className="flex-1 bg-primary text-black py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Adicionar ao Pedido
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}