const corte3 = { url: "/images/corte3.jpg" };
const corte4 = { url: "/images/corte4.jpg" };
const corte13 = { url: "/images/corte13.jpg" };
const corte14 = { url: "/images/corte14.jpg" };
const corte5 = { url: "/images/corte5.jpg" };
const corte16 = { url: "/images/corte16.jpg" };
const corte15 = { url: "/images/corte15.jpg" };
const corte12 = { url: "/images/corte12.jpg" };
const corte11 = { url: "/images/corte11.jpg" };
const corte9 = { url: "/images/corte9.jpg" };
const semi7 = { url: "/images/Semi7.jpg" };
const semi8 = { url: "/images/Semi8.jpg" };
const semi4 = { url: "/images/Semi4.jpg" };
const semi5 = { url: "/images/Semi5.jpg" };
const semi1 = { url: "/images/Semi1.jpg" };
const semi2 = { url: "/images/Semi2.jpg" };
const semi3 = { url: "/images/Semi3.jpg" };
const semi6 = { url: "/images/Semi6.jpg" };
const cachos3 = { url: "/images/cachos3.jpg" };
const cachos4 = { url: "/images/cachos4.jpg" };
const cachos1 = { url: "/images/cachos1.jpg" };
const cachos6 = { url: "/images/cachos6.jpg" };
const cachos5 = { url: "/images/cachos5.jpg" };
const cachos2 = { url: "/images/cachos2.jpg" };


const unhaReal1 = { url: "/images/unha-real-1.jpg" };
const unhaGel1 = { url: "/images/unha-gel-1.jpg" };
const unhaGel2 = { url: "/images/unha-gel-2.jpg" };
const alongamentoReal1 = { url: "/images/alongamento-real-1.jpg" };
const alongamentoReal2 = { url: "/images/alongamento-real-2.jpg" };
const heroSalao = "/images/hero-salao.jpg";

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
