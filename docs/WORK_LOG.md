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

