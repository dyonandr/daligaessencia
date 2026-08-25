import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { WA } from "@/lib/site";

const HAIR = [
  { label: "Soltura de Cachos", to: "/soltura-de-cachos-alvorada" },
  { label: "Progressiva DEF", to: "/progressiva-def-alvorada" },
  { label: "Progressiva Semidef", to: "/progressiva-semidef-alvorada" },
  { label: "Cortes", to: "/cortes-de-cabelo-alvorada" },
] as const;

const NAILS = [
  { label: "Unha Tradicional", to: "/manicure-unha-tradicional-alvorada" },
  { label: "Alongamento de Unhas", to: "/alongamento-de-unhas-alvorada" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-[0.18em] gold-text">
            ESPAÇO ESSÊNCIA
          </span>
          <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground">
            ALVORADA · RS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs tracking-[0.16em] uppercase lg:flex">
          <Link to="/" className="transition-colors hover:text-gold">
            Início
          </Link>
          <Dropdown label="Cabelos" items={HAIR} />
          <Dropdown label="Unhas" items={NAILS} />
          <Link to="/contato" className="transition-colors hover:text-gold">
            Contato
          </Link>
          <a href={WA.home} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Agendar
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-gold lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-ink px-5 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4 text-sm">
            <MobileLink to="/" onClick={() => setOpen(false)}>
              Início
            </MobileLink>
            <p className="mt-4 eyebrow">Cabelos</p>
            {HAIR.map((i) => (
              <MobileLink key={i.to} to={i.to} onClick={() => setOpen(false)}>
                {i.label}
              </MobileLink>
            ))}
            <p className="mt-4 eyebrow">Unhas</p>
            {NAILS.map((i) => (
              <MobileLink key={i.to} to={i.to} onClick={() => setOpen(false)}>
                {i.label}
              </MobileLink>
            ))}
            <div className="mt-4">
              <MobileLink to="/contato" onClick={() => setOpen(false)}>
                Contato
              </MobileLink>
            </div>
            <a
              href={WA.home}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="border-b border-border/60 py-3 transition-colors hover:text-gold"
      activeProps={{ className: "text-gold" }}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; to: string }[];
}) {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 uppercase transition-colors group-hover:text-gold">
        {label}
        <ChevronDown size={13} />
      </button>
      <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="border border-border bg-card p-2 shadow-xl">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="block px-3 py-2.5 text-[0.7rem] tracking-[0.12em] transition-colors hover:bg-accent hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
