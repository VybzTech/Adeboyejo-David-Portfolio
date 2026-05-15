"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls, PerspectiveCamera } from "@react-three/drei";

export function HeroScene() {
  return (
    <div>Hero
    </div>
    // <Canvas>
    //   <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    //   <OrbitControls enableZoom={false} autoRotate />
    //   <ambientLight intensity={0.5} />
    //   <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
    //   <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
      
    //   <Float speed={4} rotationIntensity={1} floatIntensity={2}>
    //     <Sphere args={[1, 100, 200]} scale={2}>
    //       <MeshDistortMaterial
    //         color="#111827"
    //         attach="material"
    //         distort={0.4}
    //         speed={4}
    //         roughness={0}
    //         metalness={1}
    //       />
    //     </Sphere>
    //   </Float>

    //   {/* Decorative spheres */}
    //   <Float speed={5} rotationIntensity={2}>
    //     <Sphere args={[0.2, 32, 32]} position={[2, 2, -2]}>
    //       <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={2} />
    //     </Sphere>
    //   </Float>
      
    //   <Float speed={6} rotationIntensity={2}>
    //     <Sphere args={[0.1, 32, 32]} position={[-2.5, -1, 1]}>
    //       <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={2} />
    //     </Sphere>
    //   </Float>
    // </Canvas>
  );
}
