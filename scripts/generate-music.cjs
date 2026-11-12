// Generate a gentle birthday melody as WAV file
// Using simple sine wave synthesis

const fs = require('fs');
const path = require('path');

const SAMPLE_RATE = 44100;
const DURATION = 45; // seconds
const CHANNELS = 1;
const BITS_PER_SAMPLE = 16;

function generateSample(t, freq, volume = 0.3) {
  return Math.sin(2 * Math.PI * freq * t) * volume;
}

// Piano-like envelope
function envelope(t, noteStart, noteDuration) {
  const elapsed = t - noteStart;
  if (elapsed < 0 || elapsed > noteDuration) return 0;
  
  const attack = 0.02;
  const decay = 0.1;
  const sustain = 0.6;
  const release = noteDuration * 0.3;
  
  if (elapsed < attack) return elapsed / attack;
  if (elapsed < attack + decay) return 1 - (1 - sustain) * ((elapsed - attack) / decay);
  if (elapsed < noteDuration - release) return sustain;
  return sustain * (1 - (elapsed - (noteDuration - release)) / release);
}

// Note frequencies (octave 4-5)
const notes = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00,
  C3: 130.81, E3: 164.81, G3: 196.00, A3: 220.00, F3: 174.61, D3: 146.83, B3: 246.94,
};

// A gentle, cheerful melody with Japanese-inspired pentatonic elements
// Using a mix of major and pentatonic scale
const melody = [
  // Intro - gentle arpeggios (Japanese-inspired pentatonic: C D E G A)
  { note: 'C5', start: 0.0, dur: 0.6 },
  { note: 'E5', start: 0.5, dur: 0.6 },
  { note: 'G5', start: 1.0, dur: 0.8 },
  { note: 'E5', start: 1.7, dur: 0.5 },
  { note: 'C5', start: 2.2, dur: 0.8 },
  
  // Theme 1 - cheerful birthday melody
  { note: 'C5', start: 3.5, dur: 0.4 },
  { note: 'D5', start: 3.9, dur: 0.4 },
  { note: 'E5', start: 4.3, dur: 0.6 },
  { note: 'C5', start: 5.0, dur: 0.4 },
  { note: 'E5', start: 5.4, dur: 0.4 },
  { note: 'G5', start: 5.8, dur: 0.8 },
  
  { note: 'A5', start: 6.8, dur: 0.4 },
  { note: 'G5', start: 7.2, dur: 0.4 },
  { note: 'E5', start: 7.6, dur: 0.6 },
  { note: 'D5', start: 8.4, dur: 0.4 },
  { note: 'C5', start: 8.8, dur: 0.8 },
  
  // Theme 2 - warm melody
  { note: 'G4', start: 10.0, dur: 0.5 },
  { note: 'A4', start: 10.5, dur: 0.5 },
  { note: 'C5', start: 11.0, dur: 0.7 },
  { note: 'D5', start: 11.8, dur: 0.5 },
  { note: 'E5', start: 12.3, dur: 0.8 },
  
  { note: 'E5', start: 13.3, dur: 0.4 },
  { note: 'D5', start: 13.7, dur: 0.4 },
  { note: 'C5', start: 14.1, dur: 0.6 },
  { note: 'A4', start: 14.8, dur: 0.4 },
  { note: 'G4', start: 15.2, dur: 0.8 },
  
  // Bridge - bell-like tones  
  { note: 'C5', start: 16.5, dur: 1.0 },
  { note: 'E5', start: 17.2, dur: 1.0 },
  { note: 'G5', start: 17.9, dur: 1.2 },
  { note: 'A5', start: 18.8, dur: 1.0 },
  { note: 'G5', start: 19.6, dur: 0.8 },
  
  // Return to theme
  { note: 'E5', start: 20.8, dur: 0.5 },
  { note: 'D5', start: 21.3, dur: 0.5 },
  { note: 'C5', start: 21.8, dur: 0.7 },
  { note: 'G4', start: 22.6, dur: 0.4 },
  { note: 'A4', start: 23.0, dur: 0.5 },
  { note: 'C5', start: 23.5, dur: 0.8 },
  
  // Gentle repeat with variations
  { note: 'E5', start: 24.8, dur: 0.5 },
  { note: 'G5', start: 25.3, dur: 0.5 },
  { note: 'A5', start: 25.8, dur: 0.8 },
  { note: 'G5', start: 26.8, dur: 0.5 },
  { note: 'E5', start: 27.3, dur: 0.5 },
  { note: 'C5', start: 27.8, dur: 0.8 },
  
  // Pentatonic phrase
  { note: 'C5', start: 29.0, dur: 0.4 },
  { note: 'D5', start: 29.4, dur: 0.4 },
  { note: 'E5', start: 29.8, dur: 0.4 },
  { note: 'G5', start: 30.2, dur: 0.4 },
  { note: 'A5', start: 30.6, dur: 0.8 },
  { note: 'G5', start: 31.6, dur: 0.6 },
  { note: 'E5', start: 32.2, dur: 0.8 },
  
  // Gentle descent
  { note: 'D5', start: 33.2, dur: 0.5 },
  { note: 'C5', start: 33.7, dur: 0.5 },
  { note: 'A4', start: 34.2, dur: 0.6 },
  { note: 'G4', start: 34.8, dur: 0.8 },
  
  // Outro
  { note: 'C5', start: 36.0, dur: 0.6 },
  { note: 'E5', start: 36.5, dur: 0.6 },
  { note: 'G5', start: 37.0, dur: 1.0 },
  { note: 'C5', start: 38.2, dur: 0.5 },
  { note: 'E5', start: 38.7, dur: 0.5 },
  { note: 'G5', start: 39.2, dur: 0.8 },
  { note: 'A5', start: 40.0, dur: 1.0 },
  { note: 'G5', start: 41.2, dur: 1.0 },
  { note: 'E5', start: 42.2, dur: 1.0 },
  { note: 'C5', start: 43.2, dur: 1.8 },
];

