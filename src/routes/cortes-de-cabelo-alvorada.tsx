import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema, breadcrumbSchema } from "@/lib/site";
import { CORTES } from "@/lib/media";
import {
  PageHero,
  Section,
  Prose,
  CardGrid,
  Gallery,
  Faq,
  CtaBand,
  RelatedLinks,
} from "@/components/site/blocks";

const FAQ = [
  {
    q: "Vocês fazem corte feminino?",
    a: "Sim. Trabalhamos com cortes femininos em diferentes comprimentos, de repicados e camadas a cortes mais retos e clássicos.",
  },
  {
    q: "O corte é personalizado?",
    a: "Sim. Antes de cortar, conversamos sobre formato de rosto, textura do fio, rotina de finalização e o resultado que você deseja.",
  },
  {
    q: "Posso agendar pelo WhatsApp?",
    a: "Pode. O agendamento é feito diretamente pelo WhatsApp, de forma rápida e sem burocracia.",
  },
  {
    q: "O atendimento é com horário marcado?",
    a: "Sim, atendemos com horário marcado para garantir tranquilidade e atenção total durante o seu corte.",
  },
  {
    q: "Posso combinar corte com outro procedimento?",
    a: "Sim. É possível combinar o corte com progressiva, soltura de cachos ou serviços de unhas no mesmo horário — basta avisar ao agendar.",
  },
];

export const Route = createFileRoute("/cortes-de-cabelo-alvorada")({
  head: () => ({
    meta: [
      { title: "Corte de Cabelo em Alvorada RS | Espaço Essência" },
      {
        name: "description",
        content:
          "Corte de cabelo em Alvorada RS com atendimento personalizado no Espaço Essência. Renove seu visual e agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Corte de Cabelo em Alvorada RS | Espaço Essência" },
      {
        property: "og:description",
        content:
          "Cortes femininos personalizados em Alvorada RS, pensados para o seu rosto, seu estilo e sua rotina.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/cortes-de-cabelo-alvorada" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/cortes-de-cabelo-alvorada" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Cortes de Cabelo", "/cortes-de-cabelo-alvorada"),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Cabelos · Alvorada RS"
        title="Corte de Cabelo em Alvorada RS"
        subtitle="Cortes personalizados que valorizam o seu rosto e acompanham a sua rotina — com acabamento cuidadoso e resultado elegante."
        ctaHref={WA.cortes}
        ctaLabel="Quero agendar"
        image={CORTES[3]!}
      />

      <Section eyebrow="Nosso jeito de cortar" title="Cortes personalizados, do início ao acabamento">
        <Prose>
          <p>
            Cada corte começa com uma conversa. Entender a textura do seu fio, o
            formato do rosto e quanto tempo você tem para finalizar em casa é o
            que garante um resultado que funciona de verdade no dia a dia.
          </p>
          <p>
            Em Alvorada, o Espaço Essência atende com horário marcado para que o
            corte seja feito sem pressa, com atenção à simetria, às camadas e ao
            acabamento das pontas.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Estilo" title="Valorização do seu visual" muted>
        <CardGrid
          items={[
            {
              title: "Formato que combina",
              text: "Estudamos proporção e movimento para valorizar traços e comprimento.",
            },
            {
              title: "Textura respeitada",
              text: "Cortes pensados para fios lisos, ondulados, cacheados e crespos.",
            },
            {
              title: "Rotina considerada",
              text: "Um corte bonito precisa ser fácil de manter — isso entra na escolha.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Transformação" title="Inspirações e mudança de visual">
        <Prose>
          <p>
            Seja para renovar as pontas, ganhar movimento com camadas ou mudar
            completamente de comprimento, conduzimos a transformação com
            orientação honesta sobre o que valoriza você.
          </p>
        </Prose>
        <div className="mt-8">
          <Gallery items={CORTES} />
        </div>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre corte de cabelo" muted>
        <Faq items={FAQ} />
      </Section>

      <Section eyebrow="Também pode te interessar" title="Combine com outros serviços">
        <RelatedLinks items={[SERVICES[0], SERVICES[1], SERVICES[4]].map((s) => ({ ...s }))} />
      </Section>

      <CtaBand
        title="Vamos renovar o seu visual?"
        text="Envie uma mensagem contando o que você tem em mente e agendamos o seu corte em Alvorada."
        href={WA.cortes}
        label="Quero agendar meu corte"
      />
    </>
  );
}
