import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, UserRound } from "lucide-react";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Cadastro",
  description:
    "Crie sua conta no Elosu como migrante ou como empresa e comece a conectar talentos a oportunidades.",
};

const opcoes = [
  {
    tipo: "migrante" as const,
    titulo: "Sou migrante",
    descricao:
      "Monte seu perfil profissional, envie seu currículo e receba vagas compatíveis com sua experiência. É gratuito.",
    href: "/cadastro/migrante",
    Icone: UserRound,
  },
  {
    tipo: "empresa" as const,
    titulo: "Sou empresa",
    descricao:
      "Acesse talentos pré-qualificados, publique vagas e acompanhe indicadores de impacto ESG no seu painel.",
    href: "/cadastro/empresa",
    Icone: Building2,
  },
];

export default function CadastroPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 h-[520px]" />
          <div className="absolute top-10 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-esg-soft blur-3xl" />
        </div>

        <div className="w-full max-w-3xl animate-fade-up">
          <Link href="/" aria-label="Elosu — início" className="inline-block">
            <Logo />
          </Link>

          <div className="mt-8 text-center">
            <p className="eyebrow mx-auto">
              <span className="size-1.5 rounded-full bg-esg-strong" />
              Criar conta
            </p>
            <h1 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl">
              Como você quer se cadastrar?
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-foreground-soft">
              Escolha o tipo de conta para começar. É rápido e gratuito.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {opcoes.map(({ tipo, titulo, descricao, href, Icone }) => (
              <Link
                key={tipo}
                href={href}
                className="card group flex flex-col p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-esg-strong hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-esg-mist text-esg-text">
                  <Icone className="size-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-xl font-extrabold tracking-[-0.02em]">
                  {titulo}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-soft">
                  {descricao}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-esg-text">
                  Continuar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-foreground-soft">
            Já tem conta?{" "}
            <Link href="/entrar" className="font-semibold text-esg-text underline">
              Entrar
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
