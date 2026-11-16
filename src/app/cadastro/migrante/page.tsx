import type { Metadata } from "next";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MigrantForm } from "@/components/migrant-form";

export const metadata: Metadata = {
  title: "Cadastro de migrante",
  description:
    "Crie seu perfil profissional no Elosu em poucos minutos, com suporte multilíngue e upload de currículo.",
};

export default function CadastroMigrantePage() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 h-[520px]" />
          <div className="absolute top-10 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-esg-soft blur-3xl" />
        </div>

        <div className="w-full max-w-2xl animate-fade-up">
          <Link href="/" aria-label="Elosu — início" className="inline-block">
            <Logo />
          </Link>

          <div className="card mt-8 p-8 shadow-lift sm:p-10">
            <p className="eyebrow">
              <Clock3 className="size-4 text-esg-strong" aria-hidden />
              Cadastro · Sou migrante
            </p>

            <h1 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl">
              Crie seu perfil profissional
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground-soft">
              Em poucos minutos você monta seu perfil, envia seu currículo e
              começa a receber vagas compatíveis com a sua experiência — sem
              custo nenhum.
            </p>

            <hr className="my-8 border-line" />

            <MigrantForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
