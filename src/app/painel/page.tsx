"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Building2,
  CalendarDays,
  FileText,
  Languages,
  LogOut,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Logo } from "@/components/logo";
import type { PerfilUsuario } from "@/lib/perfil";

function formatarData(iso?: string) {
  if (!iso) return null;
  const data = new Date(iso);
  if (Number.isNaN(data.getTime())) return null;
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function Campo({
  icone,
  rotulo,
  valor,
}: {
  icone: React.ReactNode;
  rotulo: string;
  valor?: string | null;
}) {
  if (!valor) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-surface text-esg-text">
        {icone}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground-soft/80">
          {rotulo}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{valor}</p>
      </div>
    </div>
  );
}

export default function PainelPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<PerfilUsuario | null>(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const bruto = localStorage.getItem("elosu_usuario");
    if (!bruto) {
      router.replace("/entrar");
      return;
    }
    try {
      const perfil = JSON.parse(bruto) as PerfilUsuario;
      // Sesiones viejas guardaban solo id/nome/email/tipo: pedir login otra vez.
      if (!perfil.telefone) {
        localStorage.removeItem("elosu_usuario");
        router.replace("/entrar");
        return;
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect -- leer localStorage (cliente) tras montar
      setUsuario(perfil);
    } catch {
      router.replace("/entrar");
    } finally {
      setCarregado(true);
    }
  }, [router]);

  function sair() {
    localStorage.removeItem("elosu_usuario");
    router.push("/");
  }

  if (!carregado || !usuario) {
    return (
      <main className="grid flex-1 place-items-center px-5 py-28">
        <p className="text-sm font-semibold text-foreground-soft">Carregando…</p>
      </main>
    );
  }

  const ehEmpresa = usuario.tipo === "empresa";
  const inicial = usuario.nome.trim().charAt(0).toUpperCase();
  const criadoEm = formatarData(usuario.created_at);

  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" aria-label="Elosu — início">
            <Logo />
          </Link>
          <button onClick={sair} className="btn btn-secondary !py-2.5 !text-sm">
            <LogOut className="size-4" aria-hidden />
            Sair
          </button>
        </div>
      </header>

      <main className="container-page flex-1 py-12">
        <div className="mx-auto max-w-3xl">
          <section className="card overflow-hidden shadow-lift">
            <div className="bg-gradient-to-br from-esg-soft via-paper to-paper p-8 sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <span className="grid size-20 shrink-0 place-items-center rounded-2xl bg-ink text-2xl font-extrabold text-esg">
                  {inicial || (ehEmpresa ? "E" : "M")}
                </span>
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-esg-mist px-3 py-1 text-xs font-extrabold text-esg-text">
                    {ehEmpresa ? (
                      <Building2 className="size-3.5" aria-hidden />
                    ) : (
                      <UserRound className="size-3.5" aria-hidden />
                    )}
                    {ehEmpresa ? "Empresa" : "Migrante"}
                  </span>
                  <h1 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
                    {usuario.nome}
                  </h1>
                  <p className="mt-1 text-sm text-foreground-soft">
                    {usuario.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-line p-8 sm:p-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground-soft">
                Dados do perfil
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {ehEmpresa ? (
                  <>
                    <Campo
                      icone={<UserRound className="size-4" aria-hidden />}
                      rotulo="Responsável"
                      valor={usuario.responsavel}
                    />
                    <Campo
                      icone={<FileText className="size-4" aria-hidden />}
                      rotulo="CNPJ"
                      valor={usuario.cnpj}
                    />
                  </>
                ) : (
                  <>
                    <Campo
                      icone={<MapPin className="size-4" aria-hidden />}
                      rotulo="Nacionalidade"
                      valor={usuario.nacionalidade}
                    />
                    <Campo
                      icone={<Briefcase className="size-4" aria-hidden />}
                      rotulo="Área de interesse"
                      valor={usuario.area}
                    />
                  </>
                )}

                <Campo
                  icone={<Phone className="size-4" aria-hidden />}
                  rotulo="Telefone"
                  valor={usuario.telefone}
                />
                <Campo
                  icone={<MapPin className="size-4" aria-hidden />}
                  rotulo="Cidade"
                  valor={usuario.cidade}
                />

                {!ehEmpresa && (
                  <Campo
                    icone={<Briefcase className="size-4" aria-hidden />}
                    rotulo="Experiência"
                    valor={usuario.experiencia}
                  />
                )}

                <Campo
                  icone={<Mail className="size-4" aria-hidden />}
                  rotulo="E-mail"
                  valor={usuario.email}
                />

                {criadoEm && (
                  <Campo
                    icone={<CalendarDays className="size-4" aria-hidden />}
                    rotulo="Cadastro em"
                    valor={criadoEm}
                  />
                )}
              </div>

              {!ehEmpresa && usuario.idiomas && usuario.idiomas.length > 0 && (
                <div className="mt-6">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground-soft/80">
                    <Languages className="size-4" aria-hidden />
                    Idiomas
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {usuario.idiomas.map((idioma) => (
                      <span
                        key={idioma}
                        className="rounded-full bg-esg-soft px-3 py-1 text-xs font-bold text-esg-text"
                      >
                        {idioma}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {!ehEmpresa && usuario.mensagem && (
                <div className="mt-6">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground-soft/80">
                    <MessageSquare className="size-4" aria-hidden />
                    Sobre você
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-soft">
                    {usuario.mensagem}
                  </p>
                </div>
              )}

              {!ehEmpresa && usuario.curriculo && (
                <div className="mt-6">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground-soft/80">
                    <FileText className="size-4" aria-hidden />
                    Currículo
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">
                    {usuario.curriculo}
                  </p>
                </div>
              )}

              {!ehEmpresa && usuario.consentimento && (
                <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-esg-text">
                  <ShieldCheck className="size-4" aria-hidden />
                  Consentimento LGPD registrado
                </p>
              )}
            </div>
          </section>

          <p className="mt-6 text-center text-sm text-foreground-soft">
            {ehEmpresa
              ? "Em breve você poderá publicar vagas e ver candidatos compatíveis."
              : "As empresas parceiras podem encontrar seu perfil e entrar em contato."}
          </p>
        </div>
      </main>
    </>
  );
}
