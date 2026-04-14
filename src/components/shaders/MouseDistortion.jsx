import { useEffect, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const DistortionMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uResolution: new THREE.Vector2(1, 1),
  },
  `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float circle(vec2 uv, vec2 center, float radius) {
      return smoothstep(radius, radius - 0.16, distance(uv, center));
    }

    void main() {
      vec2 uv = vUv;
      vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
      vec2 centered = (uv - 0.5) * aspect;
      vec2 mouse = (uMouse - 0.5) * aspect;

      float wave = sin((centered.x + centered.y) * 8.0 + uTime * 0.65) * 0.018;
      vec2 warpedUv = uv + vec2(wave, -wave);

      float mouseBloom = circle((warpedUv - 0.5) * aspect + 0.5, mouse + 0.5, 0.42);
      float orbA = circle(uv, vec2(0.22 + sin(uTime * 0.18) * 0.04, 0.18), 0.38);
      float orbB = circle(uv, vec2(0.84, 0.76 + cos(uTime * 0.22) * 0.05), 0.44);

      vec3 base = vec3(1.0, 0.97, 0.95);
      vec3 pink = vec3(0.96, 0.63, 0.80);
      vec3 green = vec3(0.70, 0.90, 0.78);

      vec3 color = base;
      color += pink * orbA * 0.22;
      color += green * orbB * 0.18;
      color += mix(pink, green, 0.5 + wave * 12.0) * mouseBloom * 0.26;

      float alpha = 0.58 + mouseBloom * 0.08;
      gl_FragColor = vec4(color, alpha);
    }
  `,
);

extend({ DistortionMaterial });

function DistortionPlane() {
  const materialRef = useRef(null);
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const { size } = useThree();

  useEffect(() => {
    const handlePointerMove = (event) => {
      targetMouse.current.set(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight,
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useFrame((state) => {
    if (!materialRef.current) {
      return;
    }

    materialRef.current.uTime = state.clock.elapsedTime;
    materialRef.current.uMouse.lerp(targetMouse.current, 0.08);
    materialRef.current.uResolution.set(size.width, size.height);
  });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <distortionMaterial ref={materialRef} transparent />
    </mesh>
  );
}

export default function MouseDistortion() {
  return (
    <div className="shader-layer">
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <DistortionPlane />
      </Canvas>
    </div>
  );
}
