import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elosu — Conectando talentos migrantes a oportunidades",
    template: "%s · Elosu",
  },
  description:
    "Plataforma SocialTech que conecta migrantes a empresas com agenda ESG e diversidade no Rio Grande do Sul, com foco prioritário em mulheres migrantes.",
  keywords: [
    "inclusão produtiva",
    "migrantes",
    "ESG",
    "diversidade",
    "empregabilidade",
    "Rio Grande do Sul",
    "SocialTech",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Elosu",
    title: "Elosu — Inclusão produtiva de migrantes",
    description:
      "Conectando talentos migrantes a oportunidades de trabalho. Empresas piloto com assinatura acessível para validação ESG.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elosu — SocialTech de inclusão produtiva de migrantes",
    description:
      "Plataforma SocialTech que conecta migrantes a empresas ESG no Rio Grande do Sul, com foco prioritário em mulheres migrantes.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
