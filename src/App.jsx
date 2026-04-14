import { Suspense, lazy } from "react";
import BackgroundOrbs from "./components/BackgroundOrbs";
import IntroReel from "./components/IntroReel";
import Hero from "./components/Hero";
import CinematicGallery from "./components/CinematicGallery";
import FloatingLayers from "./components/FloatingLayers";
import AppleScroll from "./components/AppleScroll";
import FallingImages from "./components/FallingImages";
import BirthdayText from "./components/BirthdayText";
import Confetti from "./components/Confetti";
import ScrollMusic from "./components/ScrollMusic";
import MemoryTimeline from "./components/MemoryTimeline";
import AIChat from "./components/ui/AIChat";
import useLenis from "./hooks/useLenis";

const PremiumSlider = lazy(() => import("./components/PremiumSlider"));
const World = lazy(() => import("./components/world/World"));
const MouseDistortion = lazy(() => import("./components/shaders/MouseDistortion"));

function SectionFallback() {
  return (
    <section className="section-shell">
      <div className="lazy-shell glass-panel">
        <span className="eyebrow">Loading Experience</span>
        <p className="section-copy">
          Preparing the immersive layer with 3D visuals and cinematic motion.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  useLenis();

  return (
    <>
      <Suspense fallback={null}>
        <MouseDistortion />
      </Suspense>
      <BackgroundOrbs />
      <Confetti />
      <ScrollMusic />
      <main className="page-shell">
        <IntroReel />
        <Hero />
        <AppleScroll />
        <Suspense fallback={<SectionFallback />}>
          {/* <World /> */}
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PremiumSlider />
        </Suspense>
        <FallingImages />
        <MemoryTimeline />
        <CinematicGallery />
        <FloatingLayers />
        <BirthdayText />
      </main>
      {/* <AIChat /> */}
    </>
  );
}
