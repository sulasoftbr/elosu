import { criarEmpresa, criarMigrante } from "@/lib/db";

const CAMPOS_OBRIGATORIOS = {
  migrante: [
    "nome",
    "email",
    "senha",
    "telefone",
    "nacionalidade",
    "cidade",
    "area",
    "experiencia",
  ],
  empresa: ["nome", "email", "senha", "responsavel", "telefone", "cidade"],
} as const;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ erro: "Corpo JSON inválido." }, { status: 400 });
  }

  const dados = (body ?? {}) as Record<string, unknown>;
  const tipo = dados.tipo;
  if (tipo !== "migrante" && tipo !== "empresa") {
    return Response.json(
      { erro: 'Campo "tipo" deve ser "migrante" ou "empresa".' },
      { status: 400 }
    );
  }

  const faltando = CAMPOS_OBRIGATORIOS[tipo].filter(
    (campo) => typeof dados[campo] !== "string" || !(dados[campo] as string).trim()
  );
  if (faltando.length > 0) {
    return Response.json(
      { erro: "Campos obrigatórios ausentes.", campos: faltando },
      { status: 400 }
    );
  }

  if ((dados.senha as string).length < 6) {
    return Response.json(
      { erro: "A senha deve ter ao menos 6 caracteres." },
      { status: 400 }
    );
  }

  try {
    if (tipo === "migrante") {
      if (dados.consentimento !== true) {
        return Response.json(
          {
            erro:
              "É necessário autorizar o uso dos seus dados conforme a LGPD.",
          },
          { status: 400 }
        );
      }
      if (!Array.isArray(dados.idiomas) || dados.idiomas.length === 0) {
        return Response.json(
          { erro: "Selecione ao menos um idioma." },
          { status: 400 }
        );
      }
      const usuario = await criarMigrante({
        nome: dados.nome as string,
        email: dados.email as string,
        senha: dados.senha as string,
        telefone: dados.telefone as string,
        nacionalidade: dados.nacionalidade as string,
        cidade: dados.cidade as string,
        idiomas: dados.idiomas as string[],
        area: dados.area as string,
        experiencia: dados.experiencia as string,
        curriculo: (dados.curriculo as string | null) ?? null,
        mensagem: (dados.mensagem as string | null) ?? null,
        consentimento: true,
      });
      return Response.json({ ok: true, usuario }, { status: 201 });
    }

    const usuario = await criarEmpresa({
      nome: dados.nome as string,
      cnpj: (dados.cnpj as string | null) ?? null,
      email: dados.email as string,
      senha: dados.senha as string,
      responsavel: dados.responsavel as string,
      telefone: dados.telefone as string,
      cidade: dados.cidade as string,
    });
    return Response.json({ ok: true, usuario }, { status: 201 });
  } catch (erro) {
    const supabaseError = erro as { code?: string; message?: string };
    if (supabaseError?.code === "23505") {
      return Response.json(
        { erro: "Ya existe un registro con esos datos únicos (e-mail o CNPJ)." },
        { status: 409 }
      );
    }
    console.error(erro);
    return Response.json(
      { erro: "Falha ao salvar o cadastro.", detalhe: supabaseError?.message },
      { status: 500 }
    );
  }
}
