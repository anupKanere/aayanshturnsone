import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, PartyPopper, Heart } from "lucide-react";
import { eventDetails } from "../data/event";
import { JapaneseSeal } from "./Illustrations";

interface EventCardProps {
  icon: React.ReactNode;
  seal: string;
  title: string;
  line1: string;
  line2: string;
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({
  icon,
  seal,
  title,
  line1,
  line2,
  delay,
}) => (
  <motion.div
    className="gold-border-card p-6 sm:p-7 text-center group hover:border-gold transition-all duration-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
  >
    {/* Icon with Japanese Seal Accent */}
    <div className="relative inline-flex items-center justify-center mb-4">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-light group-hover:bg-gold/25 transition-colors duration-500 shadow-md">
        {icon}
      </div>
      <div className="absolute -top-1 -right-2">
        <JapaneseSeal size={22} text={seal} />
      </div>
    </div>

    {/* Title */}
    <h3 className="font-serif text-gold-light text-xs sm:text-sm tracking-[0.25em] uppercase mb-2 font-medium">
      {title}
    </h3>

    {/* Information */}
    <p className="font-serif text-ivory text-lg sm:text-xl font-semibold leading-snug">
      {line1}
    </p>
    <p className="font-sans text-ivory/70 text-sm mt-1">
      {line2}
    </p>
  </motion.div>
);

const EventDetails: React.FC = () => {
  const cards: Omit<EventCardProps, "delay">[] = [
    {
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />,
      seal: "日",
      title: "Date",
      line1: "Friday",
      line2: "13 November 2026",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />,
      seal: "時",
      title: "Time",
      line1: eventDetails.displayTime,
      line2: "An evening of celebration",
    },
    {
      icon: <PartyPopper className="w-6 h-6 sm:w-7 sm:h-7" />,
      seal: "祝",
      title: "Celebration",
      line1: `${eventDetails.birthdayBoy}'s`,
      line2: "First Birthday",
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7" />,
      seal: "愛",
      title: "Hosted with Love by",
      line1: eventDetails.hostsDisplay,
      line2: "With love & joy",
    },
  ];

  return (
    <section
      id="details"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      aria-label="Event details"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darkest via-theme-dark to-theme-darkest" />
      <div className="absolute inset-0 bg-seigaiha opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="font-script text-gold-light text-2xl md:text-3xl mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Mark Your Calendar
          </motion.p>
          <h2 className="font-serif text-ivory text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Save the Date
          </h2>
          <p className="font-sans text-ivory/70 text-base md:text-lg">
            A special evening awaits!
          </p>

          {/* Japanese divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold to-gold-light" />
            <div className="w-2 h-2 rounded-full bg-torii" />
            <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold to-gold-light" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <EventCard key={card.title} {...card} delay={0.1 + i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
