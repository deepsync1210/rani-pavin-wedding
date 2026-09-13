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
            The first time I saw him, we were both waiting at the same gate for a flight to San Diego.
            I remember glancing over and thinking, <em>Wow, he&apos;s cute</em>. When I got to my seat,
            I noticed the seat next to me was empty and thought, <em>how amazing would it be if he sat there?</em>
          </p>

          <p>
            And he did. We started chatting, he asked for my number, and then we went our separate ways.
            I was sure I&apos;d never hear from him again. I thought about him now and then, but eventually
            he just became another &ldquo;missed connection.&rdquo;
          </p>

          <p>
            Then, a few months later, out of nowhere, he messaged me, <em>&ldquo;Happy New Year.&rdquo;</em> From
            there, it was like nothing had ever changed.
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
              Early Days
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
              The Proposal
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
