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
            <strong className="text-foreground">Endereço:</strong>{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Zero+Hora,+814+-+Jardim+Algarve,+Alvorada+-+RS,+94859-250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              Av. Zero Hora, 814 — Jardim Algarve, Alvorada/RS, CEP 94859-250
            </a>
          </p>
          <p>
            <strong className="text-foreground">Horário de atendimento:</strong>{" "}
            Segunda a sábado, das 9h às 18h. Às segundas-feiras, o atendimento é
            somente com horário marcado.
          </p>
          <p>
            <strong className="text-foreground">Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/espacoessencia_alvorada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold"
            >
              @espacoessencia_alvorada
            </a>
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
