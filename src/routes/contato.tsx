import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WA, SERVICES } from "@/lib/site";
import { HERO_SALAO } from "@/lib/media";
import { PageHero, Section, CtaBand, RelatedLinks } from "@/components/site/blocks";

const PHONE = "(51) 98562-3831";
const PHONE_HREF = "tel:+5551985623831";
const ADDRESS = "Av. Zero Hora, 814 — Jardim Algarve, Alvorada/RS, 94859-250";
const MAPS_SEARCH = "https://www.google.com/maps/search/?api=1&query=Av.+Zero+Hora,+814+-+Jardim+Algarve,+Alvorada+-+RS,+94859-250";
const MAPS_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Av.+Zero+Hora,+814+-+Jardim+Algarve,+Alvorada+-+RS,+94859-250";
const INSTAGRAM = "https://www.instagram.com/espacoessencia_alvorada";
const INSTAGRAM_HANDLE = "@espacoessencia_alvorada";

const hours = [
  { day: "Segunda-feira", time: "09:00 – 18:00", note: "Apenas com horário marcado" },
  { day: "Terça-feira", time: "09:00 – 18:00", note: "" },
  { day: "Quarta-feira", time: "09:00 – 18:00", note: "" },
  { day: "Quinta-feira", time: "09:00 – 18:00", note: "" },
  { day: "Sexta-feira", time: "09:00 – 18:00", note: "" },
  { day: "Sábado", time: "09:00 – 18:00", note: "" },
  { day: "Domingo", time: "Fechado", note: "" },
];

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Espaço Essência — Salão de Beleza em Alvorada RS" },
      {
        name: "description",
        content:
          "Fale com o Espaço Essência, salão de beleza em Alvorada RS. Agende cabelo e unhas pelo WhatsApp (51) 98562-3831. Av. Zero Hora, 814 — Jardim Algarve.",
      },
      { property: "og:title", content: "Contato | Espaço Essência — Alvorada RS" },
      { property: "og:image", content: "https://daligaessencia.lovable.app/images/og-image.jpg" },
      { name: "twitter:image", content: "https://daligaessencia.lovable.app/images/og-image.jpg" },
      {
        property: "og:description",
        content:
          "Agende seu horário no Espaço Essência em Alvorada RS pelo WhatsApp ou telefone.",
      },
      { property: "og:url", content: "https://daligaessencia.lovable.app/contato" },
    ],
    links: [{ rel: "canonical", href: "https://daligaessencia.lovable.app/contato" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Fale com o salão"
        title="Contato do Espaço Essência em Alvorada RS"
        subtitle="O jeito mais rápido de agendar é pelo WhatsApp. Conte qual serviço você deseja e combinamos o melhor horário."
        ctaHref={WA.home}
        ctaLabel="Agendar pelo WhatsApp"
        image={HERO_SALAO}
      />

      <Section eyebrow="Informações de contato" title="NAP — Nome, endereço e telefone">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 className="mt-5 font-display text-xl text-gold-soft">Telefone / WhatsApp</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ligue ou envie uma mensagem pelo WhatsApp.
            </p>
            <p className="mt-3 font-medium text-foreground">{PHONE}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={WA.home} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs">
                WhatsApp
              </a>
              <a href={PHONE_HREF} className="btn-outline-gold text-xs">
                Ligar agora
              </a>
            </div>
          </article>

          <article className="border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="mt-5 font-display text-xl text-gold-soft">Endereço</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Venha nos visitar no bairro Jardim Algarve.
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
              {ADDRESS}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs">
                Ver rotas no mapa
              </a>
              <a href={MAPS_SEARCH} target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-xs">
                Ver no Google Maps
              </a>
            </div>
          </article>

          <article className="border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
            <h3 className="mt-5 font-display text-xl text-gold-soft">Horário de funcionamento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Segunda a sábado, das 9h às 18h.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="text-right font-medium text-foreground">
                    {h.time}
                    {h.note && <span className="block text-[0.7rem] font-normal text-gold">{h.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <h3 className="mt-5 font-display text-xl text-gold-soft">Instagram</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Acompanhe trabalhos e novidades do salão.
            </p>
            <p className="mt-3 font-medium text-foreground">{INSTAGRAM_HANDLE}</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold mt-5 inline-block text-xs"
            >
              Seguir no Instagram
            </a>
          </article>
        </div>

        <div className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          <p>
            O atendimento é com horário marcado, garantindo tranquilidade e
            atenção individual em cada serviço. Para agilizar, envie uma mensagem
            pelo WhatsApp informando o serviço desejado e os dias de preferência.
          </p>
        </div>
      </Section>

      <Section eyebrow="Serviços" title="Escolha o serviço e agende" muted>
        <RelatedLinks items={SERVICES.map((s) => ({ ...s }))} />
      </Section>

<CtaBand
        title="Estamos à sua espera"
        text="Envie uma mensagem agora e garanta o seu horário no Espaço Essência."
        href={WA.home}
        label="Agendar pelo WhatsApp"
      />

      <ContactWhatsAppFloat />
    </>
  );
}

function ContactWhatsAppFloat() {
  return (
    <a
      href={WA.home}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="group fixed bottom-24 right-5 z-50 flex items-center gap-3 rounded-full border border-gold/50 bg-ink py-3 pl-4 pr-5 shadow-lg transition-transform hover:scale-105"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
        <MessageCircle size={20} />
      </span>
      <span className="text-sm font-medium tracking-wide text-gold">
        Agendar pelo WhatsApp
      </span>
    </a>
  );
}
