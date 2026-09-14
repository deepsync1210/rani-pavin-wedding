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
    guestCount: 2,
    eventsAttending: ["Morning Wedding Ceremony", "Evening Reception"],
    eventComments: "",
    dietaryRestrictions: ["None"],
    customDietary: "",
    songRequest: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const dietaryOptions = ["Vegetarian", "Vegan", "Nut Allergy", "Gluten-Free", "None"];

  const handleEventToggle = (eventName: string) => {
    setFormData((prev) => {
      const exists = prev.eventsAttending.includes(eventName);
      const updated = exists
        ? prev.eventsAttending.filter((e) => e !== eventName)
        : [...prev.eventsAttending, eventName];
      return { ...prev, eventsAttending: updated };
    });
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
      guestCount: Number(formData.guestCount),
      eventsAttending: formData.eventComments.trim()
        ? `${formData.eventsAttending.join(", ")} (Notes: ${formData.eventComments.trim()})`
        : formData.eventsAttending.join(", ") || "None specified",
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
    <section id="rsvp" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
      <div className="bg-surface/90 rounded-3xl p-6 sm:p-10 border border-borderLight shadow-md">
        {status === "success" ? (
          <div className="text-center py-12 px-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-navy/10 border-2 border-navy flex items-center justify-center mx-auto mb-6 text-navy">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="heading-display text-3xl sm:text-4xl text-charcoal mb-3">
              Thank You, {formData.fullName}!
            </h3>
            <p className="font-serif text-lg sm:text-xl text-navy italic mb-4">
              Your Soft RSVP &amp; Mailing Address have been warmly received.
            </p>
            <p className="text-xs sm:text-sm text-charcoal/75 max-w-lg mx-auto leading-relaxed mb-8">
              We have noted your estimated party of {formData.guestCount} for June 19, 2027. We will be mailing
              your formal wedding invitation suite closer to the event!
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
              <h3 className="font-serif text-xl font-medium text-charcoal mb-4 flex items-center space-x-2">
                <Users className="w-4 h-4 text-navy" />
                <span>Attendance &amp; Party Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Total Estimated Guests in Party
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-sm text-charcoal focus:outline-none focus:border-navy transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Events You Plan to Attend (June 19, 2027)
                  </label>
                  <div className="space-y-2 mb-3">
                    {["Morning Wedding Ceremony", "Evening Reception"].map((evt) => (
                      <label key={evt} className="flex items-center space-x-2.5 text-xs sm:text-sm text-charcoal cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.eventsAttending.includes(evt)}
                          onChange={() => handleEventToggle(evt)}
                          className="w-4 h-4 rounded border-borderLight text-navy focus:ring-navy"
                        />
                        <span>{evt}</span>
                      </label>
                    ))}
                  </div>

                  {/* Open text comment box per user feedback (img2) */}
                  <div className="mt-2.5">
                    <input
                      type="text"
                      placeholder="Additional attendance comments, guest names, or notes..."
                      value={formData.eventComments}
                      onChange={(e) => setFormData({ ...formData, eventComments: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-borderLight text-xs sm:text-sm text-charcoal focus:outline-none focus:border-navy transition-colors placeholder:text-mutedText/60"
                    />
                  </div>
                </div>
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
