import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";
import { eventDetails } from "../data/event";
import { JapaneseSeal } from "./Illustrations";

interface CountdownUnitProps {
  value: number;
  label: string;
  kanji: string;
  delay: number;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({
  value,
  label,
  kanji,
  delay,
}) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="relative gold-border-card w-20 h-22 sm:w-28 sm:h-30 md:w-32 md:h-34 flex flex-col items-center justify-center mb-3 shadow-lg">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gradient-gold"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 16, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
      <span className="text-[10px] sm:text-xs font-serif text-gold-light/60 mt-0.5 tracking-widest">
        {kanji}
      </span>
      {/* Subtle pulse glow */}
      <div className="absolute inset-0 rounded-2xl animate-pulse-glow opacity-25 pointer-events-none" />
    </div>
    <span className="font-sans text-ivory/70 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
      {label}
    </span>
  </motion.div>
);

const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(
    eventDetails.targetDate
  );

  return (
    <section
      id="countdown"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      aria-label="Birthday countdown"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-dark via-theme-darkest to-theme-dark" />
      <div className="absolute inset-0 bg-seigaiha opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <JapaneseSeal size={32} text="待" />
            <p className="font-script text-gold-light text-2xl md:text-3xl">
              Every Precious Second
            </p>
            <JapaneseSeal size={32} text="時" />
          </div>

          <h2 className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Counting Down to the Celebration
          </h2>

          {/* Japanese divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold to-gold-light" />
            <div className="w-2 h-2 rounded-full bg-torii" />
            <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold to-gold-light" />
          </div>
        </motion.div>

        {isComplete ? (
          /* Celebration has begun */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="py-12"
          >
            <motion.p
              className="font-serif text-gold-light text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider drop-shadow-lg"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              THE CELEBRATION HAS BEGUN!
            </motion.p>
          </motion.div>
        ) : (
          /* Countdown Units */
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10">
            <CountdownUnit value={days} label="Days" kanji="日" delay={0.1} />
            <span className="text-gold/50 font-serif text-3xl sm:text-5xl -mt-6" aria-hidden="true">
              :
            </span>
            <CountdownUnit value={hours} label="Hours" kanji="時間" delay={0.2} />
            <span className="text-gold/50 font-serif text-3xl sm:text-5xl -mt-6" aria-hidden="true">
              :
            </span>
            <CountdownUnit value={minutes} label="Minutes" kanji="分" delay={0.3} />
            <span className="text-gold/50 font-serif text-3xl sm:text-5xl -mt-6" aria-hidden="true">
              :
            </span>
            <CountdownUnit value={seconds} label="Seconds" kanji="秒" delay={0.4} />
          </div>
        )}

        {/* Target Date Display */}
        <motion.p
          className="font-sans text-ivory/60 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {eventDetails.displayDate} · {eventDetails.displayTime}
        </motion.p>
      </div>
    </section>
  );
};

export default Countdown;
