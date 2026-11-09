import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Bolt, Bridge, Factory, Pickaxe } from "./icons";

const INDUSTRIES = [
  {
    icon: Bridge,
    title: "Infrastructure",
    body: "Highways, bridges, ports, railways, and municipal engineering.",
    img: "/images/infrastructure.jpg",
  },
  {
    icon: Bolt,
    title: "Energy & Power",
    body: "Traditional energy development, renewable energy construction, and power transmission projects.",
    img: "/images/energy-power.jpg",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    body: "Large-scale plant construction, industrial materials, and bulk commodity trading.",
    img: "/images/industrial-materials.jpg",
  },
  {
    icon: Pickaxe,
    title: "Mining & Resources",
    body: "Equipment and consulting for mineral extraction, material handling, and tailings management systems.",
    img: "/images/mining-machinery.jpg",
  },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-20 overflow-hidden bg-ink-deep"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading title="Industries We Serve" tone="dark" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {INDUSTRIES.map(({ icon: Icon, title, body, img }, i) => (
            <Reveal key={title} className="h-full" delay={i * 90}>
              <article className="group relative h-72 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/25"
                />
                <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                  <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-white/15 bg-ink/60 text-brand backdrop-blur">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-xl leading-tight font-bold text-white uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                    {body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
