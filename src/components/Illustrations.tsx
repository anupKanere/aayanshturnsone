import React from "react";

/* ── Sakura Petal ───────────────────────────────────────── */
export const SakuraPetal: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}> = ({ className = "", style, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      d="M12 2C12 2 7 8 7 13C7 17.5 10 22 12 22C14 22 17 17.5 17 13C17 8 12 2 12 2Z"
      fill="currentColor"
      opacity="0.85"
    />
    <path
      d="M12 4C12 4 8.5 9 8.5 13C8.5 16.5 10.5 20 12 20C13.5 20 15.5 16.5 15.5 13C15.5 9 12 4 12 4Z"
      fill="#F4CDD5"
      opacity="0.6"
    />
  </svg>
);

/* ── Grand Majestic Mount Fuji with Rising Sun ──────────── */
export const MountFuji: React.FC<{ className?: string; withSun?: boolean }> = ({
  className = "",
  withSun = true,
}) => (
  <svg
    viewBox="0 0 1000 420"
    fill="none"
    className={className}
    aria-hidden="true"
    preserveAspectRatio="xMidYMax meet"
  >
    <defs>
      <linearGradient id="fujiSun" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#D9453B" stopOpacity="0.85" />
        <stop offset="60%" stopColor="#C83737" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#3C1520" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fujiPeak" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#2E1017" />
        <stop offset="50%" stopColor="#1E0A0F" />
        <stop offset="100%" stopColor="#140508" />
      </linearGradient>
      <linearGradient id="fujiSnow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="65%" stopColor="#FAF5EC" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#ECD599" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="mountainBack" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#3C1520" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#140508" stopOpacity="0.9" />
      </linearGradient>
    </defs>

    {/* Radiant Japanese Rising Sun behind Fuji */}
    {withSun && (
      <g>
        <circle cx="500" cy="180" r="140" fill="url(#fujiSun)" />
        <circle cx="500" cy="180" r="105" fill="#C83737" fillOpacity="0.35" />
        <circle cx="500" cy="180" r="75" fill="#D9453B" fillOpacity="0.45" />
      </g>
    )}

    {/* Distant Rolling Mountains */}
    <path d="M-50 420 L120 220 L320 420 Z" fill="url(#mountainBack)" />
    <path d="M680 420 L860 210 L1050 420 Z" fill="url(#mountainBack)" />
    <path d="M-20 420 L240 270 L480 420 Z" fill="#250B11" opacity="0.6" />
    <path d="M540 420 L760 260 L1020 420 Z" fill="#250B11" opacity="0.6" />

    {/* Grand Mount Fuji Body */}
    <path
      d="M200 420 C320 380 430 180 500 100 C570 180 680 380 800 420 Z"
      fill="url(#fujiPeak)"
      stroke="#D4AF37"
      strokeWidth="1"
      strokeOpacity="0.3"
    />

    {/* Iconic Snow Cap */}
    <path
      d="M440 180 C465 195 480 170 500 100 C520 170 535 195 560 180 
         C545 205 530 215 515 200 C505 210 495 210 485 200 C470 215 455 205 440 180 Z"
      fill="url(#fujiSnow)"
    />

    {/* Elegant Snow Ridge Streams */}
    <path d="M485 200 L492 235 L488 260" stroke="#FAF5EC" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M515 200 L508 240 L514 265" stroke="#FAF5EC" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M500 190 L500 250" stroke="#FAF5EC" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
  </svg>
);

/* ── Grand Traditional Japanese Torii Gate ──────────────── */
export const ToriiGate: React.FC<{
  className?: string;
  size?: number;
  withLantern?: boolean;
}> = ({ className = "", size = 220, withLantern = true }) => (
  <svg
    width={size}
    height={size * 1.15}
    viewBox="0 0 240 270"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="toriiPillar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#C83737" />
        <stop offset="45%" stopColor="#E24C4C" />
        <stop offset="100%" stopColor="#9A2424" />
      </linearGradient>
      <linearGradient id="toriiGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FAF5EC" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#B08B23" />
      </linearGradient>
      <linearGradient id="lanternGlow" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#FAF5EC" />
        <stop offset="50%" stopColor="#D9453B" />
        <stop offset="100%" stopColor="#9A2424" />
      </linearGradient>
    </defs>

    {/* Top Curving Roof Lintel (Kasagi & Shimaki) */}
    <path
      d="M10 38 Q120 8 230 38 L235 48 Q120 22 5 48 Z"
      fill="url(#toriiPillar)"
      stroke="#B08B23"
      strokeWidth="0.8"
    />
    {/* Black / Gold Cap tips (Kasagi ends) */}
    <path d="M5 48 L10 38 L25 41 L20 50 Z" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="0.5" />
    <path d="M235 48 L230 38 L215 41 L220 50 Z" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="0.5" />

    {/* Secondary Beam (Nuki) */}
    <rect x="25" y="68" width="190" height="12" rx="2" fill="url(#toriiPillar)" stroke="#9A2424" strokeWidth="1" />
    <rect x="23" y="66" width="6" height="16" rx="1" fill="#1E0A0F" />
    <rect x="211" y="66" width="6" height="16" rx="1" fill="#1E0A0F" />

    {/* Central Tablet / Plaque (Gakuzuka) */}
    <rect x="108" y="44" width="24" height="26" rx="2" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="1" />
    <rect x="111" y="47" width="18" height="20" rx="1" fill="#C83737" />
    {/* Tablet Gold Kanji/Crown Accent */}
    <circle cx="120" cy="57" r="4" fill="#FAF5EC" />
    <circle cx="120" cy="57" r="2.5" fill="#D4AF37" />

    {/* Left Pillar (Hashira) with inward subtle taper */}
    <path d="M48 68 L44 250 L60 250 L58 68 Z" fill="url(#toriiPillar)" />
    {/* Right Pillar (Hashira) with inward subtle taper */}
    <path d="M192 68 L196 250 L180 250 L182 68 Z" fill="url(#toriiPillar)" />

    {/* Gold ornamental rings on pillars */}
    <rect x="47" y="76" width="11" height="4" fill="url(#toriiGold)" />
    <rect x="182" y="76" width="11" height="4" fill="url(#toriiGold)" />
    <rect x="46" y="140" width="12" height="3" fill="url(#toriiGold)" opacity="0.8" />
    <rect x="182" y="140" width="12" height="3" fill="url(#toriiGold)" opacity="0.8" />

    {/* Stone Bases (Kamebara / Daiishi) */}
    <rect x="38" y="246" width="28" height="14" rx="2" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="0.8" />
    <rect x="174" y="246" width="28" height="14" rx="2" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="0.8" />

    {/* Traditional Hanging Chōchin Paper Lantern */}
    {withLantern && (
      <g className="animate-lantern-sway" style={{ transformOrigin: "120px 80px" }}>
        {/* Cord */}
        <line x1="120" y1="80" x2="120" y2="100" stroke="#D4AF37" strokeWidth="1.5" />
        {/* Lantern Top Cap */}
        <rect x="106" y="98" width="28" height="5" rx="1.5" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="0.5" />
        {/* Lantern Body */}
        <ellipse cx="120" cy="122" rx="18" ry="22" fill="url(#lanternGlow)" stroke="#9A2424" strokeWidth="1" />
        {/* Lantern Ribs */}
        <path d="M106 112 Q120 115 134 112" stroke="#FAF5EC" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <path d="M103 122 Q120 125 137 122" stroke="#FAF5EC" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <path d="M106 132 Q120 135 134 132" stroke="#FAF5EC" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        {/* Golden Kanji Character: 寿 (Longevity / Blessing) */}
        <text
          x="120"
          y="126"
          fontFamily="serif"
          fontSize="13"
          fontWeight="bold"
          fill="#FAF5EC"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          寿
        </text>
        {/* Lantern Bottom & Tassel */}
        <rect x="110" y="143" width="20" height="4" rx="1" fill="#1E0A0F" stroke="#D4AF37" strokeWidth="0.5" />
        <line x1="120" y1="147" x2="120" y2="162" stroke="#D4AF37" strokeWidth="1.5" />
      </g>
    )}
  </svg>
);

/* ── Rich Cherry Blossom Branch (Sakura) ────────────────── */
export const SakuraBranch: React.FC<{
  className?: string;
  side?: "left" | "right";
}> = ({ className = "", side = "left" }) => (
  <svg
    viewBox="0 0 320 420"
    fill="none"
    className={className}
    aria-hidden="true"
    style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
  >
    <defs>
      <linearGradient id="sakuraGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FAF5EC" />
        <stop offset="40%" stopColor="#EAA8B6" />
        <stop offset="100%" stopColor="#C83737" />
      </linearGradient>
    </defs>

    {/* Ancient Cherry Tree Branch */}
    <path
      d="M0 40 Q70 70 110 140 Q140 210 130 300 Q120 360 140 420"
      stroke="#3A1510"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M70 95 Q110 85 150 100"
      stroke="#3A1510"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M95 165 Q135 145 175 165"
      stroke="#3A1510"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M125 240 Q160 230 190 250"
      stroke="#3A1510"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Lush 5-Petal Blossoms */}
    {[
      { cx: 90, cy: 80, r: 20 },
      { cx: 145, cy: 100, r: 16 },
      { cx: 120, cy: 145, r: 18 },
      { cx: 165, cy: 165, r: 15 },
      { cx: 135, cy: 210, r: 17 },
      { cx: 180, cy: 250, r: 14 },
      { cx: 60, cy: 120, r: 12 },
      { cx: 110, cy: 180, r: 13 },
      { cx: 195, cy: 210, r: 11 },
    ].map((b, i) => (
      <g key={i}>
        {/* 5 Petals */}
        {[0, 72, 144, 216, 288].map((angle, pi) => {
          const rad = (angle * Math.PI) / 180;
          const px = b.cx + Math.cos(rad) * (b.r * 0.7);
          const py = b.cy + Math.sin(rad) * (b.r * 0.7);
          return (
            <circle
              key={pi}
              cx={px}
              cy={py}
              r={b.r * 0.55}
              fill="url(#sakuraGrad)"
              opacity="0.88"
            />
          );
        })}
        {/* Blossom Center & Gold Pistils */}
        <circle cx={b.cx} cy={b.cy} r={b.r * 0.3} fill="#C83737" opacity="0.9" />
        <circle cx={b.cx} cy={b.cy} r={b.r * 0.15} fill="#D4AF37" />
      </g>
    ))}
  </svg>
);

