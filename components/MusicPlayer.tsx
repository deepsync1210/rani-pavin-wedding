"use client";

/**
 * MusicPlayer Component — Ambient Background Audio Controller (Headless)
 * 
 * Track: Ishq Hua - Ikky
 * Embedded Audio: /audio/ishq_hua_ikky.mp3
 * 
 * Behavior:
 * - Automatically attempts audio playback on page load.
 * - Attaches interactive listeners (click, touch, scroll) to initiate playback seamlessly
 *   if strict browser autoplay policies intercept the initial unmuted load.
 * - Syncs playing state directly with the Navbar sound controller (mute/unmute).
 * - No intrusive floating badges or hovering overlays.
 */

import { useEffect, useRef } from "react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync component state with audio element when toggled from Navbar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      if (audio.paused) {
        audio.play().catch((err) => {
          console.log("Audio play request deferred:", err);
        });
      }
    } else {
      if (!audio.paused) {
        audio.pause();
      }
    }
  }, [isPlaying]);

  // Attempt initial autoplay + first user gesture fallback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    let hasStarted = false;

    const startPlayback = () => {
      if (!hasStarted && audio.paused) {
        audio
          .play()
          .then(() => {
            hasStarted = true;
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay waiting for user interaction:", err);
          });
      }
    };

    // 1. Attempt immediate autoplay
    startPlayback();

    // 2. If autoplay policy blocks, start on first user interaction anywhere on page
    const events = ["click", "touchstart", "scroll", "keydown"];
    const handleFirstGesture = () => {
      startPlayback();
      events.forEach((evt) => window.removeEventListener(evt, handleFirstGesture));
    };

    events.forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { once: true, passive: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };
  }, [setIsPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/audio/ishq_hua_ikky.mp3"
      loop
      preload="auto"
      className="hidden"
      aria-hidden="true"
    />
  );
}
