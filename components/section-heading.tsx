export function SectionHeading({
  title,
  tone = "light",
}: {
  title: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <h2
      className={[
        "font-display text-3xl leading-[1.05] font-bold tracking-tight uppercase sm:text-4xl",
        dark ? "text-white" : "text-ink",
      ].join(" ")}
    >
      {title}
    </h2>
  );
}
