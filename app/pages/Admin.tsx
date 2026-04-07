import { useState, useEffect } from "react";
import { Package, Clock, CheckCircle, XCircle, ChefHat, Truck, Play, Ban, Trash2, AlertTriangle } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  customizations: {
    meatDoneness: string;
    cheeseType: string;
  };
}

interface Order {
  id: string;
  orderNumber: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  deliveryType: "retirada" | "entrega";
  paymentMethod?: string;
  needsChange?: boolean;
  changeFor?: string;
  items: OrderItem[];
  total: number;
  status: "pendente" | "aceito" | "preparando" | "pronto" | "saiu_entrega" | "entregue" | "cancelado";
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

// Mock data - pedidos de exemplo
const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: 1001,
    customerName: "João Silva",
    customerPhone: "(11) 98765-4321",
    customerAddress: "Rua das Flores, 123 - Centro",
    deliveryType: "entrega",
    items: [
      {
        id: "1",
        name: "KAKA BURGUER CLÁSSICO",
        price: 25.00,
        quantity: 2,
        customizations: {
          meatDoneness: "Ao ponto",
          cheeseType: "Cheddar"
        }
      },
      {
        id: "2",
        name: "KAKA BURGUER BACON",
        price: 28.00,
        quantity: 1,
        customizations: {
          meatDoneness: "Mal passado",
          cheeseType: "Mussarela"
        }
      }
    ],
    total: 83.00,
    status: "pendente",
    createdAt: new Date(Date.now() - 5 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60000).toISOString()
  },
  {
    id: "2",
    orderNumber: 1002,
    customerName: "Maria Santos",
    customerPhone: "(11) 91234-5678",
    customerAddress: "Retirada no local",
    deliveryType: "retirada",
    items: [
      {
        id: "3",
        name: "KAKA BURGUER DUPLO",
        price: 32.00,
        quantity: 1,
        customizations: {
          meatDoneness: "Bem passado",
          cheeseType: "Cheddar"
        }
      }
    ],
    total: 32.00,
    status: "aceito",
    createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 60000).toISOString()
  },
  {
    id: "3",
    orderNumber: 1003,
    customerName: "Carlos Oliveira",
    customerPhone: "(11) 99876-5432",
    customerAddress: "Av. Principal, 456 - Jardim",
    deliveryType: "entrega",
    items: [
      {
        id: "4",
        name: "KAKA BURGUER PREMIUM",
        price: 38.00,
        quantity: 1,
        customizations: {
          meatDoneness: "Ao ponto",
          cheeseType: "Mussarela"
        }
      },
      {
        id: "5",
        name: "KAKA BURGUER CLÁSSICO",
        price: 25.00,
        quantity: 1,
        customizations: {
          meatDoneness: "Ao ponto",
          cheeseType: "Cheddar"
        }
      }
    ],
    total: 68.00,
    status: "preparando",
    createdAt: new Date(Date.now() - 25 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60000).toISOString()
  },
  {
    id: "4",
    orderNumber: 1004,
    customerName: "Ana Paula",
    customerPhone: "(11) 97654-3210",
    customerAddress: "Retirada no local",
    deliveryType: "retirada",
    items: [
      {
        id: "6",
        name: "KAKA BURGUER SUPREMO",
        price: 45.00,
        quantity: 2,
        customizations: {
          meatDoneness: "Mal passado",
          cheeseType: "Cheddar"
        }
      }
    ],
    total: 90.00,
    status: "pronto",
    createdAt: new Date(Date.now() - 35 * 60000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 60000).toISOString()
  }
];

