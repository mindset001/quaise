"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-ink blueprint-grid animate-pulse" />
  ),
});

export default function HeroSceneClient() {
  return <HeroScene />;
}
