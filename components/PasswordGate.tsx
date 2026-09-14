"use client";

/**
 * PasswordGate Component
 * 
 * Provides an elegant, luxury wedding portal gate with passcode protection:
 * - Passcode: "matcha" (case-insensitive).
 * - Persists authentication for 30 days via cookies and localStorage.
 * - Supports instant auto-unlock via URL query parameter: ?pw=matcha
 *   (ideal for physical invitation QR codes).
 * - Matches the editorial Sikh luxury design language (Monogram, Gurmukhi, Navy & Blush).
 */

import React, { useState, useEffect } from "react";
import { Lock, Heart, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { LotusMotif, GarlandFlourish, TapestryWatermark } from "./FloralMotifs";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PASSCODE = "matcha";
const STORAGE_KEY = "rani_pavin_portal_auth";

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [inputPass, setInputPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 1. Check URL query parameters for ?pw=matcha (QR code direct unlock)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlPass = params.get("pw") || params.get("passcode") || params.get("password");
      if (urlPass && urlPass.toLowerCase() === PASSCODE) {
        unlockSession();
        return;
      }

      // 2. Check localStorage or document.cookie
      const savedAuth = localStorage.getItem(STORAGE_KEY);
      const hasCookie = document.cookie.includes("wedding_auth_token=matcha_verified");
      if (savedAuth === "true" || hasCookie) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
  }, []);

  const unlockSession = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "true");
      // Set cookie for 30 days
      const maxAge = 60 * 60 * 24 * 30;
      document.cookie = `wedding_auth_token=matcha_verified; path=/; max-age=${maxAge}; SameSite=Lax`;
    }
    setIsAuthenticated(true);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!inputPass.trim()) {
      setErrorMsg("Please enter the invitation passcode.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      if (inputPass.trim().toLowerCase() === PASSCODE) {
        unlockSession();
      } else {
        setErrorMsg("Incorrect passcode. Please check your invitation or message the couple.");
      }
      setIsSubmitting(false);
    }, 250);
  };

  // Prevent flash while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-champagne border-t-transparent animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Luxury Mughal Jaali Tapestry Background */}
      <TapestryWatermark className="opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-t from-blush/25 via-transparent to-surface/40 pointer-events-none" />

      {/* Main Gate Card */}
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-champagne/60 shadow-xl text-center z-10 animate-fade-in">
        {/* Monogram Crest */}
        <div className="w-16 h-16 rounded-full bg-surface border border-champagne/70 mx-auto flex items-center justify-center shadow-xs mb-5">
          <span className="font-serif text-2xl font-bold tracking-widest text-navy">
            R<span className="text-champagne font-light">&amp;</span>P
          </span>
        </div>

        {/* Sacred Gurmukhi Inscription */}
        <div className="mb-3">
          <p className="text-xs font-serif tracking-[0.2em] text-champagne-dark font-semibold">
            ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ
          </p>
          <p className="text-[11px] font-serif italic text-navy/80">
            ਏਕ ਜੋਤਿ ਦੁਇ ਮੂਰਤੀ &bull; One Light in Two Bodies
          </p>
        </div>

        <GarlandFlourish className="w-36 h-5 mx-auto text-champagne/80 mb-4" />

        {/* Names & Event */}
        <h1 className="heading-display text-2xl sm:text-3xl text-charcoal font-normal tracking-wide mb-1">
          Rani &amp; Pavin
        </h1>
        <p className="text-xs font-serif italic text-mutedText mb-6">
          Saturday, June 19, 2027 &bull; San Jose, California
        </p>

        <div className="gold-divider w-16 mx-auto mb-6" />

        <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-6">
          Welcome to our wedding celebration portal. Please enter the passcode from your invitation to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleUnlock} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className="w-4 h-4 text-champagne-dark" />
            </div>
            <input
              type="password"
              autoFocus
              placeholder="Enter passcode (e.g. matcha)"
              value={inputPass}
              onChange={(e) => {
                setInputPass(e.target.value);
                setErrorMsg("");
              }}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-surface/60 border border-borderLight text-sm text-charcoal placeholder:text-mutedText/60 focus:outline-none focus:border-navy focus:bg-white transition-all text-center tracking-widest font-mono"
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-600 bg-rose-50 border border-rose-200 rounded-xl py-2 px-3 animate-fade-in font-light">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-2xl bg-navy text-white text-xs uppercase tracking-widest font-semibold hover:bg-navy-light transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
          >
            <span>{isSubmitting ? "Verifying..." : "Enter Wedding Portal"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-champagne" />
          </button>
        </form>

        {/* Discreet Help Note */}
        <div className="mt-8 pt-5 border-t border-borderLight/60 flex items-center justify-center space-x-1.5 text-[11px] text-mutedText font-light">
          <ShieldCheck className="w-3.5 h-3.5 text-champagne-dark" />
          <span>Private guest portal &bull; RSVP &amp; Shagun Registry</span>
        </div>
      </div>
    </div>
  );
}
