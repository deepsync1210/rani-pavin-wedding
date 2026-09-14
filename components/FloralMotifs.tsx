import React from "react";

/**
 * FloralMotifs Component Library — Authentic Sikh & Indian Wedding Aesthetics
 * 
 * Features:
 * - TapestryWatermark: Authentic Mughal Jaali (jali trellis lattice) pattern tiled across backgrounds.
 * - LotusMotif: Ornate multi-petaled royal Indian wedding lotus flower in warm gold.
 * - GarlandFlourish: Symmetrical ornamental wedding garland with floral scrollwork and buds.
 * - CornerFiligree: Architectural jali filigree for luxury card corners.
 */

// SVG Mughal Jaali Trellis Pattern as tileable background
export function TapestryWatermark({ className = "" }: { className?: string }) {
  // Seamless repeating 60x60 Mughal arch trellis lattice
  const jaaliSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 C30 15 15 30 0 30 C15 30 30 45 30 60 C30 45 45 30 60 30 C45 30 30 15 30 0 Z' fill='none' stroke='%23C5A880' stroke-width='0.9' stroke-opacity='0.28'/%3E%3Cpath d='M30 14 C33 23 37 27 46 30 C37 33 33 37 30 46 C27 37 23 33 14 30 C23 27 27 23 30 14 Z' fill='%23C5A880' fill-opacity='0.08' stroke='%23C5A880' stroke-width='0.75' stroke-opacity='0.22'/%3E%3Ccircle cx='30' cy='30' r='2.5' fill='%23C5A880' fill-opacity='0.35'/%3E%3Ccircle cx='0' cy='0' r='1.5' fill='%23C5A880' fill-opacity='0.2'/%3E%3Ccircle cx='60' cy='0' r='1.5' fill='%23C5A880' fill-opacity='0.2'/%3E%3Ccircle cx='0' cy='60' r='1.5' fill='%23C5A880' fill-opacity='0.2'/%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%23C5A880' fill-opacity='0.2'/%3E%3C/svg%3E")`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{
        backgroundImage: jaaliSvg,
        backgroundRepeat: "repeat",
        backgroundSize: "60px 60px",
      }}
      aria-hidden="true"
    />
  );
}

// Ornate blooming Indian wedding lotus
export function LotusMotif({ className = "w-7 h-7 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer base leaves */}
      <path
        d="M10 46C18 52 46 52 54 46C46 44 38 43 32 46C26 43 18 44 10 46Z"
        fill="currentColor"
        fillOpacity="0.45"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Outer Left Petal */}
      <path
        d="M14 42C12 32 18 24 24 20C21 28 22 36 26 41C21 42 17 42 14 42Z"
        fill="currentColor"
        fillOpacity="0.35"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Outer Right Petal */}
      <path
        d="M50 42C52 32 46 24 40 20C43 28 42 36 38 41C43 42 47 42 50 42Z"
        fill="currentColor"
        fillOpacity="0.35"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Mid Left Petal */}
      <path
        d="M22 39C20 28 25 18 30 14C28 23 29 32 32 38C28 39 25 39 22 39Z"
        fill="currentColor"
        fillOpacity="0.65"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Mid Right Petal */}
      <path
        d="M42 39C44 28 39 18 34 14C36 23 35 32 32 38C36 39 39 39 42 39Z"
        fill="currentColor"
        fillOpacity="0.65"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Center Crown Petal */}
      <path
        d="M32 8C29 16 29 27 32 37C35 27 35 16 32 8Z"
        fill="currentColor"
        fillOpacity="0.9"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Lotus Pollen Seed Center */}
      <circle cx="32" cy="41" r="2.5" fill="#FAF8F5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Elegant wedding floral garland flourish with scrollwork
export function GarlandFlourish({ className = "w-56 h-6 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Lotus Jewel */}
      <path
        d="M120 4C118 9 118 15 120 20C122 15 122 9 120 4Z"
        fill="currentColor"
      />
      <path
        d="M116 10C113 14 114 18 118 19C117 16 117 13 116 10Z"
        fill="currentColor"
        fillOpacity="0.75"
      />
      <path
        d="M124 10C127 14 126 18 122 19C123 16 123 13 124 10Z"
        fill="currentColor"
        fillOpacity="0.75"
      />
      <circle cx="120" cy="22" r="2" fill="currentColor" />

      {/* Left Tendril Scroll */}
      <path
        d="M114 16C95 16 88 7 68 12C48 17 38 10 18 14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M86 11C88 8 93 8 94 11C93 14 88 14 86 11Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M52 14C54 17 59 17 60 14C59 11 54 11 52 14Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <circle cx="15" cy="14" r="1.75" fill="currentColor" />

      {/* Right Tendril Scroll */}
      <path
        d="M126 16C145 16 152 7 172 12C192 17 202 10 222 14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M154 11C152 8 147 8 146 11C147 14 152 14 154 11Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M188 14C186 17 181 17 180 14C181 11 186 11 188 14Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <circle cx="225" cy="14" r="1.75" fill="currentColor" />
    </svg>
  );
}

// Ornate Corner Filigree
export function CornerFiligree({ className = "w-8 h-8 text-champagne/70" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 44V16C4 9.37258 9.37258 4 16 4H44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 40V18C8 12.4772 12.4772 8 18 8H40"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" fillOpacity="0.75" />
      <path d="M16 6C18.5 10 22 11 26 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 16C10 18.5 11 22 11 26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
