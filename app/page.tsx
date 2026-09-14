"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ScheduleSection from "@/components/ScheduleSection";
import CultureGuideSection from "@/components/CultureGuideSection";
import TravelSection from "@/components/TravelSection";
import RegistrySection from "@/components/RegistrySection";
import RsvpForm from "@/components/RsvpForm";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import { TapestryWatermark, GarlandFlourish } from "@/components/FloralMotifs";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen bg-background relative selection:bg-navy selection:text-background overflow-x-hidden">
      {/* Subtle luxury tapestry watermark throughout the entire portal */}
      <TapestryWatermark />

      {/* Sticky Top Navigation */}
      <Navbar isPlaying={isPlaying} toggleAudio={toggleAudio} />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Story & Editorial Gallery */}
      <StorySection />

      {/* Schedule At-A-Glance */}
      <ScheduleSection />

      {/* Sikh Cultural Guide & Gurdwara Etiquette */}
      <CultureGuideSection />

      {/* Travel & Where to Stay */}
      <TravelSection />

      {/* Shagun & Registry */}
      <RegistrySection />

      <div className="flex justify-center py-2">
        <GarlandFlourish className="w-36 sm:w-48 h-4 text-champagne/60" />
      </div>

      {/* Soft RSVP & Physical Mailing Address Form */}
      <RsvpForm />

      {/* Background Music Player */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