// Bass/chord accompaniment
const bass = [
  { note: 'C3', start: 0.0, dur: 3.0 },
  { note: 'C3', start: 3.5, dur: 1.5 },
  { note: 'G3', start: 5.0, dur: 1.5 },
  { note: 'A3', start: 6.5, dur: 1.5 },
  { note: 'F3', start: 8.0, dur: 1.5 },
  { note: 'C3', start: 10.0, dur: 1.5 },
  { note: 'D3', start: 11.5, dur: 1.5 },
  { note: 'E3', start: 13.0, dur: 1.5 },
  { note: 'C3', start: 14.5, dur: 1.5 },
  { note: 'C3', start: 16.5, dur: 2.0 },
  { note: 'G3', start: 18.5, dur: 2.0 },
  { note: 'C3', start: 20.8, dur: 1.5 },
  { note: 'F3', start: 22.3, dur: 1.5 },
  { note: 'C3', start: 24.0, dur: 1.5 },
  { note: 'G3', start: 25.5, dur: 1.5 },
  { note: 'A3', start: 27.0, dur: 1.5 },
  { note: 'C3', start: 29.0, dur: 2.0 },
  { note: 'G3', start: 31.0, dur: 2.0 },
  { note: 'F3', start: 33.0, dur: 2.0 },
  { note: 'C3', start: 35.0, dur: 2.0 },
  { note: 'C3', start: 36.0, dur: 2.0 },
  { note: 'G3', start: 38.0, dur: 2.0 },
  { note: 'C3', start: 40.0, dur: 5.0 },
];

const totalSamples = SAMPLE_RATE * DURATION;
const buffer = Buffer.alloc(totalSamples * 2); // 16-bit

for (let i = 0; i < totalSamples; i++) {
  const t = i / SAMPLE_RATE;
  let sample = 0;
  
  // Melody - piano-like sound (fundamental + harmonics)
  for (const n of melody) {
    const freq = notes[n.note];
    const env = envelope(t, n.start, n.dur);
    if (env > 0) {
      sample += generateSample(t, freq, 0.25) * env;
      sample += generateSample(t, freq * 2, 0.08) * env; // 2nd harmonic
      sample += generateSample(t, freq * 3, 0.03) * env; // 3rd harmonic
    }
  }
  
  // Bass - soft pad sound
  for (const n of bass) {
    const freq = notes[n.note];
    const env = envelope(t, n.start, n.dur);
    if (env > 0) {
      sample += generateSample(t, freq, 0.12) * env;
      sample += generateSample(t, freq * 2, 0.04) * env;
    }
  }
  
  // Gentle ambient pad (C major chord, very soft)
  const padVolume = 0.03;
  const padEnv = Math.min(t / 2, 1) * Math.min((DURATION - t) / 3, 1);
  sample += generateSample(t, notes.C4, padVolume) * padEnv;
  sample += generateSample(t, notes.E4, padVolume * 0.7) * padEnv;
  sample += generateSample(t, notes.G4, padVolume * 0.5) * padEnv;
  
  // Soft bell shimmer every few seconds
  const bellInterval = 4.5;
  const bellPhase = t % bellInterval;
  if (bellPhase < 1.5) {
    const bellEnv = Math.exp(-bellPhase * 3) * 0.06;
    sample += generateSample(t, notes.C5 * 2, bellEnv);
    sample += generateSample(t, notes.E5 * 2, bellEnv * 0.5);
  }
  
  // Global fade in/out
  const fadeIn = Math.min(t / 2, 1);
  const fadeOut = Math.min((DURATION - t) / 3, 1);
  sample *= fadeIn * fadeOut;
  
  // Clamp and write
  sample = Math.max(-1, Math.min(1, sample));
  const intSample = Math.round(sample * 32767);
  buffer.writeInt16LE(intSample, i * 2);
}

// Write WAV file
const dataSize = buffer.length;
const fileSize = 44 + dataSize;
const header = Buffer.alloc(44);

header.write('RIFF', 0);
header.writeUInt32LE(fileSize - 8, 4);
header.write('WAVE', 8);
header.write('fmt ', 12);
header.writeUInt32LE(16, 16); // chunk size
header.writeUInt16LE(1, 20); // PCM
header.writeUInt16LE(CHANNELS, 22);
header.writeUInt32LE(SAMPLE_RATE, 24);
header.writeUInt32LE(SAMPLE_RATE * CHANNELS * BITS_PER_SAMPLE / 8, 28);
header.writeUInt16LE(CHANNELS * BITS_PER_SAMPLE / 8, 32);
header.writeUInt16LE(BITS_PER_SAMPLE, 34);
header.write('data', 36);
header.writeUInt32LE(dataSize, 40);

const outputPath = path.join(__dirname, '..', 'public', 'audio', 'birthday-music.wav');
fs.writeFileSync(outputPath, Buffer.concat([header, buffer]));
console.log(`Generated ${outputPath} (${(fileSize / 1024 / 1024).toFixed(1)} MB, ${DURATION}s)`);
