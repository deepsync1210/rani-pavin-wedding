"use client";

import { Clock, MapPin, CalendarPlus, Info, Sparkles, ExternalLink } from "lucide-react";

export default function ScheduleSection() {
  const events = [
    {
      title: "Anand Karaj & Langar",
      subtitle: "The Sacred Sikh Marriage Ceremony & Community Meal",
      date: "Saturday, June 19, 2027",
      time: "8:30 AM – 1:30 PM",
      location: "San Jose Gurdwara (Sikh Gurdwara San Jose)",
      address: "2741 Aborn Rd, San Jose, CA 95121",
      mapUrl: "https://maps.google.com/?q=Sikh+Gurdwara+San+Jose+2741+Aborn+Rd+San+Jose+CA",
      attire: "Traditional Indian Formal or Modest Western Formal (Comfortable for seated floor carpet; heads must be covered inside Darbar Sahib)",
      timeline: [
        { time: "8:30 AM", label: "Baraat & Welcoming (Milni)" },
        { time: "9:15 AM", label: "Morning Tea & Breakfast" },
        { time: "10:00 AM", label: "Anand Karaj (Marriage Ceremony in Darbar Sahib)" },
        { time: "12:00 PM", label: "Langar (Traditional Vegetarian Community Lunch)" },
      ],
      calendarTitle: "Rani & Pavin's Anand Karaj Ceremony",
      calendarDetails: "Anand Karaj and Langar at San Jose Gurdwara. Attire: Traditional Indian Formal or Modest Western Formal.",
      startTime: "20270619T153000Z", // 8:30 AM PDT is 15:30 UTC
      endTime: "20270619T203000Z",   // 1:30 PM PDT is 20:30 UTC
    },
    {
      title: "Wedding Reception",
      subtitle: "Dinner, Dancing, & Celebrations",
      date: "Saturday, June 19, 2027",
      time: "6:00 PM – Late",
      location: "South Bay Celebration Venue",
      address: "Silicon Valley / South Bay, California (Formal venue details on formal invitations)",
      mapUrl: "https://maps.google.com/?q=San+Jose+California",
      attire: "Black-Tie Optional / Glamorous Indian Formal (Lehengas, Sherwanis, Suits, Evening Gowns)",
      timeline: [
        { time: "6:00 PM", label: "Cocktail Hour & Passed Hors d'oeuvres" },
        { time: "7:15 PM", label: "Grand Couple Entrance & Speeches" },
        { time: "8:00 PM", label: "Lavish Dinner Service" },
        { time: "9:00 PM – Late", label: "Open Dance Floor, Live DJ & Bhangra" },
      ],
      calendarTitle: "Rani & Pavin's Wedding Reception",
      calendarDetails: "Evening reception celebration, dinner, and dancing in the South Bay.",
      startTime: "20270620T010000Z", // 6:00 PM PDT is 01:00 UTC (June 20 UTC)
      endTime: "20270620T070000Z",   // 12:00 AM PDT is 07:00 UTC
    },
  ];

  const createGoogleCalendarLink = (event: typeof events[0]) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    return `${baseUrl}&text=${encodeURIComponent(event.calendarTitle)}&dates=${event.startTime}/${event.endTime}&details=${encodeURIComponent(event.calendarDetails)}&location=${encodeURIComponent(event.location + ", " + event.address)}`;
  };

  return (
    <section id="schedule" className="py-24 bg-surface/50 border-y border-borderLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-champagne mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-heritage">
              Event Itinerary
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Schedule At-A-Glance
          </h2>
          <div className="gold-divider w-24 mx-auto my-6" />
          <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic">
            Saturday, June 19, 2027 • Two Distinct Celebrations
          </p>
        </div>

        {/* Private Events Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-background/90 rounded-2xl p-5 border border-champagne/60 shadow-xs flex items-start space-x-4">
          <div className="p-2 rounded-full bg-surface border border-champagne/50 shrink-0 text-heritage mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-sm text-charcoal/85">
            <p className="font-medium text-heritage uppercase text-xs tracking-wider mb-0.5">
              Pre-Wedding Ceremonies Note
            </p>
            <p className="font-light leading-relaxed">
              Private family pre-wedding ceremonies (including Paath, Mehndi, Maiyan, and Jaggo) are coordinated directly
              with individual parties. The public ceremonies below are open to all wedding guests!
            </p>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-background rounded-3xl p-6 sm:p-8 border border-borderLight shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Event Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-surface border border-champagne/60 text-[11px] font-semibold uppercase tracking-widest text-heritage">
                    {idx === 0 ? "Morning Ceremony" : "Evening Reception"}
                  </span>
                  <span className="text-xs font-serif italic text-mutedText">
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-display text-2xl sm:text-3xl text-charcoal font-medium">
                  {event.title}
                </h3>
                <p className="font-serif italic text-sm text-champagne-dark mt-1 mb-6">
                  {event.subtitle}
                </p>

                {/* Meta details */}
                <div className="space-y-3.5 text-sm text-charcoal/80 pb-6 border-b border-borderLight">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-heritage shrink-0 mt-0.5" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-heritage shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">{event.location}</p>
                      <p className="text-xs text-mutedText mt-0.5">{event.address}</p>
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs text-heritage hover:underline font-medium mt-1"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timeline Breakdown */}
                <div className="py-6">
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-mutedText mb-3">
                    Program Flow
                  </p>
                  <div className="space-y-2.5">
                    {event.timeline.map((item, i) => (
                      <div key={i} className="flex items-baseline space-x-3 text-xs sm:text-sm">
                        <span className="font-serif font-medium text-heritage w-20 shrink-0 text-right">
                          {item.time}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                        <span className="text-charcoal/85">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attire note */}
                <div className="bg-surface/80 rounded-xl p-4 text-xs text-charcoal/85 mb-6 border border-borderLight/60">
                  <span className="font-semibold text-heritage uppercase tracking-wider block mb-1">
                    Attire &amp; Dress Code:
                  </span>
                  {event.attire}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={createGoogleCalendarLink(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-champagne text-xs uppercase tracking-wider text-charcoal font-medium hover:bg-surface hover:border-heritage transition-colors shadow-2xs"
                >
                  <CalendarPlus className="w-4 h-4 text-heritage" />
                  <span>Add to Google Calendar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
