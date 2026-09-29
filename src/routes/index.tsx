import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldPlus,
  HardHat,
  HeartHandshake,
  Accessibility,
  CalendarClock,
  Ear,
  MessagesSquare,
  Award,
  LifeBuoy,
  MapPin,
  Plane,
  Video,
  Instagram,
  Mail,
  Clock3,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo-carol.jpg.asset.json";
import photoAsset from "@/assets/carolina-freitas.jpg.asset.json";
import escritorioSala from "@/assets/escritorio-sala.jpg.asset.json";
import escritorioEquipe from "@/assets/escritorio-equipe.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carolina Freitas Advocacia Previdenciária | Benefícios do INSS" },
      { name: "description", content: "Seu benefício é nossa prioridade! Advocacia previdenciária e benefícios do INSS. Atendimento presencial em Fortaleza e online em todo o Brasil." },
      { property: "og:title", content: "Carolina Freitas Advocacia Previdenciária | Benefícios do INSS" },
      { property: "og:description", content: "Seu benefício é nossa prioridade! Atendimento previdenciário presencial em Fortaleza e online em todo o Brasil." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://advcarolinafreitas.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://advcarolinafreitas.lovable.app/" }],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/558587610651?text=" +
  encodeURIComponent(
    "Olá, gostaria de falar com o escritório sobre meu caso no INSS.",
  );

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.128-.315.128-.716.128-1.06 0-.688-1.318-1.146-1.605-1.146zm-2.54 7.148c-4.7 0-8.532-3.83-8.532-8.53 0-4.702 3.831-8.533 8.532-8.533s8.532 3.83 8.532 8.532c0 4.7-3.83 8.531-8.532 8.531zM16.57 5.3c-5.845 0-10.596 4.751-10.596 10.597 0 1.988.516 3.905 1.548 5.61l-1.977 5.845 6.06-1.94a10.5 10.5 0 004.965 1.242c5.845 0 10.597-4.751 10.597-10.597S22.415 5.3 16.57 5.3z" />
    </svg>
  );
}

