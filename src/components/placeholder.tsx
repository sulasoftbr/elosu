import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

type PlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
};

export function Placeholder({
  eyebrow,
  title,
  description,
  bullets = [],
}: PlaceholderProps) {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 h-[520px]" />
          <div className="absolute top-10 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-esg-soft blur-3xl" />
        </div>

        <div className="w-full max-w-xl animate-fade-up">
          <Link href="/" aria-label="Elosu — início" className="inline-block">
            <Logo />
          </Link>

          <div className="card mt-8 p-8 shadow-lift sm:p-10">
            <p className="eyebrow">
              <Clock3 className="size-4 text-esg-strong" aria-hidden />
              {eyebrow}
            </p>

            <h1 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground-soft">
              {description}
            </p>

            {bullets.length > 0 ? (
              <ul className="mt-6 grid gap-2.5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-sm font-semibold"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-esg-strong" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="btn btn-primary">
                <ArrowLeft className="size-4" aria-hidden />
                Voltar ao início
              </Link>
              <Link href="/#como-funciona" className="btn btn-secondary">
                Ver como funciona
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
