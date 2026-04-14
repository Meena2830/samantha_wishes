import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        left: `${(index * 4.7) % 100}%`,
        delay: (index % 7) * 0.55,
        duration: 5 + (index % 5) * 0.7,
        color: index % 2 === 0 ? "var(--pink)" : "var(--green)",
      })),
    [],
  );

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          className="confetti-piece"
          style={{ left: piece.left, background: piece.color }}
          animate={{
            y: ["-10vh", "105vh"],
            x: [0, piece.id % 2 === 0 ? 24 : -24, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.95, 0.85, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
