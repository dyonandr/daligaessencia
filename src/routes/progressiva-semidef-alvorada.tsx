import { createFileRoute } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema, breadcrumbSchema } from "@/lib/site";
import { PROGRESSIVA_SEMIDEF } from "@/lib/media";
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
    q: "O que é a Progressiva Semidef?",
    a: "É um alinhamento semidefinitivo: reduz volume e frizz mantendo parte do movimento natural do cabelo, com resultado mais suave que a progressiva definitiva.",
  },
  {
    q: "Qual a diferença entre DEF e Semidef?",
    a: "A DEF entrega um liso mais marcado e duradouro. A Semidef alinha o fio de forma mais leve, preservando movimento, e tem duração menor.",
  },
  {
    q: "Para quem ela é indicada?",
    a: "Para quem quer reduzir volume sem abrir mão do movimento, para fios sensibilizados ou para quem está experimentando alinhamento pela primeira vez.",
  },
  {
    q: "Como fica o resultado?",
    a: "O cabelo fica mais alinhado, macio e fácil de finalizar, com aparência natural e queda leve.",
  },
  {
    q: "Quanto tempo dura?",
    a: "A duração é menor que a da progressiva definitiva e varia conforme o tipo de fio e os cuidados em casa. Indicamos o intervalo ideal na avaliação.",
  },
];

export const Route = createFileRoute("/progressiva-semidef-alvorada")({
  head: () => ({
    meta: [
      { title: "Progressiva Semidef em Alvorada RS | Espaço Essência" },
      {
        name: "description",
        content:
          "Agende sua Progressiva Semidef em Alvorada RS no Espaço Essência. Conheça o procedimento, benefícios e fale direto pelo WhatsApp.",
      },
      { property: "og:title", content: "Progressiva Semidef em Alvorada RS | Espaço Essência" },
      {
        property: "og:description",
        content:
          "Alinhamento semidefinitivo em Alvorada RS: menos volume com movimento preservado. Agende pelo WhatsApp.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/progressiva-semidef-alvorada" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/progressiva-semidef-alvorada" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Progressiva Semidef", "/progressiva-semidef-alvorada"),
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
        title="Progressiva Semidef em Alvorada RS"
        subtitle="Alinhamento leve, natural e elegante: menos volume e frizz, com o movimento do seu cabelo preservado."
        ctaHref={WA.semidef}
        ctaLabel="Quero saber mais"
        image={PROGRESSIVA_SEMIDEF[1]!}
      />

      <Section eyebrow="Entenda o procedimento" title="O que é a Progressiva Semidef">
        <Prose>
          <p>
            A Progressiva Semidef é a opção equilibrada para quem quer reduzir o
            volume sem transformar completamente a textura. O fio fica mais
            alinhado e macio, mas mantém queda e movimento naturais.
          </p>
          <p>
            É um excelente primeiro passo para quem nunca fez alinhamento e
            também uma alternativa cuidadosa para fios que pedem um tratamento
            mais suave.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Indicação" title="Para quem é indicada" muted>
        <CardGrid
          items={[
            { title: "Primeira vez", text: "Para quem quer experimentar alinhamento com resultado discreto." },
            { title: "Movimento preservado", text: "Para quem gosta do próprio cabelo, mas quer menos volume." },
            { title: "Fios sensibilizados", text: "Para cabelos que pedem uma abordagem mais leve e gradual." },
          ]}
        />
      </Section>

      <Section eyebrow="Benefícios" title="O que a Semidef entrega">
        <CardGrid
          items={[
            { title: "Redução de volume", text: "Fios mais leves e fáceis de pentear." },
            { title: "Aparência natural", text: "Alinhamento suave, sem efeito artificial." },
            { title: "Finalização simples", text: "Menos tempo de escova e mais praticidade." },
          ]}
        />
      </Section>

      <Section eyebrow="Comparativo" title="Diferença entre DEF e Semidef" muted>
        <Prose>
          <p>
            <strong className="text-foreground">Progressiva DEF:</strong> liso
            mais marcado, resultado duradouro e alinhamento intenso — ideal para
            quem busca um cabelo liso constante.
          </p>
          <p>
            <strong className="text-foreground">Progressiva Semidef:</strong>{" "}
            alinhamento mais suave, com movimento preservado e duração menor —
            ideal para quem quer naturalidade.
          </p>
          <p>
            Na dúvida entre as duas, a avaliação no salão define qual combina
            melhor com o seu fio e com o resultado que você deseja.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Atendimento" title="Resultado esperado e manutenção">
        <Prose>
          <p>
            <strong className="text-foreground">Resultado esperado:</strong>{" "}
            cabelo alinhado, macio, com brilho e volume equilibrado.
          </p>
          <p>
            <strong className="text-foreground">Cuidados e manutenção:</strong>{" "}
            produtos adequados para fios tratados, hidratação regular, proteção
            térmica e retorno periódico para manter o efeito uniforme.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Galeria" title="Resultados no Espaço Essência" muted>
        <Gallery items={PROGRESSIVA_SEMIDEF} />
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas sobre a Progressiva Semidef">
        <Faq items={FAQ} />
      </Section>

      <Section eyebrow="Também pode te interessar" title="Outros serviços de cabelo" muted>
        <RelatedLinks items={[SERVICES[1], SERVICES[0], SERVICES[3]].map((s) => ({ ...s }))} />
      </Section>

      <CtaBand
        title="Quer um alinhamento natural e elegante?"
        text="Fale com a gente e descubra se a Progressiva Semidef é a melhor escolha para o seu cabelo."
        href={WA.semidef}
        label="Quero saber mais sobre a Progressiva Semidef"
      />
    </>
  );
}
