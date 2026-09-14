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
   - `CultureGuideSection`: Interactive accordion outlining Gurdwara etiquette (Rumals, modest floor seating, shoe removal, strict grounds etiquette, Anand Karaj, Langar).
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

## Work Log: Revision 1.1 (Music & Google Sheets Isolation)
**Date**: September 13, 2026  
**Git Branch**: `main`  
**Commit Hash**: `c099768`, `e8939ff`

### Summary of Objectives
1. **Audio Player Overhaul**:
   - Swapped out Spotify stream with local MP3: *Babe Bhangra Paunde Ne* by Gurdas Maan (`public/audio/babe_bhangra_pounde_ne.mp3`).
   - Converted to headless background audio player: removed floating bottom-right widget and external Spotify buttons.
   - Retained elegant sound wave toggle in the top navigation bar with auto-play on first user touch/scroll.
2. **Dedicated Google Sheets Isolation**:
   - Isolated RSVP responses into a brand-new tab **`Website RSVPs`** within the Master Google Spreadsheet.
   - Updated Google Apps Script deployment URL (`https://script.google.com/macros/s/AKfycbx09zRvh926xOiZ5Y1wDV1a8THW8bwbmbTCaLxmCeoa2-jgdtdkXzVUE-E_5s9-1mep/exec`) in `.env.local`.

---

## Work Log: Revision 1.2 (Visual Polish & User Image Feedback)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Palette Refinement (Midnight Navy & Blush Pink)**:
   - Updated primary brand color from heritage green to **Midnight Navy (`#162846`)** and accent to **Soft Blush Pink (`#F8E8EB`)**, paired with **Warm Alabaster (`#FAF8F5`)** and **Warm Champagne Gold (`#C5A880`)**.
2. **Navbar**:
   - Scaled monogram circle to 48px (`w-12 h-12`) with proper padding.
   - Corrected terminology to **"SHAGUN & REGISTRY"**.
3. **Hero Section**:
   - Added Gurmukhi blessing: **ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ** &bull; **&ldquo;ਏਕ ਜੋਤਿ ਦੁਇ ਮੂਰਤੀ&rdquo;** (*One Light in Two Bodies*).
   - Changed location badge strictly to **"San Jose, California"**.
4. **Our Story**:
   - Replaced placeholder story with the couple's real gate encounter & missed connection narrative from WithJoy.
   - Replaced photo cards:
     - Card 1: `early_days.png` labeled **"Early Days"**.
     - Card 2: `night_city.jpg` labeled **"Midwest to West Coast"**.
     - Card 3: `real_proposal.jpg` labeled **"The Proposal"**.
   - Removed generic quotes, card subtext, and bottom signature circle.
