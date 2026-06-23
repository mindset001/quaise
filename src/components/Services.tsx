import {
  HardHat,
  Compass,
  Building2,
  PackageSearch,
  ClipboardCheck,
  Truck,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { services } from "@/lib/data";

const icons = [HardHat, Compass, Building2, PackageSearch, ClipboardCheck, Truck];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around your project's needs"
          description="From the first sketch to final inspection, we cover the full lifecycle of construction and infrastructure delivery."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-line bg-surface/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-surface">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
