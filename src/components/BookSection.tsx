import livro from "@/assets/livro.webp";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const BookSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal direction="left" className="flex-1 flex justify-center">
            <motion.img
              src={livro}
              alt="Livro Palavras que Lucram"
              className="w-full max-w-sm"
              whileHover={{ scale: 1.04, rotateZ: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Conteúdo
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Faça o download da minha versão digital do livro PALAVRAS QUE LUCRAM clicando no botão abaixo:
            </p>
            <motion.a
              href="https://wa.me/5561992141518?text=Quero%20o%20livro%20digital%20Palavras%20que%20Lucram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-gold-light transition-colors mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Clique aqui para baixar
            </motion.a>
            <p className="text-muted-foreground text-sm">
              Depois deixe um feedback no direct do Instagram!
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
