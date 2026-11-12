import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Heart, Sparkles } from "lucide-react";
import { eventDetails } from "../data/event";
import { JapaneseSeal, SakuraPetal } from "./Illustrations";

const MomentsGallery: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const photos = [
    {
      src: eventDetails.photoWithDad,
      alt: "Aayansh with Papa Santosh",
      title: "With Papa Santosh",
      subtitle: "My hero & biggest protector",
    },
    {
      src: eventDetails.photoUrl,
      alt: "Little Prince Aayansh",
      title: "Little Prince Aayansh",
      subtitle: "One year of spreading pure joy",
      featured: true,
    },
    {
      src: eventDetails.photoWithMom,
      alt: "Aayansh with Mamma Shravani",
      title: "With Mamma Shravani",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-20">
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

        {/* Video Reel Showcase Section */}
        {eventDetails.reelVideoUrl && (
          <motion.div
            className="max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Reel Header */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-torii/15 border border-torii/40 text-torii-glow text-xs sm:text-sm font-serif tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Memories in Motion</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <h3 className="font-serif text-ivory text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              Aayansh's 1st Year Reel
            </h3>
            <p className="font-sans text-ivory/65 text-sm sm:text-base mb-6">
              Watch a glimpse of little Aayansh's magical journey turning ONE.
            </p>

            {/* Video Player Card */}
            <div className="relative gold-border-card p-3 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm sm:max-w-md">
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black">
                <video
                  ref={videoRef}
                  src={eventDetails.reelVideoUrl}
                  poster={eventDetails.photoUrl}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-theme-darkest/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-colors hover:bg-theme-darkest/30"
                  >
                    <motion.button
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold/90 text-theme-darkest flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Play Aayansh's reel"
                    >
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                    </motion.button>
                  </div>
                )}

                {/* Video Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-ivory">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-theme-darkest transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-theme-darkest transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={handleFullscreen}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-gold hover:text-theme-darkest transition-colors cursor-pointer"
                      aria-label="Fullscreen video"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Sakura Blossom */}
              <div className="absolute -bottom-2 -right-2 text-sakura pointer-events-none">
                <SakuraPetal size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MomentsGallery;

