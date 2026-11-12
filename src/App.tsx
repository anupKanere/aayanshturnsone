import React from "react";
import Hero from "./components/Hero";
import BirthdayMessage from "./components/BirthdayMessage";
import MomentsGallery from "./components/MomentsGallery";
import EventDetails from "./components/EventDetails";
import LocationSection from "./components/LocationSection";
import Countdown from "./components/Countdown";
import MusicPlayer from "./components/MusicPlayer";
import RSVPSection from "./components/RSVPSection";
import Footer from "./components/Footer";
import { FloatingPetals } from "./components/FloatingElements";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-theme-darkest selection:bg-gold/30 selection:text-gold-light">
      {/* Global floating sakura petals */}
      <FloatingPetals count={14} />

      {/* Floating celebration music player */}
      <MusicPlayer />

      {/* Main Single Page Content */}
      <main>
        {/* Section 1: Magical Opening Experience */}
        <Hero />

        {/* Section 2: Personal Birthday Message & Prince Portrait */}
        <BirthdayMessage />

        {/* Section: Family Moments & Video Reel */}
        <MomentsGallery />

        {/* Section 3: Event Details (Save the Date) */}
        <EventDetails />

        {/* Section 4: Google Maps Location & Directions */}
        <LocationSection />

        {/* Section 5: Live Birthday Countdown */}
        <Countdown />

        {/* Section 6: RSVP & Host Contact */}
        <RSVPSection />

        {/* Section 7: Closing Scene */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
