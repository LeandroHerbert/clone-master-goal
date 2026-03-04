const StoriesSection = () => {
  return (
    <section className="bg-dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          COMPARTILHANDO HISTÓRIAS IMPACTANTES
        </h2>
        <p className="text-muted-foreground text-base mb-12">
          Histórias inspiradoras de transformação daqueles que estiveram junto a nós nesta jornada de crescimento.
        </p>

        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8">
            Conheça parte do conteúdo da Oficina High Ticket:
          </h3>
        </div>

        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-gold-light transition-colors"
        >
          Quero participar!
        </a>
      </div>
    </section>
  );
};

export default StoriesSection;
