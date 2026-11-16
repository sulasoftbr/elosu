import type { Metadata } from "next";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Entrar",
  description:
    "Acesse sua conta no Elosu — área do migrante e painel da empresa.",
};

export default function EntrarPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 h-[520px]" />
          <div className="absolute top-10 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-esg-soft blur-3xl" />
        </div>

        <div className="w-full max-w-md animate-fade-up">
          <Link href="/" aria-label="Elosu — início" className="inline-block">
            <Logo />
          </Link>

          <div className="card mt-8 p-8 shadow-lift sm:p-10">
            <p className="eyebrow">
              <LogIn className="size-4 text-esg-strong" aria-hidden />
              Acesso à conta
            </p>

            <h1 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-[-0.03em] text-balance">
              Entrar no Elosu
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-foreground-soft">
              Acesse como migrante ou empresa. Ainda não tem conta?{" "}
              <Link
                href="/cadastro/migrante"
                className="font-semibold text-esg-text underline"
              >
                Cadastre-se
              </Link>
              .
            </p>

            <div className="mt-7">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
