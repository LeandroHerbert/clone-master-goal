import exp1 from "@/assets/exp-1.jpg";
import exp2 from "@/assets/exp-2.jpg";
import exp3 from "@/assets/exp-3.jpg";
import exp4 from "@/assets/exp-4.jpg";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const experiences = [
  { number: "01", image: exp1, title: "High Circle Networking", description: "Evento de networking realizado em locais especiais de Brasília, com o objetivo de promover conexões estratégias entre os participantes." },
  { number: "02", image: exp2, title: "High Circle Wine Experience", description: "São experiências que contemplam harmonização entre vinhos e pratos elaborados por Chef´s da alta gastronomia de Brasília" },
  { number: "03", image: exp3, title: "Oficina High Ticket Presencial", description: "Evento presencial criado para ajudar experts e empresários a construírem um funil de vendas perpétuo para produtos High Ticket." },
  { number: "04", image: exp4, title: "Oficina High Ticket Online", description: "Evento online criado para ajudar experts e empresários a construírem um funil de vendas perpétuo para produtos High Ticket." },
];

const ExperiencesSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-right">
      <div className="container mx-auto px-6 lg:px-16">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            CONHEÇA AS EXPERIÊNCIAS PROMOVIDAS PELO{" "}
            <br className="hidden md:block" />
            HIGH CIRCLE HUB
          </h2>
          <p className="text-muted-foreground text-base">
            Experiências onde houveram grandes transformações em vidas e a sua pode ser a próxima.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.number} delay={i * 0.1}>
              <motion.div
                className="experience-card bg-card rounded-lg overflow-hidden border border-border h-full"
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(40 70% 50% / 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 pb-2">
                  <span className="text-gold-light text-xs tracking-widest-custom uppercase">
                    experiência {exp.number}
                  </span>
                </div>
                <div className="px-4 overflow-hidden rounded-md">
                  <motion.img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-40 object-cover rounded-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-foreground font-heading font-bold text-lg mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
