"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import type { PerfilUsuario } from "@/lib/perfil";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-foreground-soft/60 transition-colors focus:border-esg-strong focus:outline-none";

const labelClass = "block text-sm font-semibold text-ink";

export function EmpresaForm() {
  const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setErro(null);
    setEnviando(true);
    try {
      const resposta = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "empresa",
          nome: form.get("nome"),
          cnpj: form.get("cnpj"),
          email: form.get("email"),
          senha: form.get("senha"),
          responsavel: form.get("responsavel"),
          telefone: form.get("telefone"),
          cidade: form.get("cidade"),
        }),
      });
      const dados = (await resposta.json().catch(() => null)) as {
        erro?: string;
        usuario?: PerfilUsuario;
      } | null;
      if (!resposta.ok || !dados?.usuario) {
        setErro(
          dados?.erro ?? "Não foi possível enviar o cadastro. Tente novamente."
        );
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
    <form onSubmit={handleSubmit} className="grid gap-6">
      <fieldset className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nome" className={labelClass}>
            Nome da empresa <span className="text-esg-strong">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="organization"
            placeholder="Ex.: Tech Sul Ltda."
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="cnpj" className={labelClass}>
            CNPJ (opcional)
          </label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            placeholder="00.000.000/0000-00"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail corporativo <span className="text-esg-strong">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="contato@empresa.com"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="responsavel" className={labelClass}>
            Nome do responsável <span className="text-esg-strong">*</span>
          </label>
          <input
            id="responsavel"
            name="responsavel"
            type="text"
            required
            autoComplete="name"
            placeholder="Ex.: Ana Costa"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="telefone" className={labelClass}>
            Telefone / WhatsApp <span className="text-esg-strong">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(51) 3000-0000"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="cidade" className={labelClass}>
            Cidade <span className="text-esg-strong">*</span>
          </label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Ex.: Porto Alegre — RS"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="senha" className={labelClass}>
            Senha de acesso <span className="text-esg-strong">*</span>
          </label>
          <input
            id="senha"
            name="senha"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="Mínimo de 6 caracteres"
            className={`mt-2 ${inputClass}`}
          />
        </div>
      </fieldset>

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
        className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        <Send className="size-4" aria-hidden />
        {enviando ? "Enviando…" : "Cadastrar empresa"}
      </button>
    </form>
  );
}
