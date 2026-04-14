import { motion } from "framer-motion";

export default function BirthdayText() {
  return (
    <section id="birthday-wish" className="section-shell birthday-text">
      <motion.div
        className="birthday-card glass-panel"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="eyebrow">Final Message</span>
        <h2 className="section-title">Happy Birthday, Samantha.</h2>
        <p>
          On your special day, I wish you strength in every challenge, peace in
          your heart, and success in everything you work for. May every step
          ahead bring confidence, respect, and the kind of happiness that stays
          with you for a long time.
        </p>
        <p>
          May your days stay bright, your efforts bring real results, and this
          new year of your life be filled with growth, loyal people, and proud
          moments that remind you how much you mean to everyone around you.
        </p>
      </motion.div>
    </section>
  );
}
