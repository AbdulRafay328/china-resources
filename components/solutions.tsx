import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Blueprint, Crane, Cube } from "./icons";

const SOLUTIONS = [
  {
    no: "01",
    icon: Blueprint,
    title: "EPC Project Consulting & End-to-End Engineering Solutions",
    body: "We provide professional consulting services covering the entire lifecycle of projects for global project owners. Leveraging our deep understanding of the Chinese engineering sector, we precisely match overseas owners with premier Chinese EPC (Engineering, Procurement, and Construction) contractors and tailored engineering solutions. From feasibility studies and technical scheme optimization in the early stages to technical coordination during construction, we ensure the efficient execution and delivery of projects from planning to completion, helping owners reduce costs and increase efficiency.",
    img: "/images/engineering-consulting.jpg",
  },
  {
    no: "02",
    icon: Crane,
    title: "Global Infrastructure & Construction Equipment Supply",
    body: "As a reliable equipment sourcing and export agent, we supply comprehensive equipment packages for infrastructure construction, energy development, and bulk material handling, alongside a wide range of heavy construction machinery. Backed by a rigorous quality control system and an efficient supply chain network, we provide end-to-end guarantees, from drawing review, production supervision, and logistics clearance to on-site delivery, ensuring high-performance, reliable equipment is delivered to project sites on time.",
    img: "/images/equipment-fleet.jpg",
  },
  {
    no: "03",
    icon: Cube,
    title: "Strategic Resource & Industrial Material Allocation",
    body: "We are deeply engaged in the bulk resources and industrial materials market, dedicated to sourcing and providing premium buyers for mineral resources, metals, and industrial raw materials worldwide. Through professional market insights, price trend analysis, and strong industry resource integration, we facilitate efficient and transparent cross-border trade cooperation, optimize resource allocation, and help our clients maximize commercial value.",
    img: "/images/port-shipping.jpg",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading title="Our Solutions" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SOLUTIONS.map(({ no, icon: Icon, title, body, img }, i) => (
            <Reveal key={no} className="h-full" delay={i * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-ink/10">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex size-10 items-center justify-center rounded-lg bg-ink/90 font-display text-sm font-bold text-brand backdrop-blur">
                    {no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink text-brand transition duration-300 group-hover:scale-105">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl leading-tight font-bold text-ink uppercase">
                    {title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">
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
