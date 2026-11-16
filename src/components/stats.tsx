const stats = [
  { value: "1.2M+", label: "Migrantes no Brasil" },
  { value: "68%", label: "Mulheres em busca de trabalho formal" },
  { value: "+40", label: "Nacionalidades no RS" },
  { value: "R$ 99", label: "Plano piloto / mês" },
];

export function Stats() {
  return (
    <section aria-label="Números do Elosu" className="container-page mb-16 md:mb-20">
      <div className="card grid gap-px overflow-hidden bg-line shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-paper px-6 py-8 transition-colors hover:bg-surface sm:px-8 sm:py-10"
          >
            <p className="text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-[2.75rem]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug font-semibold text-foreground-soft">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
