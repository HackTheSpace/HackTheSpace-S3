"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Center, Html } from "@react-three/drei";
import { Atom } from "../3d/atom";
import GlassButton from "../buttons/glass-button";
// import { Helmet } from "../3d/helmet";
import type * as THREE from "three";

function Loader() {
  return (
    <Html center className="text-black">
      Loading 3D Model...
    </Html>
  );
}

function RotatingAtom() {
  const atomRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (atomRef.current) {
      atomRef.current.rotation.y -= delta * 0.5; // Rotate on the x axis
    }
  });

  return (
    <group ref={atomRef as any}>
      <Atom scale={1.1} />
    </group>
  );
}


export default function Scene() {
  return (
    <div className="relative w-full h-screen bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('/assets/Vector.svg')] bg-cover bg-center bg-no-repeat" />

      {/* Top: Text */}
      <div className="absolute top-10 left-0 w-full z-10 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="font-ruigslay text-4xl md:text-6xl lg:text-9xl text-gradient-brand text-center leading-tight">
          Hack The Space
        </h1>
      </div>

      {/* Center Buttons */}
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-wrap justify-center gap-6 pointer-events-auto">
        <GlassButton content="Register Now" className="text-xl text-black"/>
        <GlassButton content="Learn More" className="text-xl text-black"/>
      </div>

      {/* Bottom: Pyramid Canvas */}
      <div className="w-full h-full">
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="city" />
          <Suspense fallback={<Loader />}>
              <Center>
                <RotatingAtom />
              </Center>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
