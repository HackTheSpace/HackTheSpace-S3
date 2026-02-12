"use client";

// ... imports ...
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Center, Html } from "@react-three/drei";
import { Helmet } from "../3d/helmet";

function Loader() {
  return (
    <Html center className="text-black">
      Loading 3D Model...
    </Html>
  );
}


export default function Scene() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('/assets/Vector.svg')] bg-cover bg-center bg-no-repeat" />

      {/* Top: Text */}
      <div className="mt-10 left-0 z-10 w-full flex items-center justify-center pointer-events-none">
        <h1 className="font-ruigslay text-4xl md:text-6xl lg:text-9xl text-gradient-brand text-center leading-tight">
          Hack The Space
        </h1>
      </div>

      {/* Bottom: Pyramid Canvas */}
      <div className="w-full h-full">
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="city" />
          <Suspense fallback={<Loader />}>
              <Center>
                <Helmet scale={12} />
              </Center>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
