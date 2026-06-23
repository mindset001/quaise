"use client";

import dynamic from "next/dynamic";

const MiniOrbScene = dynamic(() => import("./MiniOrbScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-3xl bg-surface" />,
});

export default function MiniOrb() {
  return <MiniOrbScene />;
}
