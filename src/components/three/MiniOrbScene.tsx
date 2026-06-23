"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.3, 4]} />
        <MeshDistortMaterial
          color="#d3a64f"
          distort={0.35}
          speed={1.5}
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function MiniOrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#e9c87c" />
      <Orb />
      <Sparkles count={30} scale={3} size={1.5} speed={0.25} color="#d3a64f" />
    </Canvas>
  );
}
