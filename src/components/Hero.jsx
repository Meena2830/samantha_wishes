import { motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

const portrait = images[4];
const heroPreviewImages = images.slice(4, 7);
const heroCardOffsets = [
  { x: 8, y: 16, z: 90, rotateZ: -13, rotateX: 8, rotateY: -18, scale: 1 },
  { x: 62, y: 6, z: 10, rotateZ: -2, rotateX: 12, rotateY: -6, scale: 0.94 },
  { x: 116, y: 18, z: -70, rotateZ: 10, rotateX: 14, rotateY: 12, scale: 0.88 },
];

export default function Hero() {
  return (
    <section className="section-shell hero">
      <div className="hero-copy">
        <span className="eyebrow">Birthday Tribute For Him</span>
        <h1 className="hero-title">
          A page full of proud wishes
          <span>for Samantha&apos;s special birthday.</span>
        </h1>
        <p>
          This is more than a website. It&apos;s a birthday tribute built for a
          good man, filled with memories, gratitude, strength, and heartfelt
          wishes that honor his journey and the year ahead.
        </p>

        <div className="hero-actions">
          <Magnetic>
            <a className="pill-button primary" href="#story">
              Explore the tribute
            </a>
          </Magnetic>
          <Magnetic>
            <a className="pill-button secondary" href="#birthday-wish">
              Read the message
            </a>
          </Magnetic>
        </div>

        <div className="hero-meta">
          <div className="metric-card glass-panel metric-card-photos">
            <div className="photo-3d-stack" aria-hidden="true">
              {heroPreviewImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="photo-3d-card"
                  initial={{
                    opacity: 0,
                    x: heroCardOffsets[index].x - 24,
                    y: heroCardOffsets[index].y + 42,
                    z: heroCardOffsets[index].z - 90,
                    rotateX: heroCardOffsets[index].rotateX + 8,
                    rotateY: heroCardOffsets[index].rotateY - 8,
                    rotateZ: heroCardOffsets[index].rotateZ - 8,
                    scale: heroCardOffsets[index].scale * 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    x: [
                      heroCardOffsets[index].x,
                      heroCardOffsets[index].x + (index % 2 === 0 ? 8 : -6),
                      heroCardOffsets[index].x,
                    ],
                    y: [
                      heroCardOffsets[index].y,
                      heroCardOffsets[index].y - (10 + index * 2),
                      heroCardOffsets[index].y,
                    ],
                    z: [
                      heroCardOffsets[index].z,
                      heroCardOffsets[index].z + 26,
                      heroCardOffsets[index].z,
                    ],
                    rotateX: [
                      heroCardOffsets[index].rotateX,
                      heroCardOffsets[index].rotateX - 4,
                      heroCardOffsets[index].rotateX,
                    ],
                    rotateY: [
                      heroCardOffsets[index].rotateY,
                      heroCardOffsets[index].rotateY +
                        (index % 2 === 0 ? 8 : -8),
                      heroCardOffsets[index].rotateY,
                    ],
                    rotateZ: [
                      heroCardOffsets[index].rotateZ,
                      heroCardOffsets[index].rotateZ +
                        (index % 2 === 0 ? 4 : -4),
                      heroCardOffsets[index].rotateZ,
                    ],
                    scale: [
                      heroCardOffsets[index].scale,
                      heroCardOffsets[index].scale + 0.03,
                      heroCardOffsets[index].scale,
                    ],
                  }}
                  transition={{
                    delay: index * 0.18,
                    duration: 5.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    zIndex: 3 - index,
                  }}
                  whileHover={{
                    z: heroCardOffsets[index].z + 140,
                    y: heroCardOffsets[index].y - 18,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1.08,
                    zIndex: 10,
                  }}
                >
                  <SmartImage
                    src={image.src}
                    fallback={image.fallback}
                    alt={image.alt}
                  />
                </motion.div>
              ))}
            </div>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "#ff6b81",
                letterSpacing: "0.8px",
                textShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              Life moments
            </span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <motion.div
          className="hero-ring"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 32,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        <motion.div
          className="portrait-shell glass-panel"
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <SmartImage
            src={portrait.src}
            fallback={portrait.fallback}
            alt={portrait.alt}
          />
        </motion.div>

        <motion.div
          className="floating-note glass-panel"
          style={{ top: "12%", right: "4%" }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY }}
        >
          <strong>You’re not just inspiring, you’re a true icon.</strong>
          The way you carry yourself, shine on screen, and face life with strength makes you truly admirable.
        </motion.div>

        <motion.div
          className="floating-note glass-panel"
          style={{ bottom: "10%", left: "2%" }}
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY }}
        >
          <strong>Birthday Wishes</strong>
          Happy birthday Samantha ❤️
        </motion.div>
      </div>
    </section>
  );
}