function WhatsappButton({
  children,
  size = "md",
}: {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  return (
    <Button asChild size="lg" className={`btn-whatsapp h-auto max-w-full whitespace-normal text-center ${sizes[size]}`}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className={size === "lg" ? "!h-6 !w-6" : "!h-5 !w-5"} />
        {children ?? "Fale com o escritório"}
      </a>
    </Button>
  );
}

const benefits = [
  {
    tag: "01", name: "Auxílio-Acidente",
    hook: "Receba sem parar de trabalhar.",
    body: "Se você sofreu um acidente que deixou sequelas e reduziu sua capacidade de trabalho, pode ter direito a um benefício mensal. Nossa equipe analisa o seu caso e orienta os próximos passos.",
    Icon: HardHat,
  },
  {
    tag: "02", name: "BPC/LOAS",
    hook: "Benefício mesmo sem ter contribuído.",
    body: "Pessoas com 65 anos ou mais e pessoas com deficiência em situação de baixa renda podem ter direito a um salário mínimo mensal, mesmo sem contribuições ao INSS. Cada situação precisa ser avaliada.",
    Icon: HeartHandshake,
  },
  {
    tag: "03", name: "Auxílio por incapacidade temporária",
    hook: "Proteção durante o afastamento do trabalho.",
    body: "Se uma doença ou acidente impede você de trabalhar temporariamente, podemos orientar sobre o pedido ao INSS e a documentação necessária, inclusive após uma negativa.",
    Icon: ShieldPlus,
  },
  {
    tag: "04", name: "Aposentadoria por incapacidade permanente",
    hook: "Quando não há mais expectativa de voltar a trabalhar.",
    body: "Se uma condição de saúde impede o exercício de atividades profissionais sem perspectiva de reabilitação, podemos avaliar a possibilidade de aposentadoria por incapacidade permanente.",
    Icon: Accessibility,
  },
  {
    tag: "05", name: "Aposentadorias e planejamento",
    hook: "Planeje o próximo capítulo com informação.",
    body: "Analisamos o histórico de contribuições e a documentação para orientar pedidos de aposentadoria por idade ou tempo de contribuição e o planejamento previdenciário.",
    Icon: CalendarClock,
  },
];

const reasons = [
  {
    title: "Atendimento humano, do início ao fim",
    body: "Nossa equipe escuta sua história e acompanha cada etapa do atendimento com atenção.",
    Icon: Ear,
  },
  {
    title: "Clareza sem juridiquês",
    body: "Explicamos cada etapa do processo em uma linguagem simples, sem termos complicados.",
    Icon: MessagesSquare,
  },
  {
    title: "Orientação em pedidos ao INSS",
    body: "Analisamos documentos, requerimentos e negativas para orientar o caminho adequado a cada caso.",
    Icon: Award,
  },
  {
    title: "Suporte em cada etapa",
    body: "A equipe orienta sobre a documentação e acompanha os trâmites com você.",
    Icon: LifeBuoy,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-nude">
              <img src={logoAsset.url} alt="Logo Dra. Carolina Freitas" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold">Dra. Carolina Freitas</div>
              <div className="text-xs text-muted-foreground">Advocacia Previdenciária</div>
            </div>
          </div>
          <WhatsappButton size="sm">Fale com o escritório</WhatsappButton>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden md:min-h-[620px] md:items-center">
        <img src={photoAsset.url} alt="Dra. Carolina Freitas, advogada previdenciária" className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center" />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-32 md:py-24">
          <div className="max-w-2xl text-hero-foreground">
            <p className="text-xs font-bold uppercase tracking-widest text-hero-subtle">Carolina Freitas Advocacia Previdenciária · OAB/CE 23.787</p>
            <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">Seu benefício é nossa prioridade!</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-hero-subtle">Advocacia previdenciária e benefícios do INSS. Atendimento presencial em Fortaleza, Ceará, e online em todo o Brasil.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <WhatsappButton size="lg">Fale com o escritório</WhatsappButton>
              <a href="#beneficios" className="text-sm font-semibold text-hero-foreground underline underline-offset-4">Conheça as áreas de atuação</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.75fr_1.25fr] md:gap-20 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">À frente do escritório</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Dra. Carolina Freitas Moreira</h2>
            <p className="mt-3 text-sm font-semibold text-terracotta">Advogada · OAB/CE 23.787</p>
          </div>
          <div className="self-center space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>Carolina Freitas Moreira atua na advocacia previdenciária, orientando pessoas em questões relacionadas aos benefícios do INSS. À frente do escritório em Fortaleza, oferece atendimento presencial e, com sua equipe, também atende online em todo o Brasil.</p>
            <p>As áreas de atuação incluem auxílio-acidente, BPC/LOAS, benefícios por incapacidade, aposentadorias e planejamento previdenciário. Cada caso é analisado individualmente, com orientação clara sobre documentos e possibilidades.</p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Benefícios previdenciários
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Descubra qual é o seu direito no INSS.
          </h2>
          <p className="mt-4 text-muted-foreground">
             Conheça algumas situações em que nossa equipe pode orientar você.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.Icon;
            return (
              <article
                key={b.tag}
                 className="group relative flex flex-col rounded-md border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-xl hover:shadow-terracotta/5"
              >
                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-nude/70 text-terracotta transition-transform group-hover:-rotate-3 group-hover:scale-105">
                  <Icon size={28} strokeWidth={1.6} />
                </div>
                 <div className="text-xs font-semibold uppercase text-muted-foreground">ÁREA {b.tag}</div>
                 <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-terracotta">{b.name}</h3>
                 <h4 className="mt-3 font-display text-lg leading-snug text-foreground">
                  {b.hook}
                 </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                <div className="mt-6 h-px w-10 bg-terracotta/60 transition-all group-hover:w-16" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Escritório + Atendimento Nacional */}
      <section id="escritorio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-nude/20" />
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Nosso escritório
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Sediados em <span className="italic text-terracotta">Fortaleza-CE</span>,
              atendendo todo o Brasil.
            </h2>
            <p className="mt-4 text-muted-foreground">
               Nosso escritório fica no Centro de Fortaleza. Também atendemos online em todo o Brasil, para você conversar com a equipe de onde estiver.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[1.5rem] border border-nude shadow-xl shadow-terracotta/5">
              <img
                src={escritorioSala.url}
                alt="Dra. Carolina Freitas em seu escritório em Fortaleza"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-nude shadow-xl shadow-terracotta/5">
              <img
                src={escritorioEquipe.url}
                alt="Equipe do escritório Carolina Freitas Advocacia"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Mapa Brasil */}
          <div className="mt-12 grid items-center gap-10 border-t border-border py-10 md:grid-cols-[1fr_1fr] md:py-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-terracotta">
                <MapPin size={14} /> Atendimento Nacional
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                Não importa onde você mora — seu direito não tem fronteira.
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-nude/70 text-terracotta">
                    <Video size={16} />
                  </span>
                  <span>
                    <strong className="text-foreground">Consultas online</strong> por WhatsApp e
                    videochamada, sem sair de casa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-nude/70 text-terracotta">
                    <Plane size={16} />
                  </span>
                  <span>
                    <strong className="text-foreground">Processos digitais</strong> em todas as
                    agências do INSS e Justiça Federal do país.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-nude/70 text-terracotta">
                    <MapPin size={16} />
                  </span>
                  <span>
                    <strong className="text-foreground">Escritório físico</strong> em
                    Fortaleza-CE para quem preferir atendimento presencial.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-nude/40" />
              <svg
                viewBox="0 0 600 600"
                className="h-auto w-full max-w-md"
                aria-label="Mapa do Brasil - atendimento nacional"
              >
                <defs>
                  <radialGradient id="brasilGrad" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="oklch(0.58 0.12 48)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="oklch(0.58 0.12 48)" stopOpacity="0.08" />
                  </radialGradient>
                </defs>
                {/* Simplified Brazil silhouette */}
                <path
                  d="M247 78 c18 -6 42 -4 60 4 c15 6 28 4 44 -2 c14 -5 30 -2 40 8 c10 10 20 10 34 6 c18 -5 34 6 40 22 c6 16 20 28 36 30 c18 2 30 14 32 32 c2 20 -8 34 -20 46 c-8 8 -8 20 0 30 c14 18 12 40 -4 56 c-8 8 -10 20 -6 32 c8 22 -4 46 -26 54 c-14 4 -22 16 -24 30 c-2 22 -18 38 -40 42 c-16 3 -26 14 -30 28 c-6 22 -26 36 -50 34 c-16 -1 -30 6 -36 20 c-8 20 -30 30 -50 24 c-16 -5 -32 -1 -42 12 c-14 18 -40 22 -58 8 c-14 -10 -32 -10 -46 0 c-20 14 -48 6 -58 -14 c-6 -12 -18 -18 -32 -16 c-24 4 -46 -14 -46 -38 c0 -14 -6 -26 -18 -32 c-20 -10 -26 -34 -14 -52 c8 -12 8 -26 0 -38 c-12 -18 -6 -42 12 -52 c14 -8 20 -22 16 -38 c-4 -22 12 -42 34 -44 c14 -1 26 -10 30 -24 c6 -22 30 -36 52 -30 c14 4 28 -2 36 -14 c8 -14 24 -20 40 -18 c14 2 26 -6 30 -20 c4 -14 16 -22 30 -22 z"
                  fill="url(#brasilGrad)"
                  stroke="oklch(0.58 0.12 48)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Radiating rings from Fortaleza */}
                {[40, 80, 130, 190].map((r) => (
                  <circle
                    key={r}
                    cx="420"
                    cy="180"
                    r={r}
                    fill="none"
                    stroke="oklch(0.58 0.12 48)"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                    opacity={0.35}
                  />
                ))}
                {/* Fortaleza pin */}
                <circle cx="420" cy="180" r="10" fill="oklch(0.58 0.12 48)" />
                <circle cx="420" cy="180" r="16" fill="none" stroke="oklch(0.58 0.12 48)" strokeWidth="2" opacity="0.6" />
                <text
                  x="420"
                  y="160"
                  textAnchor="middle"
                  className="font-display"
                  fontSize="18"
                  fontWeight="600"
                  fill="oklch(0.28 0.02 40)"
                >
                  Fortaleza-CE
                </text>
              </svg>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
           <WhatsappButton size="lg">Fale com o escritório</WhatsappButton>
          </div>
        </div>
      </section>

      <section className="bg-nude/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                Por que escolher
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Um jeito diferente de cuidar do seu caso.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Advocacia previdenciária feita perto de você, com escuta real e explicações que
                cabem no seu dia a dia.
              </p>
              <div className="mt-8">
                 <WhatsappButton>Fale com nossa equipe</WhatsappButton>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => {
                const Icon = r.Icon;
                return (
                  <li
                    key={r.title}
                     className="rounded-md border border-border/70 bg-background p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div className="font-display text-xl text-terracotta">0{i + 1}</div>
                    </div>
                    <h3 className="mt-3 font-display text-lg text-foreground">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-6xl px-5 py-24">
         <div className="relative overflow-hidden border-t border-border py-10 md:py-16">
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Não deixe seu direito ficar pra trás.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
               Tem dúvidas sobre um benefício do INSS? Nossa equipe pode ouvir sua situação e orientar os próximos passos.
            </p>
            <div className="mt-8">
               <WhatsappButton size="lg">Fale com o escritório</WhatsappButton>
            </div>
          </div>
        </div>
      </section>

       <footer className="border-t border-border bg-foreground text-background">
         <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 text-sm md:grid-cols-3">
           <div>
             <div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="h-10 w-10 rounded-full object-cover" /><strong className="font-display text-lg">Carolina Freitas Advocacia Previdenciária</strong></div>
             <p className="mt-4 opacity-80">Carolina Freitas Moreira · OAB/CE 23.787</p>
             <p className="mt-1 opacity-80">CNPJ: 52.502.793/0001-40</p>
             <div className="mt-5 flex gap-3">
               <a href="https://www.instagram.com/carolinafreitasadv/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do escritório" title="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-background/40 hover:bg-background/15"><Instagram size={20} /></a>
               <a href="https://www.tiktok.com/@adv.carolinafreitas" target="_blank" rel="noopener noreferrer" aria-label="TikTok do escritório" title="TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-background/40 hover:bg-background/15"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M16.7 2h-3.2v13.2a3.1 3.1 0 1 1-2.7-3.1V8.9a6.3 6.3 0 1 0 5.9 6.3V8.5a8.3 8.3 0 0 0 4.8 1.5V6.8A5.1 5.1 0 0 1 16.7 2Z" /></svg></a>
             </div>
           </div>
           <div>
             <h2 className="font-display text-xl">Visite o escritório</h2>
             <p className="mt-4 leading-relaxed opacity-80">Edifício Palácio Progresso<br />Rua Pedro Borges, nº 33, sala 520, 5º andar<br />Centro, Fortaleza – CE<br />Próximo ao calçadão da C. Rolim</p>
             <a className="mt-3 inline-flex items-center gap-2 underline underline-offset-4" href="https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Pal%C3%A1cio+Progresso+Rua+Pedro+Borges+33+Fortaleza+CE" target="_blank" rel="noopener noreferrer"><MapPin size={16} /> Ver localização <ExternalLink size={13} /></a>
           </div>
           <div>
             <h2 className="font-display text-xl">Atendimento</h2>
             <p className="mt-4 flex items-start gap-2 opacity-80"><Clock3 size={17} className="mt-0.5 shrink-0" /> Segunda a sexta, das 8h às 17h</p>
             <a href="mailto:carolinafreitasadvocacia@gmail.com" className="mt-4 flex items-start gap-2 break-all opacity-80 hover:opacity-100"><Mail size={17} className="mt-0.5 shrink-0" /> carolinafreitasadvocacia@gmail.com</a>
             <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 opacity-80 hover:opacity-100"><WhatsAppIcon /> (85) 8761-0651</a>
           </div>
         </div>
       </footer>

      {/* Floating WhatsApp */}
       <Button asChild size="icon" className="btn-whatsapp fixed bottom-6 right-6 z-50 !h-14 !w-14 !p-0" title="Fale com o escritório no WhatsApp">
         <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Fale com o escritório no WhatsApp"><WhatsAppIcon className="!h-7 !w-7" /></a>
       </Button>
    </div>
  );
}
