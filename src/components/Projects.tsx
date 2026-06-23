import {
  Building2,
  Droplets,
  HeartPulse,
  ShieldCheck,
  Truck,
  MapPin,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { projects } from "@/lib/data";

const categoryStyle: Record<
  string,
  { icon: typeof Building2; gradient: string }
> = {
  "Real Estate": {
    icon: Building2,
    gradient: "from-gold/25 via-surface to-ink-soft",
  },
  "Water Infrastructure": {
    icon: Droplets,
    gradient: "from-sky-500/15 via-surface to-ink-soft",
  },
  "Healthcare Infrastructure": {
    icon: HeartPulse,
    gradient: "from-rose-500/15 via-surface to-ink-soft",
  },
  "Civil Works": {
    icon: ShieldCheck,
    gradient: "from-emerald-500/15 via-surface to-ink-soft",
  },
  Procurement: {
    icon: Truck,
    gradient: "from-amber-500/15 via-surface to-ink-soft",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects across Nigeria's six geopolitical zones"
          description="A selection of the developments, supply contracts, and civil works Quaise Nigeria Limited has delivered for government and institutional clients."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const style = categoryStyle[p.category] ?? categoryStyle.Procurement;
            const Icon = style.icon;
            return (
              <Reveal key={p.title} delay={(i % 6) * 0.06}>
                <div className="group overflow-hidden rounded-3xl border border-line bg-surface/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40">
                  <div
                    className={`relative h-44 bg-gradient-to-br ${style.gradient} blueprint-grid`}
                  >
                    <Icon
                      size={64}
                      className="absolute bottom-3 right-3 text-bone/10 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold/20"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-[11px] uppercase tracking-wide text-gold backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-bone leading-snug">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-sm text-muted">
                      <MapPin size={14} className="text-gold" />
                      {p.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
