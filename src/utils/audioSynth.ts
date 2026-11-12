/**
 * Elegant Web Audio API synthesizer for Aayansh's Birthday Celebration
 * Produces a warm, gentle, Japanese-inspired music-box / piano melody
 * with soft bells and pentatonic harmonies.
 * 0-byte download, instant playback, zero network dependency, seamless looping.
 */

class BirthdayMelodySynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private loopTimeout: number | null = null;
  private masterGain: GainNode | null = null;
  private activeNodes: Array<{ stop: (time?: number) => void }> = [];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Pentatonic & Japanese Insen/Hirajoshi inspired scale notes in Hz
  private readonly notes: Record<string, number> = {
    C3: 130.81,
    G3: 196.0,
    A3: 220.0,
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    G4: 392.0,
    A4: 440.0,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    G5: 783.99,
    A5: 880.0,
    C6: 1046.5,
  };

  private playTone(
    freq: number,
    startTime: number,
    duration: number,
    velocity: number = 0.3,
    type: "bell" | "soft" | "bass" = "soft"
  ) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (type === "bell") {
      osc.type = "sine";
      // Harmonic shimmer
      const overtone = this.ctx.createOscillator();
      const overtoneGain = this.ctx.createGain();
      overtone.type = "sine";
      overtone.frequency.setValueAtTime(freq * 2.756, startTime);
      overtoneGain.gain.setValueAtTime(velocity * 0.15, startTime);
      overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.7);

      overtone.connect(overtoneGain);
      overtoneGain.connect(this.masterGain);
      overtone.start(startTime);
      overtone.stop(startTime + duration);
      this.activeNodes.push(overtone);
    } else if (type === "bass") {
      osc.type = "triangle";
    } else {
      osc.type = "sine";
    }

    osc.frequency.setValueAtTime(freq, startTime);

    // Warm envelope
    const attack = type === "bell" ? 0.01 : 0.04;
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(velocity, startTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
    this.activeNodes.push(osc);
  }

  public play() {
    this.initContext();
    if (!this.ctx) return;

    this.isPlaying = true;

    // Create master gain for smooth fade-in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.28, this.ctx.currentTime + 1.2);
    this.masterGain.connect(this.ctx.destination);

    this.scheduleSequence();
  }

  private scheduleSequence() {
    if (!this.ctx || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const tempo = 0.55; // seconds per beat

    // Cheerful, graceful Japanese royal lullaby / birthday melody
    const sequence = [
      // Phrase 1: "Happy Birthday / Royal Welcome"
      { note: "C4", beat: 0, dur: 1.2, type: "bell" as const },
      { note: "C3", beat: 0, dur: 3.0, type: "bass" as const },
      { note: "E4", beat: 1, dur: 1.2, type: "soft" as const },
      { note: "G4", beat: 2, dur: 1.5, type: "bell" as const },
      { note: "A4", beat: 3, dur: 1.0, type: "soft" as const },
      { note: "G4", beat: 4, dur: 2.0, type: "bell" as const },
      { note: "G3", beat: 4, dur: 3.0, type: "bass" as const },

      // Phrase 2: Joyful ascent
      { note: "C5", beat: 6, dur: 1.5, type: "bell" as const },
      { note: "D5", beat: 7.5, dur: 0.8, type: "soft" as const },
      { note: "E5", beat: 8.5, dur: 1.5, type: "bell" as const },
      { note: "A3", beat: 8.5, dur: 3.0, type: "bass" as const },
      { note: "D5", beat: 10, dur: 1.0, type: "soft" as const },
      { note: "C5", beat: 11, dur: 2.2, type: "bell" as const },

      // Phrase 3: Gentle Japanese pentatonic chime
      { note: "G4", beat: 13, dur: 1.0, type: "soft" as const },
      { note: "A4", beat: 14, dur: 1.0, type: "bell" as const },
      { note: "C5", beat: 15, dur: 1.2, type: "soft" as const },
      { note: "E5", beat: 16, dur: 2.0, type: "bell" as const },
      { note: "C3", beat: 16, dur: 3.5, type: "bass" as const },
      { note: "G5", beat: 17.5, dur: 2.0, type: "bell" as const },
      { note: "E5", beat: 19.5, dur: 1.5, type: "soft" as const },
      { note: "D5", beat: 21, dur: 2.5, type: "bell" as const },
      { note: "G3", beat: 21, dur: 3.0, type: "bass" as const },

      // Phrase 4: Turning ONE celebratory resolution
      { note: "C5", beat: 23, dur: 1.0, type: "bell" as const },
      { note: "E5", beat: 24, dur: 1.0, type: "soft" as const },
      { note: "G5", beat: 25, dur: 1.5, type: "bell" as const },
      { note: "A5", beat: 26.5, dur: 1.8, type: "bell" as const },
      { note: "C6", beat: 28, dur: 2.5, type: "bell" as const },
      { note: "C3", beat: 28, dur: 4.0, type: "bass" as const },
      { note: "G5", beat: 30, dur: 2.0, type: "soft" as const },
      { note: "E5", beat: 31.5, dur: 2.5, type: "bell" as const },
      { note: "C5", beat: 33, dur: 4.0, type: "bell" as const },
    ];

    const totalDuration = 37 * tempo;

    sequence.forEach((item) => {
      const freq = this.notes[item.note];
      if (freq) {
        this.playTone(freq, now + item.beat * tempo, item.dur * tempo, 0.25, item.type);
      }
    });

    // Schedule next seamless loop
    this.loopTimeout = window.setTimeout(() => {
      if (this.isPlaying) {
        this.scheduleSequence();
      }
    }, totalDuration * 1000 - 100);
  }

  public stop() {
    this.isPlaying = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => {
        this.activeNodes.forEach((node) => {
          try {
            node.stop();
          } catch {
            // Already stopped
          }
        });
        this.activeNodes = [];
      }, 900);
    }
  }

  public getPlaying() {
    return this.isPlaying;
  }
}

export const birthdaySynth = new BirthdayMelodySynth();

