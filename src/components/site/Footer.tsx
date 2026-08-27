import { Link } from "@tanstack/react-router";
import { WA, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.16em] gold-text">
            ESPAÇO ESSÊNCIA
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Salão de beleza em Alvorada/RS dedicado a cabelos e unhas, com
            atendimento personalizado e resultado cuidadoso.
          </p>
          <a
            href={WA.home}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6"
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <div>
          <h2 className="eyebrow">Serviços</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contato</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li>Alvorada / RS</li>
            <li>
              <a
                href={WA.home}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp: (51) 98562-3831
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Zero+Hora,+814+-+Jardim+Algarve,+Alvorada+-+RS,+94859-250"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Av. Zero Hora, 814 — Jardim Algarve, Alvorada/RS, 94859-250
              </a>
            </li>
            <li>Segunda a sábado, das 9h às 18h (segunda somente com horário marcado)</li>
            <li>
              <a
                href="https://www.instagram.com/espacoessencia_alvorada"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram: @espacoessencia_alvorada
              </a>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-gold">
                Página de contato
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs tracking-[0.14em] text-muted-foreground/70">
        © {new Date().getFullYear()} Espaço Essência · Alvorada/RS · Todos os
        direitos reservados
      </div>
    </footer>
  );
}
