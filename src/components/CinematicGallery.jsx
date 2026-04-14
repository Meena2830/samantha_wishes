import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

const galleryImages = images.slice(8, 13);

export default function CinematicGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const activeImage = galleryImages[activeIndex];

  return (
    <section className="section-shell cinematic-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Featured Tribute</span>
          <h2 className="section-title">
            The message opens up in full screen.
          </h2>
        </div>
        <p className="section-copy">
          Large transitions, layered lighting, and immersive overlays turn the
          gallery into a bold birthday presentation made just for him.
        </p>
      </div>

      <div className="cinematic-stage glass-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage.id}
            className="cinematic-slide"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <SmartImage
              src={activeImage.src}
              fallback={activeImage.fallback}
              alt={activeImage.alt}
            />
          </motion.div>
        </AnimatePresence>

        <div className="cinematic-overlay">
          <div className="cinematic-copy">
            <span className="eyebrow">Now Honoring</span>
            <h3>Happy Birthday, Samantha.</h3>
            <p>
              Wishing you a day filled with confidence, happiness, true respect,
              and the kind of success that keeps growing with time. You deserve
              a year that matches your strength and heart.
            </p>
          </div>

          <div className="cinematic-thumbs">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className="cinematic-thumb"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${image.title}`}
              >
                <SmartImage
                  src={image.src}
                  fallback={image.fallback}
                  alt={image.alt}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
