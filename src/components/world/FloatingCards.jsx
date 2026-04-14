import { Float, Html } from "@react-three/drei";
import { images } from "../../utils/images";

const cardPositions = [
  { position: [-2.8, 1.35, 0.8], image: images[1] },
  { position: [2.8, 1.1, -0.4], image: images[4] },
  { position: [-2.5, -1.6, -0.5], image: images[7] },
  { position: [2.6, -1.8, 0.7], image: images[12] },
];

export default function FloatingCards({ compact = false }) {
  const cardsToRender = compact ? cardPositions.slice(0, 2) : cardPositions;

  return cardsToRender.map((card, index) => (
    <Float
      key={card.image.id}
      speed={(compact ? 1.1 : 1.5) + index * 0.2}
      rotationIntensity={compact ? 0.16 : 0.25}
      floatIntensity={compact ? 0.28 : 0.5}
      position={card.position}
    >
      <Html transform distanceFactor={compact ? 1.5 : 1.8}>
        <div className="world-card glass-panel">
          <img src={card.image.src} alt={card.image.alt} />
          <strong>{card.image.title}</strong>
          <span>{card.image.caption}</span>
        </div>
      </Html>
    </Float>
  ));
}
