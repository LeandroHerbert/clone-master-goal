import ScrollReveal from "./ScrollReveal";

const TestimonialsSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
      <div className="container mx-auto px-6 lg:px-16">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            O que falam sobre o nosso ecosistema?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden">
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
