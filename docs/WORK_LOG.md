# Rani & Pavin Wedding Website — Project Work Log & Roadmap

## Work Log: Revision 1.0 (MVP Foundation & Save-The-Date Launch)
**Date**: September 13, 2026  
**Author**: Antigravity AI Engineering Assistant  
**Git Branch**: `main`  
**Commit Hash**: `b237356`

### Summary of Completed Objectives
1. **Repository Setup & Node Environment**:
   - Initialized project in `c:\Users\pavin\Desktop\git_deepsync1210\rani-pavin-wedding`.
   - Installed portable Node.js v20.18.0 LTS into user space and configured environment PATH.
   - Scaffolded Next.js 14 App Router, TypeScript, Tailwind CSS, and Lucide React.
2. **WithJoy Data & Media Extraction**:
   - Extracted Apollo GraphQL state and original photos from `https://withjoy.com/pavin-and-rani`.
   - Downloaded and saved high-resolution engagement photography into `public/images/` (`hero_proposal.jpg`, `portrait.jpg`, `night_city.jpg`).
3. **Design System & Typography**:
   - Implemented warm editorial Sikh luxury palette in `tailwind.config.ts` (Alabaster `#FAF8F5`, Linen Cream `#F3EDE2`, Champagne Gold `#C5A880`, Heritage Forest Green `#1C3B34`, Charcoal Slate `#18181B`).
   - Integrated Google Fonts `Cormorant Garamond` (display serif) and `Plus Jakarta Sans` (UI sans-serif) in `app/layout.tsx`.
4. **Core Sections Engineered**:
   - `Navbar`: Sticky glassmorphic bar, R&P monogram, smooth anchor links, live audio equalizer.
   - `HeroSection`: Viewport hero with countdown timer to Saturday, June 19, 2027.
   - `StorySection`: Chicago-to-Bay Area narrative and 3-photo asymmetrical editorial masonry grid.
   - `ScheduleSection`: Anand Karaj & Langar at San Jose Gurdwara, Evening Reception, timeline breakdown, and 1-click Google Calendar integration.
   - `CultureGuideSection`: Interactive accordion outlining Gurdwara etiquette (Rumāls, modest floor seating, shoe removal, strict grounds etiquette, Anand Karaj, Langar).
   - `TravelSection`: Mineta San Jose International (SJC) primary airport guidance, SFO/OAK secondary, South Bay hotel room block placeholders.
   - `RegistrySection`: Traditional Sagan blessings, Honeymoon & New Home fund cards, direct Venmo (`@pavin-virdee`) and Zelle 1-click copy with toast confirmation.
   - `RsvpForm`: Soft RSVP headcount + full physical mailing address collector, party details, dietary notes, DJ song request, blessings, and confetti burst.
   - `MusicPlayer`: Ambient background music for *Kangna (Acoustic Mix) - Dr Zeus*, handling autoplay policies via first-interaction listener, floating equalizer bar, and Spotify link.
   - `Footer`: Monogram, wedding date, `#RaniFoundHerPavin` hashtag, copyright.
5. **Decoupled Backend Pipeline**:
   - Built `app/api/rsvp/route.ts` proxy to eliminate client CORS restrictions and follow 302 redirects.
   - Created `google-apps-script/Code.gs` for seamless ingestion into the Master Google Sheet.
6. **Verification & Testing**:
   - Ran `next build` production build: 5/5 static and dynamic pages generated with zero errors.
   - Committed and pushed Revision 1 to GitHub repository `main`.

---

## AI Automations Roadmap (~500 Guests)
As the wedding approaches, the following automated workflows can be layered on top of this MVP:

1. **Automated Address Verification & Standardization**:
   - Integrate USPS / Google Address Validation API to clean, standardize, and verify postal addresses before generating mailing labels.
2. **Automated RSVP Reminder & SMS Sync**:
   - Scheduled Twilio / WhatsApp / Email reminders for guests who haven't completed their soft RSVP or submitted their addresses by the deadline.
3. **Smart Seating & Table Arrangement Assistant**:
   - Cluster guests by family side, friend group, and dietary preferences to generate optimal table seating charts.
4. **Reception DJ Song Curation Pipeline**:
   - Aggregate all song requests submitted via the RSVP form and automatically generate a collaborative Spotify playlist for the DJ.
5. **Dynamic Personalized Guest Portal**:
   - Expand soft RSVP into personalized invitation lookups where guests enter their last name or phone number to view their tailored events (e.g. Mehndi, Jaggo, Sangeet for close family).
