import Link from "next/link";
import { ContactButton } from "./contact-button";
import { LogoMark } from "./logo";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-ink">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
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
        <ContactButton
          copiedLabel="Copied"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink transition hover:bg-white sm:px-5"
        >
          Contact
        </ContactButton>
      </div>
    </header>
  );
}
