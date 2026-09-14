"use client";

import { useState } from "react";
import { ShieldCheck, Heart, Sparkles, ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";

export default function CultureGuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const etiquetteItems = [
    {
      title: "Head Coverings (Rumāls / Scarves)",
      icon: "👒",
      summary: "All guests cover their heads while inside the Gurdwara prayer hall (Darbar Sahib).",
      details:
        "Head coverings are worn as a sign of humility, respect, and equality before the Guru Granth Sahib. If you don't have an Indian chunni/dupatta, turban, or scarf, complimentary clean head scarves (rumāls) are provided in dedicated baskets at the entrance for guests to borrow.",
      tips: [
        "Bandanas, scarves, and dupattas are fully acceptable.",
        "Baseball caps, fedoras, and hats are not permitted inside the prayer hall.",
      ],
    },
    {
      title: "Shoe Removal & Cleanliness",
      icon: "👞",
      summary: "Shoes must be removed before entering the sacred Darbar Sahib hall.",
      details:
        "Before entering any sacred Gurdwara space, all visitors remove their shoes and place them in the designated shoe room / cubbies. Hand-washing and foot-washing stations are situated right next to the shoe area for cleanliness before entering.",
      tips: [
        "Socks or clean bare feet are completely fine.",
        "Slip-on shoes or footwear that is easy to remove are recommended for convenience.",
      ],
    },
    {
      title: "Modest & Comfortable Floor Seating Attire",
      icon: "👗",
      summary: "Comfortable, respectful clothing that covers shoulders and knees.",
      details:
        "Both women and men sit cross-legged on the carpeted floor inside the Darbar Sahib as a symbol of universal equality (chairs are available along the perimeter for elderly guests or anyone with mobility limitations). Please dress respectfully with shoulders and knees covered.",
      tips: [
        "For women: Salwar Kameez, Anarkalis, Lehengas, or modest pantsuits/maxi dresses.",
        "For men: Kurta Pajama or a comfortable Western suit.",
        "Avoid overly tight clothing so you can comfortably sit on the floor.",
      ],
    },
    {
      title: "Strict Gurdwara Grounds Etiquette",
      icon: "🚫",
      summary: "Gurdwara grounds are strictly alcohol, tobacco, vape, and meat-free.",
      details:
        "The Gurdwara is a place of sacred worship and peace. Alcohol, cigarettes, cigars, chewing tobacco, vaping devices, and non-vegetarian food are strictly forbidden anywhere on Gurdwara grounds, including outdoor parking lots.",
      tips: [
        "Please ensure no tobacco or vape products are brought into the building.",
        "Phones should be placed on silent mode while inside the Darbar Sahib.",
      ],
    },
    {
      title: "Anand Karaj & The Four Lāvan Hymns",
      icon: "💍",
      summary: "The sacred union of two souls merging into one spiritual journey.",
      details:
        "The Anand Karaj ('Blissful Union') centers on the Guru Granth Sahib. The couple walks clockwise around the holy scripture four times as the granthi (priest) sings the Four Lāvan (marriage hymns composed by Guru Ram Das Ji), each verse guiding a spiritual stage of marriage: from righteousness and devotion, to divine longing and supreme joy.",
      tips: [
        "Guests remain seated respectfully during the ceremony.",
        "You may bow before the Guru Granth Sahib when entering or take a seat directly.",
      ],
    },
    {
      title: "Langar: The Universal Community Meal",
      icon: "🍛",
      summary: "A warm, delicious, vegetarian meal served with unconditional hospitality.",
      details:
        "Instituted by Guru Nanak Dev Ji, Langar is a free vegetarian feast served to all, symbolizing our collective equality.",
      tips: [
        "All food in Langar is strictly vegetarian (often vegan-friendly)."
      ],
    },
  ];

  return (
    <section id="culture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-champagne mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-navy">
            Welcoming First-Time Guests
          </span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
          Sikh Cultural Guide &amp; Etiquette
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic leading-relaxed">
          The Sikh Gurdwara is a place of open welcome, love, and community. Here is everything you need to know
          to feel comfortable, honored, and right at home.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {etiquetteItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "bg-surface/90 border-champagne shadow-sm"
                  : "bg-background border-borderLight hover:border-champagne/70 hover:bg-surface/40"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl sm:text-3xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-mutedText mt-0.5 font-light">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <div
                  className={`p-1.5 rounded-full border border-champagne/60 text-navy transition-transform duration-300 shrink-0 ml-2 ${
                    isOpen ? "rotate-180 bg-surface" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-charcoal/85 border-t border-borderLight/60 animate-fade-in space-y-4">
                  <p className="leading-relaxed font-light">{item.details}</p>
                  <div className="bg-background/80 rounded-xl p-4 border border-borderLight space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy">
                      Helpful Tips for Guests:
                    </p>
                    <ul className="space-y-1.5">
                      {item.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start space-x-2 text-xs text-charcoal/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
