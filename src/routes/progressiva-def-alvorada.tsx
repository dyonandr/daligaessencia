import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema, breadcrumbSchema } from "@/lib/site";
import { PROGRESSIVA_DEF } from "@/lib/media";
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
    q: "O que é a Progressiva DEF?",
    a: "É a progressiva definitiva: um alinhamento capilar que deixa os fios lisos, com brilho e muito mais praticidade na finalização diária.",
  },
  {
    q: "Para quem ela é indicada?",
    a: "Para quem deseja um resultado liso duradouro, tem volume acentuado ou frizz constante. A indicação é confirmada após avaliação do fio no salão.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "O efeito acompanha o comprimento tratado; o retoque costuma ser feito conforme o crescimento da raiz. Na avaliação indicamos o intervalo ideal para o seu caso.",
  },
  {
    q: "Como devo cuidar do cabelo depois?",
    a: "Use produtos adequados para cabelos alinhados, mantenha a hidratação em dia e evite excesso de calor sem proteção térmica.",
  },
  {
    q: "Preciso fazer manutenção?",
    a: "Sim. A manutenção mantém o resultado uniforme e preserva a saúde dos fios. Combinamos o retorno de acordo com o crescimento do seu cabelo.",
  },
];

export const Route = createFileRoute("/progressiva-def-alvorada")({
  head: () => ({
    meta: [
      { title: "Progressiva DEF em Alvorada RS | Espaço Essência" },
      {
        name: "description",
        content:
          "Conheça a Progressiva DEF em Alvorada RS no Espaço Essência. Atendimento especializado, resultado elegante e agendamento fácil pelo WhatsApp.",
      },
      { property: "og:title", content: "Progressiva DEF em Alvorada RS | Espaço Essência" },
      {
        property: "og:description",
        content:
          "Progressiva definitiva em Alvorada RS com avaliação do fio e acabamento alinhado. Agende pelo WhatsApp.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/progressiva-def-alvorada" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/progressiva-def-alvorada" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Progressiva DEF", "/progressiva-def-alvorada"),
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
        title="Progressiva DEF em Alvorada RS"
        subtitle="Fios lisos, alinhados e com brilho: o alinhamento definitivo feito com avaliação prévia e acabamento cuidadoso."
        ctaHref={WA.def}
        ctaLabel="Quero saber mais"
        image={PROGRESSIVA_DEF[1]!}
      />

      <Section eyebrow="Entenda o procedimento" title="O que é a Progressiva DEF">
        <Prose>
          <p>
            A Progressiva DEF é o alinhamento capilar definitivo, indicado para
            quem busca um liso constante e uma rotina de finalização muito mais
            simples. O procedimento atua na estrutura do fio, reduzindo volume e
            frizz de forma duradoura.
          </p>
          <p>
            No Espaço Essência, em Alvorada/RS, nenhum procedimento começa sem
            avaliação. Analisamos histórico químico, porosidade e resistência do
            fio para garantir um resultado bonito e seguro.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Indicação" title="Para quem é indicada" muted>
        <CardGrid
          items={[
            { title: "Quem quer liso duradouro", text: "Para quem deseja manter o cabelo alinhado por mais tempo." },
            { title: "Volume acentuado", text: "Para fios densos que armam e demandam muita escova." },
            { title: "Frizz recorrente", text: "Para quem busca alinhamento estável mesmo em dias úmidos." },
          ]}
        />
      </Section>

      <Section eyebrow="Benefícios" title="Principais benefícios">
        <CardGrid
          items={[
            { title: "Liso alinhado", text: "Acabamento uniforme do comprimento às pontas." },
            { title: "Brilho e maciez", text: "Aparência saudável e toque mais macio nos fios." },
            { title: "Praticidade diária", text: "Menos tempo de finalização e mais liberdade na rotina." },
          ]}
        />
      </Section>

      <Section eyebrow="Atendimento" title="Como funciona o procedimento" muted>
        <Prose>
          <p>
            O atendimento inclui avaliação, lavagem preparatória, aplicação
            técnica do produto respeitando o tempo de ação, secagem e selagem com
            prancha. Todo o processo é conduzido com atenção à saúde do fio.
          </p>
          <p>
            <strong className="text-foreground">Resultado esperado:</strong>{" "}
            cabelo liso, com movimento natural, brilho e volume controlado.
          </p>
          <p>
            <strong className="text-foreground">Cuidados e manutenção:</strong>{" "}
            produtos indicados para cabelos alinhados, hidratação regular,
            proteção térmica e retoque conforme o crescimento da raiz.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Galeria" title="Antes e depois no Espaço Essência">
        <Gallery items={PROGRESSIVA_DEF} />
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre a Progressiva DEF" muted>
        <Faq items={FAQ} />
      </Section>

      <Section eyebrow="Também pode te interessar" title="Outros serviços de cabelo">
        <RelatedLinks items={[SERVICES[2], SERVICES[0], SERVICES[3]].map((s) => ({ ...s }))} />
      </Section>

      <CtaBand
        title="Pronta para um liso alinhado e elegante?"
        text="Fale com a gente pelo WhatsApp e faça sua avaliação antes de agendar a Progressiva DEF."
        href={WA.def}
        label="Quero saber mais sobre a Progressiva DEF"
      />
    </>
  );
}
