import { motion } from "framer-motion";

const orbs = [
  {
    size: 440,
    color: "rgba(247, 135, 182, 0.65)",
    top: "4%",
    left: "-6%",
    duration: 20,
    x: [0, 170, -110, 0],
    y: [0, 120, -80, 0],
  },
  {
    size: 520,
    color: "rgba(137, 226, 173, 0.58)",
    top: "26%",
    right: "-8%",
    duration: 24,
    x: [0, -180, 90, 0],
    y: [0, 180, -120, 0],
  },
  {
    size: 360,
    color: "rgba(255, 219, 186, 0.45)",
    bottom: "8%",
    left: "24%",
    duration: 18,
    x: [0, 100, -50, 0],
    y: [0, -140, 40, 0],
  },
];

export default function BackgroundOrbs() {
  return (
    <div className="background-orbs">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="background-orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
          }}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.08, 0.96, 1] }}
          transition={{
            duration: orb.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </div>
  );
}
