import { BriefcaseBusiness, Languages, UsersRound } from "lucide-react";

const pillars = [
  {
    icon: UsersRound,
    title: "Comunidade",
    description:
      "Rede de apoio entre migrantes e mentoras brasileiras.",
  },
  {
    icon: Languages,
    title: "Multicultural",
    description: "Suporte em PT, ES, EN, FR e crioulo haitiano.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Empregabilidade",
    description: "Vagas formais, com CLT e processos justos.",
  },
];

export function Women() {
  return (
    <section id="mulheres" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="eyebrow">Foco prioritário</p>
            <h2 className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.6rem]">
              Mulheres migrantes no centro da plataforma
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-soft">
              Começamos pela população que mais enfrenta barreiras na inclusão
              produtiva. É também a forma mais consistente de validar impacto
              social, ESG e governança desde a primeira contratação.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-esg-soft to-surface p-7">
            <div
              aria-hidden
              className="absolute -top-10 -right-10 size-40 rounded-full bg-esg/40 blur-2xl"
            />
            <p className="relative text-6xl font-extrabold tracking-[-0.05em] text-esg-text sm:text-7xl">
              68%
            </p>
            <p className="relative mt-3 max-w-[16rem] text-sm leading-snug font-semibold text-foreground-soft">
              das mulheres migrantes no Brasil buscam trabalho formal — e
              encontram barreiras de idioma, validação de diploma e rede de
              contato.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="card group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-esg/60 hover:shadow-pop"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-esg-soft text-esg-text transition-colors group-hover:bg-esg group-hover:text-ink">
                  <Icon className="size-6" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-foreground-soft">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
