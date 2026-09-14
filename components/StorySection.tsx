import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-champagne mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-navy">
            How They Met
          </span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
          Our Story
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
      </div>

      {/* Narrative & Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Real Story from WithJoy */}
        <div className="lg:col-span-6 space-y-6 text-charcoal/85 leading-relaxed font-light text-base sm:text-lg">
          <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-navy first-letter:font-semibold">
            Long before officially crossing paths, Pavin had actually spotted Rani in 2019 on LinkedIn interning at the same company as his cousin. He sent a quiet connection request, but life moved on until late 2022, when Pavin, temporarily in the Bay Area from Chicago for a wedding, officially met Rani. They matched instantly, and two dates quickly turned into four. Right before catching his flight back to Chicago after the holidays, Pavin asked Rani to make things official.
          </p>

          <p>
            Their first year was built on flights between San Francisco and Chicago, proving that two thousand miles was nothing when the connection was that effortless. Between long-distance airport reunions, they found their rhythm in the simple things: blasting Punjabi music in the car, grabbing In-N-Out followed by boba on Friday nights, and dancing in the living room where nobody else could witness their questionable moves. They balance each other out in all the right ways, even if Pavin loves extra spice and Rani prefers to steer clear of heat entirely.
          </p>

          <p>
            Chicago and Soho House naturally became central to their relationship. On December 12, 2025, Pavin brought Rani to the private screening room under the guise of an exclusive "chef’s tasting." Instead of dinner, the lights dimmed for a twelve-minute film chronicling their favorite memories, leading to Pavin on one knee with a ring in hand. She said yes, the secret photographer caught it all, and they spent the rest of that snowy holiday weekend celebrating in the city where it all came together.
          </p>
        </div>

        {/* Featured Portrait with Santorini, Greece Label */}
        <div className="lg:col-span-6">
          <div className="relative p-3 sm:p-4 rounded-3xl bg-surface border border-borderLight shadow-lg">
            <div className="relative h-[440px] sm:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Rani and Pavin in Santorini, Greece"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                <p className="font-serif italic text-2xl font-light tracking-wide">
                  Santorini, Greece
                </p>
                <p className="text-xs uppercase tracking-widest text-[#FAF8F5]/80 mt-1 font-medium">
                  Rani &amp; Pavin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Photo Editorial Grid — Vertically Aligned */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Photo 1: Early Days */}
        <div className="relative group overflow-hidden rounded-2xl bg-surface border border-borderLight shadow-sm flex flex-col justify-between">
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-mutedText/10">
            <Image
              src="/images/early_days.png"
              alt="Early Days"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 bg-surface">
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold">
              Early Days
            </p>
            <h3 className="font-serif text-xl text-charcoal font-medium mt-1">
              First Christmas
            </h3>
          </div>
        </div>

        {/* Photo 2: Midwest to West Coast (Vertically Aligned) */}
        <div className="relative group overflow-hidden rounded-2xl bg-surface border border-borderLight shadow-sm flex flex-col justify-between">
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-mutedText/10">
            <Image
              src="/images/night_city.jpg"
              alt="Midwest to West Coast"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 bg-surface">
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold">
              The Journey
            </p>
            <h3 className="font-serif text-xl text-charcoal font-medium mt-1">
              Midwest to West Coast
            </h3>
          </div>
        </div>

        {/* Photo 3: The Proposal */}
        <div className="relative group overflow-hidden rounded-2xl bg-surface border border-borderLight shadow-sm flex flex-col justify-between">
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-mutedText/10">
            <Image
              src="/images/real_proposal.jpg"
              alt="The Proposal"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 bg-surface">
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold">
              The Proposal
            </p>
            <h3 className="font-serif text-xl text-charcoal font-medium mt-1">
              In their favorite city, Chicago
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