/* ── Traditional Japanese Red Seal / Inkan (Hanko) ──────── */
export const JapaneseSeal: React.FC<{
  className?: string;
  size?: number;
  text?: string;
}> = ({ className = "", size = 48, text = "祝" }) => (
  <div
    className={`inline-flex items-center justify-center rounded-lg border-2 border-torii bg-torii/15 p-1 select-none ${className}`}
    style={{ width: size, height: size }}
    title="Japanese Auspicious Seal"
    aria-hidden="true"
  >
    <div className="w-full h-full border border-torii/70 rounded flex items-center justify-center">
      <span className="font-serif text-torii-glow font-bold text-lg md:text-xl leading-none">
        {text}
      </span>
    </div>
  </div>
);

/* ── Japanese Cloud (Kumo) ──────────────────────────────── */
export const JapaneseCloud: React.FC<{
  className?: string;
  variant?: 1 | 2 | 3;
}> = ({ className = "", variant = 1 }) => {
  const clouds: Record<number, string> = {
    1: "M20 60 Q20 30 50 30 Q55 10 80 15 Q100 5 115 20 Q140 10 150 30 Q180 30 180 60 Z",
    2: "M10 50 Q10 25 35 25 Q40 8 60 12 Q75 2 88 15 Q105 8 112 25 Q135 25 135 50 Z",
    3: "M15 45 Q15 20 40 22 Q48 5 70 10 Q85 0 98 14 Q118 6 125 22 Q150 22 150 45 Z",
  };

  return (
    <svg
      viewBox="0 0 200 70"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d={clouds[variant]} fill="#D4AF37" opacity="0.18" />
      <path d={clouds[variant]} fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
};

/* ── Origami Crane (Orizuru) ────────────────────────────── */
export const OrigamiCrane: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 60 50"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M30 4 L4 35 L24 25 L30 46 L36 25 L56 35 Z"
      fill="#D4AF37"
      opacity="0.8"
    />
    <path d="M30 4 L24 25 L30 20 L36 25 Z" fill="#ECD599" opacity="0.9" />
    <path d="M4 35 L24 25 L18 31 Z" fill="#B08B23" opacity="0.75" />
    <path d="M56 35 L36 25 L42 31 Z" fill="#B08B23" opacity="0.75" />
    <line
      x1="30"
      y1="24"
      x2="30"
      y2="46"
      stroke="#D4AF37"
      strokeWidth="0.8"
      opacity="0.5"
    />
  </svg>
);

