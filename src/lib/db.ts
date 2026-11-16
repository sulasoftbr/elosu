import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { hashSenha, verificarSenha } from "./password";
import type { PerfilUsuario, TipoConta } from "./perfil";

export type { PerfilUsuario, TipoConta };

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  throw new Error(
    "Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en las variables de entorno."
  );
}

const supabase: SupabaseClient = createClient(url, serviceKey);

export type NovoMigrante = {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  nacionalidade: string;
  cidade: string;
  idiomas: string[];
  area: string;
  experiencia: string;
  curriculo?: string | null;
  mensagem?: string | null;
  consentimento: boolean;
};

export type NovaEmpresa = {
  nome: string;
  cnpj?: string | null;
  email: string;
  senha: string;
  responsavel: string;
  telefone: string;
  cidade: string;
};

function paraPerfil(
  row: Record<string, unknown>,
  tipo: TipoConta
): PerfilUsuario {
  const { senha: _senha, ...rest } = row;
  void _senha;
  return { ...(rest as Omit<PerfilUsuario, "tipo">), tipo };
}

export async function criarMigrante(m: NovoMigrante): Promise<PerfilUsuario> {
  const { data, error } = await supabase
    .from("migrantes")
    .insert({
      nome: m.nome.trim(),
      email: m.email.trim().toLowerCase(),
      senha: hashSenha(m.senha),
      telefone: m.telefone.trim(),
      nacionalidade: m.nacionalidade.trim(),
      cidade: m.cidade.trim(),
      idiomas: m.idiomas,
      area: m.area,
      experiencia: m.experiencia,
      curriculo: m.curriculo ?? null,
      mensagem: m.mensagem?.trim() ?? null,
      consentimento: m.consentimento,
    })
    .select("*")
    .single();

  if (error) throw error;
  return paraPerfil(data, "migrante");
}

export async function criarEmpresa(e: NovaEmpresa): Promise<PerfilUsuario> {
  const { data, error } = await supabase
    .from("empresas")
    .insert({
      nome: e.nome.trim(),
      cnpj: e.cnpj?.trim() ?? null,
      email: e.email.trim().toLowerCase(),
      senha: hashSenha(e.senha),
      responsavel: e.responsavel.trim(),
      telefone: e.telefone.trim(),
      cidade: e.cidade.trim(),
    })
    .select("*")
    .single();

  if (error) throw error;
  return paraPerfil(data, "empresa");
}

export async function autenticar(
  tipo: TipoConta,
  email: string,
  senha: string
): Promise<PerfilUsuario | null> {
  const { data, error } = await supabase
    .from(tipo === "migrante" ? "migrantes" : "empresas")
    .select("*")
    .eq("email", email.trim().toLowerCase())
    .maybeSingle();

  if (error || !data) return null;
  if (!verificarSenha(senha, String(data.senha ?? ""))) return null;

  return paraPerfil(data, tipo);
}
