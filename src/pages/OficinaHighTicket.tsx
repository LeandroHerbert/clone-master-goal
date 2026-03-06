import { CalendarDays, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import oficinaBg from "@/assets/oficina-hero-bg.jpg";
import oficinaLogo from "@/assets/oficina-logo.png";
import result1 from "@/assets/oficina-result-1.webp";
import result2 from "@/assets/oficina-result-2.webp";
import result3 from "@/assets/oficina-result-3.webp";
import aboutImg from "@/assets/oficina-about.webp";

const CTA_LINK = "https://www.sympla.com.br/evento/oficina-high-ticket--1812/3226163";

const CtaButton = ({ className = "" }: { className?: string }) => (
  <motion.a
    href={CTA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block border border-gold bg-transparent text-gold font-heading font-bold uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors ${className}`}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    Quero participar!
  </motion.a>
);

const topics = [
  "Psicologia High Ticket",
  "Lógica do Funil de Vendas",
  "Atração, Qualificação e Conversão",
  "Comunicação High Ticket",
];

const results = [
  {
    img: result1,
    text: "Quais são os principais erros que você está cometendo na comunicação, marketing e vendas do seu produto/serviço",
  },
  {
    img: result2,
    text: "O passo a passo para colocar um funil perpétuo para a venda de produtos high ticket em ação",
  },
  {
    img: result3,
    text: "Como funciona a mentalidade do comprador High Ticket e de que maneira você precisa ajustar sua comunicação para falar a mesma língua que ele.",
  },
];

const forWho = [
  "Experts com bons produtos, mas vendas inconsistentes",
  "Empresários que sentem que o funil \"não engrena\".",
  "Quem precisa de clareza estratégica e tática para escalar.",
  "Quem está cansado de ter leads desqualificados dentro do funil",
  "Quem não quer mais ser refém da venda boca a boca",
];

const notForWho = [
  "Quem não tem problemas estratégicos e já definiu Big Idea, Mecanismo Único e Narrativa.",
  "Quem não tem problemas para ATRAIR, QUALIFICAR E CONVERTER.",
  "Quem já possui um posicionamento magnético High Ticket estruturado",
  "Quem já possui uma comunicação persuasiva para o público High Ticket",
  "Para quem não se entende como expert naquilo que faz",
];

const OficinaHighTicket = () => {
  return (
    <main className="bg-background text-foreground">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-glow">
        <div className="absolute inset-0">
          <motion.img
            src={oficinaBg}
            alt="Oficina High Ticket"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20">
          <motion.img
            src={oficinaLogo}
            alt="Oficina High Ticket Logo"
            className="h-16 md:h-20 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold max-w-2xl leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            O evento criado para ajudar experts e empresários a construírem um funil perpétuo para a venda de produtos High Ticket
          </motion.h1>

          <motion.div
            className="flex items-start gap-3 text-muted-foreground text-sm mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <CalendarDays size={20} className="text-gold mt-0.5 shrink-0" />
            <span>18 de dezembro | 14h às 18h | Grupo Dádiva SHCN EQN 102/103 Ed. Avenida 102 Brasília, DF</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <CtaButton />
          </motion.div>
        </div>
      </section>

      {/* ===== CONHEÇA O OFICINA - VIDEO YOUTUBE ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
              Conheça o Oficina High Ticket
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden mb-10">
              <iframe
                src="https://www.youtube.com/embed/0etCUDe9BHE"
                title="Conheça o Oficina High Ticket"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECOND HERO / VIDEO PANDA ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-right">
        <div className="container mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-10">
            <img src={oficinaLogo} alt="Oficina High Ticket" className="h-12 md:h-16 mx-auto mb-8" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold max-w-2xl mx-auto mb-10">
              O evento criado para ajudar experts e empresários a construírem um funil perpétuo para a venda de produtos High Ticket
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://player-vz-a960b54f-3b1.tv.pandavideo.com.br/embed/?v=162ed188-2f95-4f45-a9ee-d03443e4c283&iosFakeFullscreen=true"
                style={{ border: "none" }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="text-center">
            <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm mb-8">
              <CalendarDays size={18} className="text-gold" />
              <span>18 de dezembro | 14h às 18h | Auditório do Grupo Dádiva (EQN 102/103 lote A, Edifício Ilka Matos, no 2º andar)</span>
            </div>
            <CtaButton />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NO EVENTO ENSINAREMOS ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
        <div className="container mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              No evento presencial ensinaremos sobre:
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {topics.map((topic, i) => (
              <ScrollReveal key={topic} delay={i * 0.1}>
                <div className="pillar-box flex flex-col items-center text-center gap-4 min-h-[140px] justify-center">
                  <CheckSquare size={28} className="text-gold" />
                  <h3 className="font-heading font-bold text-base">{topic}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
              O que falam sobre o Oficina High Ticket
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Bty9QpFGOdQ"
                title="O que falam sobre o Oficina High Ticket"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== UMA TARDE IMERSIVA ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-right">
        <div className="container mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Uma tarde imersiva de PURA PRÁTICA, sem enrolação!
            </h2>
            <p className="text-muted-foreground mt-4">
              Ao final deste evento presencial você saberá:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {results.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-[0_0_30px_-10px_hsl(40_70%_50%/0.2)] transition-shadow">
                  <img src={item.img} alt={`Resultado ${i + 1}`} className="w-full aspect-video object-cover" />
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <CtaButton />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PARA QUEM É / NÃO É ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="pillar-box">
                <h2 className="text-xl md:text-2xl font-heading font-bold mb-6">
                  Para quem é a Oficina High Ticket
                </h2>
                <ul className="space-y-4">
                  {forWho.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckSquare size={18} className="text-gold mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="pillar-box">
                <h2 className="text-xl md:text-2xl font-heading font-bold mb-6">
                  Para quem não é a Oficina High Ticket
                </h2>
                <ul className="space-y-4">
                  {notForWho.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-destructive mt-0.5 shrink-0 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VAGAS LIMITADAS + FOTO ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-right">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left" className="flex-1">
              <img
                src={aboutImg}
                alt="Oficina High Ticket - Sobre"
                className="w-full max-w-sm mx-auto rounded-xl"
              />
            </ScrollReveal>

            <ScrollReveal direction="right" className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                A Quantidade de vagas é limitada em função do espaço em que a Oficina High Ticket será realizada.
              </h2>
              <p className="text-muted-foreground mb-8">
                Clique no botão abaixo para garantir a sua participação e ter acesso ao material didático
              </p>
              <CtaButton />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== QUEM SOMOS ===== */}
      <section className="relative bg-background py-20 lg:py-28 section-glow gold-glow-left">
        <div className="container mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-14">
            <p className="text-gold-light text-sm font-heading font-medium tracking-widest-custom mb-4 uppercase">
              Quem somos?
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="pillar-box">
                <h3 className="text-xl font-heading font-bold mb-4">Leandro Herbert</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Casado, pai de gêmeos e self-made, Leandro Herbert é o criador da Atmosfera Estratégica de Valor. O mecanismo utilizado por experts e empresários para construírem estratégias, movimentos e ecossistemas de alto impacto.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Fundou a Holding Atmosfera, um ecossistema sócio de mais de 12 ecossistemas que atuam em áreas como sistema financeiro, imobiliário, gestão e governança, investimentos, planejamento tributário, marketing, vendas, comunicação, turismo, mentorias de alto valor, eventos e alimentação.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estrategista, Empresário, Mentor, Copywriter, Advogado e apaixonado pelo comportamento humano, Leandro Herbert tem como sua principal motivação "ajudar as pessoas a se transformarem em um ativo mais valioso."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="pillar-box">
                <h3 className="text-xl font-heading font-bold mb-4">Ricardo Resstel</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Com mais de 10 anos de experiência em comunicação e formação acadêmica de excelência, Ricardo Resstel é referência no desenvolvimento de líderes e comunicadores de alto impacto. Ele possui certificação em negociação pela Harvard Business School e em estratégias digitais pela Columbia University de Nova Iorque, além de ser membro do renomado John Maxwell Team.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Ao longo de sua trajetória, Ricardo já palestrou ao lado de grandes nomes do empreendedorismo, como Paulo Camargo, João Apolinário e Geraldo Rufino. Com mais de 3.000 clientes atendidos, sua carteira inclui casos impressionantes, com resultados que refletem ganhos milionários em até seis meses após o treinamento, e retornos de investimento (ROI) superiores a 50 vezes.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empresas como LATAM, Correios, Coca-Cola, Polícia Federal e Ministério Público estão entre aquelas que se beneficiaram de sua expertise. Ricardo transforma profissionais e equipes em comunicadores cativantes e líderes estratégicos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OficinaHighTicket;
