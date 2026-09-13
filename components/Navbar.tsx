"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Music, Volume2, VolumeX, Heart } from "lucide-react";

interface NavbarProps {
  isPlaying?: boolean;
  toggleAudio?: () => void;
}

export default function Navbar({ isPlaying = false, toggleAudio }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Schedule", href: "#schedule" },
    { name: "Sikh Culture", href: "#culture" },
    { name: "Travel & Stay", href: "#travel" },
    { name: "Sagan & Registry", href: "#registry" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-sm"
          : "bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="#"
          className="group flex items-center space-x-2 text-charcoal hover:text-heritage transition-colors"
        >
          <div className="w-9 h-9 rounded-full border border-champagne flex items-center justify-center bg-surface/80 group-hover:border-heritage transition-colors">
            <span className="font-serif italic font-medium text-lg tracking-wider text-heritage">
              R&P
            </span>
          </div>
          <span className="hidden sm:inline font-serif tracking-widest text-sm uppercase text-charcoal/80 font-medium">
            Rani & Pavin
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-charcoal/80 hover:text-heritage transition-colors font-medium relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions (Music Toggle + RSVP CTA) */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-champagne/70 bg-surface/70 hover:bg-surface text-xs text-charcoal transition-all shadow-xs"
              title={isPlaying ? "Mute Background Music" : "Play Kangna (Acoustic Mix)"}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-heritage" />
                  <span className="hidden lg:inline text-[11px] uppercase tracking-wider text-heritage font-medium">
                    Playing Music
                  </span>
                  <div className="flex items-center space-x-0.5 ml-1">
                    <span className="w-0.5 h-3 bg-heritage animate-equalizer-1" />
                    <span className="w-0.5 h-2.5 bg-heritage animate-equalizer-2" />
                    <span className="w-0.5 h-3 bg-heritage animate-equalizer-3" />
                  </div>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-mutedText" />
                  <span className="hidden lg:inline text-[11px] uppercase tracking-wider text-mutedText">
                    Sound Off
                  </span>
                </>
              )}
            </button>
          )}

          <a
            href="#rsvp"
            className="px-4 sm:px-5 py-2 rounded-full bg-heritage text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-heritage-light transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-1.5"
          >
            <span>RSVP</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-heritage transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-borderLight mt-3 px-6 py-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-charcoal hover:text-heritage py-2 border-b border-borderLight/40 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-heritage text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-heritage-light"
            >
              Soft RSVP & Address
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
