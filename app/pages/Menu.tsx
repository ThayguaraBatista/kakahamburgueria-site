import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../components/ui/dialog";
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
import batataFritaImage from "figma:asset/358ad12e7504e3cd16b96f6e413cfff64962d0c7.png";
import saladaImage from "figma:asset/90ff3bb5237b2155001de86654f470eb1847f963.png";
import baconImage from "figma:asset/6cdc26fd287679264da6ff0341ca25f536de2db0.png";
import cheddarImage from "figma:asset/e60995c864e73dcac424e5255318f8f76b47c0fd.png";
import guaranaZeroLataImage from "figma:asset/5d27e69709bc47ef438c6bb4e412b3718b98e59a.png";
import guaranaLataImage from "figma:asset/4fcc38f89f88333810b7dde95890ec02314e1cc6.png";
import blendImage from "figma:asset/46f1fbeeaaa3e18cd61ef6f1ad6099b16c26f45e.png";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
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
    id: 18,
    name: "Guaraná Antarctica Zero Lata",
    description: "Refrigerante Guaraná Antarctica Zero lata 350ml gelada",
    price: 5.00,
    image: guaranaZeroLataImage,
    category: "Bebidas"
  },
  {
    id: 19,
    name: "Guaraná Antarctica Lata",
    description: "Refrigerante Guaraná Antarctica lata 350ml gelada",
    price: 5.00,
    image: guaranaLataImage,
    category: "Bebidas"
  },
  // Adicionais
  {
    id: 13,
    name: "Bacon",
    description: "Porção extra de bacon crocante (2 fatias)",
    price: 3.00,
    image: baconImage,
    category: "Adicionais"
  },
  {
    id: 14,
    name: "Queijo Cheddar",
    description: "Porção extra de queijo cheddar (1 fatia)",
    price: 2.00,
    image: cheddarImage,
    category: "Adicionais"
  },
  {
    id: 15,
    name: "Salada",
    description: "Alface, cebola e tomate",
    price: 1.00,
    image: saladaImage,
    category: "Adicionais"
  },
  {
    id: 16,
    name: "Batata Frita",
    description: "Porção de batata frita crocante e dourada (300g)",
    price: 12.00,
    image: batataFritaImage,
    category: "Adicionais"
  },
  {
    id: 17,
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

export function Menu() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">Nosso</span>
            <span className="text-white"> Cardápio</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Confira todos os nossos produtos deliciosos
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-lg overflow-hidden border border-primary/30 hover:border-primary transition-all hover:scale-105"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover bg-black cursor-pointer"
                      onClick={() => setSelectedImage({ src: item.image, name: item.name })}
                    />
                    <div className="p-6">
                      <h3 className="text-white mb-2">{item.name}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-primary text-2xl font-bold">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black border-primary/30">
          {selectedImage && (
            <>
              <DialogTitle className="text-white text-2xl font-bold text-center">
                {selectedImage.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Imagem do hambúrguer {selectedImage.name}
              </DialogDescription>
              <div className="flex flex-col items-center">
                <ImageWithFallback
                  src={selectedImage.src}
                  alt={selectedImage.name}
                  className="w-full object-contain max-h-[70vh]"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}