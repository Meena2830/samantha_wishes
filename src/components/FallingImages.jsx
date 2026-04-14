import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

gsap.registerPlugin(ScrollTrigger);

export default function FallingImages() {
  const containerRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  const fallingImages = useMemo(
    () =>
      images.map((image, index) => ({
        ...image,
        rotation: ((index * 19) % 36) - 18,
      })),
    [],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const syncViewport = () => setIsCompact(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  useLayoutEffect(() => {
    if (isCompact) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".falling-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: -220 - index * 12,
            opacity: 0,
            rotate: ((index * 17) % 40) - 20,
            filter: "blur(12px)",
          },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isCompact]);

  return (
    <section className="section-shell falling-section" ref={containerRef}>
      <div className="section-heading">
        <div>
          <span className="eyebrow">Life Moments</span>
          <h2 className="section-title">Memories that land with meaning.</h2>
        </div>
        <p className="section-copy">
          Each image arrives with depth and motion so the scroll feels like a
          tribute to his story, not just a simple photo grid.
        </p>
      </div>

      <div className="falling-grid">
        {fallingImages.map((image) => (
          <article key={image.id} className="falling-card glass-panel">
            <SmartImage
              src={image.src}
              fallback={image.fallback}
              alt={image.alt}
            />
            <div className="falling-copy">
              <strong>{image.title}</strong>
              <span>{image.caption}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
