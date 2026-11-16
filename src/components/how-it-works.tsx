import { Building2, ScanSearch, UserRoundPlus } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRoundPlus,
    title: "Cadastro acolhedor",
    description:
      "O migrante cria seu perfil profissional em poucos minutos, com upload de currículo e suporte multilíngue.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Matching inteligente",
    description:
      "Nosso algoritmo cruza competências, idiomas, experiência e perfil cultural com vagas ativas.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Empresa ESG conecta",
    description:
      "Empresas piloto recebem candidatos pré-qualificados e indicadores reais de impacto social.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.6rem]">
            Três passos simples para conectar talento e oportunidade
          </h2>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="absolute top-16 right-[16%] left-[16%] hidden border-t-2 border-dashed border-line-strong md:block"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="card relative p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-pop md:p-8"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink text-esg">
                    <Icon className="size-6" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-5xl font-extrabold tracking-[-0.05em] text-esg-strong/35 select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground-soft">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
