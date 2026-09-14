"use client";

/**
 * HeroSection Component — Editorial Wedding Announcement & Live Countdown
 * 
 * Updates based on user feedback:
 * - Added sacred Gurmukhi wedding blessing ("ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ • ਏਕ ਜੋਤਿ ਦੁਇ ਮੂਰਤੀ") with English translation.
 * - Updated location to "San Jose, California".
 * - Updated color palette: Midnight Navy, Champagne Gold, Soft Blush Pink, and Alabaster White.
 * - Enriched ornamental tapestry accents and background photo styling.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, ChevronDown, Heart, Sparkles } from "lucide-react";
import { LotusMotif, GarlandFlourish, CornerFiligree, TapestryWatermark } from "./FloralMotifs";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  // Wedding Date: June 19, 2027 09:30:00 PST (San Jose, CA)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const targetDate = new Date("2027-06-19T09:30:00-07:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 isolate">
      {/* Editorial Background Photography with Warm Luxury Rose-Blush & Alabaster Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero_proposal.jpg"
          alt="Rani Sidhu & Pavin Virdee"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-[0.96] contrast-[1.04]"
        />
        {/* Soft, luminous editorial overlays that keep the couple vividly visible */}
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        {/* Subtle romantic blush warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blush/15 via-transparent to-blush/15 pointer-events-none" />
        <TapestryWatermark className="opacity-30" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Save The Date Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-champagne/80 bg-white/90 backdrop-blur-md mb-6 animate-fade-in shadow-xs">
          <Heart className="w-3.5 h-3.5 text-champagne fill-champagne/30" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-navy">
            Save The Date • Anand Karaj &amp; Reception
          </span>
        </div>

        {/* Primary Couple Names */}
        <h1 className="heading-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal font-light tracking-tight mb-3">
          Rani Sidhu <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-champagne-dark px-2 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            &amp;
          </span>
          Pavin Virdee
        </h1>

        {/* Sacred Gurmukhi Inscription & Floral Flourish */}
        <div className="max-w-2xl mx-auto mb-8 flex flex-col items-center animate-fade-in">
          <div className="flex items-center space-x-3 mb-2">
            <LotusMotif className="w-7 h-7 sm:w-8 sm:h-8 text-champagne" />
            <span className="text-base sm:text-lg font-serif tracking-[0.25em] text-champagne-dark font-medium">
              ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ
            </span>
            <LotusMotif className="w-7 h-7 sm:w-8 sm:h-8 text-champagne" />
          </div>
          <p className="text-xs sm:text-sm font-serif italic text-navy/90 tracking-wider">
            ਏਕ ਜੋਤਿ ਦੁਇ ਮੂਰਤੀ &bull; One Light in Two Bodies
          </p>
          <GarlandFlourish className="w-48 sm:w-64 h-6 text-champagne/85 mt-2.5" />
        </div>

        {/* Date & Exact Location Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-charcoal/85 font-medium mb-10">
          <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-borderLight shadow-2xs">
            <Calendar className="w-4 h-4 text-navy" />
            <span className="tracking-wide">Saturday, June 19, 2027</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-borderLight shadow-2xs">
            <MapPin className="w-4 h-4 text-navy" />
            <span className="tracking-wide">San Jose, California</span>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="relative w-full max-w-xl bg-surface/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-champagne/70 shadow-sm mb-10 overflow-hidden">
          <CornerFiligree className="absolute top-2.5 left-2.5 w-8 h-8 text-champagne/60 pointer-events-none" />
          <CornerFiligree className="absolute top-2.5 right-2.5 w-8 h-8 text-champagne/60 pointer-events-none rotate-90" />
          <CornerFiligree className="absolute bottom-2.5 left-2.5 w-8 h-8 text-champagne/60 pointer-events-none -rotate-90" />
          <CornerFiligree className="absolute bottom-2.5 right-2.5 w-8 h-8 text-champagne/60 pointer-events-none rotate-180" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-mutedText font-semibold mb-4 text-center">
            Countdown to the Big Day
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: "Days", value: isClient ? timeLeft.days : "—" },
              { label: "Hours", value: isClient ? timeLeft.hours : "—" },
              { label: "Minutes", value: isClient ? timeLeft.minutes : "—" },
              { label: "Seconds", value: isClient ? timeLeft.seconds : "—" },
            ].map((unit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white/95 rounded-2xl p-3 sm:p-4 border border-borderLight/80 shadow-2xs"
              >
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-navy tracking-tight">
                  {typeof unit.value === "number"
                    ? String(unit.value).padStart(2, "0")
                    : unit.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-mutedText mt-1 font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#rsvp"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-navy text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
          >
            Soft RSVP &amp; Address
          </a>
          <a
            href="#schedule"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/90 text-charcoal border border-borderLight text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:border-champagne transition-all duration-300 shadow-xs text-center"
          >
            Explore Schedule
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <a
            href="#story"
            className="p-2 text-charcoal/60 hover:text-navy transition-colors inline-block"
            aria-label="Scroll to Our Story"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
