import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

export function Cta() {
  return (
    <section id="cadastro" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-center text-paper shadow-lift sm:px-12 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-esg/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-esg-strong/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3.5 py-2 text-xs font-bold tracking-[0.1em] text-esg uppercase backdrop-blur">
              <HeartHandshake className="size-3.5" aria-hidden />
              Comece agora
            </p>

            <h2 className="mt-6 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.75rem]">
              Pronto para construir o seu próximo capítulo no Brasil?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-paper/70">
              Crie seu perfil profissional em poucos minutos ou cadastre sua
              empresa e comece a gerar impacto mensurável ainda este mês.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/cadastro/migrante" className="btn btn-esg">
                Sou migrante · criar perfil
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/cadastro/empresa"
                className="btn border border-paper/25 bg-paper/5 text-paper hover:border-paper/60 hover:bg-paper/10"
              >
                Sou empresa ESG
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <p className="mt-6 text-sm font-semibold text-paper/55">
              Sem custo para migrantes · Leva cerca de 3 minutos · Suporte em
              5 idiomas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
