import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

export default function FloatingLayers() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const syncViewport = () => setIsCompact(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  const layers = useMemo(
    () =>
      images.slice(0, 5).map((image, index) => ({
        ...image,
        depth: 18 + index * 5,
        duration: 5.2 + index * 0.45,
        offsetY: index % 2 === 0 ? -18 : 18,
        rotation: index % 2 === 0 ? -5 + index : 4 - index,
      })),
    [],
  );

  return (
    <section className="section-shell floating-section">
      <div
        className={`floating-stage glass-panel ${isCompact ? "is-compact" : ""}`}
        onMouseMove={(event) => {
          if (isCompact) {
            return;
          }

          const bounds = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          setPointer({ x, y });
        }}
        onMouseLeave={() => setPointer({ x: 0, y: 0 })}
      >
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            className="floating-layer glass-panel"
            style={{
              transform: isCompact
                ? "none"
                : `translate3d(${pointer.x * layer.depth}px, calc(${layer.offsetY}px + ${pointer.y * layer.depth}px), 0) rotate(${layer.rotation}deg)`,
              zIndex: 10 + index,
            }}
            animate={
              isCompact
                ? { y: [0, -10, 0], rotate: [layer.rotation, layer.rotation + 1.4, layer.rotation] }
                : {
                    y: [0, layer.offsetY * 0.45, 0],
                    rotate: [layer.rotation, layer.rotation + (index % 2 === 0 ? 1.4 : -1.4), layer.rotation],
                  }
            }
            transition={{
              duration: isCompact ? 4 : layer.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.06,
              rotate: 0,
              boxShadow: "0 24px 56px rgba(255, 176, 201, 0.28)",
            }}
          >
            <SmartImage
              src={layer.src}
              fallback={layer.fallback}
              alt={layer.alt}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
