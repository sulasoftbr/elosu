"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send, Upload } from "lucide-react";
import type { PerfilUsuario } from "@/lib/perfil";

const IDIOMAS = [
  "Português",
  "Espanhol",
  "Inglês",
  "Francês",
  "Crioulo haitiano",
  "Outro",
] as const;

const AREAS = [
  "Alimentação e cozinha",
  "Limpeza e serviços gerais",
  "Construção civil",
  "Logística e armazém",
  "Vendas e atendimento",
  "Costura e confecção",
  "Administração",
  "Saúde e cuidados",
  "Tecnologia",
  "Outra área",
] as const;

const EXPERIENCIA = [
  "Sem experiência formal",
  "Menos de 1 ano",
  "De 1 a 3 anos",
  "De 3 a 5 anos",
  "Mais de 5 anos",
] as const;

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-foreground-soft/60 transition-colors focus:border-esg-strong focus:outline-none";

const labelClass = "block text-sm font-semibold text-ink";

export function MigrantForm() {
  const router = useRouter();
  const [fileName, setFileName] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    setFileName(event.target.files?.[0]?.name ?? null);
  }

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
          tipo: "migrante",
          nome: form.get("nome"),
          email: form.get("email"),
          telefone: form.get("telefone"),
          nacionalidade: form.get("nacionalidade"),
          cidade: form.get("cidade"),
          idiomas: form.getAll("idiomas"),
          area: form.get("area"),
          experiencia: form.get("experiencia"),
          senha: form.get("senha"),
          curriculo: fileName,
          mensagem: form.get("mensagem"),
          consentimento: form.get("consentimento") === "on",
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
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate={false}>
      <fieldset className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nome" className={labelClass}>
            Nome completo <span className="text-esg-strong">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Ex.: Maria Fernanda López"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span className="text-esg-strong">*</span>
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

        <div>
          <label htmlFor="telefone" className={labelClass}>
            WhatsApp / telefone <span className="text-esg-strong">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(51) 90000-0000"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="nacionalidade" className={labelClass}>
            Nacionalidade <span className="text-esg-strong">*</span>
          </label>
          <input
            id="nacionalidade"
            name="nacionalidade"
            type="text"
            required
            placeholder="Ex.: Venezuela, Haiti, Angola…"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="cidade" className={labelClass}>
            Cidade onde mora <span className="text-esg-strong">*</span>
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
      </fieldset>

      <fieldset className="grid gap-6">
        <div>
          <span className={labelClass}>
            Idiomas que você fala <span className="text-esg-strong">*</span>
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {IDIOMAS.map((idioma) => (
              <label
                key={idioma}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold transition-colors has-checked:border-esg-strong has-checked:bg-esg-mist"
              >
                <input
                  type="checkbox"
                  name="idiomas"
                  value={idioma}
                  className="accent-esg-strong"
                />
                {idioma}
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="area" className={labelClass}>
              Área de interesse <span className="text-esg-strong">*</span>
            </label>
            <select
              id="area"
              name="area"
              required
              defaultValue=""
              className={`mt-2 ${inputClass}`}
            >
              <option value="" disabled>
                Selecione uma área
              </option>
              {AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="experiencia" className={labelClass}>
              Tempo de experiência <span className="text-esg-strong">*</span>
            </label>
            <select
              id="experiencia"
              name="experiencia"
              required
              defaultValue=""
              className={`mt-2 ${inputClass}`}
            >
              <option value="" disabled>
                Selecione
              </option>
              {EXPERIENCIA.map((nivel) => (
                <option key={nivel} value={nivel}>
                  {nivel}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="grid gap-6">
        <div>
          <label htmlFor="curriculo" className={labelClass}>
            Currículo (opcional)
          </label>
          <label
            htmlFor="curriculo"
            className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-line-strong bg-surface px-4 py-6 text-sm font-semibold text-foreground-soft transition-colors hover:border-esg-strong hover:bg-esg-soft"
          >
            <Upload className="size-4" aria-hidden />
            {fileName ? fileName : "Enviar currículo (PDF ou DOC)"}
          </label>
          <input
            id="curriculo"
            name="curriculo"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            className="sr-only"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className={labelClass}>
            Conte um pouco sobre você (opcional)
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            placeholder="Sua experiência, o que você procura e qualquer informação que ache importante."
            className={`mt-2 resize-y ${inputClass}`}
          />
        </div>
      </fieldset>

      <div className="flex items-start gap-3">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          required
          className="mt-1 size-4 shrink-0 accent-esg-strong"
        />
        <label
          htmlFor="consentimento"
          className="text-sm leading-relaxed text-foreground-soft"
        >
          Autorizo o Elosu a usar meus dados para me conectar a oportunidades
          de trabalho, conforme a LGPD.{" "}
          <span className="text-esg-strong">*</span>
        </label>
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
        className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        <Send className="size-4" aria-hidden />
        {enviando ? "Enviando…" : "Enviar cadastro"}
      </button>
    </form>
  );
}
