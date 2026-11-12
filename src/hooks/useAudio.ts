import { useState, useCallback, useEffect, useRef } from "react";
import { birthdaySynth } from "../utils/audioSynth";
import { eventDetails } from "../data/event";

interface UseAudioReturn {
  isPlaying: boolean;
  toggle: () => void;
  isLoaded: boolean;
  hasError: boolean;
}

export function useAudio(): UseAudioReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const audio = new Audio(eventDetails.musicUrl);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";

    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });

    audio.addEventListener("error", () => {
      // If MP3 file has an issue, fallback is handled via synth
      setIsLoaded(true);
    });

    audioRef.current = audio;

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      audio.pause();
      audio.src = "";
      birthdaySynth.stop();
    };
  }, []);

  const fadeIn = useCallback((audio: HTMLAudioElement) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    audio.volume = 0;
    const targetVolume = 0.5;
    const step = 0.02;

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume + step >= targetVolume) {
        audio.volume = targetVolume;
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      } else {
        audio.volume += step;
      }
    }, 50);
  }, []);

  const fadeOut = useCallback((audio: HTMLAudioElement) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    const step = 0.03;

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume - step <= 0) {
        audio.volume = 0;
        audio.pause();
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      } else {
        audio.volume -= step;
      }
    }, 50);
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      if (audio && !audio.paused) {
        fadeOut(audio);
      }
      birthdaySynth.stop();
      setIsPlaying(false);
    } else {
      if (audio) {
        audio
          .play()
          .then(() => {
            fadeIn(audio);
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser blocks audio file playback or file missing, fallback to Web Audio Synth
            try {
              birthdaySynth.play();
              setIsPlaying(true);
            } catch {
              setHasError(true);
            }
          });
      } else {
        birthdaySynth.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying, fadeIn, fadeOut]);

  return { isPlaying, toggle, isLoaded, hasError };
}
