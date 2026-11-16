"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-foreground-soft/60 transition-colors focus:border-esg-strong focus:outline-none";

const labelClass = "block text-sm font-semibold text-ink";

export function LoginForm() {
  const router = useRouter();
  const [tipo, setTipo] = useState<"migrante" | "empresa">("migrante");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setErro(null);
    setEnviando(true);
    try {
      const resposta = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo,
          email: form.get("email"),
          senha: form.get("senha"),
        }),
      });
      const dados = (await resposta.json().catch(() => null)) as {
        erro?: string;
        usuario?: unknown;
      } | null;
      if (!resposta.ok || !dados?.usuario) {
        setErro(dados?.erro ?? "Não foi possível entrar. Tente novamente.");
        return;
      }
      localStorage.setItem("elosu_usuario", JSON.stringify(dados.usuario));
      router.push("/painel");
    } catch {
      setErro("Falha de conexão com o servidor. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="tipo" className={labelClass}>
          Tipo de conta
        </label>
        <select
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={(event) =>
            setTipo(event.target.value as "migrante" | "empresa")
          }
          className={`mt-2 ${inputClass}`}
        >
          <option value="migrante">Migrante</option>
          <option value="empresa">Empresa</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          className={`mt-2 ${inputClass}`}
        />
      </div>

      <div>
        <label htmlFor="senha" className={labelClass}>
          Senha
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Sua senha"
          className={`mt-2 ${inputClass}`}
        />
      </div>

      {erro && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        <LogIn className="size-4" aria-hidden />
        {enviando ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
