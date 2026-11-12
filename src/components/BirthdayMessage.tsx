import React from "react";
import { motion } from "framer-motion";
import { SakuraPetal, JapaneseSeal } from "./Illustrations";
import PrincePortrait from "./PrincePortrait";
import { eventDetails } from "../data/event";

const BirthdayMessage: React.FC = () => {
  return (
    <section
      id="birthday-message"
      className="relative py-20 md:py-28 lg:py-32 px-4 overflow-hidden"
      aria-label="Birthday message"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darkest via-theme-dark to-theme-darkest" />

      {/* Floating Sakura Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[
          { left: "5%", top: "12%", rotate: 45, size: 22, delay: 0 },
          { left: "92%", top: "18%", rotate: -30, size: 18, delay: 1 },
          { left: "8%", top: "78%", rotate: 120, size: 16, delay: 2 },
          { left: "88%", top: "75%", rotate: -60, size: 20, delay: 0.5 },
          { left: "14%", top: "48%", rotate: 90, size: 14, delay: 1.5 },
          { left: "94%", top: "45%", rotate: -15, size: 17, delay: 3 },
        ].map((petal, i) => (
          <motion.div
            key={i}
            className="absolute text-sakura opacity-50"
            style={{
              left: petal.left,
              top: petal.top,
              transform: `rotate(${petal.rotate}deg)`,
            }}
            animate={{
              y: [-8, 8, -8],
              rotate: [petal.rotate, petal.rotate + 15, petal.rotate],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 5,
              delay: petal.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SakuraPetal size={petal.size} />
          </motion.div>
        ))}
      </div>

      {/* Main Luxury Invitation Card */}
      <motion.div
        className="relative max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="invitation-card rounded-3xl p-8 sm:p-12 md:p-16 relative">
          {/* Ornate Japanese Gold Corner Brackets */}
          <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-gold-dark rounded-tl-lg" aria-hidden="true" />
          <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-gold-dark rounded-tr-lg" aria-hidden="true" />
          <div className="absolute bottom-4 left-4 w-14 h-14 border-b-2 border-l-2 border-gold-dark rounded-bl-lg" aria-hidden="true" />
          <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-gold-dark rounded-br-lg" aria-hidden="true" />

          {/* Seigaiha Pattern Texture on Card */}
          <div className="absolute inset-0 bg-seigaiha opacity-40 rounded-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 text-center">
            {/* Top Japanese seal & divider */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-5"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold-dark" />
              <JapaneseSeal size={36} text="慶" />
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold-dark" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-serif text-theme-darkest text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Year of Little Wonders
            </motion.h2>

            {/* Prince Portrait with Aayansh's Actual Photo */}
            <PrincePortrait />

            {/* Heartfelt Birthday Message */}
            <motion.div
              className="space-y-5 text-theme-dark/90 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Twelve months of tiny giggles, countless precious memories, and
                a whole lot of love!
              </p>
              <p className="font-serif text-xl sm:text-2xl text-theme-dark font-semibold">
                Our little prince, {eventDetails.birthdayBoy}, is turning{" "}
                <span className="text-torii font-bold tracking-wide">ONE!</span>
              </p>
              <p>
                A year ago, he entered our lives and filled our hearts with
                happiness beyond words. Every smile, every little milestone, and
                every precious moment has made this journey truly magical.
              </p>
              <p>
                As we celebrate his very first birthday, we would love to share
                this special milestone with our family and friends.
              </p>
              <p>
                Your presence, love, and blessings will make his special day even
                more memorable.
              </p>
              <p className="font-serif text-xl sm:text-2xl text-theme-dark italic pt-2 font-medium">
                Come join us for an evening filled with happiness, laughter, and
                beautiful memories!
              </p>
            </motion.div>

            {/* Bottom Seal & Decorative Divider */}
            <motion.div
              className="flex items-center justify-center gap-3 mt-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold-dark" />
              <span className="text-torii text-base">✦</span>
              <div className="w-2 h-2 rounded-full bg-gold-dark" />
              <span className="text-torii text-base">✦</span>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold-dark" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BirthdayMessage;
