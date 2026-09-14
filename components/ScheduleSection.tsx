"use client";

/**
 * ScheduleSection Component — Event Itinerary & Calendar Integration
 * 
 * Updates based on user feedback:
 * - Removed pre-wedding private ceremonies banner.
 * - Event 1: "Morning Wedding Ceremony", 9:30 AM – 1:30 PM, Sikh Gurdwara San Jose (3636 Gurdwara Ave, San Jose, CA 95148).
 * - Event 2: "Wedding Reception", 6:00 PM, Atria Banquet Hall & Event Center (113 Bernal Rd, San Jose, CA 95119).
 * - Removed timeline "Program Flow" from both cards.
 * - Updated Google Maps links to official shortlinks provided by user.
 * - Color palette: Midnight Navy, Gold, Cream, and Blush.
 */

import { Clock, MapPin, CalendarPlus, Sparkles, ExternalLink } from "lucide-react";

export default function ScheduleSection() {
  const events = [
    {
      badge: "Morning Wedding Ceremony",
      title: "Anand Karaj & Langar",
      subtitle: "Breakfast, The Sikh Marriage Wedding Ceremony & Lunch",
      date: "Saturday, June 19, 2027",
      time: "9:30 AM – 1:30 PM",
      location: "Sikh Gurdwara San Jose",
      address: "3636 Gurdwara Ave, San Jose, CA 95148",
      mapUrl: "https://maps.app.goo.gl/ipyjwzuP9xgx9JDq8",
      attire: "Traditional Indian Formal or Modest Western Formal (Comfortable for seated floor carpet; heads must be covered inside Darbar Sahib)",
      calendarTitle: "Rani & Pavin's Anand Karaj Ceremony",
      calendarDetails: "Anand Karaj and Langar at Sikh Gurdwara San Jose (3636 Gurdwara Ave, San Jose, CA 95148).",
      startTime: "20270619T163000Z", // 9:30 AM PDT is 16:30 UTC
      endTime: "20270619T203000Z",   // 1:30 PM PDT is 20:30 UTC
    },
    {
      badge: "Evening Reception",
      title: "Wedding Reception",
      subtitle: "Dinner, Dancing, & Celebrations",
      date: "Saturday, June 19, 2027",
      time: "6:00 PM",
      location: "Atria Banquet Hall & Event Center",
      address: "113 Bernal Rd, San Jose, CA 95119",
      mapUrl: "https://maps.app.goo.gl/5QNZdG3qEuojFZGV9",
      attire: "Black-Tie Optional / Glamorous Indian Formal (Lehengas / Evening Gowns, Suits)",
      calendarTitle: "Rani & Pavin's Wedding Reception",
      calendarDetails: "Evening wedding reception at Atria Banquet Hall & Event Center (113 Bernal Rd, San Jose, CA 95119).",
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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-navy">
              Event Itinerary
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Schedule At-A-Glance
          </h2>
          <div className="gold-divider w-24 mx-auto my-6" />
          <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic">
            Saturday, June 19, 2027 &bull; Two Distinct Celebrations
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-borderLight shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Event Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-surface border border-champagne/60 text-[11px] font-semibold uppercase tracking-widest text-navy">
                    {event.badge}
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
                <div className="space-y-4 text-sm text-charcoal/85 pb-6 border-b border-borderLight/80">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">{event.location}</p>
                      <p className="text-xs text-mutedText mt-0.5">{event.address}</p>
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs text-navy hover:underline font-medium mt-1.5"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Attire Note */}
                <div className="bg-surface/75 rounded-2xl p-4 text-xs text-charcoal/85 my-6 border border-borderLight/60">
                  <span className="font-semibold text-navy uppercase tracking-wider block mb-1">
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
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl border border-champagne text-xs uppercase tracking-wider text-charcoal font-medium hover:bg-surface hover:border-navy transition-colors shadow-2xs"
                >
                  <CalendarPlus className="w-4 h-4 text-navy" />
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
