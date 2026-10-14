import { MARK_PATHS } from "./logo";

// The logo mark drawn large, framed by blueprint-style dimension lines that
// carry the company's two words: resources (height) and infrastructure (base).
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 420" className={className} aria-hidden="true">
      <g
        fill="none"
        strokeWidth="1.25"
        className="stroke-white/25 motion-safe:animate-fade"
      >
        <path d="M236 18v364" strokeDasharray="4 7" />
        <path d="M16 60h220" strokeDasharray="4 7" />
        <path d="M16 60v98m0 98v98M8 60h16M8 354h16" />
        <path d="M44 398h122m148 0h122M44 390v16M436 390v16" />
      </g>
      <g className="fill-white/45 font-display text-[13px] font-semibold tracking-[0.3em] uppercase motion-safe:animate-fade">
        <text
          x="16"
          y="207"
          textAnchor="middle"
          dominantBaseline="middle"
          transform="rotate(-90 16 207)"
        >
          Resources
        </text>
        <text x="240" y="398" textAnchor="middle" dominantBaseline="middle">
          Infrastructure
        </text>
      </g>

      <g transform="translate(44 60) scale(2)">
        <path
          className="fill-white motion-safe:animate-rise"
          d={MARK_PATHS.leftFace}
        />
        <path
          className="fill-brand motion-safe:animate-rise motion-safe:[animation-delay:150ms]"
          d={MARK_PATHS.rightFace}
        />
        <path
          className="fill-brand-deep motion-safe:animate-rise motion-safe:[animation-delay:300ms]"
          d={MARK_PATHS.fold}
        />
        <path
          className="fill-ink motion-safe:animate-rise motion-safe:[animation-delay:450ms]"
          d={MARK_PATHS.door}
        />
        <path className="fill-white" d={MARK_PATHS.base} />
      </g>

      <circle
        cx="236"
        cy="60"
        r="8"
        fill="none"
        strokeWidth="1.5"
        className="stroke-brand motion-safe:animate-fade motion-safe:[animation-delay:600ms]"
      />
    </svg>
  );
}
