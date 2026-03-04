const TestimonialsSection = () => {
  return (
    <section className="bg-dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
          O que falam sobre o nosso ecosistema?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                title={`Depoimento ${i}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
