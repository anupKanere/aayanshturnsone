import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { SakuraPetal, GoldStar, OrigamiCrane, JapaneseCloud } from "./Illustrations";

/* ── Floating Sakura Petals ─────────────────────────────── */
export const FloatingPetals: React.FC<{ count?: number }> = ({
  count = 15,
}) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 8,
        size: 8 + Math.random() * 8,
        rotation: Math.random() * 360,
        swayAmount: 30 + Math.random() * 60,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-sakura"
          style={{ left: petal.left, top: "-20px" }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, petal.swayAmount, -petal.swayAmount / 2, petal.swayAmount / 3],
            rotate: [0, petal.rotation, petal.rotation * 2],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SakuraPetal size={petal.size} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Gold Sparkles ──────────────────────────────────────── */
export const GoldSparkles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
        size: 4 + Math.random() * 12,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{ left: sparkle.left, top: sparkle.top }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GoldStar size={sparkle.size} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Floating Clouds ────────────────────────────────────── */
export const FloatingClouds: React.FC = () => {
  const clouds = useMemo(
    () => [
      { id: 1, top: "8%", delay: 0, duration: 35, variant: 1 as const, width: "180px", opacity: 0.4 },
      { id: 2, top: "15%", delay: 8, duration: 45, variant: 2 as const, width: "140px", opacity: 0.3 },
      { id: 3, top: "22%", delay: 15, duration: 40, variant: 3 as const, width: "160px", opacity: 0.25 },
      { id: 4, top: "5%", delay: 20, duration: 50, variant: 1 as const, width: "120px", opacity: 0.2 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute text-ivory"
          style={{ top: cloud.top, width: cloud.width, opacity: cloud.opacity }}
          animate={{ x: ["-200px", "calc(100vw + 200px)"] }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <JapaneseCloud variant={cloud.variant} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── Floating Origami Cranes ────────────────────────────── */
export const FloatingCranes: React.FC = () => {
  const cranes = useMemo(
    () => [
      { id: 1, right: "10%", top: "20%", delay: 0, size: 35 },
      { id: 2, right: "25%", top: "35%", delay: 3, size: 25 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {cranes.map((crane) => (
        <motion.div
          key={crane.id}
          className="absolute"
          style={{ right: crane.right, top: crane.top, width: crane.size }}
          animate={{
            x: [-15, 15, -10, 20, -15],
            y: [0, -20, -5, -25, 0],
            rotate: [-5, 5, -3, 7, -5],
          }}
          transition={{
            duration: 12,
            delay: crane.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <OrigamiCrane />
        </motion.div>
      ))}
    </div>
  );
};

