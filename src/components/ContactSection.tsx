import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import contactImg from "@/assets/contact-collage.png";

const WHATSAPP_URL =
  "https://wa.me/5561992141518?text=Quero%20Falar%20Com%20Leandro%20Herbert";

const ContactSection = () => {
  return (
    <section className="bg-dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" className="flex flex-col items-start gap-6">
            <p className="text-gold-light text-sm font-heading font-medium tracking-widest-custom uppercase">
              Fale diretamente comigo
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
              Sem formulários, sem espera. Vamos conversar agora sobre como posso ajudar você e o seu negócio.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Clique no botão abaixo e fale comigo diretamente pelo WhatsApp. Estou pronto para entender a sua necessidade e mostrar o melhor caminho.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="bg-[#25D366] hover:bg-[#1da851] text-white font-heading font-bold uppercase tracking-wider text-base px-8 py-6 gap-2">
                  <MessageCircle size={20} />
                  Falar com Leandro Herbert
                </Button>
              </motion.div>
            </a>

            <div className="flex gap-6 mt-4">
              {[
                { href: "https://www.instagram.com", Icon: Instagram },
                { href: "https://www.youtube.com", Icon: Youtube },
              ].map(({ href, Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gold-light transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-lg overflow-hidden">
              <img
                src={contactImg}
                alt="Momentos com Leandro Herbert"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
