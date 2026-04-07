import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import bgImage from "figma:asset/587be6a60eb32aa530ff1346a9e6d2fb770f3cc2.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre" },
    { path: "/cardapio", label: "Cardápio" },
    { path: "/pedidos", label: "Pedidos" },
    { path: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image - Fixed */}
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-black/80 backdrop-blur-sm border-b border-primary/30 sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="text-3xl font-bold">
                  <span className="text-primary">KAKA</span>
                  <span className="text-white"> BURGUER</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-sm border-t border-primary/30 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-primary mb-4">KAKA BURGUER</h3>
                <p className="text-muted-foreground">
                  Os melhores hamburgueres artesanais da cidade. Sabor que você nunca vai esquecer!
                </p>
              </div>
              <div>
                <h4 className="text-white mb-4">Horário de Funcionamento</h4>
                <p className="text-muted-foreground">Quarta e Sexta: 18h - 22h</p>
                <p className="text-muted-foreground">Sábado a Domingo: 18h - 22h</p>
              </div>
              <div>
                <h4 className="text-white mb-4">Contato</h4>
                <p className="text-muted-foreground">Tel: (11) 99999-9999</p>
                <p className="text-muted-foreground">Email: contato@kakaburguer.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/30 text-center text-muted-foreground">
              <p>&copy; 2026 KAKA BURGUER. Todos os direitos reservados.</p>
              <div className="mt-2">
                <Link to="/admin" className="text-sm text-primary hover:text-primary/80 transition-opacity">
                  Painel Administrativo
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}