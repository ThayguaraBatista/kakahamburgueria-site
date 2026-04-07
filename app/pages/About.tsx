import { Heart, Award, Users } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Nossa</span>
            <span className="text-white"> História</span>
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">A História do KAKA BURGUER</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O Kaka Burguer foi fundado em 2023 com a proposta de oferecer hambúrgueres artesanais feitos com qualidade, sabor e dedicação. Desde o início, a ideia sempre foi preparar hambúrgueres diferentes dos tradicionais, usando ingredientes selecionados e um preparo especial.
            </p>
          </div>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              O grande destaque do Kaka Burguer é que os hambúrgueres são feitos artesanalmente e preparados na brasa, o que garante um sabor defumado único e muito mais suculência. Cada hambúrguer é preparado com cuidado, buscando sempre entregar uma experiência deliciosa para os clientes.
            </p>
            <p>
              Mesmo sendo uma marca jovem, o Kaka Burguer vem conquistando espaço e clientes graças ao seu compromisso com o sabor, qualidade e atendimento. A missão é continuar crescendo e levando os melhores hambúrgueres artesanais na brasa para cada vez mais pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Nossos</span>
            <span className="text-white"> Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-primary/30 text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-black" size={32} />
              </div>
              <h3 className="text-white mb-3">Paixão</h3>
              <p className="text-muted-foreground">
                Amamos o que fazemos e colocamos amor em cada hambúrguer que preparamos
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-primary/30 text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-black" size={32} />
              </div>
              <h3 className="text-white mb-3">Qualidade</h3>
              <p className="text-muted-foreground">
                Ingredientes premium e processos artesanais garantem o melhor sabor
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-primary/30 text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-black" size={32} />
              </div>
              <h3 className="text-white mb-3">Comunidade</h3>
              <p className="text-muted-foreground">
                Nossos clientes são parte da nossa família e sua satisfação é nossa prioridade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Nossa</span>
            <span className="text-white"> Equipe</span>
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa equipe é formada por chefs apaixonados e profissionais dedicados que trabalham 
              incansavelmente para garantir que cada pedido seja uma experiência memorável. 
              Venha nos visitar e conheça as pessoas por trás dos melhores hambúrgueres da cidade!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}