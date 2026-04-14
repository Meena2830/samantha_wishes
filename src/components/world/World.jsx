import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Cloud,
  Environment,
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  Stars,
  Text,
  Center,
} from "@react-three/drei";
import InteractiveSphere from "./InteractiveSphere";
import FloatingCards from "./FloatingCards";

function OrbitRings({ compact = false }) {
  return (
    <group rotation={[Math.PI / 2.4, 0.4, 0]}>
      {[0, 1, 2].map((ring) => (
        <mesh
          key={ring}
          rotation={[0, 0, ring * 0.55]}
          position={[0, 0, ring * 0.08 - 0.1]}
        >
          <torusGeometry
            args={[
              compact ? 1.85 + ring * 0.38 : 2.2 + ring * 0.48,
              0.018,
              16,
              160,
            ]}
          />
          <meshStandardMaterial
            color={ring % 2 === 0 ? "#f6a2c7" : "#8bdab2"}
            transparent
            opacity={0.34 - ring * 0.07}
            emissive={ring % 2 === 0 ? "#f7bfd8" : "#b4f0d2"}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function WishHalo({ compact = false }) {
  return (
    <Float
      speed={0.8}
      rotationIntensity={0.12}
      floatIntensity={0.24}
      position={[0, compact ? -1.6 : -1.85, 0]}
    >
      <mesh rotation={[-0.18, 0, 0]}>
        <cylinderGeometry
          args={[compact ? 1.65 : 2, compact ? 1.9 : 2.3, 0.1, 72, 1, true]}
        />
        <MeshTransmissionMaterial
          color="#fff6fb"
          thickness={0.45}
          roughness={0.18}
          transmission={0.96}
          ior={1.08}
          chromaticAberration={0.03}
          backside
        />
      </mesh>
    </Float>
  );
}

export default function World() {
  const [isCompact, setIsCompact] = useState(false);
  const worldBadges = [
    "3D tribute scene",
    "Real photo cards",
    "Depth + motion",
  ];
  const worldWishes = [
    "Happy Birthday, Samantha. May this year reward your effort with peace, pride, and success.",
    "A universe of memories and respect built to celebrate the man you are.",
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const syncViewport = () => setIsCompact(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  return (
    <section className="section-shell world-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Interactive World</span>
          <h2 className="section-title">A birthday tribute rendered in 3D.</h2>
        </div>
        <p className="section-copy">
          The centerpiece floats like a tribute sculpture while memory cards
          orbit around it, making the page feel like an immersive showcase of
          his journey.
        </p>
      </div>

      <div className="world-stage glass-panel">
        <div className="world-aura world-aura-left" aria-hidden="true" />
        <div className="world-aura world-aura-right" aria-hidden="true" />

        <div className="world-copy glass-panel">
          <span className="eyebrow">Live Canvas</span>
          <strong className="world-copy-title">
            A bold birthday scene with memories in motion.
          </strong>
          <p>
            Drag to explore the scene, watch the glowing centerpiece breathe,
            and move through a polished birthday moment shaped with pride and
            admiration.
          </p>
          <div className="world-badge-row">
            {worldBadges.map((badge) => (
              <span key={badge} className="world-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="world-wish-stack">
          {worldWishes.map((wish) => (
            <div key={wish} className="world-wish glass-panel">
              {wish}
            </div>
          ))}
        </div>

        <div className="world-scene-label glass-panel">
          <span className="world-scene-kicker">Scene Mood</span>
          <strong>Confident energy, warm light, birthday pride.</strong>
        </div>

        <Canvas dpr={isCompact ? [1, 1.2] : [1, 1.8]}>
          <color attach="background" args={["#fff8f6"]} />
          <fog attach="fog" args={["#fff7f5", 7.5, 15]} />
          <PerspectiveCamera
            makeDefault
            position={isCompact ? [0, 0.2, 8.6] : [0, 0.1, 7.4]}
            fov={isCompact ? 50 : 40}
          />
          <ambientLight intensity={1.55} />
          <directionalLight
            position={[3, 4, 2]}
            intensity={1.85}
            color="#fff2f9"
          />
          <pointLight position={[-4, -2, 3]} intensity={1.35} color="#bdf0cf" />
          <pointLight
            position={[3.5, 1.2, 2.6]}
            intensity={1.1}
            color="#ffd8ea"
          />
          <spotLight
            position={[0, 5.5, 3.8]}
            angle={0.42}
            penumbra={0.8}
            intensity={1.3}
            color="#fff6de"
          />
          <Stars
            radius={isCompact ? 10 : 14}
            depth={isCompact ? 12 : 18}
            count={isCompact ? 220 : 420}
            factor={isCompact ? 1.8 : 2.6}
            saturation={0}
            fade
            speed={0.45}
          />
          <Cloud
            position={[0, isCompact ? 1.5 : 1.8, -4]}
            speed={0.18}
            opacity={0.2}
            segments={isCompact ? 12 : 20}
            bounds={isCompact ? [6, 2.2, 2] : [8, 2.8, 2.8]}
            volume={isCompact ? 4 : 6}
            color="#fff6fb"
          />
          <OrbitRings compact={isCompact} />
          <Float
            speed={isCompact ? 0.9 : 1.2}
            rotationIntensity={isCompact ? 0.16 : 0.25}
            floatIntensity={isCompact ? 0.24 : 0.4}
          >
            <InteractiveSphere compact={isCompact} />
          </Float>
          <WishHalo compact={isCompact} />
          <Sparkles
            count={isCompact ? 72 : 160}
            scale={isCompact ? [6.5, 4.4, 5.4] : [8.5, 5.5, 6.5]}
            size={isCompact ? 2.4 : 3.6}
            speed={0.7}
            color="#f6a2c7"
          />
          {!isCompact && (
            <Float
              speed={0.65}
              rotationIntensity={0.08}
              floatIntensity={0.18}
              position={[0, 2.4, -0.5]}
            >
              <Center>
                <Text
                  fontSize={0.34}
                  letterSpacing={0.08}
                  color="#fff9fb"
                  anchorX="center"
                  anchorY="middle"
                  outlineWidth={0.01}
                  outlineColor="#f0b8cf"
                >
                  Samantha
                </Text>
              </Center>
            </Float>
          )}
          <FloatingCards compact={isCompact} />
          <Environment preset="sunset" />
          <OrbitControls
            enableZoom={false}
            autoRotate={!isCompact}
            autoRotateSpeed={0.4}
            minPolarAngle={Math.PI / 2.7}
            maxPolarAngle={Math.PI / 1.85}
          />
        </Canvas>
      </div>
    </section>
  );
}
