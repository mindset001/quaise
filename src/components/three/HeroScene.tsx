"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function BuildingBlocks() {
  const group = useRef<THREE.Group>(null);

  const blocks = useMemo(
    () => [
      { pos: [-2.4, -0.6, -1], h: 1.4, w: 0.8 },
      { pos: [-1.1, -0.2, 0.4], h: 2.2, w: 0.7 },
      { pos: [0.3, 0.1, -0.6], h: 2.8, w: 0.9 },
      { pos: [1.6, -0.4, 0.6], h: 1.8, w: 0.75 },
      { pos: [2.7, -0.9, -0.3], h: 1.1, w: 0.65 },
    ],
    []
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={group}>
      {blocks.map((b, i) => (
        <Float
          key={i}
          speed={1.2 + i * 0.15}
          rotationIntensity={0.15}
          floatIntensity={0.6}
        >
          <mesh position={b.pos as [number, number, number]} castShadow>
            <boxGeometry args={[b.w, b.h, b.w]} />
            <meshStandardMaterial
              color="#161c25"
              metalness={0.6}
              roughness={0.25}
              emissive="#d3a64f"
              emissiveIntensity={0.04}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CenterPiece() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.22;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0.4, 1.6]} scale={0.85}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#d3a64f"
          distort={0.28}
          speed={1.8}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
    </Float>
  );
}

function GlassPanel() {
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.4}>
      <mesh position={[-1.6, 1.3, 0.8]} rotation={[0.2, 0.4, 0.1]}>
        <torusGeometry args={[0.55, 0.16, 32, 100]} />
        <meshPhysicalMaterial
          color="#e9c87c"
          roughness={0.1}
          metalness={0.2}
          transmission={0.85}
          thickness={0.5}
          ior={1.3}
        />
      </mesh>
    </Float>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
      <planeGeometry args={[30, 30, 1, 1]} />
      <meshStandardMaterial
        color="#07090c"
        metalness={0.3}
        roughness={0.9}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 6.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#07090c"]} />
      <fog attach="fog" args={["#07090c", 6, 14]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.6}
        color="#f3efe6"
        castShadow
      />
      <pointLight position={[-4, 1, -2]} intensity={8} color="#d3a64f" />
      <pointLight position={[3, 3, 4]} intensity={4} color="#e9c87c" />
      <pointLight position={[0, -1, 3]} intensity={2.5} color="#9aa3af" />

      <BuildingBlocks />
      <CenterPiece />
      <GlassPanel />
      <Ground />
      <Sparkles
        count={60}
        scale={[8, 4, 6]}
        size={2}
        speed={0.3}
        color="#d3a64f"
        opacity={0.5}
      />
    </Canvas>
  );
}
