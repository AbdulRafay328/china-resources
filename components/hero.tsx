import { ContactButton } from "./contact-button";
import { HeroArt } from "./hero-art";
import { ArrowRight } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_72%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="motion-safe:animate-rise">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
            <span className="size-2 rounded-full bg-brand" />
            China Resources &amp; Infrastructure Co., Ltd.
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-6xl lg:text-[4.25rem]">
            A solid bridge connecting China&apos;s premium supply chain with the
            global market.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            A premier resource procurement and engineering consultancy, closely
            attuned to the pulse of the global industry.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition hover:bg-white"
            >
              Our solutions
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <ContactButton className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-brand hover:text-brand">
              Contact us
            </ContactButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-[18%] rounded-full bg-brand/25 blur-3xl motion-safe:animate-float"
          />
          <div className="relative motion-safe:animate-float">
            <HeroArt className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
