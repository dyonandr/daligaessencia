import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES } from "@/lib/site";
import { HERO_SALAO } from "@/lib/media";
import { PageHero, Section, Prose, CtaBand, RelatedLinks } from "@/components/site/blocks";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Espaço Essência — Salão de Beleza em Alvorada RS" },
      {
        name: "description",
        content:
          "Fale com o Espaço Essência, salão de beleza em Alvorada RS. Agende cabelo e unhas pelo WhatsApp com atendimento personalizado.",
      },
      { property: "og:title", content: "Contato | Espaço Essência — Alvorada RS" },
      {
        property: "og:description",
        content:
          "Agende seu horário no Espaço Essência em Alvorada RS pelo WhatsApp.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/contato" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/contato" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Fale com o salão"
        title="Contato do Espaço Essência em Alvorada RS"
        subtitle="O jeito mais rápido de agendar é pelo WhatsApp. Conte qual serviço você deseja e combinamos o melhor horário."
        ctaHref={WA.home}
        ctaLabel="Agendar pelo WhatsApp"
        image={HERO_SALAO}
      />

      <Section eyebrow="Informações" title="Como nos encontrar">
        <Prose>
          <p>
            <strong className="text-foreground">WhatsApp:</strong>{" "}
            <a href={WA.home} target="_blank" rel="noopener noreferrer" className="text-gold">
              (51) 98562-3831
            </a>
          </p>
          <p>
            <strong className="text-foreground">Cidade:</strong> Alvorada / RS
          </p>
          <p className="text-muted-foreground/70">
            Endereço completo: em breve · Horário de atendimento: em breve ·
            Instagram: em breve
          </p>
          <p>
            O atendimento é com horário marcado, garantindo tranquilidade e
            atenção individual em cada serviço.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Serviços" title="Escolha o serviço e agende" muted>
        <RelatedLinks items={SERVICES.map((s) => ({ ...s }))} />
      </Section>

      <CtaBand
        title="Estamos à sua espera"
        text="Envie uma mensagem agora e garanta o seu horário no Espaço Essência."
        href={WA.home}
        label="Agendar pelo WhatsApp"
      />
    </>
  );
}
