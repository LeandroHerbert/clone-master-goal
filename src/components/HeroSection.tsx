import { ChevronDown, Instagram, Youtube } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Leandro Herbert"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Vertical name on right side */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
        {"LEANDRO HERBERT".split("").map((char, i) => (
          <span
            key={i}
            className="text-foreground/20 text-sm font-heading font-bold tracking-widest-custom"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Social icons on right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-gold-light transition-colors"
        >
          <Instagram size={22} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-gold-light transition-colors"
        >
          <Youtube size={22} />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-gold-light text-sm font-heading font-medium tracking-widest-custom mb-6 uppercase">
            Leandro Herbert
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] leading-tight font-heading font-bold text-foreground mb-8">
            Tudo por aqui é sobre ajudar as pessoas a se transformarem em um ativo mais valioso.
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
            Estrategista, empresário, escritor, copywriter e conselheiro de empresas, Leandro Herbert desenvolveu a mentalidade de um enxadrista, se especializando em construir ecossistemas escaláveis que agregam valor e dão resultados todos os dias.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 lg:left-16 z-10">
        <ChevronDown className="text-foreground animate-float" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
