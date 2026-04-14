import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

export default function InteractiveSphere({ compact = false }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) {
      return;
    }

    meshRef.current.rotation.y = state.clock.elapsedTime * 0.26;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.32) * 0.18;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.08;
    materialRef.current.distort = 0.34 + Math.sin(state.clock.elapsedTime) * 0.08;
  });

  return (
    <mesh ref={meshRef} scale={compact ? 1.3 : 1.6}>
      <icosahedronGeometry args={[compact ? 1.2 : 1.4, compact ? 12 : 24]} />
      <MeshDistortMaterial
        ref={materialRef}
        color="#f49ac2"
        emissive="#f8d9eb"
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.25}
        distort={0.38}
        speed={2}
        transparent
        opacity={0.96}
      />
    </mesh>
  );
}
