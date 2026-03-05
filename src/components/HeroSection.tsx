import { ChevronDown, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden hero-glow">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Leandro Herbert"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Vertical name on right side */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
        {"LEANDRO HERBERT".split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-foreground/20 text-sm font-heading font-bold tracking-widest-custom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.04, duration: 0.3 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Social icons on right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10">
        {[
          { href: "https://www.instagram.com", Icon: Instagram },
          { href: "https://www.youtube.com", Icon: Youtube },
        ].map(({ href, Icon }, i) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-gold-light transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.2 }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          <motion.p
            className="text-gold-light text-sm font-heading font-medium tracking-widest-custom mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Leandro Herbert
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-[3.2rem] leading-tight font-heading font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Tudo por aqui é sobre ajudar as pessoas a se transformarem em um ativo mais valioso.
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Estrategista, empresário, escritor, copywriter e conselheiro de empresas, Leandro Herbert desenvolveu a mentalidade de um enxadrista, se especializando em construir ecossistemas escaláveis que agregam valor e dão resultados todos os dias.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-6 lg:left-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ChevronDown className="text-foreground animate-float" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
