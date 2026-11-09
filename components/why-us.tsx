import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Globe, Lifecycle, Shield, SupplyChain } from "./icons";

const REASONS = [
  {
    icon: SupplyChain,
    title: "Deep-Rooted Chinese Supply Chain",
    body: "Deeply rooted in the Chinese market, we possess a vast network of rigorously vetted premium suppliers and EPC contractors.",
  },
  {
    icon: Lifecycle,
    title: "Full Lifecycle Project Management",
    body: "We offer a seamless, one-stop, end-to-end butler service from initial planning to final delivery.",
  },
  {
    icon: Shield,
    title: "Strict Quality & Compliance Control",
    body: "Adhering to international standards, we conduct rigorous quality supervision and compliance reviews on equipment manufacturing and engineering processes to ensure risk-free delivery.",
  },
  {
    icon: Globe,
    title: "Agile Cross-Border Response",
    body: "Our professional bilingual team deeply understands cross-cultural business contexts, enabling us to swiftly respond to global clients' needs.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative scroll-mt-20 overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_20%_0%,black_5%,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading title="Why Choose Us" tone="dark" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} className="h-full" delay={i * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/[0.06]">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition duration-300 group-hover:bg-brand group-hover:text-ink">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl leading-tight font-bold text-white uppercase">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
