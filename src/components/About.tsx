import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import MiniOrb from "./three/MiniOrb";
import { company, mission, vision, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title={`Building ${company.shortName}'s legacy of trusted infrastructure`}
            />
            <Reveal delay={0.1} className="mt-6 space-y-5">
              <p className="text-muted leading-relaxed">
                {company.description}
              </p>
              <p className="text-muted leading-relaxed">
                {company.descriptionSecondary}
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-semibold text-gold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative h-[420px] lg:h-[480px]">
            <div className="absolute inset-0 rounded-3xl border border-line bg-surface/40 overflow-hidden">
              <MiniOrb />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Reveal className="rounded-3xl border border-line bg-surface/60 p-8 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Our {mission.title}
            </span>
            <p className="mt-4 text-bone/90 leading-relaxed">{mission.body}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-line bg-surface/60 p-8 sm:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Our {vision.title}
            </span>
            <p className="mt-4 text-bone/90 leading-relaxed">{vision.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
