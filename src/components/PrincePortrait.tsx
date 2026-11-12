import React from "react";
import { motion } from "framer-motion";
import { RoyalCrown, SakuraPetal } from "./Illustrations";
import { eventDetails } from "../data/event";

interface PrincePortraitProps {
  className?: string;
}

export const PrincePortrait: React.FC<PrincePortraitProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center my-6 ${className}`}>
      {/* Royal Crown resting gracefully atop the portrait */}
      <motion.div
        className="z-20 -mb-4 md:-mb-6"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <RoyalCrown size={70} className="md:w-20" />
      </motion.div>

      {/* Luxury Gold & Torii Red Circular Bezel */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-tr from-gold-dark via-gold-light to-gold shadow-[0_0_40px_rgba(212,175,55,0.45)]">
        {/* Inner Red Lacquer Ring */}
        <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-b from-torii via-theme-dark to-theme-darkest border border-gold/50 flex items-center justify-center overflow-hidden relative">
          {/* Aayansh's Portrait */}
          <motion.img
            src={eventDetails.photoUrl}
            alt={`Prince ${eventDetails.birthdayBoy}`}
            className="w-full h-full object-cover rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            loading="eager"
          />

          {/* Delicate inner gold vignette */}
          <div className="absolute inset-0 rounded-full border border-gold/30 pointer-events-none" />
        </div>

        {/* Orbiting Sakura Petal Accents */}
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold animate-ping opacity-60 pointer-events-none" />
        <div className="absolute bottom-2 -left-2 text-sakura pointer-events-none">
          <SakuraPetal size={18} />
        </div>
        <div className="absolute top-8 -right-3 text-sakura pointer-events-none">
          <SakuraPetal size={14} />
        </div>
      </div>

      {/* Royal Title Pill */}
      <motion.div
        className="mt-3.5 inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-theme-surface/90 border border-gold/50 text-gold-light font-serif text-xs sm:text-sm tracking-[0.2em] uppercase shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-torii">✦</span>
        <span>Prince Aayansh · Turning One</span>
        <span className="text-torii">✦</span>
      </motion.div>
    </div>
  );
};

export default PrincePortrait;
