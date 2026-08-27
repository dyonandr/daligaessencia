export const WHATSAPP_NUMBER = "5551985623831";
export const WHATSAPP_NAILS_NUMBER = "5551985552553";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappLinkNails(message: string) {
  return `https://wa.me/${WHATSAPP_NAILS_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  home: whatsappLink(
    "Olá! Vim pelo site do Espaço Essência e gostaria de agendar um horário.",
  ),
  cachos: whatsappLink(
    "Olá! Vim pelo site do Espaço Essência e gostaria de saber mais sobre a Soltura de Cachos.",
  ),
  def: whatsappLink(
    "Olá! Vim pelo site do Espaço Essência e gostaria de saber mais sobre a Progressiva DEF.",
  ),
  semidef: whatsappLink(
    "Olá! Vim pelo site do Espaço Essência e gostaria de saber mais sobre a Progressiva Semidef.",
  ),
  cortes: whatsappLink(
    "Olá! Vim pelo site do Espaço Essência e gostaria de agendar um corte.",
  ),
  unhaTradicional: whatsappLinkNails(
    "Olá! Vim pelo site do Espaço Essência e gostaria de agendar minha unha tradicional.",
  ),
  alongamento: whatsappLinkNails(
    "Olá! Vim pelo site do Espaço Essência e gostaria de saber mais sobre o alongamento de unhas.",
  ),
};

export const SITE = {
  name: "Espaço Essência",
  city: "Alvorada",
  state: "RS",
  cityState: "Alvorada/RS",
};

export const SERVICES = [
  {
    title: "Soltura de Cachos",
    to: "/soltura-de-cachos-alvorada",
    desc: "Movimento leve e fios alinhados, preservando a naturalidade do seu cabelo.",
  },
  {
    title: "Progressiva DEF",
    to: "/progressiva-def-alvorada",
    desc: "Alinhamento definitivo com acabamento liso, brilho e praticidade no dia a dia.",
  },
  {
    title: "Progressiva Semidef",
    to: "/progressiva-semidef-alvorada",
    desc: "Redução de volume com movimento preservado e resultado natural.",
  },
  {
    title: "Cortes",
    to: "/cortes-de-cabelo-alvorada",
    desc: "Cortes personalizados que valorizam o seu rosto, o seu estilo e a sua rotina.",
  },
  {
    title: "Unha Tradicional",
    to: "/manicure-unha-tradicional-alvorada",
    desc: "Manicure com cuidado nos detalhes e esmaltação impecável.",
  },
  {
    title: "Alongamento de Unhas",
    to: "/alongamento-de-unhas-alvorada",
    desc: "Formato, resistência e acabamento sofisticado para mãos elegantes.",
  },
] as const;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Espaço Essência",
    description:
      "Salão de beleza em Alvorada/RS especializado em cabelos e unhas: soltura de cachos, progressiva DEF, progressiva semidef, cortes, manicure e alongamento de unhas.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alvorada",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    areaServed: "Alvorada, RS",
    telephone: "+5551985623831",
    priceRange: "$$",
    url: "/",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "/" },
      { "@type": "ListItem", position: 2, name, item: path },
    ],
  };
}
