import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

export default function PremiumSlider() {
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

  return (
    <section className="section-shell slider-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Birthday Highlights</span>
          <h2 className="section-title">A gallery built around his best moments.</h2>
        </div>
        <p className="section-copy">
          Swipe through the gallery like a collection of standout memories.
          Each card leans into view with depth, clarity, and a polished look
          that suits a strong birthday tribute.
        </p>
      </div>

      <div className="slider-shell">
        <Swiper
          className="slider-swiper"
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor={!isCompact}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          slidesPerView={isCompact ? 1.08 : "auto"}
          spaceBetween={isCompact ? 12 : 0}
          coverflowEffect={{
            rotate: isCompact ? 0 : 14,
            stretch: 0,
            depth: isCompact ? 60 : 180,
            modifier: 1,
            scale: isCompact ? 0.98 : 0.92,
            slideShadows: false,
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <motion.div
                className="slider-card glass-panel"
                whileHover={isCompact ? undefined : { y: -10, rotateZ: -1.5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 160, damping: 14 }}
              >
                <SmartImage
                  src={image.src}
                  fallback={image.fallback}
                  alt={image.alt}
                />
                <div className="slider-card-overlay">
                  <strong>{image.title}</strong>
                  <span>{image.caption}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
