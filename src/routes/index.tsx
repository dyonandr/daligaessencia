import { createFileRoute, Link } from "@tanstack/react-router";
import { WA, SERVICES, faqSchema } from "@/lib/site";
import { HERO_SALAO, CORTES, CACHOS, UNHA_TRADICIONAL, ALONGAMENTO } from "@/lib/media";
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
    q: "Onde fica o Espaço Essência?",
    a: "O Espaço Essência atende em Alvorada, no Rio Grande do Sul. Para receber a localização exata e as orientações de acesso, fale com a gente pelo WhatsApp.",
  },
  {
    q: "Como faço para agendar?",
    a: "O agendamento é feito diretamente pelo WhatsApp. Basta enviar uma mensagem contando qual serviço você deseja e combinamos o melhor horário.",
  },
  {
    q: "Quais serviços o salão oferece?",
    a: "Trabalhamos com soltura de cachos, progressiva DEF, progressiva semidef, cortes femininos, unha tradicional e alongamento de unhas.",
  },
  {
    q: "O atendimento é com horário marcado?",
    a: "Sim. Trabalhamos com horário marcado para garantir tranquilidade, atenção individual e um atendimento sem pressa.",
  },
  {
    q: "Vocês fazem cabelo e unhas no mesmo espaço?",
    a: "Sim. Cabelo e unhas são realizados no mesmo espaço, o que permite combinar serviços em um único horário.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espaço Essência | Salão de Beleza em Alvorada RS" },
      {
        name: "description",
        content:
          "Espaço Essência em Alvorada RS: serviços de cabelo e unhas com atendimento especializado, sofisticação e cuidado. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Espaço Essência | Salão de Beleza em Alvorada RS" },
      {
        property: "og:description",
        content:
          "Salão de beleza em Alvorada RS com serviços de cabelo e unhas. Atendimento personalizado e agendamento pelo WhatsApp.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQ)) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Salão de beleza em Alvorada · RS"
        title="Beleza, cuidado e sofisticação em Alvorada"
        subtitle="No Espaço Essência, cada atendimento é pensado para valorizar o seu estilo — com técnica, delicadeza e resultado que acompanha a sua rotina."
        ctaHref={WA.home}
        ctaLabel="Agendar pelo WhatsApp"
        image={HERO_SALAO}
      />

      <Section eyebrow="Sobre o espaço" title="Um lugar feito para o seu tempo">
        <Prose>
          <p>
            O Espaço Essência nasceu do desejo de oferecer, em Alvorada/RS, um
            atendimento de beleza atento aos detalhes. Aqui, cada cliente é
            recebida com escuta, orientação honesta sobre o que combina com o
            seu tipo de fio e um resultado pensado para durar.
          </p>
          <p>
            Trabalhamos com cabelo e unhas no mesmo espaço, o que traz
            praticidade para quem quer cuidar de tudo em um único horário. A
            proposta é simples: técnica bem aplicada, ambiente acolhedor e uma
            experiência que devolve autoestima.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Serviços" title="O que fazemos no Espaço Essência" muted>
        <RelatedLinks items={SERVICES.map((s) => ({ ...s }))} />
      </Section>

      <Section eyebrow="Diferenciais" title="Por que escolher o Espaço Essência">
        <CardGrid
          items={[
            {
              title: "Atendimento personalizado",
              text: "Antes de começar, conversamos sobre o seu cabelo, sua rotina e o resultado que você deseja.",
            },
            {
              title: "Ambiente acolhedor",
              text: "Um espaço tranquilo, organizado e pensado para que o seu horário seja um momento seu.",
            },
            {
              title: "Foco em resultado",
              text: "Indicamos o procedimento adequado ao seu tipo de fio, com transparência sobre o que esperar.",
            },
            {
              title: "Estética sofisticada",
              text: "Acabamento cuidadoso, do corte à esmaltação, com atenção aos detalhes que fazem diferença.",
            },
            {
              title: "Praticidade no agendamento",
              text: "Você agenda pelo WhatsApp em poucos minutos, sem formulários e sem espera.",
            },
            {
              title: "Cabelo e unhas no mesmo lugar",
              text: "Combine serviços e resolva o seu cuidado completo em uma única visita ao salão.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Cabelos" title="Tratamentos e cortes para todos os tipos de fio" muted>
        <Prose>
          <p>
            Da soltura de cachos às progressivas e aos cortes personalizados,
            nossos serviços de cabelo em Alvorada são escolhidos junto com você,
            respeitando a saúde do fio e o estilo que combina com o seu dia a
            dia.
          </p>
        </Prose>
        <div className="mt-8">
          <Gallery items={CORTES.slice(0, 2).concat(CACHOS)} />
        </div>
        <div className="mt-8">
          <RelatedLinks items={SERVICES.slice(0, 4).map((s) => ({ ...s })).slice(0, 3)} />
        </div>
      </Section>

      <Section eyebrow="Unhas" title="Mãos bem cuidadas, do básico ao alongamento">
        <Prose>
          <p>
            Nossa manicure une higiene, cuidado com as cutículas e esmaltação
            impecável. Para quem busca formato e durabilidade, o alongamento de
            unhas entrega um acabamento sofisticado e resistente.
          </p>
        </Prose>
        <div className="mt-8">
          <Gallery items={[...UNHA_TRADICIONAL, ...ALONGAMENTO]} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/manicure-unha-tradicional-alvorada" className="btn-outline-gold">
            Unha tradicional
          </Link>
          <Link to="/alongamento-de-unhas-alvorada" className="btn-outline-gold">
            Alongamento de unhas
          </Link>
        </div>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Dúvidas comuns sobre o salão" muted>
        <Faq items={FAQ} />
      </Section>

      <CtaBand
        title="Vamos agendar o seu horário?"
        text="Conte o que você deseja fazer e encontramos juntas o melhor dia e horário para o seu atendimento em Alvorada."
        href={WA.home}
        label="Agendar pelo WhatsApp"
      />
    </>
  );
}