5. **Schedule & Venues**:
   - Removed private ceremony banner and timeline flow breakdowns.
   - Morning Ceremony: **Sikh Gurdwara San Jose** (`3636 Gurdwara Ave, San Jose, CA 95148`) — [Google Maps](https://maps.app.goo.gl/ipyjwzuP9xgx9JDq8).
   - Reception: **Atria Banquet Hall & Event Center** (`113 Bernal Rd, San Jose, CA 95119`) — [Google Maps](https://maps.app.goo.gl/5QNZdG3qEuojFZGV9).
6. **Registry & Forms**:
   - Updated "Sagan" to **"Shagun"** throughout.
   - Synchronized all form states, culture guides, and travel cards to the new Navy & Blush design language.

---

## Work Log: Revision 1.3 (Floral Motifs, Zelle Centering, RSVP Comments & Passcode Gate)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Password Protection Gate (`matcha`)**:
   - Built custom branded client/cookie authentication guard `components/PasswordGate.tsx` in Next.js.
   - Requires passcode `matcha` (case-insensitive) with 30-day session memory in cookies and localStorage.
   - Auto-unlock support via URL query parameter (`?pw=matcha`) for seamless physical invitation QR code scans.
2. **Visuals, Florals & Tapestry Textures**:
   - Built `components/FloralMotifs.tsx` featuring `LotusMotif`, `GarlandFlourish`, `CornerFiligree`, and `TapestryWatermark`.
   - Injected subtle Mughal jaali / Indian wedding trellis lattice background texture across the entire portal.
   - Added golden lotus crest and garland flourishes framing the Gurmukhi wedding blessing and section dividers.
3. **Registry Fixes & Vertical Alignment (Img 1)**:
   - Vertically centered the Zelle card with `items-center` on the grid and `md:self-center flex flex-col justify-center`.
   - Fixed independent copy triggers for Pavin's Venmo (`@pavin_virdee`), Rani's Venmo (`@ranisidhu`), and Zelle (`pavinvirdee@gmail.com`).
4. **RSVP Open Text Comments (Img 2)**:
   - Added open text comment input box under the "Events You Plan to Attend" checkboxes.
   - Mapped `eventComments` into form state, API payload, and Google Sheets notes synchronization.
5. **Code & Hydration Audit**:
   - Resolved React DOM hydration mismatch caused by `<p>` wrapping `<div>` in `HeroSection.tsx`.
   - Synchronized default `eventsAttending` checkboxes to match new ceremony titles.
   - Balanced lodging card grid in `TravelSection.tsx` for 2 featured hotels.

---

## Work Log: Revision 1.4 (Hero Photo Stacking Fix & Authentic Mughal Jaali Tapestry)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Hero Proposal Photo Stacking Fix**:
   - Resolved CSS stacking context where `-z-10` rendered the engagement photo behind `<main>`'s background fill.
   - Set `<section>` to `isolate` and photo container to `z-0`, ensuring `/images/hero_proposal.jpg` is vividly visible across the entire hero screen.
   - Refined luminous editorial veil so the couple shines through warmly while keeping text 100% legible.
2. **Authentic Mughal Jaali Tapestry Lattice**:
   - Replaced basic CSS radial dot grid with an authentic 60x60 repeating SVG Mughal Jaali (trellis lattice) pattern with interlocking arches and star geometry.
   - Applied seamlessly across the global portal background and passcode gate.
3. **High-Detail Lotus & Garland Flourishes**:
   - Upgraded lotus motif from a basic polygon to an authentic multi-petaled royal Indian wedding lotus flower in warm champagne gold.
   - Enabled lotus visibility across both mobile and desktop screens.
   - Framed all 4 corners of the countdown timer card with architectural jali corner filigrees.

---

## Work Log: Revision 1.5 (Solid Text Box Contrast, Photo Recentering & Gate Polish)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Solid Theme Color Fills for Contrast & Readability**:
   - Enclosed the Hero titles, Gurmukhi blessing, and countdown timer in an opaque, frosted luxury alabaster plaque (`bg-white/95`) with corner filigrees, eliminating pattern interference.
   - Added solid white fills (`bg-white`) to the Story narrative card, all 3 photo cards, Schedule sections, Culture guide drawers, Travel airport & hotel cards, Shagun payment cards, and RSVP form container.
   - Refined input backgrounds to solid `#FAF8F5` for crisp readability.
2. **Centered Rani & Pavin in "Early Days" Card (Img 1)**:
   - Adjusted object position from `object-top` to `object-[center_62%]`, centering Rani and Pavin squarely in the frame.
3. **Password Gate Polish**:
   - Cleaned passcode input placeholder strictly to `"Enter passcode"`, removing any explicit password hints.

---

## Work Log: Revision 1.6 (Hero Couple Photo Restoration, Watermark Layer Isolation & Card Opacity)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Hero Landing Couple Photo Restored & Vivid (Img 1)**:
   - Removed the heavy milky white wash overlay (`bg-background/55`) and jaali pattern from the hero background so the full-resolution wedding portrait (`/images/hero_proposal.jpg`) shines through with vibrant clarity.
   - Refined hero card styling to a delicate translucent glass frame (`bg-white/25 border border-white/60`) with corner filigrees, allowing Rani and Pavin's portrait to remain completely visible.
   - Preserved crisp contrast and text readability with high-legibility typography, drop shadows, and solid pill badges for Save-The-Date, Gurmukhi inscription, and Date/Location.
2. **Fixed Watermark Stacking Bug & Card Readability (Img 2)**:
   - Solved CSS stacking context bug by moving `TapestryWatermark` in `app/page.tsx` to a fixed background layer with negative z-index (`fixed inset-0 -z-10 pointer-events-none`).
   - Completely eliminated watermark lines bleeding through the Story narrative text and photo caption cards.
   - Verified 100% solid, crisp opaque fills (`bg-white`) on all text containers across the site.
3. **Site-Wide Background Consistency**:
   - Removed solid `bg-[#FAF8F5]` fills from `ScheduleSection` and `TravelSection` outer wrappers.
   - Ensured the Mughal jaali trellis pattern is seamlessly and consistently visible across all section gutters site-wide, with the Hero photo landing being the single intentional exception.

---

## Work Log: Revision 1.7 (Restored Mughal Jaali Lattice Background & Section Stacking)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Restored Global Mughal Jaali Trellis Pattern**:
   - Fixed the issue where wrapping `TapestryWatermark` in `-z-10` caused `<main>`'s solid background color (`bg-background`) to hide the pattern.
   - Positioned `TapestryWatermark` directly on `<main>` at `z-0 pointer-events-none` with its original calibrated champagne gold SVG opacity.
2. **Elevated All Content Sections to `relative z-10`**:
   - Added `relative z-10` to `StorySection`, `ScheduleSection`, `CultureGuideSection`, `TravelSection`, `RegistrySection`, and `RsvpForm`.
   - Content cards retain 100% solid opaque white fills (`bg-white`), perfectly covering the background pattern underneath them so text readability is pristine.
   - All gutters and whitespace across the entire site now vividly display the warm, regal Mughal jaali tapestry pattern.

---

## Work Log: Revision 1.8 (Audio Track Update to Ishq Hua - Ikky)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Updated Ambient Background Track**:
   - Swapped background audio to *Ishq Hua* by Ikky (`public/audio/ishq_hua_ikky.mp3`).
   - Updated audio source in `components/MusicPlayer.tsx` to `/audio/ishq_hua_ikky.mp3`.
   - Updated sound controller tooltip and accessibility title in `components/Navbar.tsx` to `Play Ishq Hua (Ikky)`.
2. **Updated Documentation**:
   - Updated `README.md`, `docs/ARCHITECTURE.md`, and `public/audio/README.md` to reference *Ishq Hua - Ikky*.

---

## Work Log: Revision 1.9 (Per-Event Attendance Table & RSVP Breakdown)
**Date**: September 13, 2026  
**Git Branch**: `main`

### Summary of Objectives
1. **Interactive Per-Event RSVP Table**:
   - Replaced the single party dropdown and event checkboxes with an elegant 3-column table:
     - **Guests**: Select 1–10 guests (smartly zeroed out & disabled when RSVP is "No").
     - **Event (June 19, 2027)**: Morning Wedding Ceremony (Gurdwara Sahib) & Evening Wedding Reception (Atria).
     - **RSVP**: Interactive status dropdown (`Yes`, `Maybe`, `No`) with dynamic color indicators (emerald green for Yes, amber for Maybe, soft rose for No).
2. **Dedicated Mobile Card Adaptation**:
   - On screens < 640px, gracefully converts into stacked per-event cards with side-by-side Guest and RSVP controls to eliminate horizontal scrolling while maintaining large touch targets.
3. **Underneath Attendance Comments Input**:
   - Added an open text field directly beneath the table for special guest notes, party member names, infant accommodations, or arrival times.
4. **Google Apps Script Ingestion (`Code.gs`) Upgrade**:
   - Added granular per-event columns: `Ceremony RSVP`, `Ceremony Guests`, `Reception RSVP`, `Reception Guests`, `Total Estimated Party`, and `Attendance Comments / Notes`.
   - Backward-compatible with existing Google Sheet submissions.
5. **Localhost Verification**:
   - Verified end-to-end on localhost:3000 across desktop (1440px) and mobile (375px) viewports with Playwright automated tests.

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

