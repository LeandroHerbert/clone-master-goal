import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const StoriesSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-right">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
            Conheça o Oficina High Ticket
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden mb-10">
            <iframe
              src="https://www.youtube.com/embed/0etCUDe9BHE"
              title="Oficina High Ticket"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mb-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-gold-light"
            >
              <a href="https://wa.me/5561992141518?text=Quero%20participar%20do%20Oficina%20High%20Ticket" target="_blank" rel="noopener noreferrer">Quero participar!</a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-14 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              OFICINA HIGH TICKET
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              O evento criado para ajudar experts e empresários a construírem um Funil High Ticket Perpétuo em apenas 30 dias.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <CalendarDays size={18} className="text-gold" />
                <span>18/06/2025 das 14 às 18h</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-gold" />
                <span>SoftTown</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StoriesSection;
