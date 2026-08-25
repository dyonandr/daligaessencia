import corte3 from "@/assets/corte3.jpg.asset.json";
import corte4 from "@/assets/corte4.jpg.asset.json";
import corte13 from "@/assets/corte13.jpg.asset.json";
import corte14 from "@/assets/corte14.jpg.asset.json";
import semi7 from "@/assets/Semi7.jpg.asset.json";
import semi8 from "@/assets/Semi8.jpg.asset.json";
import semi4 from "@/assets/Semi4.jpg.asset.json";
import semi5 from "@/assets/Semi5.jpg.asset.json";
import cachos3 from "@/assets/cachos3.jpg.asset.json";
import cachos4 from "@/assets/cachos4.jpg.asset.json";

import unhaTradicional1 from "@/assets/unha-tradicional-1.jpg";
import unhaTradicional2 from "@/assets/unha-tradicional-2.jpg";
import alongamento1 from "@/assets/alongamento-1.jpg";
import alongamento2 from "@/assets/alongamento-2.jpg";
import heroSalao from "@/assets/hero-salao.jpg";

export type Media = { src: string; alt: string };

export const HERO_SALAO: Media = {
  src: heroSalao,
  alt: "Ambiente sofisticado do Espaço Essência em Alvorada RS, com detalhes em preto e dourado",
};

export const CORTES: Media[] = [
  {
    src: corte3.url,
    alt: "Corte de cabelo feminino repicado com movimento, realizado no Espaço Essência em Alvorada RS",
  },
  {
    src: corte14.url,
    alt: "Corte médio com pontas modeladas e escova finalizada em salão de beleza em Alvorada RS",
  },
  {
    src: corte13.url,
    alt: "Corte em cabelo cacheado longo com iluminação nas pontas feito em Alvorada RS",
  },
  {
    src: corte4.url,
    alt: "Corte de cabelo feminino na altura dos ombros com camadas e mechas iluminadas",
  },
];

export const PROGRESSIVA_DEF: Media[] = [
  {
    src: semi7.url,
    alt: "Cabelo antes da progressiva definitiva, com ondas volumosas e mechas iluminadas",
  },
  {
    src: semi8.url,
    alt: "Resultado de progressiva definitiva: fios lisos, alinhados e com brilho natural",
  },
];

export const PROGRESSIVA_SEMIDEF: Media[] = [
  {
    src: semi4.url,
    alt: "Cabelo com volume e frizz antes da progressiva semidefinitiva no Espaço Essência",
  },
  {
    src: semi5.url,
    alt: "Resultado de progressiva semidefinitiva: fios alinhados com movimento preservado",
  },
];

export const CACHOS: Media[] = [
  {
    src: cachos3.url,
    alt: "Cabelo cacheado durante procedimento de soltura de cachos em Alvorada RS",
  },
  {
    src: cachos4.url,
    alt: "Fios com cachos soltos e definidos após atendimento no Espaço Essência",
  },
];

export const UNHA_TRADICIONAL: Media[] = [
  {
    src: unhaTradicional1,
    alt: "Mãos bem cuidadas com esmaltação nude brilhante feita em manicure em Alvorada RS",
  },
  {
    src: unhaTradicional2,
    alt: "Profissional aplicando esmalte vermelho em atendimento de unha tradicional",
  },
];

export const ALONGAMENTO: Media[] = [
  {
    src: alongamento1,
    alt: "Alongamento de unhas em formato amêndoa com acabamento nude e detalhe dourado",
  },
  {
    src: alongamento2,
    alt: "Aplicação de alongamento de unhas em gel em atendimento profissional",
  },
];
