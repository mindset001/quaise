import { Landmark } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section id="clients" className="relative bg-ink-soft py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Trusted By"
          title="Government & institutional partners"
          align="center"
        />
      </div>

      <Reveal delay={0.1} className="mt-16">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-soft to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-soft to-transparent z-10" />
          <div className="flex gap-6 marquee w-max">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-surface/60 px-6 py-5 w-80"
              >
                <Landmark size={20} className="shrink-0 text-gold" />
                <span className="text-sm text-bone/85 leading-snug">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <style>{`
        .marquee {
          animation: marquee 32s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
