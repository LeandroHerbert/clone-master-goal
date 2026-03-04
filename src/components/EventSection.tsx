import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-14 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              OFICINA HIGH TICKET
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              O evento criado para ajudar experts e empresários a construírem um Funil High Ticket Perpétuo em apenas 30 dias.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <CalendarDays size={18} className="text-gold" />
                <span>18/06/2025 das 14 às 18h</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-gold" />
                <span>SoftTown</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-gold-light"
            >
              Quero participar!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
