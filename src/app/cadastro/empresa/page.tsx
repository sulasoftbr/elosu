import type { Metadata } from "next";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EmpresaForm } from "@/components/empresa-form";

export const metadata: Metadata = {
  title: "Cadastro de empresa",
  description:
    "Cadastre sua empresa no Elosu e acesse candidatos pré-qualificados com indicadores de impacto social e ESG.",
};

export default function CadastroEmpresaPage() {
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
              <Building2 className="size-4 text-esg-strong" aria-hidden />
              Cadastro · Sou empresa
            </p>

            <h1 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl">
              Cadastre sua empresa ESG
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground-soft">
              Acesse talentos diversos, acompanhe indicadores reais de inclusão
              produtiva e fortaleça sua agenda ESG — com plano piloto acessível
              e sem fidelidade.
            </p>

            <hr className="my-8 border-line" />

            <EmpresaForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
