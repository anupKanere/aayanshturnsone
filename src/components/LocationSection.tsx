import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { eventDetails } from "../data/event";
import { JapaneseSeal } from "./Illustrations";

const LocationSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="location"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      aria-label="Location"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darkest via-theme-dark to-theme-darkest" />
      <div className="absolute inset-0 bg-seigaiha opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <JapaneseSeal size={36} text="道" />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 border border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <MapPin className="w-6 h-6 text-gold-light" />
            </div>
            <JapaneseSeal size={36} text="案" />
          </div>

          <motion.p
            className="font-script text-gold-light text-2xl md:text-3xl mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join Us in Person
          </motion.p>
          <h2 className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Find Your Way to the Celebration
          </h2>
          <p className="font-sans text-ivory/70 text-base md:text-lg max-w-lg mx-auto">
            We can't wait to celebrate this special day with you!
          </p>

          {/* Japanese divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold to-gold-light" />
            <div className="w-2 h-2 rounded-full bg-torii" />
            <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold to-gold-light" />
          </div>
        </motion.div>

        {/* Map + Location Card */}
        <motion.div
          className="gold-border-card overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Responsive Map Viewport */}
          <div className="relative h-72 sm:h-88 md:h-96 w-full bg-theme-darkest overflow-hidden">
            {/* Live Embedded Google Map */}
            <iframe
              src={eventDetails.mapsEmbedUrl}
              title="Celebration Venue Location Map"
              className={`w-full h-full border-0 transition-opacity duration-700 ${
                mapLoaded ? "opacity-90" : "opacity-0"
              }`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
            />

            {/* Loading / Placeholder */}
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-theme-darkest/90">
                <div className="text-center p-6">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MapPin className="w-12 h-12 md:w-16 md:h-16 text-torii mx-auto mb-3" />
                  </motion.div>
                  <p className="font-serif text-ivory text-xl font-medium">
                    Celebration Venue
                  </p>
                  <p className="font-sans text-ivory/50 text-sm mt-1">
                    Loading interactive map...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Location Info Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-theme-darkest via-theme-dark to-theme-darkest border-t border-gold/25">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-torii/20 border border-torii/40 text-torii-glow flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-ivory text-xl font-semibold">
                    Celebration Venue
                  </h3>
                  <p className="font-sans text-ivory/65 text-sm mt-0.5">
                    {eventDetails.displayDate} · {eventDetails.displayTime}
                  </p>
                </div>
              </div>

              {/* Prominent GET DIRECTIONS Button */}
              <motion.a
                href={eventDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-dark via-gold-light to-gold text-theme-darkest font-serif font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-theme-darkest w-full sm:w-auto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Get directions to the celebration venue on Google Maps (opens in new tab)"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
