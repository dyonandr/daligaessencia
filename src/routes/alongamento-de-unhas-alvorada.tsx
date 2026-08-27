import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema, breadcrumbSchema } from "@/lib/site";
import { ALONGAMENTO } from "@/lib/media";
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
    q: "O que é o alongamento de unhas?",
    a: "É a técnica que aumenta o comprimento e estrutura a unha natural, criando um formato definido, resistente e com acabamento sofisticado.",
  },
  {
    q: "Para quem ele é indicado?",
    a: "Para quem tem dificuldade de crescer as unhas, quer um formato uniforme, busca mais resistência no dia a dia ou deseja um visual mais elegante.",
  },
  {
    q: "Como funciona a manutenção?",
    a: "A manutenção é feita periodicamente conforme o crescimento da unha natural, preenchendo a área da base e reequilibrando o formato.",
  },
  {
    q: "O procedimento exige cuidados depois?",
    a: "Sim. Evitar usar as unhas como ferramenta, hidratar as cutículas e manter a manutenção em dia preserva o resultado por mais tempo.",
  },
  {
    q: "Posso escolher o estilo das unhas?",
    a: "Pode. Formato, comprimento, cor e acabamento são definidos junto com você antes de começar.",
  },
];

export const Route = createFileRoute("/alongamento-de-unhas-alvorada")({
  head: () => ({
    meta: [
      { title: "Alongamento de Unhas em Alvorada RS | Espaço Essência" },
      {
        name: "description",
        content:
          "Faça seu alongamento de unhas em Alvorada RS no Espaço Essência. Atendimento profissional, resultado sofisticado e agendamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Alongamento de Unhas em Alvorada RS | Espaço Essência" },
      {
        property: "og:description",
        content:
          "Alongamento de unhas em Alvorada RS com formato definido, resistência e acabamento premium.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/alongamento-de-unhas-alvorada" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/alongamento-de-unhas-alvorada" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Alongamento de Unhas", "/alongamento-de-unhas-alvorada"),
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
        title="Alongamento de Unhas em Alvorada RS"
        subtitle="Formato definido, resistência e acabamento sofisticado para mãos elegantes em qualquer ocasião."
        ctaHref={WA.alongamento}
        ctaLabel="Quero saber mais"
        image={ALONGAMENTO[0]!}
      />

      <Section eyebrow="Entenda a técnica" title="O que é o alongamento de unhas">
        <Prose>
          <p>
            O alongamento de unhas constrói uma estrutura sobre a unha natural,
            permitindo escolher comprimento e formato com precisão. O resultado é
            uma mão harmônica, com unhas uniformes e muito mais resistentes.
          </p>
          <p>
            No Espaço Essência, em Alvorada/RS, o procedimento é feito com
            materiais adequados, modelagem cuidadosa e acabamento pensado para
            parecer natural e sofisticado.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Indicação" title="Para quem é indicado" muted>
        <CardGrid
          items={[
            { title: "Unhas que quebram", text: "Para quem tem dificuldade em manter comprimento." },
            { title: "Formato uniforme", text: "Para quem busca simetria e desenho definido." },
            { title: "Ocasiões especiais", text: "Para eventos, viagens e momentos que pedem mãos impecáveis." },
          ]}
        />
      </Section>

      <Section eyebrow="Benefícios" title="Vantagens do alongamento">
        <CardGrid
          items={[
            { title: "Resistência", text: "Unhas mais firmes e menos sujeitas a quebras no dia a dia." },
            { title: "Durabilidade", text: "Acabamento que se mantém bonito por semanas com manutenção." },
            { title: "Estética refinada", text: "Aparência polida, elegante e alinhada ao seu estilo." },
          ]}
        />
      </Section>

      <Section eyebrow="Estilo e cuidados" title="Formato, acabamento e manutenção" muted>
        <Prose>
          <p>
            Você escolhe o formato — amendoado, quadrado, bailarina — e o
            acabamento, do nude translúcido a cores marcantes e detalhes sutis.
            Trabalhamos a curvatura e a espessura para que o resultado fique
            natural.
          </p>
          <p>
            <strong className="text-foreground">Cuidados e manutenção:</strong>{" "}
            mantenha o retorno periódico para o preenchimento, hidrate as
            cutículas e evite usar as unhas como ferramenta. Assim o resultado se
            mantém bonito por muito mais tempo.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Galeria" title="Inspirações de alongamento">
        <Gallery items={ALONGAMENTO} />
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre alongamento de unhas" muted>
        <Faq items={FAQ} />
      </Section>

      <Section eyebrow="Também pode te interessar" title="Outros serviços do salão">
        <RelatedLinks items={[SERVICES[4], SERVICES[3], SERVICES[2]].map((s) => ({ ...s }))} />
      </Section>

      <CtaBand
        title="Mãos elegantes começam aqui"
        text="Fale com a gente pelo WhatsApp e combine o formato, a cor e o horário do seu alongamento."
        href={WA.alongamento}
        label="Quero saber mais sobre alongamento de unhas"
      />
    </>
  );
}