/* ── Royal Crown ────────────────────────────────────────── */
export const RoyalCrown: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 64 }) => (
  <svg
    width={size}
    height={size * 0.72}
    viewBox="0 0 100 72"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crownGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FAF5EC" />
        <stop offset="35%" stopColor="#D4AF37" />
        <stop offset="70%" stopColor="#ECD599" />
        <stop offset="100%" stopColor="#B08B23" />
      </linearGradient>
    </defs>
    {/* Crown Spikes */}
    <path
      d="M18 56 L12 20 L28 36 L50 10 L72 36 L88 20 L82 56 Z"
      fill="url(#crownGrad)"
      stroke="#B08B23"
      strokeWidth="1.2"
    />
    {/* Crown Base Band */}
    <rect x="16" y="54" width="68" height="10" rx="3" fill="#D4AF37" stroke="#9A2424" strokeWidth="0.8" />
    {/* Jewels */}
    <circle cx="50" cy="10" r="4.5" fill="#FAF5EC" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="12" cy="20" r="3.5" fill="#C83737" />
    <circle cx="88" cy="20" r="3.5" fill="#C83737" />
    <circle cx="28" cy="36" r="3" fill="#D4AF37" />
    <circle cx="72" cy="36" r="3" fill="#D4AF37" />
    <circle cx="50" cy="40" r="4" fill="#C83737" stroke="#FAF5EC" strokeWidth="0.8" />
    {/* Band Jewels */}
    <circle cx="32" cy="59" r="2.5" fill="#C83737" />
    <circle cx="50" cy="59" r="3" fill="#FAF5EC" />
    <circle cx="68" cy="59" r="2.5" fill="#C83737" />
  </svg>
);

/* ── Gold Star ──────────────────────────────────────────── */
export const GoldStar: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2L14.5 9L22 9.5L16.5 14L18 22L12 18L6 22L7.5 14L2 9.5L9.5 9Z"
      fill="#D4AF37"
      opacity="0.85"
    />
  </svg>
);

