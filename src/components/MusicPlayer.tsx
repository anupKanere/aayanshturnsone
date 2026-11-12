import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause } from "lucide-react";
import { useAudio } from "../hooks/useAudio";

const MusicPlayer: React.FC = () => {
  const { isPlaying, toggle, hasError } = useAudio();
  const [showTooltip, setShowTooltip] = useState(false);

  if (hasError) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Subtle tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden sm:block px-3.5 py-1.5 rounded-full bg-theme-darkest/95 border border-gold/40 text-gold-light text-xs font-serif tracking-wider shadow-xl backdrop-blur-md pointer-events-none"
          >
            {isPlaying ? "Pause Birthday Piano" : "Play Birthday Piano"}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-theme-darkest/95 backdrop-blur-md border-2 border-gold/50 flex items-center justify-center text-gold-light hover:border-gold hover:bg-theme-dark/95 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-2 focus:ring-gold/60 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? "Pause birthday music" : "Play birthday music"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              {/* Frequency Wave Bars */}
              <div
                className="absolute -top-1 -right-1 flex items-end gap-0.5"
                aria-hidden="true"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-torii rounded-full"
                    animate={{
                      height: [3, 10, 4, 12, 3],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Music className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer glowing pulse ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/50"
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            aria-hidden="true"
          />
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
