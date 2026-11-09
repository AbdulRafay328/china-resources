import { CONTACT_EMAIL, GMAIL_COMPOSE_URL } from "@/lib/contact";
import { LogoMark } from "./logo";

const LINKS = [
  { label: "Who We Are", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-deep text-white/55">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-auto" />
              <span className="flex flex-col">
                <span className="font-display text-base leading-none font-bold tracking-wide text-white uppercase">
                  China Resources
                </span>
                <span className="mt-1 font-display text-[0.5rem] leading-none font-semibold tracking-[0.2em] text-brand uppercase">
                  &amp; Infrastructure Company
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              A solid bridge connecting China&apos;s premium supply chain with
              the global market, across infrastructure, energy, and industrial
              projects.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="text-white/40">Contact: </span>
                <span className="text-white/75">Mr. Chang</span>
              </li>
              <li>
                <a
                  href="tel:+8615094341064"
                  className="text-white/75 transition hover:text-brand"
                >
                  +86 150 9434 1064
                </a>
              </li>
              <li>
                <a
                  href="tel:+971524195009"
                  className="text-white/75 transition hover:text-brand"
                >
                  +971 52 419 5009
                </a>
              </li>
              <li>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-white/75 transition hover:text-brand"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-white/55">
                No. 99, Heping Road, Huangshan Subdistrict, Yunlong District,
                Xuzhou, Jiangsu, China
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 China Resources &amp; Infrastructure Co., Ltd. All rights reserved.</p>
          <p className="text-white/40">Professionalism · Efficiency · High Quality</p>
        </div>
      </div>
    </footer>
  );
}
