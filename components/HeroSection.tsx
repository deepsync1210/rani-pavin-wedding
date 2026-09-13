"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, ChevronDown, Heart } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  // Wedding Date: June 19, 2027 09:00:00 PST (San Jose, CA)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const targetDate = new Date("2027-06-19T08:30:00-07:00").getTime();

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6">
      {/* Editorial Background Image with Luxury Warm Vignette */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero_proposal.jpg"
          alt="Rani Sidhu & Pavin Virdee"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 filter brightness-[0.92] contrast-[1.03]"
        />
        {/* Editorial Gradients & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
        <div className="absolute inset-0 bg-heritage/20 mix-blend-multiply" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-champagne/80 bg-surface/85 backdrop-blur-md mb-6 animate-fade-in shadow-xs">
          <Heart className="w-3.5 h-3.5 text-champagne fill-champagne/30" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-heritage">
            Save The Date • Anand Karaj & Reception
          </span>
        </div>

        {/* Primary Names */}
        <h1 className="heading-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal font-light tracking-tight mb-4">
          Rani Sidhu <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-champagne-dark px-2 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            &
          </span>
          Pavin Virdee
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-2xl md:text-3xl text-charcoal/90 italic font-light max-w-2xl mx-auto mb-8">
          Celebrating the Union of Two Families
        </p>

        {/* Date & Location Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-charcoal/80 font-medium mb-12">
          <div className="flex items-center space-x-2 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-borderLight shadow-2xs">
            <Calendar className="w-4 h-4 text-heritage" />
            <span className="tracking-wide">Saturday, June 19, 2027</span>
          </div>
          <div className="flex items-center space-x-2 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-borderLight shadow-2xs">
            <MapPin className="w-4 h-4 text-heritage" />
            <span className="tracking-wide">San Jose & The Bay Area, California</span>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-xl bg-surface/80 backdrop-blur-md rounded-2xl p-6 border border-champagne/50 shadow-sm mb-10">
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
                className="flex flex-col items-center justify-center bg-background/90 rounded-xl p-3 sm:p-4 border border-borderLight"
              >
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-heritage tracking-tight">
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-heritage text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-heritage-light transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
          >
            Soft RSVP & Address
          </a>
          <a
            href="#schedule"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-surface/90 text-charcoal border border-borderLight text-xs uppercase tracking-[0.2em] font-medium hover:bg-surface hover:border-champagne transition-all duration-300 shadow-xs text-center"
          >
            Explore Schedule
          </a>
        </div>

        {/* Down Indicator */}
        <div className="mt-14 animate-bounce">
          <a
            href="#story"
            className="p-2 text-charcoal/60 hover:text-heritage transition-colors inline-block"
            aria-label="Scroll to Our Story"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
