"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sou Empresa", href: "#empresas" },
  { label: "Plano Piloto", href: "#plano" },
  { label: "Histórias", href: "#historias" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "border-b border-line bg-paper/85 shadow-[0_10px_30px_-24px_rgb(11_18_14_/_0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Principal"
          className="container-page flex h-16 items-center justify-between gap-6 md:h-20"
        >
          <a href="#inicio" className="shrink-0" aria-label="Elosu — início">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-semibold text-foreground-soft transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/entrar"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              Entrar
            </Link>
            <Link href="/cadastro" className="btn btn-primary !py-2.5 !text-sm">
              Cadastrar
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-xl border border-line bg-paper text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </nav>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-b border-line bg-paper/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <Link
              href="/entrar"
              onClick={() => setOpen(false)}
              className="btn btn-secondary w-full"
            >
              Entrar
            </Link>
            <Link
              href="/cadastro"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Cadastrar gratuitamente
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
