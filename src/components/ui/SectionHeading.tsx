import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-bone text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
