import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

// Guarda como "salt:hash" (hex) en la columna `senha`.
export function hashSenha(senha: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(senha, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verificarSenha(senha: string, armazenada: string): boolean {
  const [salt, hash] = armazenada.split(":");
  if (!salt || !hash) return false;
  const teste = scryptSync(senha, salt, 64).toString("hex");
  const a = Buffer.from(hash, "hex");
  const b = Buffer.from(teste, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}
