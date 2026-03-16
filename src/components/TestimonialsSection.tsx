import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const TestimonialsSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Videos side by side */}
        <ScrollReveal className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
                O que falam sobre o nosso ecossistema?
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  id="panda-1fbb7f17-8271-43a5-95d1-131a725191ae"
                  src="https://player-vz-a960b54f-3b1.tv.pandavideo.com.br/embed/?v=1fbb7f17-8271-43a5-95d1-131a725191ae"
                  style={{ border: "none" }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  // @ts-ignore
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
                Conheça o Oficina High Ticket
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/0etCUDe9BHE"
                  title="Oficina High Ticket"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.25} className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-14 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Participe do Oficina High Ticket
            </h3>
            <p className="text-gold-light text-lg font-heading font-medium mb-4">
              Aprenda a Construir um Funil de Vendas
            </p>
            <p className="text-muted-foreground text-base mb-8">
              Clique no botão abaixo e participe da próxima edição
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-gold-light"
            >
              <a
                href="https://wa.me/5561992141518?text=Quero%20participar%20do%20Oficina%20High%20Ticket"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero participar
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
