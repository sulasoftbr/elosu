export type TipoConta = "migrante" | "empresa";

export type PerfilUsuario = {
  id: string;
  tipo: TipoConta;
  nome: string;
  email: string;
  telefone?: string;
  cidade?: string;
  // Migrante
  nacionalidade?: string;
  idiomas?: string[];
  area?: string;
  experiencia?: string;
  curriculo?: string | null;
  mensagem?: string | null;
  consentimento?: boolean;
  // Empresa
  cnpj?: string | null;
  responsavel?: string;
  created_at?: string;
};
