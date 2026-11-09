"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactButton } from "./contact-button";
import { Close, Menu, Phone } from "./icons";
import { LogoMark } from "./logo";

const NAV = [
  { label: "Who We Are", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Deepen the glass + add a shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/10 bg-ink transition-shadow duration-300",
        scrolled ? "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]" : "",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="China Resources & Infrastructure Company, home"
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <LogoMark className="h-8 w-auto sm:h-10" />
          <span className="flex flex-col">
            <span className="font-display text-lg leading-none font-bold tracking-[0.02em] whitespace-nowrap text-white uppercase sm:text-[1.35rem]">
              China Resources
            </span>
            <span className="mt-1 font-display text-[0.55rem] leading-none font-semibold tracking-[0.12em] whitespace-nowrap text-brand uppercase sm:text-[0.6rem] sm:tracking-[0.24em]">
              &amp; Infrastructure Company
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-2.5 xl:flex">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand">
              <Phone className="size-4" />
            </span>
            <div className="flex flex-col gap-0.5 leading-none">
              <a
                href="tel:+8615094341064"
                className="text-[0.8rem] font-semibold tracking-tight text-white transition-colors hover:text-brand"
              >
                +86 150 9434 1064
              </a>
              <a
                href="tel:+971524195009"
                className="text-[0.8rem] font-semibold tracking-tight text-white/55 transition-colors hover:text-brand"
              >
                +971 52 419 5009
              </a>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-8 w-px bg-white/10 xl:block"
          />

          <ContactButton
            copiedLabel="Copied"
            className="hidden shrink-0 items-center gap-1.5 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:bg-brand-deep hover:text-white sm:inline-flex"
          >
            Contact
          </ContactButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-brand hover:text-brand lg:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-ink lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-display text-lg font-semibold tracking-wide text-white uppercase transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+8615094341064"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-white/5 py-3 font-semibold text-white/80 transition-colors hover:text-brand"
            >
              <Phone className="size-4 text-brand" />
              +86 150 9434 1064
            </a>
            <a
              href="tel:+971524195009"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-white/5 py-3 font-semibold text-white/80 transition-colors hover:text-brand"
            >
              <Phone className="size-4 text-brand" />
              +971 52 419 5009
            </a>
            <ContactButton
              copiedLabel="Email copied"
              className="mt-4 mb-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-brand px-5 py-3 font-semibold text-ink transition-colors hover:bg-brand-deep hover:text-white"
            >
              Contact us
            </ContactButton>
          </nav>
        </div>
      )}
    </header>
  );
}
