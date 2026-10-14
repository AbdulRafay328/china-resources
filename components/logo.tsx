// The CRI pyramid mark, drawn on a 196 × 157 grid. The light face, door and
// base are coloured for dark backgrounds (white face, door cut out in ink).
export const MARK_PATHS = {
  leftFace: "M96 0 11 147h76z",
  rightFace: "M96 0 87 147h98z",
  fold: "M96 0l22 95-31 52z",
  door: "M42 147v-22a12 12 0 0 1 24 0v22z",
  base: "M0 147h196v10H0z",
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 196 157" className={className} aria-hidden="true">
      <path className="fill-white" d={MARK_PATHS.leftFace} />
      <path className="fill-brand" d={MARK_PATHS.rightFace} />
      <path className="fill-brand-deep" d={MARK_PATHS.fold} />
      <path className="fill-ink" d={MARK_PATHS.door} />
      <path className="fill-white" d={MARK_PATHS.base} />
    </svg>
  );
}
