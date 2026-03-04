import logo3d from "@/assets/3d-logo.webp";

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
    <section className="bg-dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="flex-1">
            <p className="text-gold-light text-xs font-heading font-medium tracking-widest-custom mb-4 uppercase">
              Conheça o HC Hub
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              O que é o HIGH CIRCLE HUB:
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest-custom mb-10">
              Um ecossistema formado por pessoas, empresas e experiências
            </p>

            <div className="space-y-8">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-gold text-xs font-heading font-bold tracking-widest-custom mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - 3D Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src={logo3d}
              alt="High Circle Hub Logo 3D"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HCHubSection;
