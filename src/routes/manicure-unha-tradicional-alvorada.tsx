import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema, breadcrumbSchema } from "@/lib/site";
import { UNHA_TRADICIONAL } from "@/lib/media";
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
    q: "Como funciona a unha tradicional?",
    a: "O atendimento inclui higienização, corte e lixamento no formato desejado, cuidado com as cutículas e esmaltação com acabamento uniforme.",
  },
  {
    q: "Posso agendar pelo WhatsApp?",
    a: "Sim. Basta enviar uma mensagem informando o serviço e escolhemos juntas o melhor horário.",
  },
  {
    q: "O atendimento é com horário marcado?",
    a: "Sim, trabalhamos com horário marcado para que você seja atendida com tranquilidade e sem espera.",
  },
  {
    q: "Vocês fazem esmaltação?",
    a: "Fazemos. A esmaltação faz parte do serviço, com atenção ao acabamento e às laterais para um resultado limpo e duradouro.",
  },
  {
    q: "Quanto tempo dura o atendimento?",
    a: "Em média, o serviço de unha tradicional leva cerca de uma hora, variando conforme o estado das unhas e o acabamento escolhido.",
  },
];

export const Route = createFileRoute("/manicure-unha-tradicional-alvorada")({
  head: () => ({
    meta: [
      { title: "Manicure em Alvorada RS | Unha Tradicional | Espaço Essência" },
      {
        name: "description",
        content:
          "Agende sua manicure em Alvorada RS no Espaço Essência. Serviço de unha tradicional com acabamento cuidadoso e atendimento profissional.",
      },
      { property: "og:title", content: "Manicure em Alvorada RS | Unha Tradicional | Espaço Essência" },
      { property: "og:image", content: "https://daligaessencia.lovable.app/images/og-image.jpg" },
      { name: "twitter:image", content: "https://daligaessencia.lovable.app/images/og-image.jpg" },
      {
        property: "og:description",
        content:
          "Unha tradicional em Alvorada RS: cuidado com cutículas, formato e esmaltação impecável. Agende pelo WhatsApp.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/manicure-unha-tradicional-alvorada" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/manicure-unha-tradicional-alvorada" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Unha Tradicional", "/manicure-unha-tradicional-alvorada"),
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
        eyebrow="Unhas · Alvorada RS"
        title="Manicure e Unha Tradicional em Alvorada RS"
        subtitle="Mãos bem cuidadas, acabamento impecável e esmaltação feita com calma e atenção aos detalhes."
        ctaHref={WA.unhaTradicional}
        ctaLabel="Quero agendar"
        image={UNHA_TRADICIONAL[0]!}
      />

      <Section eyebrow="O serviço" title="Manicure e unha tradicional">
        <Prose>
          <p>
            A unha tradicional é o cuidado essencial que mantém as mãos sempre
            apresentáveis. No Espaço Essência, em Alvorada, o serviço é feito com
            higiene rigorosa, materiais bem cuidados e um ritmo que respeita o seu
            conforto.
          </p>
          <p>
            Do formato à cor do esmalte, tudo é escolhido junto com você — do
            nude discreto ao vermelho clássico. Também fazemos esmaltação em
            gel, com brilho intenso e durabilidade maior.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Cuidado" title="Atenção às unhas e às cutículas" muted>
        <CardGrid
          items={[
            {
              title: "Higiene em primeiro lugar",
              text: "Materiais devidamente higienizados a cada atendimento.",
            },
            {
              title: "Cutículas cuidadas",
              text: "Trabalho delicado, respeitando a saúde e a sensibilidade da pele.",
            },
            {
              title: "Formato sob medida",
              text: "Quadrado, oval ou amendoado — o formato que combina com suas mãos.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Acabamento" title="Esmaltação com resultado limpo">
        <Prose>
          <p>
            O acabamento é o que diferencia uma boa esmaltação. Aplicamos as
            camadas com atenção às laterais e à cutícula, garantindo cor uniforme,
            brilho e durabilidade maior no dia a dia.
          </p>
        </Prose>
        <div className="mt-8">
          <Gallery items={UNHA_TRADICIONAL} />
        </div>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre manicure" muted>
        <Faq items={FAQ} />
      </Section>

      <Section eyebrow="Também pode te interessar" title="Outros serviços do salão">
        <RelatedLinks items={[SERVICES[5], SERVICES[3], SERVICES[1]].map((s) => ({ ...s }))} />
      </Section>

      <CtaBand
        title="Suas mãos merecem esse cuidado"
        text="Agende sua manicure em Alvorada e escolha o acabamento que mais combina com você."
        href={WA.unhaTradicional}
        label="Quero agendar minha unha tradicional"
      />
    </>
  );
}
