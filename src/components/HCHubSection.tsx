import logo3d from "@/assets/3d-logo.webp";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "PESSOAS",
    description: "São experts e empresários que dominam suas áreas de atuação, com vasta experiência e comprovado track record.",
  },
  {
    title: "EMPRESAS",
    description: "São negócios de alta performance que se mostram sinérgicos aos propósitos do nosso ecossistema.",
  },
  {
    title: "EXPERIÊNCIAS",
    description: "São imersões, palestras, eventos e experiências que promovem a conexão entre os integrantes do HUB.",
  },
];

const HCHubSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1">
            <ScrollReveal>
              <p className="text-gold-light text-xs font-heading font-medium tracking-widest-custom mb-4 uppercase">
                Conheça o HC Hub
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                O que é o HIGH CIRCLE HUB:
              </h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest-custom mb-10">
                Um ecossistema formado por pessoas, empresas e experiências
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <ScrollReveal
                  key={pillar.title}
                  delay={i * 0.15}
                  className={i === 2 ? "sm:col-span-2" : ""}
                >
                  <div className="pillar-box h-full">
                    <h3 className="text-foreground text-base font-heading font-bold mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="right" className="flex-1 flex justify-center">
            <motion.img
              src={logo3d}
              alt="High Circle Hub Logo 3D"
              className="w-full max-w-md"
              whileHover={{ rotateY: 15, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HCHubSection;
