import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Em duas semanas eu fui chamada para entrevista. O cadastro foi acolhedor, em francês. Senti respeito.",
    initials: "ML",
    name: "Marie L.",
    role: "Migrante haitiana, Porto Alegre",
    avatarClass: "bg-esg text-ink",
  },
  {
    quote:
      "O score de compatibilidade reduziu nosso tempo de triagem em 60%. E ainda fortalecemos nossa pauta ESG.",
    initials: "KM",
    name: "Karina M.",
    role: "Diretora de RH, empresa piloto",
    avatarClass: "bg-ink text-esg",
  },
  {
    quote:
      "Tive ajuda para revalidar diplomas e meu primeiro emprego formal no Brasil. Hoje sou líder de equipe.",
    initials: "DV",
    name: "Daniela V.",
    role: "Migrante venezuelana",
    avatarClass: "bg-esg-strong text-ink",
  },
];

export function Testimonials() {
  return (
    <section id="historias" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.6rem]">
            Histórias que movem o Elosu
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="card flex flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-pop"
            >
              <Quote
                className="size-7 text-esg-strong"
                strokeWidth={2.2}
                aria-hidden
              />
              <blockquote className="mt-5 text-[17px] leading-relaxed font-semibold text-ink">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-5">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-extrabold ${item.avatarClass}`}
                >
                  {item.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-extrabold">
                    {item.name}
                  </span>
                  <span className="block truncate text-[13px] font-semibold text-foreground-soft">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
