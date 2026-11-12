import React from "react";
import { motion } from "framer-motion";
import { MountFuji, SakuraBranch, RoyalCrown, JapaneseSeal } from "./Illustrations";
import { GoldSparkles } from "./FloatingElements";
import { eventDetails } from "../data/event";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      aria-label="Closing"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-dark via-theme-darkest to-black" />

      {/* Mount Fuji Silhouette at Base */}
      <div className="absolute bottom-0 left-0 right-0 w-full opacity-60 pointer-events-none">
        <MountFuji className="w-full max-h-[320px]" withSun={false} />
      </div>

      {/* Sakura Branches Flanking Bottom */}
      <div className="absolute bottom-0 left-0 w-32 md:w-48 opacity-40 pointer-events-none">
        <SakuraBranch side="left" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 md:w-48 opacity-40 pointer-events-none">
        <SakuraBranch side="right" />
      </div>

      {/* Golden Sparkles */}
      <GoldSparkles count={15} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Royal Crown & Japanese Auspicious Seal */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <JapaneseSeal size={36} text="寿" />
          <RoyalCrown size={68} />
          <JapaneseSeal size={36} text="福" />
        </motion.div>

        {/* "One Year of Love" */}
        <motion.p
          className="font-script text-gold-light text-3xl sm:text-4xl md:text-5xl mb-2 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          One Year of Love
        </motion.p>

        {/* "A Lifetime of Memories" */}
        <motion.p
          className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A Lifetime of Memories
        </motion.p>

        {/* Japanese Divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold to-gold-light" />
          <div className="w-2.5 h-2.5 rounded-full bg-torii" />
          <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold to-gold-light" />
        </motion.div>

        {/* "With Love, Santosh & Shravani" */}
        <motion.p
          className="font-serif text-gold-light text-2xl sm:text-3xl font-medium mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          With Love, {eventDetails.hostsDisplay}
        </motion.p>

        {/* "Thank You for Being Part of Aayansh's Beautiful Journey!" */}
        <motion.p
          className="font-sans text-ivory/70 text-base sm:text-lg mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Thank You for Being Part of {eventDetails.birthdayBoy}'s Beautiful Journey!
        </motion.p>

        {/* Animated Royal Number 1 */}
        <motion.div
          className="relative inline-block mb-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        >
          <motion.span
            className="font-serif text-8xl sm:text-9xl md:text-[10rem] font-bold text-gradient-gold drop-shadow-[0_10px_35px_rgba(212,175,55,0.4)]"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            1
          </motion.span>
          <div className="absolute -inset-6 rounded-full bg-gold/15 blur-2xl pointer-events-none" />
        </motion.div>

        {/* Copyright Footnote */}
        <motion.p
          className="font-sans text-ivory/30 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Crafted with ♥ for {eventDetails.birthdayBoy}'s First Birthday
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
