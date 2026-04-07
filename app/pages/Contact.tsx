import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Preencha todos os campos!");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-primary">Entre em</span>
            <span className="text-white"> Contato</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Informações de <span className="text-primary">Contato</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua dos Hambúrgueres, 123<br />
                    Bairro Gourmet - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    (11) 99999-9999<br />
                    (11) 3333-3333
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    contato@kakaburguer.com<br />
                    pedidos@kakaburguer.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Quarta e Sexta: 18h - 22h<br />
                    Sábado a Domingo: 18h - 22h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-primary/30">
              <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Instagram
                </a>
                <a href="#" className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Envie uma <span className="text-primary">Mensagem</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white block mb-2">Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-input-background text-white px-4 py-3 rounded-lg border border-input focus:border-primary outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-input-background text-white px-4 py-3 rounded-lg border border-input focus:border-primary outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Assunto:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-input-background text-white px-4 py-3 rounded-lg border border-input focus:border-primary outline-none"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="text-white block mb-2">Mensagem:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-input-background text-white px-4 py-3 rounded-lg border border-input focus:border-primary outline-none resize-none"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-black py-3 rounded-lg hover:bg-primary/90 transition-colors font-bold"
              >
                Enviar Mensagem
              </button>

              {submitted && (
                <div className="bg-primary/20 border border-primary text-primary px-4 py-3 rounded-lg text-center">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}