import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, TrendingUp } from "lucide-react";

const benefits = [
  "Score de compatibilidade vaga × candidato",
  "Dashboard com métricas de impacto social",
  "Selo Empresa Parceira ESG verificável",
  "Publicação ilimitada de vagas no plano piloto",
];

const bars = [
  { month: "Abr", value: 38 },
  { month: "Mai", value: 54 },
  { month: "Jun", value: 47 },
  { month: "Jul", value: 72 },
  { month: "Ago", value: 66 },
  { month: "Set", value: 92 },
];

const metrics = [
  { value: "148", label: "Candidatos pré-qualificados" },
  { value: "12", label: "Vagas ativas" },
  { value: "91%", label: "Score médio" },
];

export function Companies() {
  return (
    <section id="empresas" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">
            <BadgeCheck className="size-4 text-esg-strong" aria-hidden />
            Empresa Parceira ESG
          </p>
          <h2 className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.6rem]">
            Para empresas com agenda ESG real
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-soft">
            Acesse talentos diversos, gere indicadores mensuráveis de inclusão e
            fortaleça sua governança social com candidatos pré-qualificados.
          </p>

          <ul className="mt-8 grid gap-3.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-esg-soft text-esg-text">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span className="text-[15px] leading-snug font-semibold">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/cadastro/empresa" className="btn btn-primary">
              Cadastrar empresa
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href="#plano" className="btn btn-secondary">
              Ver plano piloto
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-6 -right-4 size-40 rounded-full bg-esg-soft blur-2xl"
          />

          <div className="card relative overflow-hidden p-6 shadow-lift sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-[0.1em] text-foreground-soft uppercase">
                  Dashboard de impacto
                </p>
                <p className="mt-1 text-lg font-extrabold tracking-tight">
                  Empresa piloto · RS
                </p>
              </div>
              <span className="rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-foreground-soft">
                2026
              </span>
            </div>

            <div className="mt-6 flex items-end gap-4 rounded-2xl bg-ink p-5 text-paper">
              <div>
                <p className="text-4xl font-extrabold tracking-[-0.04em] text-esg">
                  60%
                </p>
                <p className="mt-1 text-xs font-semibold text-paper/70">
                  menos tempo de triagem
                </p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-2.5 py-1.5 text-xs font-bold text-esg">
                <TrendingUp className="size-3.5" aria-hidden />
                +18%
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-end gap-2.5" aria-hidden>
                {bars.map((bar) => (
                  <div key={bar.month} className="flex-1 text-center">
                    <div className="flex h-28 items-end">
                      <div
                        className={`w-full rounded-t-lg transition-all ${
                          bar.value === 92
                            ? "bg-esg-strong"
                            : "bg-surface-2"
                        }`}
                        style={{ height: `${bar.value}%` }}
                      />
                    </div>
                    <span className="mt-2 block text-[11px] font-bold text-foreground-soft">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>
              <p className="sr-only">
                Gráfico de contratações mensais com crescimento até setembro.
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-[11px] leading-tight font-semibold text-foreground-soft">
                    {metric.label}
                  </dt>
                  <dd className="text-2xl font-extrabold tracking-[-0.03em]">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-pop sm:flex">
            <span className="grid size-9 place-items-center rounded-xl bg-esg text-ink">
              <BadgeCheck className="size-5" strokeWidth={2.4} aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-bold tracking-wide text-foreground-soft uppercase">
                Selo verificado
              </p>
              <p className="text-sm font-extrabold">Empresa Parceira ESG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
