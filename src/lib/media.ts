import corte3 from "@/assets/corte3.jpg.asset.json";
import corte4 from "@/assets/corte4.jpg.asset.json";
import corte13 from "@/assets/corte13.jpg.asset.json";
import corte14 from "@/assets/corte14.jpg.asset.json";
import corte5 from "@/assets/corte5.jpg.asset.json";
import corte16 from "@/assets/corte16.jpg.asset.json";
import corte15 from "@/assets/corte15.jpg.asset.json";
import corte12 from "@/assets/corte12.jpg.asset.json";
import corte11 from "@/assets/corte11.jpg.asset.json";
import corte9 from "@/assets/corte9.jpg.asset.json";
import semi7 from "@/assets/Semi7.jpg.asset.json";
import semi8 from "@/assets/Semi8.jpg.asset.json";
import semi4 from "@/assets/Semi4.jpg.asset.json";
import semi5 from "@/assets/Semi5.jpg.asset.json";
import semi1 from "@/assets/Semi1.jpg.asset.json";
import semi2 from "@/assets/Semi2.jpg.asset.json";
import semi3 from "@/assets/Semi3.jpg.asset.json";
import semi6 from "@/assets/Semi6.jpg.asset.json";
import cachos3 from "@/assets/cachos3.jpg.asset.json";
import cachos4 from "@/assets/cachos4.jpg.asset.json";
import cachos1 from "@/assets/cachos1.jpg.asset.json";
import cachos6 from "@/assets/cachos6.jpg.asset.json";
import cachos5 from "@/assets/cachos5.jpg.asset.json";
import cachos2 from "@/assets/cachos2.jpg.asset.json";


import unhaReal1 from "@/assets/unha-real-1.jpg.asset.json";
import unhaGel1 from "@/assets/unha-gel-1.jpg.asset.json";
import unhaGel2 from "@/assets/unha-gel-2.jpg.asset.json";
import alongamentoReal1 from "@/assets/alongamento-real-1.jpg.asset.json";
import alongamentoReal2 from "@/assets/alongamento-real-2.jpg.asset.json";
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
  {
    src: corte9.url,
    alt: "Corte longo em camadas com mechas iluminadas e pontas modeladas em Alvorada RS",
  },
  {
    src: corte12.url,
    alt: "Corte médio liso com acabamento reto e mecha frontal loira, feito no Espaço Essência",
  },
  {
    src: corte16.url,
    alt: "Corte curto tipo chanel com mechas loiras em salão de beleza em Alvorada RS",
  },
  {
    src: corte15.url,
    alt: "Corte curto masculinizado com textura e movimento no topo, feito em Alvorada RS",
  },
  {
    src: corte5.url,
    alt: "Corte curto moderno com máquina nas laterais e coloração vermelha vibrante",
  },
  {
    src: corte11.url,
    alt: "Cabelo loiro com raiz escura preso, mostrando resultado de corte e coloração em Alvorada RS",
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
  {
    src: semi1.url,
    alt: "Cabelo cacheado com volume antes da progressiva semidefinitiva em Alvorada RS",
  },
  {
    src: semi2.url,
    alt: "Cabelo castanho alinhado após progressiva semidefinitiva no Espaço Essência",
  },
  {
    src: semi3.url,
    alt: "Cabelo longo liso com mechas iluminadas após progressiva semidefinitiva em Alvorada RS",
  },
  {
    src: semi6.url,
    alt: "Cabelo escuro com corte reto e brilho após progressiva semidefinitiva no Espaço Essência",
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
  {
    src: cachos1.url,
    alt: "Cabelo cacheado volumoso antes da soltura de cachos no Espaço Essência em Alvorada RS",
  },
  {
    src: cachos2.url,
    alt: "Cachos definidos e soltos após atendimento de soltura de cachos em Alvorada RS",
  },
  {
    src: cachos5.url,
    alt: "Cabelo crespo longo com muito volume antes do procedimento de soltura de cachos",
  },
  {
    src: cachos6.url,
    alt: "Cachos longos definidos com mechas iluminadas após soltura de cachos em Alvorada RS",
  },
];


export const UNHA_TRADICIONAL: Media[] = [
  {
    src: unhaReal1.url,
    alt: "Unhas quadradas com esmaltação vinho brilhante feita em manicure tradicional em Alvorada RS",
  },
  {
    src: unhaGel1.url,
    alt: "Esmaltação em gel com francesinha branca e detalhe dourado feita no Espaço Essência em Alvorada RS",
  },
  {
    src: unhaGel2.url,
    alt: "Esmaltação em gel com brilho, glitter e pedrarias em unhas amendoadas em Alvorada RS",
  },
];

export const ALONGAMENTO: Media[] = [
  {
    src: alongamentoReal1.url,
    alt: "Alongamento de unhas com esmaltação azul e glitter, feito no Espaço Essência em Alvorada RS",
  },
  {
    src: alongamentoReal2.url,
    alt: "Alongamento de unhas em formato quadrado com esmalte verde e detalhes em glitter dourado",
  },
];
