import { Link } from "react-router";
import { ChefHat, Clock, Star } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary">KAKA</span>
            <span className="text-white"> BURGUER</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Hamburgueres artesanais que vão explodir seu paladar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cardapio"
              className="bg-primary text-black px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold"
            >
              Ver Cardápio
            </Link>
            <Link
              to="/pedidos"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-white/90 transition-colors font-bold"
            >
              Fazer Pedido
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="text-black" size={32} />
              </div>
              <h3 className="text-white mb-2">Receitas Exclusivas</h3>
              <p className="text-muted-foreground">
                Desenvolvidas por chefs especializados em hambúrgueres gourmet
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-black" size={32} />
              </div>
              <h3 className="text-white mb-2">Ingredientes Premium</h3>
              <p className="text-muted-foreground">
                Apenas os melhores ingredientes, frescos e selecionados
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-black" size={32} />
              </div>
              <h3 className="text-white mb-2">Entrega Rápida</h3>
              <p className="text-muted-foreground">
                Seu pedido quentinho em até 45 minutos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}