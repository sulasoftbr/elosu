import Link from "next/link";
import { Logo } from "./logo";

const columns = [
  {
    title: "Plataforma",
    links: [
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Sou Empresa", href: "/#empresas" },
      { label: "Plano Piloto", href: "/#plano" },
      { label: "Entrar", href: "/entrar" },
    ],
  },
  {
    title: "Impacto",
    links: [
      { label: "ESG & Diversidade", href: "/#empresas" },
      { label: "Mulheres Migrantes", href: "/#mulheres" },
      { label: "Inclusão Produtiva", href: "/#como-funciona" },
      { label: "Histórias reais", href: "/#historias" },
    ],
  },
  {
    title: "Cadastro",
    links: [
      { label: "Sou Migrante", href: "/cadastro/migrante" },
      { label: "Sou Empresa", href: "/cadastro/empresa" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,0.8fr)] md:gap-8">
          <div className="max-w-sm">
            <Link href="/" aria-label="Elosu — início">
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground-soft">
              SocialTech brasileira conectando talentos migrantes a
              oportunidades de trabalho com empresas comprometidas com ESG,
              diversidade e inclusão produtiva no Rio Grande do Sul.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-esg-soft px-3 py-1.5 text-xs font-extrabold text-esg-text">
              Validação 2026
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-bold tracking-[0.12em] text-foreground-soft uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-ink transition-colors hover:text-esg-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-foreground-soft">
            © 2026 Elosu · Porto Alegre, RS — Brasil
          </p>
          <p className="font-semibold text-foreground-soft">
            Tecnologia humanizada · Impacto social · Governança ESG
          </p>
        </div>
      </div>
    </footer>
  );
}
