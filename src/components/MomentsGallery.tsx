import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { eventDetails } from "../data/event";
import { JapaneseSeal } from "./Illustrations";

const MomentsGallery: React.FC = () => {
  const photos = [
    {
      src: eventDetails.photoWithDad,
      alt: "Aayansh with Papa Santosh",
      title: "With Papa Santosh",
      subtitle: "My hero & biggest protector",
    },
    {
      src: eventDetails.familyPhoto,
      alt: "Aayansh with Papa Santosh and Mumma Shravani",
      title: "Our Complete World",
      subtitle: "Bound by love, blessed with Aayansh",
      featured: true,
    },
    {
      src: eventDetails.photoWithMom,
      alt: "Aayansh with Mumma Shravani",
      title: "With Mumma Shravani",
      subtitle: "Gentlest hugs & unconditional love",
    },
  ];

  return (
    <section
      id="moments"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      aria-label="Treasured moments gallery"
    >
      {/* Background with Seigaiha wave texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-dark via-theme-darkest to-theme-dark" />
      <div className="absolute inset-0 bg-seigaiha opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <JapaneseSeal size={34} text="絆" />
            <p className="font-script text-gold-light text-2xl md:text-3xl">
              Ties of Love
            </p>
            <JapaneseSeal size={34} text="愛" />
          </div>

          <h2 className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Treasured Family Moments
          </h2>
          <p className="font-sans text-ivory/70 text-base md:text-lg max-w-lg mx-auto">
            Celebrating twelve months of warmth, laughter, and infinite love.
          </p>

          {/* Japanese divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold to-gold-light" />
            <Heart className="w-4 h-4 text-torii fill-current" />
            <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold to-gold-light" />
          </div>
        </motion.div>

        {/* 3-Card Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {photos.map((item, index) => (
            <motion.div
              key={item.title}
              className={`gold-border-card group p-3.5 sm:p-4 rounded-3xl transition-all duration-500 ${
                item.featured ? "md:-translate-y-4 shadow-[0_0_40px_rgba(212,175,55,0.35)]" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-theme-darkest border border-gold/40">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Subtle vignette & gold shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-theme-darkest via-transparent to-transparent opacity-80" />

                {/* Corner Japanese gold brackets */}
                <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-gold/70 rounded-tl" />
                <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-gold/70 rounded-tr" />
                <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-gold/70 rounded-bl" />
                <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-gold/70 rounded-br" />

                {/* Text Badge at Bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="font-serif text-ivory text-lg md:text-xl font-semibold tracking-wide">
                    {item.title}
                  </p>
                  <p className="font-sans text-gold-light/80 text-xs md:text-sm mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsGallery;
