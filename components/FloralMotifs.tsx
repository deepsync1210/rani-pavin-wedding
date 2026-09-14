import React from "react";

/**
 * FloralMotifs Component Library
 * 
 * Elegant SVG botanical and geometric ornaments tailored for luxury Sikh/Indian wedding design:
 * - LotusMotif: Sacred lotus blossom symbolizing beauty, devotion, and divine blessing.
 * - GarlandFlourish: Symmetrical ornamental flourish inspired by marigold/jasmine garlands.
 * - CornerFiligree: Delicate botanical corner flourish for luxury framing.
 * - TapestryWatermark: Subtle Mughal jaali / Indian wedding trellis lattice watermark.
 */

export function LotusMotif({ className = "w-6 h-6 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central Petal */}
      <path d="M24 6C24 6 28 16 28 24C28 29.52 26.21 34 24 34C21.79 34 20 29.52 20 24C20 16 24 6 24 6Z" opacity="0.95" />
      {/* Left Inner Petal */}
      <path d="M21 12C21 12 14 20 15 27C15.68 31.76 19.5 34 22 34C20.5 30 20 25 21 12Z" opacity="0.8" />
      {/* Right Inner Petal */}
      <path d="M27 12C27 12 34 20 33 27C32.32 31.76 28.5 34 26 34C27.5 30 28 25 27 12Z" opacity="0.8" />
      {/* Left Outer Petal */}
      <path d="M16 20C16 20 8 26 10 32C11.5 36.5 17 35.5 19 33.5C16.5 30.5 16 25 16 20Z" opacity="0.6" />
      {/* Right Outer Petal */}
      <path d="M32 20C32 20 40 26 38 32C36.5 36.5 31 35.5 29 33.5C31.5 30.5 32 25 32 20Z" opacity="0.6" />
      {/* Base Stem / Water Lily Base */}
      <path d="M12 36C18 39 30 39 36 36C38 37.5 34 40 24 40C14 40 10 37.5 12 36Z" opacity="0.75" />
      <circle cx="24" cy="22" r="1.5" fill="#FAF8F5" />
    </svg>
  );
}

export function GarlandFlourish({ className = "w-48 h-6 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left vine */}
      <path
        d="M10 12C35 12 45 4 65 12C85 20 90 12 100 12"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Left leaves */}
      <path d="M35 10C37 7 42 7 43 10C42 13 37 13 35 10Z" fill="currentColor" fillOpacity="0.4" />
      <path d="M70 14C72 17 77 17 78 14C77 11 72 11 70 14Z" fill="currentColor" fillOpacity="0.4" />
      
      {/* Center Floral Crest */}
      <circle cx="100" cy="12" r="2.5" fill="currentColor" />
      <circle cx="94" cy="12" r="1.5" fill="currentColor" fillOpacity="0.7" />
      <circle cx="106" cy="12" r="1.5" fill="currentColor" fillOpacity="0.7" />
      <path d="M100 6C99 8.5 98 10 100 12C102 10 101 8.5 100 6Z" fill="currentColor" />
      <path d="M100 18C99 15.5 98 14 100 12C102 14 101 15.5 100 18Z" fill="currentColor" />

      {/* Right vine */}
      <path
        d="M100 12C110 12 115 4 135 12C155 20 165 12 190 12"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Right leaves */}
      <path d="M122 14C124 17 129 17 130 14C129 11 124 11 122 14Z" fill="currentColor" fillOpacity="0.4" />
      <path d="M157 10C159 7 164 7 165 10C164 13 159 13 157 10Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

export function CornerFiligree({ className = "w-8 h-8 text-champagne/60" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 34V14C6 9.58172 9.58172 6 14 6H34"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.6" />
      <path d="M12 4C14 7 17 8 20 8" strokeWidth="1" strokeLinecap="round" />
      <path d="M4 12C7 14 8 17 8 20" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function TapestryWatermark() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply select-none"
      style={{
        backgroundImage: `radial-gradient(circle at 12px 12px, #162846 1.5px, transparent 0), radial-gradient(circle at 36px 36px, #C5A880 1.5px, transparent 0)`,
        backgroundSize: "48px 48px",
      }}
      aria-hidden="true"
    />
  );
}
