import { useState } from "react";
import { Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section className="bg-dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          Preencha o formulário abaixo com a sua necessidade e iremos entrar em contato!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Nome e Sobrenome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          <Input
            placeholder="WhatsApp"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          <Textarea
            placeholder="Mensagem"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-gold-light"
          >
            Enviar
          </Button>
        </form>

        {/* Social footer */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-gold-light transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-gold-light transition-colors"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
