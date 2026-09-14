import { Plane, Hotel, Compass, ExternalLink, Sparkles, MapPin } from "lucide-react";

export default function TravelSection() {
  const airports = [
    {
      code: "SJC",
      name: "Norman Y. Mineta San Jose International Airport",
      badge: "Primary / Recommended",
      distance: "15 – 20 minutes from Gurdwara & South Bay Venues",
      description:
        "The closest and most convenient airport for all wedding weekend festivities. Minimizes traffic and offers swift rideshare access to South Bay hotels.",
      recommended: true,
    },
    {
      code: "SFO",
      name: "San Francisco International Airport",
      badge: "Secondary Option",
      distance: "45 – 60 minutes north of San Jose",
      description:
        "Ideal for guests arriving on non-stop cross-country or international flights. Accessible via rental car or Caltrain / BART.",
      recommended: false,
    },
    {
      code: "OAK",
      name: "Oakland International Airport",
      badge: "Secondary Option",
      distance: "40 – 55 minutes north-east of San Jose",
      description:
        "Another great East Bay alternative with convenient domestic flight options on Southwest and other carriers.",
      recommended: false,
    },
  ];

  interface Hotel {
    name: string;
    area: string;
    description?: string;
    status: string;
    linkText?: string;
  }

  const hotels: Hotel[] = [
    {
      name: "Hayes Mansion San Jose, Curio Collection by Hilton",
      area: "San Jose ~ 11min drive to Reception Venue",
      // description: "Once a private home and social hub, the mansion today serves as Silicon Valley’s ultimate setting for unique escapes and unforgettable celebrations. Timeless architecture, modern comfort, and thoughtful dining come together in a setting that feels both composed and welcoming.",
      status: "$$$",
      linkText: "Room Block In Progress",
    },
    {
      name: "Home2 Suites, Hilton San Jose South",
      area: "San Jose ~ 6min drive to Reception Venue",
      // description: "Boutique European-inspired hotel steps away from world-class dining, pedestrian shopping plazas, and lively cafes.",
      status: "$$",
      linkText: " ",
    },
    // {
    //   name: "Extended Stay America Suites",
    //   area: "South San Jose / Blossom Hill",
    //   // description: "Comfortable and convenient hotel located just a short 10-minute drive from the San Jose Gurdwara.",
    //   status: "$",
    //   linkText: "Room Block In Progress",
    // },
  ];

  return (
    <section id="travel" className="py-24 border-t border-borderLight/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-champagne mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-navy">
              Logistics &amp; Accommodations
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Travel &amp; Where to Stay
          </h2>
          <div className="gold-divider w-24 mx-auto my-6" />
          <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic">
            San Jose &amp; The Silicon Valley Bay Area, California
          </p>
        </div>

        {/* Airport Guidance */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <Plane className="w-5 h-5 text-navy" />
            <h3 className="font-serif text-2xl font-medium text-charcoal">Recommended Airports</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {airports.map((airport, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  airport.recommended
                    ? "bg-white border-2 border-champagne shadow-md"
                    : "bg-white border border-borderLight shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-2xl font-bold text-navy tracking-wider">
                      {airport.code}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
                        airport.recommended
                          ? "bg-navy text-[#FAF8F5]"
                          : "bg-surface text-mutedText border border-borderLight"
                      }`}
                    >
                      {airport.badge}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm text-charcoal mb-2">{airport.name}</h4>
                  <p className="text-xs text-champagne-dark font-medium mb-3 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{airport.distance}</span>
                  </p>
                  <p className="text-xs text-charcoal/75 leading-relaxed font-light">
                    {airport.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lodging & Accommodations Placeholders */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <Hotel className="w-5 h-5 text-navy" />
            <h3 className="font-serif text-2xl font-medium text-charcoal">Accommodations &amp; Room Blocks</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hotels.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-background rounded-2xl p-6 border border-borderLight shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-surface border border-champagne/60 text-navy inline-block mb-3">
                    {hotel.status}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-charcoal mb-1">
                    {hotel.name}
                  </h4>
                  <p className="text-xs text-mutedText mb-3">{hotel.area}</p>
                  {hotel.description && (
                    <p className="text-xs text-charcoal/75 leading-relaxed font-light mb-4">
                      {hotel.description}
                    </p>
                  )}
                </div>
                {hotel.linkText?.trim() && (
                  <div className="pt-4 border-t border-borderLight/60">
                    <span className="text-xs text-champagne-dark italic font-serif">
                      {hotel.linkText}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Local Exploration Tip
        <div className="bg-background rounded-3xl p-6 sm:p-8 border border-champagne/50 shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-surface border border-champagne flex items-center justify-center shrink-0">
            <Compass className="w-7 h-7 text-navy" />
          </div>
          <div>
            <h4 className="font-serif text-2xl font-medium text-charcoal mb-1">
              Making a Weekend Out of the Bay Area
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
              For those extending their trip, San Jose is centrally located: 45 minutes south of San Francisco, 35 minutes
              from the scenic Santa Cruz coastline, and minutes from the Santa Clara wine trails and Apple Park.
              Check back closer to the date for Rani &amp; Pavin&apos;s curated list of favorite local coffee shops, eateries,
              and scenic drives!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
