import ScrollReveal from "./ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <ScrollReveal className="flex-1">
            <span className="inline-block border border-primary/40 rounded-full px-6 py-2 text-gold-light text-xs font-heading font-medium tracking-widest-custom uppercase mb-8">
              Quem Somos?
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Leandro Herbert
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Casado, pai de gêmeos e self-made, Leandro Herbert é o criador da Atmosfera Estratégica de Valor. O mecanismo utilizado por experts e empresários para construírem estratégias, movimentos e ecossistemas de alto impacto.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Fundou a Holding Atmosfera, um ecossistema sócio de mais de 12 ecossistemas que atuam em áreas como sistema financeiro, imobiliário, gestão e governança, investimentos, planejamento tributário, marketing, vendas, comunicação, turismo, mentorias de alto valor, eventos e alimentação.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Estrategista, Empresário, Mentor, Copywriter, Advogado e apaixonado pelo comportamento humano, Leandro Herbert tem como sua principal motivação "ajudar as pessoas a se transformarem em um ativo mais valioso."
            </p>
          </ScrollReveal>

          {/* Right image */}
          <ScrollReveal direction="right" className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={heroBg}
                alt="Leandro Herbert"
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
