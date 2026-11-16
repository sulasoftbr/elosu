import Link from "next/link";
import { ArrowRight, Check, Infinity as InfinityIcon, Sparkle } from "lucide-react";

const features = [
  "Acesso ao banco de candidatos",
  "Selo ESG digital",
  "Dashboard de impacto",
  "Vagas ilimitadas",
];

export function PilotPlan() {
  return (
    <section id="plano" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-esg/15 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 size-[26rem] rounded-full bg-esg-strong/15 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3.5 py-2 text-xs font-bold tracking-[0.1em] text-esg uppercase backdrop-blur">
            <Sparkle className="size-3.5" aria-hidden />
            Validação de mercado
          </p>

          <h2 className="mt-6 text-3xl leading-[1.12] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.6rem]">
            Empresas piloto com assinatura acessível para validação ESG e
            inclusão produtiva.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
            Convidamos empresas pioneiras a participarem por um valor simbólico
            mensal, validando juntos o modelo SaaS e gerando impacto social
            mensurável desde o dia um.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/cadastro/empresa" className="btn btn-esg">
              Participar como empresa piloto
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <p className="flex items-center gap-2 text-sm font-semibold text-paper/60">
              <InfinityIcon className="size-4 text-esg" aria-hidden />
              Cancela quando quiser. Sem fidelidade.
            </p>
          </div>
        </div>

        <div className="card relative overflow-hidden !border-paper/10 p-7 text-ink shadow-lift sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-esg via-esg-strong to-esg-soft" />

          <div className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-[0.12em] text-foreground-soft uppercase">
              Plano piloto
            </p>
            <span className="rounded-full bg-esg-soft px-3 py-1.5 text-xs font-extrabold text-esg-text">
              Edição limitada
            </span>
          </div>

          <p className="mt-6 flex items-baseline gap-2">
            <span className="text-6xl font-extrabold tracking-[-0.05em]">
              R$ 99
            </span>
            <span className="text-base font-bold text-foreground-soft">
              /mês
            </span>
          </p>
          <p className="mt-2 text-sm font-semibold text-foreground-soft">
            Baixo custo de adesão para validar impacto desde o primeiro mês.
          </p>

          <div className="my-6 h-px bg-line" />

          <ul className="grid gap-3.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink text-esg">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span className="text-[15px] font-semibold">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/cadastro/empresa" className="btn btn-primary mt-7 w-full">
            Garantir vaga piloto
            <ArrowRight className="size-4" aria-hidden />
          </Link>

          <p className="mt-4 text-center text-xs font-semibold text-foreground-soft">
            Sem cartão de crédito · Onboarding assistido
          </p>
        </div>
      </div>
    </section>
  );
}
