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
} from "lucide-react";
import logoAsset from "@/assets/logo-carol.jpg.asset.json";
import photoAsset from "@/assets/carolina-freitas.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/558587610651?text=" +
  encodeURIComponent(
    "Olá Dra. Carolina, gostaria de tirar uma dúvida sobre meu caso no INSS.",
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
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${sizes[size]}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      {children ?? "Falar no WhatsApp"}
    </a>
  );
}

const benefits = [
  {
    tag: "01 · Auxílio-Doença",
    hook: "Proteção para quem não pode trabalhar.",
    body: "Se uma doença ou acidente te afastou do trabalho por mais de 15 dias, você tem direito a receber. Atuamos para reverter perícias negadas e garantir seu afastamento remunerado pelo INSS.",
    Icon: ShieldPlus,
  },
  {
    tag: "02 · Auxílio-Acidente",
    hook: "Receba sem parar de trabalhar.",
    body: "Se você sofreu um acidente que deixou sequelas e reduziu sua capacidade, pode ter direito a uma indenização mensal de 50% do salário de benefício até a aposentadoria.",
    Icon: HardHat,
  },
  {
    tag: "03 · BPC-LOAS",
    hook: "Benefício mesmo sem ter contribuído.",
    body: "Idosos (+65) ou pessoas com deficiência de baixa renda podem receber um salário mínimo sem nunca ter pago INSS. Comprovamos a vulnerabilidade social para garantir esse direito.",
    Icon: HeartHandshake,
  },
  {
    tag: "04 · Aposentadoria por Incapacidade",
    hook: "Quando não há mais expectativa de voltar a trabalhar.",
    body: "Se você tem uma doença grave ou sequela que te impede de exercer qualquer atividade, sem previsão de melhora, pode ter direito a um benefício mensal definitivo do INSS.",
    Icon: Accessibility,
  },
  {
    tag: "05 · Aposentadoria por Idade / Tempo",
    hook: "Não perca dinheiro na aposentadoria.",
    body: "Faltam poucos meses ou anos? Realizamos um Planejamento Previdenciário detalhado (análise do CNIS) para organizar sua documentação e garantir o melhor valor possível.",
    Icon: CalendarClock,
  },
];

const reasons = [
  {
    title: "Atendimento humano, do início ao fim",
    body: "Você não vai ser só mais um número. Vou acompanhar seu caso de perto, com atenção real à sua história.",
    Icon: Ear,
  },
  {
    title: "Clareza sem juridiquês",
    body: "Vou te explicar cada etapa do processo em uma linguagem que você entende, sem termos complicados.",
    Icon: MessagesSquare,
  },
  {
    title: "Experiência em causas negadas pelo INSS",
    body: "Já ajudei muitas pessoas que ouviram “não” a conseguirem o que é delas por direito.",
    Icon: Award,
  },
  {
    title: "Suporte em cada etapa",
    body: "Cuido da burocracia e dos documentos para você focar no que importa: sua recuperação e sua vida.",
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
          <WhatsappButton size="sm">WhatsApp</WhatsappButton>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, oklch(0.87 0.028 55 / 0.55), transparent 55%), radial-gradient(ellipse at 10% 90%, oklch(0.58 0.12 48 / 0.14), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-terracotta">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              OAB · Advocacia Previdenciária
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Quando o INSS te diz <span className="italic text-terracotta">NÃO</span>,{" "}
              <br className="hidden md:block" />
              eu te ajudo.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Sou a <strong className="text-foreground">Dra. Carolina Freitas</strong>, advogada
              previdenciária. Vou te ouvir, entender sua história e lutar pelo benefício que é seu
              por direito.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsappButton size="lg">Falar no WhatsApp</WhatsappButton>
              <a href="#beneficios" className="text-sm font-medium text-foreground/70 underline-offset-4 hover:underline">
                Ver benefícios →
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-nude/70" />
            <div className="overflow-hidden rounded-[1.75rem] border border-nude shadow-2xl shadow-terracotta/10">
              <img
                src={photoAsset.url}
                alt="Dra. Carolina Freitas, advogada previdenciária"
                className="h-full w-full object-cover"
              />
            </div>
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
            Sem juridiquês. Aqui vão os cinco caminhos mais comuns — leia com calma e veja qual
            combina com a sua história.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.Icon;
            return (
              <article
                key={b.tag}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-xl hover:shadow-terracotta/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-nude/70 text-terracotta transition-transform group-hover:-rotate-3 group-hover:scale-105">
                  <Icon size={28} strokeWidth={1.6} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {b.tag}
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug text-foreground">
                  {b.hook}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                <div className="mt-6 h-px w-10 bg-terracotta/60 transition-all group-hover:w-16" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Por que escolher */}
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
                <WhatsappButton>Conversar comigo agora</WhatsappButton>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => {
                const Icon = r.Icon;
                return (
                  <li
                    key={r.title}
                    className="rounded-2xl border border-border/70 bg-background p-6"
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
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.58 0.12 48 / 0.18), transparent 70%)" }}
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Não deixe seu direito ficar pra trás.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada dia que passa pode significar dinheiro perdido ou um benefício que você ainda
              não sabe que tem direito. Fale agora comigo e descubra o melhor caminho para o seu
              caso.
            </p>
            <div className="mt-8">
              <WhatsappButton size="lg">Falar no WhatsApp agora</WhatsappButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-nude">
              <img src={logoAsset.url} alt="" className="h-full w-full object-cover" />
            </div>
            <span>Dra. Carolina Freitas — Advocacia Previdenciária</span>
          </div>
          <div>WhatsApp: (85) 8761-0651</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="btn-whatsapp fixed bottom-6 right-6 z-50 !h-14 !w-14 !p-0"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
