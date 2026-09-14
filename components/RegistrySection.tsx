"use client";

/**
 * RegistrySection Component — Traditional Shagun & Cash Registry
 * 
 * Updates based on user feedback:
 * - Corrected spelling from "Sagan" to "Shagun".
 * - Color palette: Midnight Navy, Gold, Cream, and Soft Blush.
 * - 1-Click copy for Venmo and Zelle with visual feedback.
 */

import { useState } from "react";
import { Heart, Copy, Check, ExternalLink, Sparkles, Home, Palmtree } from "lucide-react";

export default function RegistrySection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  return (
    <section id="registry" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-champagne mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-navy">
            Shagun &amp; Registry
          </span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
          Registry &amp; Blessings
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic leading-relaxed">
          Your presence, prayers, and heartfelt blessings on our wedding day are truly the greatest gift we could ask for.
        </p>
      </div>

      {/* Purpose Statement Card
      <div className="max-w-3xl mx-auto bg-surface/85 rounded-3xl p-6 sm:p-8 border border-borderLight shadow-xs text-center mb-16">
        <div className="w-12 h-12 rounded-full bg-white border border-champagne flex items-center justify-center mx-auto mb-4 text-navy">
          <Heart className="w-5 h-5 text-navy fill-navy/20" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
          A Note on Gifts &amp; Traditional Shagun
        </h3>
        <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed font-light mb-4">
          Because we have lived together and established our household, we kindly request no boxed gifts. In accordance with
          beloved Punjabi traditions, Shagun (monetary blessings) is customary and warmly welcomed.
        </p>
        <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed font-light">
          To bypass credit card processing surcharges and third-party fees, you may send your blessings directly
          via Venmo or Zelle below, or in person during the celebration.
        </p>
      </div> */}

      {/* Funds Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Fund 1: Honeymoon */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-sm flex flex-col justify-between hover:border-champagne transition-colors">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-surface border border-champagne/60 flex items-center justify-center mb-4 text-navy">
              <Palmtree className="w-6 h-6" />
            </div>
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold mb-1">
              Adventure Together
            </p>
            <h4 className="font-serif text-2xl font-medium text-charcoal mb-2">
              Honeymoon Adventure Fund
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light mb-6">
              Helping us create unforgettable memories on our first adventure as husband and wife.
            </p>
          </div>
          <div className="pt-4 border-t border-borderLight/60">
            <span className="text-xs text-navy font-medium">Contribute via Venmo or Zelle below</span>
          </div>
        </div>

        {/* Fund 2: New Home */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-sm flex flex-col justify-between hover:border-champagne transition-colors">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-surface border border-champagne/60 flex items-center justify-center mb-4 text-navy">
              <Home className="w-6 h-6" />
            </div>
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold mb-1">
              Building Our Future
            </p>
            <h4 className="font-serif text-2xl font-medium text-charcoal mb-2">
              New Home Foundation
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light mb-6">
              Supporting our long-term aspirations as we lay down permanent roots.
            </p>
          </div>
          <div className="pt-4 border-t border-borderLight/60">
            <span className="text-xs text-navy font-medium">Contribute via Venmo or Zelle below</span>
          </div>
        </div>
      </div>

      {/* Direct Payment Channels (Venmo & Zelle Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-center">
        {/* Venmo Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-borderLight shadow-sm flex flex-col justify-between">
          {/* Pavin's Venmo */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold text-[#008CFF] tracking-tight">Venmo</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-mutedText bg-surface px-2.5 py-1 rounded-full border border-borderLight">
                Zero Fees
              </span>
            </div>
            <p className="text-xs text-charcoal/80 mb-2">Send directly to Pavin&apos;s Venmo account:</p>
            <p className="font-mono text-sm font-semibold text-charcoal bg-[#FAF8F5] px-3 py-2 rounded-lg border border-borderLight select-all">
              @pavin_virdee
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://venmo.com/pavin_virdee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#008CFF] text-white text-xs uppercase tracking-wider font-medium text-center hover:bg-[#0070cc] transition-colors flex items-center justify-center space-x-1.5 shadow-2xs"
              >
                <span>Open Venmo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy("pavin_virdee", "Pavin's Venmo")}
                className="py-2.5 px-3 rounded-xl bg-surface border border-borderLight text-xs text-charcoal font-medium hover:bg-surface/80 transition-colors flex items-center space-x-1"
                title="Copy Pavin's Venmo Handle"
              >
                {copiedItem === "Pavin's Venmo" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-navy" />
                    <span className="text-navy font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-mutedText" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="border-t border-borderLight/80 my-4" />

          {/* Rani's Venmo */}
          <div>
            <p className="text-xs text-charcoal/80 mb-2">Send directly to Rani&apos;s Venmo account:</p>
            <p className="font-mono text-sm font-semibold text-charcoal bg-[#FAF8F5] px-3 py-2 rounded-lg border border-borderLight select-all">
              @ranisidhu
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://venmo.com/ranisidhu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#008CFF] text-white text-xs uppercase tracking-wider font-medium text-center hover:bg-[#0070cc] transition-colors flex items-center justify-center space-x-1.5 shadow-2xs"
              >
                <span>Open Venmo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy("ranisidhu", "Rani's Venmo")}
                className="py-2.5 px-3 rounded-xl bg-surface border border-borderLight text-xs text-charcoal font-medium hover:bg-surface/80 transition-colors flex items-center space-x-1"
                title="Copy Rani's Venmo Handle"
              >
                {copiedItem === "Rani's Venmo" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-navy" />
                    <span className="text-navy font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-mutedText" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Zelle Card — Vertically Centered alongside Venmo */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-borderLight shadow-sm md:self-center flex flex-col justify-center">
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold text-[#7414CA] tracking-tight">Zelle</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-mutedText bg-white px-2.5 py-1 rounded-full border border-borderLight">
                Direct Bank Transfer
              </span>
            </div>
            <p className="text-xs text-charcoal/80 mb-2">Transfer via banking app to couple&apos;s phone/email:</p>
            <p className="font-mono text-xs sm:text-sm font-semibold text-charcoal bg-white px-3 py-2.5 rounded-lg border border-borderLight select-all break-all">
              pavinvirdee@gmail.com
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleCopy("pavinvirdee@gmail.com", "Zelle email")}
              className="w-full py-2.5 px-3 rounded-xl bg-[#7414CA] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#600fb0] transition-colors flex items-center justify-center space-x-2 shadow-2xs"
            >
              {copiedItem === "Zelle email" ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Zelle Recipient to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Zelle Recipient</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
