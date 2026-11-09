type IconProps = { className?: string };

function Icon({
  className,
  children,
  strokeWidth = 1.6,
  viewBox = "0 0 24 24",
}: IconProps & {
  children: React.ReactNode;
  strokeWidth?: number;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

export function Menu({ className }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function Close({ className }: IconProps) {
  return (
    <Icon className={className} strokeWidth={2}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  );
}

/* ---- "Why choose us" ---- */

export function SupplyChain({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M9 7a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="M20 17a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path d="M6.5 9.5v3A2.5 2.5 0 0 0 9 15h3.5a2.5 2.5 0 0 1 2.5 2.5v0" />
      <path d="M11 7h4.5A2.5 2.5 0 0 1 18 9.5v3" />
    </Icon>
  );
}

export function Lifecycle({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v3.5h-3.5" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </Icon>
  );
}

export function Shield({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 11.5 2 2 4-4.2" />
    </Icon>
  );
}

export function Globe({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
    </Icon>
  );
}

/* ---- Solutions ---- */

export function Blueprint({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 13h5" />
      <path d="M7 16.5h8" />
      <circle cx="16.5" cy="14.5" r="1.4" />
    </Icon>
  );
}

export function Crane({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M6 21V5l13 2" />
      <path d="M6 5 19 7" />
      <path d="M12 7v2.5" />
      <path d="M12 12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path d="M3 21h8" />
      <path d="M6 8.5 9.5 12" />
    </Icon>
  );
}

export function Cube({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="m4 7 8 4 8-4" />
      <path d="M12 21V11" />
    </Icon>
  );
}

/* ---- Industries ---- */

export function Bridge({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M3 10c3 0 4-3 4-3s1 3 4 3 4-3 4-3 1 3 4 3" />
      <path d="M4 10v8M20 10v8" />
      <path d="M8 18v-4M16 18v-4M12 18v-4" />
      <path d="M3 18h18" />
    </Icon>
  );
}

export function Bolt({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" />
    </Icon>
  );
}

export function Factory({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M3 21V10l5 3V10l5 3V8l6 4v9H3Z" />
      <path d="M3 21h18" />
      <path d="M6 7V4h2v3" />
    </Icon>
  );
}

export function Pickaxe({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M4 20 14 10" />
      <path d="M5 9c2.5-2 6-2 8 0" />
      <path d="M9 5c2-2.5 6-3 9-1" />
      <path d="m13 9 2 2" />
    </Icon>
  );
}

/* ---- Contact ---- */

export function Phone({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </Icon>
  );
}

export function MapPin({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Icon>
  );
}

export function User({ className }: IconProps) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </Icon>
  );
}

export function Building({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M4 21h16" />
      <path d="M9.5 7h1M13.5 7h1M9.5 11h1M13.5 11h1M9.5 15h1M13.5 15h1" />
    </Icon>
  );
}

export function Send({ className }: IconProps) {
  return (
    <Icon className={className} strokeWidth={1.8}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21l-4-7.5L3 9.5 21 3Z" />
    </Icon>
  );
}