export function Admin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<string>("todos");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showClearAllConfirm, setShowClearAllConfirm] = useState(false);

  useEffect(() => {
    // Carregar pedidos do localStorage ou usar mock data
    const savedOrders = localStorage.getItem("kaka_admin_orders");
    if (savedOrders) {
      const parsedOrders = JSON.parse(savedOrders);
      // Ordenar por mais recentes primeiro
      parsedOrders.sort((a: Order, b: Order) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setOrders(parsedOrders);
    } else {
      setOrders(mockOrders);
      localStorage.setItem("kaka_admin_orders", JSON.stringify(mockOrders));
    }
  }, []);

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus, updatedAt: new Date().toISOString() }
        : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("kaka_admin_orders", JSON.stringify(updatedOrders));
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus, updatedAt: new Date().toISOString() });
    }
  };

  const deleteOrder = (orderId: string) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("kaka_admin_orders", JSON.stringify(updatedOrders));
    if (selectedOrder?.id === orderId) {
      setSelectedOrder(null);
    }
    setShowDeleteConfirm(false);
  };

  const clearAllOrders = () => {
    setOrders([]);
    localStorage.setItem("kaka_admin_orders", JSON.stringify([]));
    setSelectedOrder(null);
    setShowClearAllConfirm(false);
  };

  const getStatusColor = (status: Order["status"]) => {
    const colors = {
      pendente: "bg-yellow-600",
      aceito: "bg-blue-600",
      preparando: "bg-purple-600",
      pronto: "bg-green-600",
      saiu_entrega: "bg-blue-600",
      entregue: "bg-gray-600",
      cancelado: "bg-red-600"
    };
    return colors[status];
  };

  const getStatusText = (status: Order["status"]) => {
    const texts = {
      pendente: "Pendente",
      aceito: "Aceito",
      preparando: "Preparando",
      pronto: "Pronto",
      saiu_entrega: "Saiu para Entrega",
      entregue: "Entregue",
      cancelado: "Cancelado"
    };
    return texts[status];
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("pt-BR");
  };

  const filteredOrders = filter === "todos" 
    ? orders 
    : orders.filter(order => order.status === filter);

  const orderCounts = {
    todos: orders.length,
    pendente: orders.filter(o => o.status === "pendente").length,
    aceito: orders.filter(o => o.status === "aceito").length,
    preparando: orders.filter(o => o.status === "preparando").length,
    pronto: orders.filter(o => o.status === "pronto").length,
    saiu_entrega: orders.filter(o => o.status === "saiu_entrega").length,
    entregue: orders.filter(o => o.status === "entregue").length,
    cancelado: orders.filter(o => o.status === "cancelado").length,
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">Painel do</span>
              <span className="text-white"> Administrador</span>
            </h1>
            <p className="text-muted-foreground">Gerencie todos os pedidos do KAKA BURGUER</p>
          </div>
          {orders.length > 0 && (
            <button
              onClick={() => setShowClearAllConfirm(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <Trash2 size={18} />
              Limpar Histórico
            </button>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "todos" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("todos")}
          >
            <div className="text-2xl font-bold">{orderCounts.todos}</div>
            <div className="text-sm opacity-80">Todos</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "pendente" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("pendente")}
          >
            <div className="text-2xl font-bold">{orderCounts.pendente}</div>
            <div className="text-sm opacity-80">Pendentes</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "aceito" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("aceito")}
          >
            <div className="text-2xl font-bold">{orderCounts.aceito}</div>
            <div className="text-sm opacity-80">Aceitos</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "preparando" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("preparando")}
          >
            <div className="text-2xl font-bold">{orderCounts.preparando}</div>
            <div className="text-sm opacity-80">Preparando</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "pronto" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("pronto")}
          >
            <div className="text-2xl font-bold">{orderCounts.pronto}</div>
            <div className="text-sm opacity-80">Prontos</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "saiu_entrega" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("saiu_entrega")}
          >
            <div className="text-2xl font-bold">{orderCounts.saiu_entrega}</div>
            <div className="text-sm opacity-80">Saiu para Entrega</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "entregue" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("entregue")}
          >
            <div className="text-2xl font-bold">{orderCounts.entregue}</div>
            <div className="text-sm opacity-80">Entregues</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              filter === "cancelado" ? "bg-primary text-black" : "bg-card border border-border"
            }`}
            onClick={() => setFilter("cancelado")}
          >
            <div className="text-2xl font-bold">{orderCounts.cancelado}</div>
            <div className="text-sm opacity-80">Cancelados</div>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              Pedidos {filter !== "todos" && `- ${getStatusText(filter as Order["status"])}`}
            </h2>
            
            {filteredOrders.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Package className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-muted-foreground">Nenhum pedido encontrado</p>
              </div>
            ) : (
              filteredOrders.map(order => (
                <div 
                  key={order.id}
                  className={`bg-card border rounded-lg p-6 cursor-pointer transition-all hover:border-primary ${
                    selectedOrder?.id === order.id ? "border-primary" : "border-border"
                  }`}
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Pedido #{order.orderNumber}</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(order.createdAt)} às {formatTime(order.createdAt)}
                      </p>
                    </div>
                    <span className={`${getStatusColor(order.status)} text-white px-3 py-1 rounded-full text-sm`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-white">
                      <Package size={16} className="text-primary" />
                      <span className="font-semibold">{order.customerName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      {order.deliveryType === "entrega" ? (
                        <Truck size={16} className="text-primary" />
                      ) : (
                        <Clock size={16} className="text-primary" />
                      )}
                      <span>{order.deliveryType === "entrega" ? "Entrega" : "Retirada"}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{order.items.length} {order.items.length === 1 ? "item" : "itens"}</span>
                      <span className="text-2xl font-bold text-primary">R$ {order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Details */}
          <div className="lg:sticky lg:top-4 lg:h-fit">
            {selectedOrder ? (
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Pedido #{selectedOrder.orderNumber}</h2>
                    <p className="text-sm text-muted-foreground">
                      Recebido: {formatDate(selectedOrder.createdAt)} às {formatTime(selectedOrder.createdAt)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Atualizado: {formatTime(selectedOrder.updatedAt)}
                    </p>
                  </div>
                  <span className={`${getStatusColor(selectedOrder.status)} text-white px-3 py-1 rounded-full text-sm`}>
                    {getStatusText(selectedOrder.status)}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="mb-6 p-4 bg-background rounded-lg">
                  <h3 className="font-bold text-white mb-3">Informações do Cliente</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-white"><span className="text-muted-foreground">Nome:</span> {selectedOrder.customerName}</p>
                    <p className="text-white"><span className="text-muted-foreground">Telefone:</span> {selectedOrder.customerPhone}</p>
                    <p className="text-white">
                      <span className="text-muted-foreground">Tipo:</span> {selectedOrder.deliveryType === "entrega" ? "Entrega" : "Retirada"}
                    </p>
                    {selectedOrder.deliveryType === "entrega" && (
                      <p className="text-white"><span className="text-muted-foreground">Endereço:</span> {selectedOrder.customerAddress}</p>
                    )}
                    {selectedOrder.paymentMethod && (
                      <p className="text-white">
                        <span className="text-muted-foreground">Pagamento:</span> {selectedOrder.paymentMethod}
                      </p>
                    )}
                    {selectedOrder.needsChange && selectedOrder.changeFor && (
                      <p className="text-primary font-semibold">
                        💵 Troco para: {selectedOrder.changeFor}
                      </p>
                    )}
                  </div>
                </div>

                {/* Items */}
                <div className="mb-6">
                  <h3 className="font-bold text-white mb-3">Itens do Pedido</h3>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="p-4 bg-background rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-white">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">Quantidade: {item.quantity}</p>
                          </div>
                          <p className="font-bold text-primary">R$ {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>• Ponto da carne: <span className="text-white">{item.customizations.meatDoneness}</span></p>
                          <p>• Queijo: <span className="text-white">{item.customizations.cheeseType}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Observações do Pedido */}
                {selectedOrder.notes && selectedOrder.notes.trim() !== "" && (
                  <div className="mb-6 p-4 bg-primary/10 border-2 border-primary rounded-lg">
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      📝 Observações do Cliente
                    </h3>
                    <p className="text-white text-sm whitespace-pre-wrap">{selectedOrder.notes}</p>
                  </div>
                )}

                {/* Total */}
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-3xl font-bold text-primary">R$ {selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <h3 className="font-bold text-white mb-2">Ações</h3>
                  
                  {selectedOrder.status === "pendente" && (
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.id, "aceito")}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <CheckCircle size={20} />
                        Aceitar
                      </button>
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.id, "cancelado")}
                        className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <XCircle size={20} />
                        Recusar
                      </button>
                    </div>
                  )}

                  {selectedOrder.status === "aceito" && (
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, "preparando")}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <ChefHat size={20} />
                      Iniciar Preparo
                    </button>
                  )}

                  {selectedOrder.status === "preparando" && (
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, "pronto")}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <CheckCircle size={20} />
                      Marcar como Pronto
                    </button>
                  )}

                  {selectedOrder.status === "pronto" && (
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, "saiu_entrega")}
                      className="w-full bg-primary hover:bg-primary/90 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Play size={20} />
                      Marcar como Saindo para Entrega
                    </button>
                  )}

                  {selectedOrder.status === "saiu_entrega" && (
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, "entregue")}
                      className="w-full bg-primary hover:bg-primary/90 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Truck size={20} />
                      {selectedOrder.deliveryType === "entrega" ? "Marcar como Entregue" : "Marcar como Retirado"}
                    </button>
                  )}

                  {selectedOrder.status === "entregue" && (
                    <div className="bg-green-600/20 border border-green-600 text-green-400 px-4 py-3 rounded-lg text-center">
                      ✓ Pedido finalizado
                    </div>
                  )}

                  {selectedOrder.status === "cancelado" && (
                    <div className="bg-red-600/20 border border-red-600 text-red-400 px-4 py-3 rounded-lg text-center">
                      ✗ Pedido cancelado
                    </div>
                  )}

                  {/* Delete Order Button */}
                  <div className="border-t border-border pt-4 mt-6">
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors border border-red-600/30"
                    >
                      <Trash2 size={18} />
                      Deletar este Pedido
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Package className="mx-auto mb-4 text-muted-foreground" size={64} />
                <h3 className="text-xl font-bold text-white mb-2">Selecione um pedido</h3>
                <p className="text-muted-foreground">Clique em um pedido da lista para ver os detalhes</p>
              </div>
            )}
          </div>
        </div>

        {/* Delete Order Confirmation Modal */}
        {showDeleteConfirm && selectedOrder && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-500" size={32} />
                <h3 className="text-2xl font-bold text-white">Confirmar Exclusão</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Tem certeza que deseja deletar o <span className="text-white font-bold">Pedido #{selectedOrder.orderNumber}</span> de <span className="text-white font-bold">{selectedOrder.customerName}</span>? Esta ação não pode ser desfeita.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="bg-secondary hover:bg-muted text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => deleteOrder(selectedOrder.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Clear All Orders Confirmation Modal */}
        {showClearAllConfirm && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-500" size={32} />
                <h3 className="text-2xl font-bold text-white">Limpar Todo Histórico</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Tem certeza que deseja deletar <span className="text-white font-bold">TODOS os {orders.length} pedidos</span>? Esta ação não pode ser desfeita e todo o histórico será perdido permanentemente.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShowClearAllConfirm(false)}
                  className="bg-secondary hover:bg-muted text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={clearAllOrders}
                  className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Limpar Tudo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}