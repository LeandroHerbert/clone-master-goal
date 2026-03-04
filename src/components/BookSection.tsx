import livro from "@/assets/livro.webp";

const BookSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Book image */}
          <div className="flex-1 flex justify-center">
            <img
              src={livro}
              alt="Livro Palavras que Lucram"
              className="w-full max-w-sm"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Conteúdo
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Faça o download da minha versão digital do livro PALAVRAS QUE LUCRAM clicando no botão abaixo:
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-gold-light transition-colors mb-4"
            >
              Clique aqui para baixar
            </a>
            <p className="text-muted-foreground text-sm">
              Depois deixe um feedback no direct do Instagram!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
