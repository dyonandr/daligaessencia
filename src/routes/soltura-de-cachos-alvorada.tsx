import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema, breadcrumbSchema } from "@/lib/site";
import { CACHOS } from "@/lib/media";
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
    q: "O que é soltura de cachos?",
    a: "É um procedimento que reduz o volume excessivo e abre o cacho, deixando o fio mais leve, alinhado e com movimento mais solto, sem transformar o cabelo em liso total.",
  },
  {
    q: "Para quais tipos de cabelo ela é indicada?",
    a: "É indicada para cabelos cacheados e crespos com muito volume, frizz ou dificuldade de definição no dia a dia. Fazemos uma avaliação antes de iniciar.",
  },
  {
    q: "A soltura tira totalmente os cachos?",
    a: "Não. A proposta é abrir o cacho e reduzir o volume, mantendo o movimento natural do fio. Quem busca liso completo costuma optar pela progressiva.",
  },
  {
    q: "Como fica o resultado?",
    a: "O cabelo fica mais leve, com ondas mais soltas, menos frizz e finalização muito mais rápida em casa.",
  },
  {
    q: "Como cuidar do cabelo depois?",
    a: "Recomendamos produtos adequados para fios tratados, hidratação regular e cuidado com fontes intensas de calor. Todas as orientações são passadas no atendimento.",
  },
];

export const Route = createFileRoute("/soltura-de-cachos-alvorada")({
  head: () => ({
    meta: [
      { title: "Soltura de Cachos em Alvorada RS | Espaço Essência" },
      {
        name: "description",
        content:
          "Realce a leveza e o movimento dos fios com soltura de cachos em Alvorada RS. Agende sua avaliação no Espaço Essência.",
      },
      { property: "og:title", content: "Soltura de Cachos em Alvorada RS | Espaço Essência" },
      { property: "og:image", content: "https://daligaessencia.lovable.app/images/og-image.jpg" },
      { name: "twitter:image", content: "https://daligaessencia.lovable.app/images/og-image.jpg" },
      {
        property: "og:description",
        content:
          "Soltura de cachos em Alvorada RS: menos volume, mais movimento e definição. Agende pelo WhatsApp.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/soltura-de-cachos-alvorada" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/soltura-de-cachos-alvorada" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Soltura de Cachos", "/soltura-de-cachos-alvorada"),
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
        title="Soltura de Cachos em Alvorada RS"
        subtitle="Menos volume, mais movimento: um resultado leve e natural, com fios definidos e finalização simples no dia a dia."
        ctaHref={WA.cachos}
        ctaLabel="Quero saber mais"
        image={CACHOS[0]!}
      />

      <Section eyebrow="Entenda o procedimento" title="O que é a soltura de cachos">
        <Prose>
          <p>
            A soltura de cachos é um procedimento pensado para quem convive com
            volume excessivo e frizz, mas não quer abrir mão da textura natural.
            O objetivo é abrir o cacho de forma controlada, deixando os fios mais
            leves, alinhados e fáceis de finalizar.
          </p>
          <p>
            No Espaço Essência, em Alvorada, o procedimento começa sempre por uma
            avaliação do seu cabelo. A partir dela, definimos a intensidade ideal
            para o resultado ficar bonito e coerente com a saúde do fio.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Indicação" title="Para quem é indicada" muted>
        <CardGrid
          items={[
            {
              title: "Volume excessivo",
              text: "Para cabelos que armam com facilidade e demandam muito tempo de finalização.",
            },
            {
              title: "Frizz constante",
              text: "Para quem busca fios mais alinhados, especialmente em dias úmidos.",
            },
            {
              title: "Rotina corrida",
              text: "Para quem quer manter a textura, mas com muito mais praticidade no dia a dia.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Benefícios" title="O que muda no seu cabelo">
        <CardGrid
          items={[
            { title: "Movimento leve", text: "Cachos mais abertos e soltos, com queda natural." },
            { title: "Menos frizz", text: "Fios mais alinhados e com aparência mais uniforme." },
            { title: "Finalização rápida", text: "Menos tempo de secador e escova na sua rotina." },
          ]}
        />
      </Section>

      <Section eyebrow="Atendimento" title="Como funciona o seu horário" muted>
        <Prose>
          <p>
            O atendimento é individual e com horário marcado. Começamos pela
            avaliação e conversa sobre expectativas, seguimos com a preparação e
            aplicação do produto, respeitando o tempo de pausa indicado, e
            finalizamos com secagem e modelagem.
          </p>
          <p>
            <strong className="text-foreground">Resultado esperado:</strong> fios
            com movimento mais solto, brilho e volume equilibrado — sem perder a
            identidade do seu cabelo.
          </p>
          <p>
            <strong className="text-foreground">Cuidados após o procedimento:</strong>{" "}
            use produtos indicados para cabelos tratados, mantenha hidratação
            periódica e evite excesso de calor. Você recebe todas as orientações
            personalizadas ao final do atendimento.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Galeria" title="Resultados reais do nosso salão">
        <Gallery items={CACHOS} />
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre soltura de cachos" muted>
        <Faq items={FAQ} />
      </Section>

      <Section eyebrow="Também pode te interessar" title="Outros serviços de cabelo">
        <RelatedLinks
          items={[SERVICES[1], SERVICES[2], SERVICES[3]].map((s) => ({ ...s }))}
        />
      </Section>

      <CtaBand
        title="Quer saber se a soltura é para o seu cabelo?"
        text="Envie uma mensagem e faremos a avaliação do seu tipo de fio antes de agendar o procedimento."
        href={WA.cachos}
        label="Quero saber mais sobre Soltura de Cachos"
      />
    </>
  );
}
