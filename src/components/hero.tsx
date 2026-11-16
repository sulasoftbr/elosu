import Link from "next/link";
import { ArrowRight, Check, Globe2, ShieldCheck, Sparkles } from "lucide-react";

const trust = [
  "Sem custo para migrantes",
  "Plano piloto acessível",
  "Selo ESG",
];

const skills = [
  { label: "Análise de dados", value: 92 },
  { label: "Português (B2)", value: 84 },
  { label: "Liderança de equipe", value: 76 },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 h-[620px]" />
        <div className="absolute -top-32 right-[-12%] size-[540px] rounded-full bg-esg-soft blur-3xl" />
        <div className="absolute top-56 left-[-18%] size-[420px] rounded-full bg-surface blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-16 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24">
        <div className="animate-fade-up">
          <p className="eyebrow">
            <span className="relative grid size-2 place-items-center">
              <span className="absolute size-2 rounded-full bg-esg-strong animate-ping-soft" />
              <span className="size-2 rounded-full bg-esg-strong" />
            </span>
            SocialTech brasileira · Edição 2026
          </p>

          <h1 className="mt-6 text-4xl leading-[1.04] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.75rem]">
            Conectando{" "}
            <span className="box-decoration-clone rounded-lg bg-esg-soft px-2 text-esg-text">
              talentos migrantes
            </span>{" "}
            a oportunidades de trabalho.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-soft">
            O Elosu aproxima migrantes qualificados de empresas com agenda ESG
            e diversidade no Rio Grande do Sul. Tecnologia humanizada para
            inclusão produtiva real.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/cadastro/migrante" className="btn btn-primary sm:text-[15px]">
              Cadastrar gratuitamente
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href="/cadastro/empresa" className="btn btn-secondary">
              Sou empresa ESG
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-foreground-soft"
              >
                <span className="grid size-5 place-items-center rounded-full bg-esg-soft text-esg-text">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-in lg:pl-4">
          <div
            aria-hidden
            className="absolute inset-4 rounded-[2.75rem] bg-gradient-to-br from-esg-soft via-paper to-surface rotate-3 shadow-soft"
          />

          <div className="card relative p-5 shadow-lift sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs font-bold tracking-wide text-foreground-soft uppercase">
                <Sparkles className="size-3.5 text-esg-strong" aria-hidden />
                Match inteligente
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-esg">
                <span className="size-1.5 rounded-full bg-esg" />
                Ao vivo
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative">
                <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-esg to-esg-strong text-lg font-extrabold text-ink">
                  ML
                </div>
                <span className="absolute -right-1.5 -bottom-1.5 size-4 rounded-full border-2 border-paper bg-esg-strong" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-extrabold tracking-tight">
                  Marie L.
                </p>
                <p className="truncate text-sm text-foreground-soft">
                  Analista de dados · Porto Alegre, RS
                </p>
              </div>

              <div className="relative size-16 shrink-0">
                <svg viewBox="0 0 64 64" className="size-16 -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="none"
                    stroke="var(--color-surface-2)"
                    strokeWidth="7"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="none"
                    stroke="var(--color-esg-strong)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={`${0.96 * 2 * Math.PI * 27} ${
                      2 * Math.PI * 27
                    }`}
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center text-sm font-extrabold">
                  96%
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Francês", "Português", "Inglês", "Crioulo"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-bold text-foreground-soft"
                >
                  {lang}
                </span>
              ))}
            </div>

            <dl className="mt-6 space-y-4">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <dt className="flex items-center justify-between text-sm font-semibold">
                    <span>{skill.label}</span>
                    <span className="text-foreground-soft">
                      {skill.value}%
                    </span>
                  </dt>
                  <dd className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-esg-strong to-esg"
                      style={{ width: `${skill.value}%` }}
                    />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
              <p className="text-sm font-semibold text-foreground-soft">
                3 vagas compatíveis hoje
              </p>
              <span className="btn btn-esg !px-4 !py-2.5 !text-[13px]">
                Ver candidaturas
                <ArrowRight className="size-3.5" aria-hidden />
              </span>
            </div>
          </div>

          <div className="absolute -top-6 -left-2 hidden rounded-2xl border border-line bg-paper px-4 py-3 shadow-pop animate-float-slow sm:block">
            <p className="flex items-center gap-2 text-xs font-bold text-foreground-soft uppercase">
              <Globe2 className="size-3.5 text-esg-strong" aria-hidden />
              Cobertura
            </p>
            <p className="mt-1 text-xl font-extrabold tracking-tight">
              +40 nacionalidades
            </p>
          </div>

          <div className="absolute -right-2 bottom-4 hidden rounded-2xl border border-line bg-paper px-4 py-3 shadow-pop animate-float-fast sm:block">
            <p className="flex items-center gap-2 text-xs font-bold text-foreground-soft uppercase">
              <ShieldCheck className="size-3.5 text-esg-strong" aria-hidden />
              Selo
            </p>
            <p className="mt-1 text-xl font-extrabold tracking-tight">
              Empresa ESG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
