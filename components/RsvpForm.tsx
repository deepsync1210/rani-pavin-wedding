"use client";

/**
 * RsvpForm Component — Soft RSVP & Physical Mailing Address Collector
 * 
 * Purpose:
 * - Collects guest headcount estimates for Saturday, June 19, 2027.
 * - Collects physical mailing addresses for formal paper invitation suites.
 * - Tracks dietary restrictions, song requests for the DJ, and warm blessings.
 * - Submits asynchronously to /api/rsvp (server-side proxy to Google Sheets).
 * - Fires a celebratory confetti animation upon successful submission.
 */

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MapPin, Mail, Phone, User, Users } from "lucide-react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    ceremonyRsvp: "Yes" as "Yes" | "Maybe" | "No",
    ceremonyGuests: 2,
    receptionRsvp: "Yes" as "Yes" | "Maybe" | "No",
    receptionGuests: 2,
    eventComments: "",
    dietaryRestrictions: ["None"],
    customDietary: "",
    songRequest: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const dietaryOptions = ["Vegetarian", "Vegan", "Nut Allergy", "Gluten-Free", "None"];

  const handleCeremonyRsvpChange = (val: "Yes" | "Maybe" | "No") => {
    setFormData((prev) => ({
      ...prev,
      ceremonyRsvp: val,
      ceremonyGuests: val === "No" ? 0 : prev.ceremonyGuests === 0 ? 2 : prev.ceremonyGuests,
    }));
  };

  const handleReceptionRsvpChange = (val: "Yes" | "Maybe" | "No") => {
    setFormData((prev) => ({
      ...prev,
      receptionRsvp: val,
      receptionGuests: val === "No" ? 0 : prev.receptionGuests === 0 ? 2 : prev.receptionGuests,
    }));
  };

  const handleCeremonyGuestsChange = (count: number) => {
    setFormData((prev) => ({
      ...prev,
      ceremonyGuests: count,
      ceremonyRsvp: count === 0 ? "No" : prev.ceremonyRsvp === "No" ? "Yes" : prev.ceremonyRsvp,
    }));
  };

  const handleReceptionGuestsChange = (count: number) => {
    setFormData((prev) => ({
      ...prev,
      receptionGuests: count,
      receptionRsvp: count === 0 ? "No" : prev.receptionRsvp === "No" ? "Yes" : prev.receptionRsvp,
    }));
  };

  const handleDietaryToggle = (option: string) => {
    setFormData((prev) => {
      if (option === "None") {
        return { ...prev, dietaryRestrictions: ["None"] };
      }
      const filtered = prev.dietaryRestrictions.filter((d) => d !== "None");
      const exists = filtered.includes(option);
      const updated = exists ? filtered.filter((d) => d !== option) : [...filtered, option];
      return { ...prev, dietaryRestrictions: updated.length === 0 ? ["None"] : updated };
    });
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C5A880", "#1C3B34", "#EADDC9", "#FAF8F5"],
      });
    } catch {
      // Confetti fallback safely ignored
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Phone).");
      return;
    }

    if (!formData.streetAddress.trim() || !formData.city.trim() || !formData.zipCode.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your mailing address so we can mail your formal invitation.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const totalMaxParty = Math.max(
      formData.ceremonyRsvp !== "No" ? Number(formData.ceremonyGuests) : 0,
      formData.receptionRsvp !== "No" ? Number(formData.receptionGuests) : 0
    );

    const eventsSummary = [
      `Ceremony: ${formData.ceremonyRsvp} (${formData.ceremonyRsvp === "No" ? "0" : formData.ceremonyGuests} Guests)`,
      `Reception: ${formData.receptionRsvp} (${formData.receptionRsvp === "No" ? "0" : formData.receptionGuests} Guests)`,
    ].join(", ");

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      streetAddress: formData.streetAddress.trim(),
      aptSuite: formData.aptSuite.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      zipCode: formData.zipCode.trim(),
      country: formData.country.trim(),
      ceremonyRsvp: formData.ceremonyRsvp,
      ceremonyGuests: formData.ceremonyRsvp === "No" ? 0 : Number(formData.ceremonyGuests),
      receptionRsvp: formData.receptionRsvp,
      receptionGuests: formData.receptionRsvp === "No" ? 0 : Number(formData.receptionGuests),
      guestCount: totalMaxParty,
      eventsAttending: formData.eventComments.trim()
        ? `${eventsSummary} (Notes: ${formData.eventComments.trim()})`
        : eventsSummary,
      eventComments: formData.eventComments.trim(),
      dietaryRestrictions: [
        ...formData.dietaryRestrictions.filter((d) => d !== "None"),
        formData.customDietary.trim(),
      ]
        .filter(Boolean)
        .join(", ") || "None",
      songRequest: formData.songRequest.trim(),
      notes: [
        formData.eventComments.trim() ? `Attendance Notes: ${formData.eventComments.trim()}` : "",
        formData.notes.trim() ? `Blessings: ${formData.notes.trim()}` : "",
      ]
        .filter(Boolean)
        .join(" | "),
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to record RSVP. Please check connection and try again.");
      }

      setStatus("success");
      triggerConfetti();
    } catch (err: unknown) {
      console.error("RSVP Submission Error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong while submitting. Please try again."
      );
    }
  };

  return (
    <section id="rsvp" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 text-champagne mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-navy">
            Join the Celebration
          </span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
          Soft RSVP &amp; Address Collector
        </h2>
        <div className="gold-divider w-24 mx-auto my-6" />
        <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic leading-relaxed">
          Please let us know if you anticipate attending so we can estimate headcounts and gather your physical
          mailing address for formal invitations!
        </p>
      </div>

      {/* Main Card Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-borderLight shadow-xl">
        {status === "success" ? (
          <div className="text-center py-12 px-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-navy/10 border-2 border-navy flex items-center justify-center mx-auto mb-6 text-navy">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="heading-display text-3xl sm:text-4xl text-charcoal mb-3">
              Thank You, {formData.fullName}!
            </h3>
            <p className="font-serif text-lg sm:text-xl text-navy italic mb-4">
              {formData.ceremonyRsvp === "No" && formData.receptionRsvp === "No"
                ? "Your response has been received with warmest regards."
                : "Your Soft RSVP & Mailing Address have been warmly received."}
            </p>
            <p className="text-xs sm:text-sm text-charcoal/75 max-w-lg mx-auto leading-relaxed mb-8">
              {formData.ceremonyRsvp === "No" && formData.receptionRsvp === "No"
                ? "We will miss having you in person on June 19, 2027, but we are so thankful for your love and warm wishes!"
                : `We have noted your estimated attendance for June 19, 2027 (Ceremony: ${formData.ceremonyRsvp}${
                    formData.ceremonyRsvp !== "No" ? ` - ${formData.ceremonyGuests} guests` : ""
                  }, Reception: ${formData.receptionRsvp}${
                    formData.receptionRsvp !== "No" ? ` - ${formData.receptionGuests} guests` : ""
                  }). We look forward to mailing your formal invitation closer to the date!`}
            </p>
            <button
              onClick={() => {
                setStatus("idle");
              }}
              className="px-6 py-2.5 rounded-full border border-champagne text-xs uppercase tracking-wider font-medium text-charcoal hover:bg-background transition-colors"
            >
              Submit Another RSVP
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Section 1: Contact Information */}
            <div>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-4 flex items-center space-x-2">
                <User className="w-4 h-4 text-navy" />
                <span>Primary Guest Contact</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Full Name <span className="text-navy">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pavin Singh Virdee"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Email Address <span className="text-navy">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. pavin@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Mobile Phone <span className="text-navy">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (123) 456-7899"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Physical Mailing Address */}
            <div className="pt-4 border-t border-borderLight/60">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-medium text-charcoal flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-navy" />
                  <span>Physical Mailing Address</span>
                </h3>
                <p className="text-xs text-mutedText mt-0.5 font-light">
                  So we can mail your formal printed wedding invitation!
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Street Address <span className="text-navy">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 123 Disney Way"
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Apt / Suite / Unit (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apt 4B"
                      value={formData.aptSuite}
                      onChange={(e) => setFormData({ ...formData, aptSuite: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      City <span className="text-navy">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. San Jose"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      State / Province <span className="text-navy">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CA"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      ZIP / Postal Code <span className="text-navy">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 95123"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="United States"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Attendance & Party Count */}
            <div className="pt-4 border-t border-borderLight/60">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-1">
                <h3 className="font-serif text-xl font-medium text-charcoal flex items-center space-x-2">
                  <Users className="w-4 h-4 text-navy" />
                  <span>Attendance &amp; Event RSVP</span>
                </h3>
                <span className="text-xs text-mutedText font-medium">Saturday, June 19, 2027 • San Jose, CA</span>
              </div>

              {/* Desktop & Tablet Table View */}
              <div className="hidden sm:block overflow-hidden rounded-2xl border border-borderLight shadow-sm bg-white mb-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-100/80 border-b border-borderLight/80 text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                      <th className="py-3.5 px-5 w-[26%]">Guests</th>
                      <th className="py-3.5 px-5 w-[48%]">Event (June 19, 2027)</th>
                      <th className="py-3.5 px-5 w-[26%]">RSVP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-borderLight/60 bg-white">
                    {/* Row 1: Morning Wedding Ceremony */}
                    <tr className="transition-colors hover:bg-stone-50/60">
                      <td className="py-4 px-5 align-middle">
                        <select
                          value={formData.ceremonyGuests}
                          disabled={formData.ceremonyRsvp === "No"}
                          onChange={(e) => handleCeremonyGuestsChange(Number(e.target.value))}
                          aria-label="Guests for Morning Wedding Ceremony"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                            formData.ceremonyRsvp === "No"
                              ? "bg-stone-100 border-borderLight/50 text-mutedText/50 cursor-not-allowed"
                              : "bg-background border-borderLight text-charcoal focus:outline-none focus:border-navy"
                          }`}
                        >
                          {formData.ceremonyRsvp === "No" ? (
                            <option value={0}>0 Guests</option>
                          ) : (
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </option>
                            ))
                          )}
                        </select>
                      </td>
                      <td className="py-4 px-5 align-middle">
                        <div className="font-serif text-base font-semibold text-charcoal">
                          Morning Wedding Ceremony
                        </div>
                        <div className="text-xs text-mutedText mt-0.5">
                          Gurdwara Sahib of San Jose • 9:30 AM (Anand Karaj)
                        </div>
                      </td>
                      <td className="py-4 px-5 align-middle">
                        <select
                          value={formData.ceremonyRsvp}
                          onChange={(e) => handleCeremonyRsvpChange(e.target.value as "Yes" | "Maybe" | "No")}
                          aria-label="RSVP for Morning Wedding Ceremony"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none cursor-pointer ${
                            formData.ceremonyRsvp === "Yes"
                              ? "bg-emerald-50/80 border-emerald-300 text-emerald-900 focus:border-emerald-600"
                              : formData.ceremonyRsvp === "Maybe"
                              ? "bg-amber-50/80 border-amber-300 text-amber-900 focus:border-amber-600"
                              : "bg-rose-50/80 border-rose-300 text-rose-900 focus:border-rose-600"
                          }`}
                        >
                          <option value="Yes">Yes</option>
                          <option value="Maybe">Maybe</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                    </tr>

                    {/* Row 2: Evening Wedding Reception */}
                    <tr className="transition-colors hover:bg-stone-50/60">
                      <td className="py-4 px-5 align-middle">
                        <select
                          value={formData.receptionGuests}
                          disabled={formData.receptionRsvp === "No"}
                          onChange={(e) => handleReceptionGuestsChange(Number(e.target.value))}
                          aria-label="Guests for Evening Wedding Reception"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                            formData.receptionRsvp === "No"
                              ? "bg-stone-100 border-borderLight/50 text-mutedText/50 cursor-not-allowed"
                              : "bg-background border-borderLight text-charcoal focus:outline-none focus:border-navy"
                          }`}
                        >
                          {formData.receptionRsvp === "No" ? (
                            <option value={0}>0 Guests</option>
                          ) : (
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </option>
                            ))
                          )}
                        </select>
                      </td>
                      <td className="py-4 px-5 align-middle">
                        <div className="font-serif text-base font-semibold text-charcoal">
                          Evening Wedding Reception
                        </div>
                        <div className="text-xs text-mutedText mt-0.5">
                          Atria, San Jose • 6:00 PM (Cocktails, Dinner &amp; Celebration)
                        </div>
                      </td>
                      <td className="py-4 px-5 align-middle">
                        <select
                          value={formData.receptionRsvp}
                          onChange={(e) => handleReceptionRsvpChange(e.target.value as "Yes" | "Maybe" | "No")}
                          aria-label="RSVP for Evening Wedding Reception"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none cursor-pointer ${
                            formData.receptionRsvp === "Yes"
                              ? "bg-emerald-50/80 border-emerald-300 text-emerald-900 focus:border-emerald-600"
                              : formData.receptionRsvp === "Maybe"
                              ? "bg-amber-50/80 border-amber-300 text-amber-900 focus:border-amber-600"
                              : "bg-rose-50/80 border-rose-300 text-rose-900 focus:border-rose-600"
                          }`}
                        >
                          <option value="Yes">Yes</option>
                          <option value="Maybe">Maybe</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View (Screens < 640px) */}
              <div className="sm:hidden space-y-3.5 mb-4">
                {/* Event 1 Mobile Card */}
                <div className="p-4 rounded-2xl border border-borderLight bg-stone-50/40 space-y-3">
                  <div>
                    <div className="font-serif text-base font-semibold text-charcoal">
                      Morning Wedding Ceremony
                    </div>
                    <div className="text-xs text-mutedText mt-0.5">
                      Gurdwara Sahib of San Jose • 9:30 AM (Anand Karaj)
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.ceremonyGuests}
                        disabled={formData.ceremonyRsvp === "No"}
                        onChange={(e) => handleCeremonyGuestsChange(Number(e.target.value))}
                        className={`w-full px-3 py-2 rounded-xl border text-xs font-medium transition-colors ${
                          formData.ceremonyRsvp === "No"
                            ? "bg-stone-100 border-borderLight/50 text-mutedText/50 cursor-not-allowed"
                            : "bg-background border-borderLight text-charcoal focus:outline-none focus:border-navy"
                        }`}
                      >
                        {formData.ceremonyRsvp === "No" ? (
                          <option value={0}>0 Guests</option>
                        ) : (
                          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-1">
                        RSVP
                      </label>
                      <select
                        value={formData.ceremonyRsvp}
                        onChange={(e) => handleCeremonyRsvpChange(e.target.value as "Yes" | "Maybe" | "No")}
                        className={`w-full px-3 py-2 rounded-xl border text-xs font-semibold transition-all focus:outline-none ${
                          formData.ceremonyRsvp === "Yes"
                            ? "bg-emerald-50/80 border-emerald-300 text-emerald-900"
                            : formData.ceremonyRsvp === "Maybe"
                            ? "bg-amber-50/80 border-amber-300 text-amber-900"
                            : "bg-rose-50/80 border-rose-300 text-rose-900"
                        }`}
                      >
                        <option value="Yes">Yes</option>
                        <option value="Maybe">Maybe</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Event 2 Mobile Card */}
                <div className="p-4 rounded-2xl border border-borderLight bg-stone-50/40 space-y-3">
                  <div>
                    <div className="font-serif text-base font-semibold text-charcoal">
                      Evening Wedding Reception
                    </div>
                    <div className="text-xs text-mutedText mt-0.5">
                      Atria, San Jose • 6:00 PM (Cocktails &amp; Dinner)
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.receptionGuests}
                        disabled={formData.receptionRsvp === "No"}
                        onChange={(e) => handleReceptionGuestsChange(Number(e.target.value))}
                        className={`w-full px-3 py-2 rounded-xl border text-xs font-medium transition-colors ${
                          formData.receptionRsvp === "No"
                            ? "bg-stone-100 border-borderLight/50 text-mutedText/50 cursor-not-allowed"
                            : "bg-background border-borderLight text-charcoal focus:outline-none focus:border-navy"
                        }`}
                      >
                        {formData.receptionRsvp === "No" ? (
                          <option value={0}>0 Guests</option>
                        ) : (
                          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal mb-1">
                        RSVP
                      </label>
                      <select
                        value={formData.receptionRsvp}
                        onChange={(e) => handleReceptionRsvpChange(e.target.value as "Yes" | "Maybe" | "No")}
                        className={`w-full px-3 py-2 rounded-xl border text-xs font-semibold transition-all focus:outline-none ${
                          formData.receptionRsvp === "Yes"
                            ? "bg-emerald-50/80 border-emerald-300 text-emerald-900"
                            : formData.receptionRsvp === "Maybe"
                            ? "bg-amber-50/80 border-amber-300 text-amber-900"
                            : "bg-rose-50/80 border-rose-300 text-rose-900"
                        }`}
                      >
                        <option value="Yes">Yes</option>
                        <option value="Maybe">Maybe</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open text comment box per user feedback underneath the table */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Additional Attendance Comments, Guest Names, or Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Attending with parents, bringing infant stroller, etc."
                  value={formData.eventComments}
                  onChange={(e) => setFormData({ ...formData, eventComments: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-xs sm:text-sm text-charcoal focus:outline-none focus:border-navy transition-colors placeholder:text-mutedText/60"
                />
              </div>
            </div>

            {/* Section 4: Dietary & Reception Perks */}
            <div className="pt-4 border-t border-borderLight/60 space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                  Dietary Restrictions / Allergies
                </label>
                <div className="flex flex-wrap gap-2.5 mb-3">
                  {dietaryOptions.map((opt) => {
                    const isSelected = formData.dietaryRestrictions.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleDietaryToggle(opt)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-navy text-white border border-navy shadow-2xs"
                            : "bg-background text-charcoal/80 border border-borderLight hover:border-champagne"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="text"
                  placeholder="Other dietary specifics (e.g. Halal, dairy sensitivity)"
                  value={formData.customDietary}
                  onChange={(e) => setFormData({ ...formData, customDietary: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-background border border-borderLight text-xs text-charcoal focus:outline-none focus:border-navy"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Song Request for Reception DJ (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mundian To Bach Ke / Diljit Dosanjh"
                    value={formData.songRequest}
                    onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Notes &amp; Blessings for the Couple (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Warm wishes or notes for Rani &amp; Pavin..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-2xl bg-navy text-[#FAF8F5] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Recording Your Soft RSVP...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Soft RSVP &amp; Address</span>
                  </>
                )}
              </button>
              {/* <p className="text-center text-[11px] text-mutedText mt-3 font-light">
                Directly submitted to Rani &amp; Pavin&apos;s Master Planning Sheet. Zero spam, purely for wedding coordination.
              </p> */}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
