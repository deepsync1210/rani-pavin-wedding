import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-borderLight py-16 px-4 sm:px-6 lg:px-8 text-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Monogram */}
        <div className="w-14 h-14 rounded-full border-2 border-champagne bg-white flex items-center justify-center mb-6 shadow-xs">
          <span className="font-serif italic font-medium text-2xl tracking-widest text-navy">
            R&amp;P
          </span>
        </div>

        {/* Names */}
        <h3 className="heading-display text-2xl sm:text-3xl text-charcoal font-normal tracking-wide">
          Rani Kaur Sidhu &amp; Pavin Singh Virdee
        </h3>

        <p className="font-serif text-sm sm:text-base text-mutedText italic mt-1 mb-4">
          June 19, 2027 &bull; San Jose, California
        </p>

        {/* Wedding Hashtag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-borderLight text-xs tracking-widest uppercase text-navy font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          <span>#Pani2027</span>
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
        </div>

        {/* Anchor Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-charcoal/70 mb-10 font-medium">
          <a href="#story" className="hover:text-navy transition-colors">Our Story</a>
          <a href="#schedule" className="hover:text-navy transition-colors">Schedule</a>
          <a href="#culture" className="hover:text-navy transition-colors">Sikh Culture</a>
          <a href="#travel" className="hover:text-navy transition-colors">Travel</a>
          <a href="#registry" className="hover:text-navy transition-colors">Shagun &amp; Registry</a>
          <a href="#rsvp" className="hover:text-navy transition-colors">RSVP</a>
        </nav>

        <div className="gold-divider w-32 mx-auto mb-8 opacity-60" />

        {/* Copyright */}
        <p className="text-[11px] text-mutedText font-light flex items-center space-x-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-champagne fill-champagne inline" />
          <span>for Rani &amp; Pavin&apos;s Wedding &bull; All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
