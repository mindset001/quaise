"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import HeroSceneClient from "./three/HeroSceneClient";
import { company } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <HeroSceneClient />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold"
        >
          Est. {company.incorporated.split(",")[1]?.trim() ?? "2007"} · {company.rcNumber}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-bone text-balance"
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-muted leading-relaxed"
        >
          From engineering design to turn-key construction and nationwide
          procurement — Quaise Nigeria Limited delivers infrastructure that
          moves the country forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            View Our Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-sm font-medium text-bone hover:border-gold/60 hover:text-gold transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-bone/50 hover:text-gold"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
