"use client";

/**
 * MusicPlayer Component — Ambient Background Audio Controller
 * 
 * Track: Babe Bhangra Paunde Ne - Gurdas Maan
 * Embedded MP3: /audio/babe_bhangra_pounde_ne.mp3
 * 
 * Features:
 * - Attempts audio playback on page load with fallback to first user click/touch.
 * - Persistent floating audio pill with animated equalizer bars.
 * - One-click play/pause and volume controls.
 */

import { useState, useEffect, useRef } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip after 7 seconds
    const t = setTimeout(() => setShowTooltip(false), 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Attempt autoplay or listen for first user interaction (click/touch/scroll)
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const startAudio = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Browser autoplay policy prevented immediate playback:", err);
          });
      }
    };

    // Try immediate playback
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      })
      .catch(() => {
        // Fallback: wait for first interaction
        window.addEventListener("click", startAudio, { once: true });
        window.addEventListener("touchstart", startAudio, { once: true });
      });

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
    };
  }, [hasInteracted, setIsPlaying]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  return (
    <>
      {/* Embedded HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/babe_bhangra_pounde_ne.mp3"
        loop
        preload="auto"
      />

      {/* Floating Bottom Music Bar */}
      <div className="fixed bottom-5 right-5 z-40 animate-fade-in">
        <div className="relative group">
          {/* Subtle tooltip hint for first-time visitors */}
          {showTooltip && (
            <div className="absolute -top-10 right-0 bg-heritage text-[#FAF8F5] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md whitespace-nowrap animate-bounce flex items-center space-x-1.5">
              <span>🎵 Tap to enjoy wedding music</span>
            </div>
          )}

          <div className="flex items-center space-x-3 bg-surface/95 backdrop-blur-md px-3.5 py-2.5 rounded-full border border-champagne/80 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayback}
              className="w-8 h-8 rounded-full bg-heritage text-[#FAF8F5] flex items-center justify-center hover:bg-heritage-light transition-colors shadow-xs"
              aria-label={isPlaying ? "Pause background music" : "Play background music"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            {/* Song Info */}
            <div className="flex flex-col pr-2">
              <span className="text-[11px] font-medium text-charcoal flex items-center space-x-1.5">
                <span>Babe Bhangra Paunde Ne</span>
                {isPlaying && (
                  <span className="flex items-center space-x-0.5">
                    <span className="w-0.5 h-2.5 bg-heritage animate-equalizer-1" />
                    <span className="w-0.5 h-3 bg-heritage animate-equalizer-2" />
                    <span className="w-0.5 h-2 bg-heritage animate-equalizer-3" />
                  </span>
                )}
              </span>
              <span className="text-[9px] text-mutedText uppercase tracking-wider">
                Gurdas Maan • Wedding Celebration
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
