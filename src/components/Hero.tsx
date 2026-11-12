import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  MountFuji,
  ToriiGate,
  SakuraBranch,
  RoyalCrown,
  JapaneseSeal,
} from "./Illustrations";
import { FloatingClouds, GoldSparkles, FloatingCranes } from "./FloatingElements";
import { eventDetails } from "../data/event";

const Hero: React.FC = () => {
  const handleOpen = () => {
    document
      .getElementById("birthday-message")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-12 pb-20"
      aria-label="Birthday invitation hero"
    >
      {/* Rich Imperial Burgundy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darkest via-theme-dark to-theme-darkest" />

      {/* Asahi Japanese Sun Glow */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-torii/15 blur-3xl pointer-events-none" />

      {/* Seigaiha subtle wave pattern */}
      <div className="absolute inset-0 bg-seigaiha opacity-30 pointer-events-none" />

      {/* Twinkling Golden Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 45 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              width: 1.5 + (i % 3),
              height: 1.5 + (i % 3),
              left: `${(i * 23) % 100}%`,
              top: `${(i * 17) % 65}%`,
            }}
            animate={{ opacity: [0.15, 0.85, 0.15] }}
            transition={{
              duration: 2 + (i % 4),
              delay: (i % 3) * 0.7,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Floating Japanese Clouds */}
      <FloatingClouds />

      {/* Floating Origami Cranes */}
      <FloatingCranes />

      {/* Cherry Blossom Canopies Left & Right */}
      <div className="absolute top-0 left-0 w-36 sm:w-52 md:w-64 lg:w-72 pointer-events-none opacity-90">
        <SakuraBranch side="left" />
      </div>
      <div className="absolute top-0 right-0 w-36 sm:w-52 md:w-64 lg:w-72 pointer-events-none opacity-90">
        <SakuraBranch side="right" />
      </div>

      {/* Majestic Mount Fuji at Base with Asahi Sun */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none opacity-85 z-0">
        <MountFuji className="w-full max-h-[380px]" withSun={true} />
      </div>

      {/* Grand Traditional Torii Gate standing proud */}
      <motion.div
        className="absolute bottom-[2%] md:bottom-[5%] left-1/2 -translate-x-1/2 pointer-events-none z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.6, delay: 0.3 }}
      >
        <ToriiGate size={150} className="sm:hidden" withLantern={true} />
        <ToriiGate size={210} className="hidden sm:block md:hidden" withLantern={true} />
        <ToriiGate size={260} className="hidden md:block" withLantern={true} />
      </motion.div>

      {/* Golden Sparkles */}
      <GoldSparkles count={18} />

      {/* Central Royal Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-6">
        {/* Japanese Auspicious Seal + Royal Crown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <JapaneseSeal size={40} text="祝" />
          <RoyalCrown size={72} className="md:w-24" />
          <JapaneseSeal size={40} text="寿" />
        </motion.div>

        {/* "YOU'RE CORDIALLY INVITED" */}
        <motion.p
          className="font-script text-gold-light text-2xl md:text-3xl lg:text-4xl mb-3 tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          You're Cordially Invited
        </motion.p>

        {/* Japanese-style Ornamental divider line with Sakura motif */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold to-gold-light" />
          <span className="text-torii text-sm">✦</span>
          <div className="w-2.5 h-2.5 rounded-full bg-gold border border-theme-darkest" />
          <span className="text-torii text-sm">✦</span>
          <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold to-gold-light" />
        </motion.div>

        {/* "A LITTLE PRINCE TURNS" */}
        <motion.h2
          className="font-serif text-ivory text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.25em] uppercase mb-2 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          As our Little Prince Turns
        </motion.h2>

        {/* "ONE" - Grand Golden Number with Japanese Torii & Red Accents */}
        <motion.div
          className="relative my-4 md:my-6 inline-block"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 110 }}
        >
          <h1 className="font-serif text-8xl sm:text-9xl md:text-[11rem] font-bold text-gradient-gold leading-none tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
            ONE
          </h1>
          {/* Radiant Gold Halo */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gold/20 blur-3xl" />
          </div>
        </motion.div>

        {/* "Celebrating Aayansh's First Birthday" */}
        <motion.p
          className="font-serif text-ivory text-2xl sm:text-3xl md:text-4xl mb-2 font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Celebrating <span className="text-gold-light italic">{eventDetails.birthdayBoy}'s</span> First Birthday
        </motion.p>

        {/* "One Year of Love, A Lifetime of Memories" */}
        <motion.p
          className="font-script text-sakura-light text-xl sm:text-2xl md:text-3xl mb-8 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          One Year of Love, A Lifetime of Memories
        </motion.p>

        {/* "OPEN THE INVITATION" CTA Button */}
        <motion.button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-theme-light via-theme-surface to-theme-light border-2 border-gold/70 text-gold-light font-serif text-sm sm:text-base tracking-[0.2em] uppercase transition-all duration-500 hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-gold/60 cursor-pointer shadow-lg"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Open the birthday invitation"
        >
          <span className="w-2 h-2 rounded-full bg-torii" />
          <span>Open the Invitation</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-gold" />
          </motion.span>
        </motion.button>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-theme-darkest to-transparent z-10" />
    </section>
  );
};

export default Hero;
