import { autenticar } from "@/lib/db";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ erro: "JSON inválido." }, { status: 400 });
  }

  const { email, senha, tipo } = (body ?? {}) as {
    email?: string;
    senha?: string;
    tipo?: string;
  };

  if (!email || !senha || !tipo) {
    return Response.json(
      { erro: "E-mail, senha e tipo são obrigatórios." },
      { status: 400 }
    );
  }

  if (tipo !== "migrante" && tipo !== "empresa") {
    return Response.json(
      { erro: 'Tipo deve ser "migrante" ou "empresa".' },
      { status: 400 }
    );
  }

  try {
    const usuario = await autenticar(tipo, email, senha);
    if (!usuario) {
      return Response.json(
        { erro: "E-mail ou senha inválidos." },
        { status: 401 }
      );
    }
    return Response.json({ ok: true, usuario });
  } catch (erro) {
    console.error(erro);
    return Response.json({ erro: "Falha ao entrar." }, { status: 500 });
  }
}
