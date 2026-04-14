import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmartImage from "./ui/SmartImage";
import { images } from "../utils/images";

const moments = [
  {
    id: "opening",
    label: "Strong Beginning",
    detail:
      "The opening sets a respectful tone, celebrating the strength, calm, and character that define him.",
    image: images[3],
  },
  {
    id: "memory",
    label: "Proud Memories",
    detail:
      "Collected moments return one by one, showing a life filled with presence, care, and unforgettable bonds.",
    image: images[5],
  },
  {
    id: "celebration",
    label: "Birthday Honor",
    detail:
      "The mood turns brighter and more powerful, making the page feel like an honor rather than just a gallery.",
    image: images[9],
  },
  {
    id: "future",
    label: "Next Chapter",
    detail:
      "The final chapter looks ahead with confidence, wishing him success, peace, and a year worth remembering.",
    image: images[13],
  },
];

export default function MemoryTimeline() {
  const [activeId, setActiveId] = useState(moments[0].id);
  const activeMoment = moments.find((moment) => moment.id === activeId);

  return (
    <section className="section-shell timeline-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Journey Timeline</span>
          <h2 className="section-title">An interactive path through his story.</h2>
        </div>
        <p className="section-copy">
          Click through the timeline to move between meaningful chapters, each
          paired with a visual card and a message of appreciation.
        </p>
      </div>

      <div className="timeline-shell glass-panel">
        <div className="timeline-nav" role="tablist" aria-label="Memory timeline">
          {moments.map((moment, index) => (
            <button
              key={moment.id}
              type="button"
              className={`timeline-step ${moment.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(moment.id)}
              role="tab"
              aria-selected={moment.id === activeId}
            >
              <span className="timeline-index">{`0${index + 1}`}</span>
              <span className="timeline-label">{moment.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMoment.id}
            className="timeline-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="timeline-card-copy">
              <span className="eyebrow">Selected Moment</span>
              <h3>{activeMoment.label}</h3>
              <p>{activeMoment.detail}</p>
            </div>

            <div className="timeline-card-visual glass-panel">
              <SmartImage
                src={activeMoment.image.src}
                fallback={activeMoment.image.fallback}
                alt={activeMoment.image.alt}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
