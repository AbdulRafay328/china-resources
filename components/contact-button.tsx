"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "./icons";

export const CONTACT_EMAIL = "chang@creinfra.com";

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

// Opens a new Gmail message in a new tab and also copies the address, so
// visitors who don't use Gmail can paste it into their own mail app.
export function ContactButton({
  className,
  copiedLabel = "Email copied",
  children,
}: {
  className?: string;
  copiedLabel?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      return; // Clipboard blocked (e.g. plain HTTP); the mail link still opens.
    }
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 2500);
  }

  return (
    <>
      <a
        href={GMAIL_COMPOSE_URL}
        target="_blank"
        rel="noopener noreferrer"
        title={CONTACT_EMAIL}
        onClick={copyEmail}
        className={className}
      >
        {copied ? (
          <>
            <Check className="size-4" />
            {copiedLabel}
          </>
        ) : (
          children
        )}
      </a>
      <span aria-live="polite" className="sr-only">
        {copied ? `${CONTACT_EMAIL} copied to clipboard` : ""}
      </span>
    </>
  );
}
