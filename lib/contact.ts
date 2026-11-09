// Shared contact constants. This module is intentionally NOT "use client" so
// that both Server Components (contact section, footer) and Client Components
// (contact button, contact form) can import the real value. Importing a plain
// constant from a "use client" module into a Server Component yields a client
// reference stub, not the string, so these must live in a neutral module.

export const CONTACT_EMAIL = "chang@creinfra.com";

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL,
)}`;
