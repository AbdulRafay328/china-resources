import Image from "next/image";
import { Reveal } from "./reveal";

const PILLARS = [
  "End-to-end engineering consulting",
  "Complete equipment sourcing",
  "Heavy machinery export",
  "Comprehensive agency services",
];

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-paper"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid-ink pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:gap-16 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.05] font-bold tracking-tight text-ink uppercase sm:text-4xl">
            Who We Are
          </h2>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            <p>
              As a premier resource procurement and engineering consultancy,
              China Resources &amp; Infrastructure Co., Ltd. is always closely
              attuned to the pulse of the global industry. Upholding our service
              philosophy of professionalism, efficiency, and high quality, we
              are dedicated to being a solid bridge connecting China&apos;s
              premium supply chain with the global market.
            </p>
            <p>
              Leveraging our profound industry experience and extensive network,
              we provide end-to-end engineering consulting, complete equipment
              sourcing, heavy machinery export, and comprehensive agency
              services for global infrastructure construction, energy
              development, and related industrial projects. From the top-level
              design in the early stages to the precise delivery of equipment,
              and further to the optimal allocation of resources, we put our
              clients&apos; needs at the core, ensuring every cross-border
              project is executed efficiently and operates reliably.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <aside className="overflow-hidden rounded-2xl border border-ink/10 bg-ink text-white shadow-xl shadow-ink/10 transition duration-300 hover:shadow-2xl hover:shadow-ink/20">
            <div className="relative h-56 w-full">
              <Image
                src="/images/site-team.jpg"
                alt="On-site project team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
              />
            </div>
            <div className="p-7 sm:p-8">
              <p className="font-display text-xs font-bold tracking-[0.2em] text-brand uppercase">
                What we deliver
              </p>
              <ul className="mt-5 space-y-4">
              {PILLARS.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-2 shrink-0 rotate-45 bg-brand"
                  />
                  <span className="text-[1.05rem] leading-snug font-medium text-white/90">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">
              For global infrastructure construction, energy development, and
              related industrial projects.
            </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
