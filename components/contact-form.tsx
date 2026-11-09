"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";
import { Building, Check, Mail, Send, User } from "./icons";

type Fields = { name: string; email: string; company: string; message: string };

const EMPTY: Fields = { name: "", email: "", company: "", message: "" };

function buildMailUrls({ name, email, company, message }: Fields) {
  const subject = `Website enquiry${name ? ` from ${name}` : ""}${
    company ? `, ${company}` : ""
  }`;
  const body = [
    `Name: ${name}`,
    `Company: ${company || "N/A"}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const gmail =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  const mailto =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  return { gmail, mailto };
}

const fieldClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 transition focus:border-brand focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-brand/40";

const labelClass =
  "mb-1.5 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white/60 uppercase";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState<{ gmail: string; mailto: string } | null>(
    null,
  );

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const urls = buildMailUrls(fields);
    setSent(urls);
    // Open a pre-filled Gmail compose window; the on-page links below are a
    // fallback for anyone whose browser blocks the pop-up.
    window.open(urls.gmail, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand text-ink">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-white uppercase">
          Thank you
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
          We&apos;ve opened a pre-filled email for you to send. If nothing
          appeared, use one of the options below and we&apos;ll be in touch
          shortly.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={sent.gmail}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Open in Gmail
          </a>
          <a
            href={sent.mailto}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand hover:text-brand"
          >
            Open in email app
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSent(null);
            setFields(EMPTY);
          }}
          className="mt-6 text-xs font-semibold tracking-wide text-white/45 uppercase transition hover:text-brand"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      noValidate={false}
    >
      <p className="font-display text-lg font-bold text-white uppercase">
        Send us a message
      </p>
      <p className="mt-1 text-sm text-white/55">
        Tell us about your project and our team will respond promptly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            <User className="size-3.5" /> Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClass}>
            <Building className="size-3.5" /> Company
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company name"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-email" className={labelClass}>
          <Mail className="size-3.5" /> Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@company.com"
          className={fieldClass}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="How can we help with your project?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-ink transition hover:bg-white sm:w-auto"
      >
        Send message
        <Send className="size-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 text-xs text-white/40">
        Opens a pre-filled email to our team. No account required.
      </p>
    </form>
  );
}
