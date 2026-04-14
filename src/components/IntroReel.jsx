import { motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

const title = "Samantha";
const introBackdrop = images[12];
const introPortrait = images[5];
const wishNotes = [
  "Happy Birthday, Samantha. May this day remind you how deeply you are respected, valued, and celebrated.",
  "Wishing you a year filled with strong health, steady success, real peace, and memorable victories.",
  "May your path stay clear, your confidence stay high, and every step ahead bring purpose and pride.",
];

export default function IntroReel() {
  return (
    <section className="section-shell intro-reel">
      <div className="intro-stage glass-panel">
        <motion.div
          className="intro-image-backdrop"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <SmartImage
            src={introBackdrop.src}
            fallback={introBackdrop.fallback}
            alt={introBackdrop.alt}
          />
        </motion.div>

        <div className="intro-overlay" />

        <motion.div
          className="intro-glow"
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="intro-copy">
          <span className="eyebrow">Opening Tribute</span>
          <div className="intro-title" aria-label={title}>
            {title.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{ opacity: 0, y: 36, filter: "blur(16px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.75,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.9 }}
          >
            A birthday opening shaped with confidence, warmth, and heartfelt
            wishes that celebrate the man you are and the future waiting in
            front of you.
          </motion.p>

          <div className="intro-wishes">
            {wishNotes.slice(0, 2).map((wish, index) => (
              <motion.div
                key={wish}
                className="intro-wish-chip glass-panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.95 + index * 0.18, duration: 0.75 }}
                animate={{ y: [0, -6, 0] }}
              >
                {wish}
              </motion.div>
            ))}
          </div>

          <div className="intro-actions">
            <Magnetic>
              <a className="pill-button primary" href="#story">
                View the journey
              </a>
            </Magnetic>
          </div>
        </div>

        <motion.div
          className="intro-photo-card glass-panel"
          initial={{ opacity: 0, x: 40, y: 28, rotate: 6 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          animate={{ y: [0, -12, 0], rotate: [-6, -3, -6] }}
        >
          <SmartImage
            src={introPortrait.src}
            fallback={introPortrait.fallback}
            alt={introPortrait.alt}
          />
          <motion.div
            className="intro-photo-caption"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {wishNotes[2]}
          </motion.div>
        </motion.div>

        <div className="intro-bars" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <motion.span
              key={index}
              className="intro-bar"
              animate={{
                scaleY: [0.35, 1, 0.5, 0.92, 0.35],
                opacity: [0.28, 0.92, 0.48, 0.82, 0.28],
              }}
              transition={{
                duration: 2.8 + index * 0.15,
                delay: index * 0.08,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
