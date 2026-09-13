import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-champagne mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-heritage">
            From the Midwest to the West Coast
          </span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
          Our Journey Together
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic leading-relaxed">
          &ldquo;Two lives, two journeys, bringing together two families in shared love and laughter.&rdquo;
        </p>
      </div>

      {/* Narrative & Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Text Story Column */}
        <div className="lg:col-span-6 space-y-6 text-charcoal/85 leading-relaxed font-light text-base sm:text-lg">
          <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-heritage first-letter:font-semibold">
            Our story began with a simple New Year&apos;s Day text that quickly turned into late-night
            conversations, shared ambitions, and an effortless bond. From cozy dinners in Chicago exploring
            neighborhood corners to chasing coastlines, every milestone affirmed that we were building something truly special.
          </p>

          <p>
            When career chapters and life called us west to the sunlit hills of the San Francisco Bay Area, we packed
            our memories and embraced the next adventure. Between weekend drives down Highway 1, bike rides through the
            redwoods, and discovering our favorite local coffee spots, Northern California quickly felt like home.
          </p>

          <p>
            Now, surrounded by the warmth of our families and closest friends, we cannot wait to formalize our union
            through the sacred Anand Karaj ceremony at the San Jose Gurdwara, followed by an evening of joyful
            celebration, bhangra, and dinner.
          </p>

          <div className="pt-4 flex items-center space-x-4 border-t border-borderLight">
            <div className="w-10 h-10 rounded-full bg-surface border border-champagne flex items-center justify-center">
              <Heart className="w-4 h-4 text-heritage" />
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-charcoal">Rani Sidhu &amp; Pavin Virdee</p>
              <p className="text-xs text-mutedText uppercase tracking-wider">San Jose, California</p>
            </div>
          </div>
        </div>

        {/* Featured Portrait with Editorial Frame */}
        <div className="lg:col-span-6">
          <div className="relative p-3 sm:p-4 rounded-3xl bg-surface border border-borderLight shadow-lg">
            <div className="relative h-[440px] sm:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Rani and Pavin"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                <p className="font-serif italic text-2xl font-light">Celebrating Love &amp; Companionship</p>
                <p className="text-xs uppercase tracking-widest text-[#FAF8F5]/80 mt-1">
                  Rani &amp; Pavin • Together on the West Coast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curated 3-Photo Asymmetrical Editorial Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Photo 1 */}
        <div className="relative group overflow-hidden rounded-2xl bg-surface border border-borderLight shadow-sm">
          <div className="relative h-72 sm:h-80 w-full overflow-hidden">
            <Image
              src="/images/hero_proposal.jpg"
              alt="The Proposal & Celebration"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-heritage/10 mix-blend-multiply" />
          </div>
          <div className="p-5">
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold">The Proposal</p>
            <h3 className="font-serif text-lg text-charcoal font-medium mt-1">A New Beginning</h3>
            <p className="text-xs text-mutedText mt-1">Surrounded by warmth and loved ones as the journey began.</p>
          </div>
        </div>

        {/* Photo 2 */}
        <div className="relative group overflow-hidden rounded-2xl bg-surface border border-borderLight shadow-sm md:-translate-y-4 transition-transform">
          <div className="relative h-72 sm:h-80 w-full overflow-hidden">
            <Image
              src="/images/night_city.jpg"
              alt="Chicago to the Bay Area"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-heritage/10 mix-blend-multiply" />
          </div>
          <div className="p-5">
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold">The Journey</p>
            <h3 className="font-serif text-lg text-charcoal font-medium mt-1">Midwest to West Coast</h3>
            <p className="text-xs text-mutedText mt-1">City skylines, cross-country flights, and finding home together.</p>
          </div>
        </div>

        {/* Photo 3 */}
        <div className="relative group overflow-hidden rounded-2xl bg-surface border border-borderLight shadow-sm">
          <div className="relative h-72 sm:h-80 w-full overflow-hidden">
            <Image
              src="/images/portrait.jpg"
              alt="Rani & Pavin Moments"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-heritage/10 mix-blend-multiply" />
          </div>
          <div className="p-5">
            <p className="text-[11px] uppercase tracking-widest text-champagne-dark font-semibold">The Chapter Ahead</p>
            <h3 className="font-serif text-lg text-charcoal font-medium mt-1">June 19, 2027</h3>
            <p className="text-xs text-mutedText mt-1">Looking forward to celebrating our wedding day with each of you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
