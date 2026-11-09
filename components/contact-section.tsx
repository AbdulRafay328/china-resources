import { CONTACT_EMAIL, GMAIL_COMPOSE_URL } from "@/lib/contact";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { Mail, MapPin, Phone, User } from "./icons";

const DETAILS = [
  {
    icon: User,
    label: "Contact Person",
    lines: [{ value: "Mr. Chang", href: null }],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { value: "+86 150 9434 1064", href: "tel:+8615094341064" },
      { value: "+971 52 419 5009", href: "tel:+971524195009" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ value: CONTACT_EMAIL, href: GMAIL_COMPOSE_URL }],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: [
      {
        value:
          "No. 99, Heping Road, Huangshan Subdistrict, Yunlong District, Xuzhou, Jiangsu, China",
        href: null,
      },
    ],
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="blueprint-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_80%_100%,black_5%,transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            We look forward to working with you to create a new chapter in
            global infrastructure and resource cooperation.
          </p>

          <ul className="mt-10 space-y-5">
            {DETAILS.map(({ icon: Icon, label, lines }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-white/45 uppercase">
                    {label}
                  </p>
                  <div className="mt-0.5 space-y-0.5">
                    {lines.map((line) =>
                      line.href ? (
                        <a
                          key={line.value}
                          href={line.href}
                          target={line.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            line.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block text-lg leading-snug font-semibold text-white break-words transition hover:text-brand"
                        >
                          {line.value}
                        </a>
                      ) : (
                        <p
                          key={line.value}
                          className="text-lg leading-snug font-semibold text-white"
                        >
                          {line.value}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
