import { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    eyebrow: "Her Journey",
    title: "Built with passion, shaped by resilience.",
    copy:
      "Her life reflects strength, dedication, and perseverance. From her early days to becoming one of the most admired actresses, every step of her journey shows her commitment to growth and excellence.",
    bullets: [
      "A journey driven by passion, discipline, and determination.",
      "Overcoming challenges with courage and confidence.",
      "Evolving stronger with every milestone she achieves.",
    ],
    image: images[2],
    gradient:
      "linear-gradient(135deg, rgba(255, 241, 245, 0.95), rgba(233, 251, 242, 0.92))",
  },
  {
    eyebrow: "Her Career",
    title: "Turning talent into timeless performances.",
    copy:
      "As an actress, she brings characters to life with grace, emotion, and authenticity. Her work is not just about acting, but about inspiring millions through powerful storytelling.",
    bullets: [
      "Dedicated to her craft with passion and perfection.",
      "An artist who brings depth and life to every role.",
      "Building a legacy through talent and hard work.",
    ],
    image: images[6],
    gradient:
      "linear-gradient(135deg, rgba(255, 248, 236, 0.95), rgba(235, 252, 246, 0.9))",
  },
  {
    eyebrow: "Inspiration",
    title: "More than an actress, she is a symbol of strength.",
    copy:
      "Her journey inspires millions. With her confidence, kindness, and determination, she continues to shine both on and off the screen, proving that true success comes from within.",
    bullets: [
      "A woman who balances grace with strength.",
      "Confident, inspiring, and deeply admired.",
      "A true icon of talent, resilience, and beauty.",
    ],
    image: images[10],
    gradient:
      "linear-gradient(135deg, rgba(255, 243, 248, 0.96), rgba(225, 249, 236, 0.94))",
  },
];

export default function AppleScroll() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
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
      gsap.to(trackRef.current, {
        yPercent: -100 * (stories.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${stories.length * 1100}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isCompact]);

  return (
    <section id="story" className="story-shell">
      <div
        className={`story-frame glass-panel ${isCompact ? "is-compact" : ""}`}
        ref={containerRef}
      >
        <div
          className={`story-track ${isCompact ? "is-compact" : ""}`}
          ref={trackRef}
        >
          {stories.map((story) => (
            <section
              key={story.title}
              className="story-panel"
              style={{ "--panel-gradient": story.gradient }}
            >
              <div className="story-card glass-panel story-gradient">
                <span className="eyebrow">{story.eyebrow}</span>
                <h3>{story.title}</h3>
                <p>{story.copy}</p>
                <ul>
                  {story.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="story-visual glass-panel story-gradient">
                <SmartImage
                  src={story.image.src}
                  fallback={story.image.fallback}
                  alt={story.image.alt}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
