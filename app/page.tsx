import { ContactButton } from "@/components/contact-button";
import { HeroArt } from "@/components/hero-art";
import { ArrowRight } from "@/components/icons";

const STATUS = [
  { label: "Status", value: "Under construction" },
  { label: "Launch", value: "Coming soon" },
  { label: "Enquiries", value: "Open" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex flex-1 items-center overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_45%,black_15%,transparent_70%)]"
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="motion-safe:animate-rise">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-brand opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Website under construction
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[0.9] font-bold tracking-tight text-white uppercase sm:text-7xl lg:text-[5.5rem]">
              Laying the <span className="text-brand">foundations.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Our new website is being built. China Resources &amp;
              Infrastructure Company will be online soon. Until then, our team
              is just a message away.
            </p>

            <ContactButton className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition hover:bg-white">
              Contact us
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </ContactButton>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {STATUS.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.7rem] font-semibold tracking-[0.18em] text-white/45 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg leading-tight font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full bg-brand/25 blur-3xl"
            />
            <HeroArt className="relative w-full" />
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="hazard-stripes h-2.5" />
    </>
  );
}
