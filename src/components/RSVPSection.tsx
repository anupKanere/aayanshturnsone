import React from "react";
import { motion } from "framer-motion";
import { Phone, Gift, Heart } from "lucide-react";
import { eventDetails, getCallUrl } from "../data/event";
import { JapaneseSeal } from "./Illustrations";

const RSVPSection: React.FC = () => {
  return (
    <section
      id="rsvp"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      aria-label="RSVP and contact"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darkest via-theme-dark to-theme-darkest" />
      <div className="absolute inset-0 bg-seigaiha opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon & Japanese Seal */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 border border-gold/40 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <Gift className="w-7 h-7 text-gold-light" />
          </div>
          <JapaneseSeal size={44} text="祝" />
        </motion.div>

        {/* Japanese Subheading */}
        <motion.p
          className="font-script text-gold-light text-2xl md:text-3xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          With All Our Love
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Presence Is Our Greatest Gift!
        </motion.h2>

        {/* Message */}
        <motion.p
          className="font-sans text-ivory/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We would be delighted to celebrate this beautiful milestone with you.
          Join us and shower our little prince with your love and blessings!
        </motion.p>

        {/* Host Info Card */}
        <motion.div
          className="gold-border-card p-7 sm:p-9 mb-10 max-w-md mx-auto shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-1.5 text-gold-light/90 mb-2">
            <Heart className="w-3.5 h-3.5 text-torii fill-current" />
            <p className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">
              Hosted with Love by
            </p>
            <Heart className="w-3.5 h-3.5 text-torii fill-current" />
          </div>

          <p className="font-serif text-ivory text-2xl sm:text-3xl font-semibold mb-3">
            {eventDetails.hostsDisplay}
          </p>

          <div className="flex items-center justify-center gap-2 text-ivory/80">
            <Phone className="w-4 h-4 text-gold" />
            <a
              href={getCallUrl()}
              className="font-sans text-base sm:text-lg hover:text-gold transition-colors font-medium tracking-wide"
            >
              {eventDetails.phoneDisplay}
            </a>
          </div>
        </motion.div>

        {/* Single Call The Hosts Button (No WhatsApp, No Attendance form) */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={getCallUrl()}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold-light to-gold text-theme-darkest font-serif font-bold text-base tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-theme-darkest"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Call Santosh and Shravani"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call the Hosts</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
