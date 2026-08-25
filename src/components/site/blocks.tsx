import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { Media } from "@/lib/media";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
  image: Media;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={image.src}
        alt={image.alt}
        width={1200}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-background" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-gold">
            {ctaLabel}
          </a>
          <Link to="/contato" className="btn-outline-gold">
            Falar com o salão
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  muted = false,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-ink" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && (
          <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-4xl">
            {title}
          </h2>
        )}
        {(eyebrow || title) && <div className="gold-rule mt-6" />}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}

export function CardGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((i) => (
        <article
          key={i.title}
          className="border border-border bg-card p-6 transition-colors hover:border-gold/50"
        >
          <h3 className="font-display text-xl text-gold-soft">{i.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {i.text}
          </p>
        </article>
      ))}
    </div>
  );
}

export function Gallery({ items }: { items: Media[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((m) => (
        <figure key={m.src} className="overflow-hidden border border-border">
          <img
            src={m.src}
            alt={m.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="max-w-3xl divide-y divide-border border-y border-border">
      {items.map((i) => (
        <details key={i.q} className="group py-5">
          <summary className="cursor-pointer list-none font-display text-lg text-foreground transition-colors group-open:text-gold">
            {i.q}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {i.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="border-y border-border bg-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted-foreground">{text}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-8"
        >
          {label}
        </a>
      </div>
    </section>
  );
}

export function RelatedLinks({
  items,
}: {
  items: { title: string; to: string; desc: string }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((s) => (
        <Link
          key={s.to}
          to={s.to}
          className="group border border-border bg-card p-6 transition-colors hover:border-gold/60"
        >
          <h3 className="font-display text-xl text-gold-soft">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {s.desc}
          </p>
          <span className="mt-5 inline-block text-[0.7rem] uppercase tracking-[0.18em] text-gold">
            Saiba mais →
          </span>
        </Link>
      ))}
    </div>
  );
}
