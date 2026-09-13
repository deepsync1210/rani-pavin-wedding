# Rani Sidhu & Pavin Virdee Wedding Website

An editorial modern Sikh luxury wedding website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel** with custom domain mapping (`raniandpavin.com`) and zero-fee Google Sheets webhook RSVP & mailing address ingestion.

- **Wedding Date**: Saturday, June 19, 2027
- **Location**: San Jose & the Bay Area, California
- **Couple**: Rani Sidhu & Pavin Virdee
- **Primary Domain**: [https://raniandpavin.com](https://raniandpavin.com)
- **Master Planning Sheet**: [Google Sheets Link](https://docs.google.com/spreadsheets/d/1McD9Ms-SlecwR3OY6UtCJ3J8GMqvXcOx2tACVfOduhQ/edit?pli=1&gid=1181986301#gid=1181986301)

---

## Features & Components

1. **Sticky Glass Navigation**:
   - Monogram ligature (`R & P`), smooth anchor links (`#story`, `#schedule`, `#culture`, `#travel`, `#registry`, `#rsvp`), and live audio equalizer toggle.
2. **Hero Section & Countdown**:
   - Full viewport editorial hero banner with high-resolution photography.
   - Live real-time countdown timer to June 19, 2027.
3. **Our Story**:
   - Chicago to Bay Area narrative with 3-photo asymmetrical editorial masonry grid.
4. **Schedule At-A-Glance**:
   - Anand Karaj & Langar at the San Jose Gurdwara.
   - Wedding Reception at South Bay venue.
   - Private family pre-wedding ceremony note.
   - 1-Click "Add to Google Calendar".
5. **Sikh Cultural Guide & Gurdwara Etiquette**:
   - Interactive accordion for first-time guests covering head coverings (Rumāls), modest floor seating attire, shoe removal, strict alcohol/tobacco prohibition, and the meaning of Anand Karaj & Langar.
6. **Travel & Where to Stay**:
   - Recommended airports: Mineta San Jose International (SJC) primary (15-20 mins away), SFO, and OAK.
   - Hotel room block placeholders in San Jose / South Bay.
7. **Zero-Fee Sagan & Registry**:
   - Traditional Sagan blessings note (no boxed gifts).
   - "Honeymoon Adventure Fund" and "New Home Foundation".
   - Direct Venmo (`@pavin-virdee`) and Zelle 1-click clipboard copy.
8. **Soft RSVP & Physical Mailing Address Collector**:
   - Captures party count, attendance for June 19, 2027, dietary needs, song requests, notes, and full physical mailing address for formal paper invitation suites.
   - Confetti celebration upon submission (`canvas-confetti`).
   - Routed through Next.js server route `/api/rsvp` to Google Apps Script.
9. **Background Audio Player**:
   - Track: *Kangna (Acoustic Mix) - Dr Zeus*.
   - Auto-play on first visitor gesture, floating audio controller with equalizer animation, and direct Spotify link.

---

## Project Structure

```
├── app/
│   ├── api/rsvp/route.ts      # Server-side RSVP forwarder to Google Sheets
│   ├── globals.css            # Tailwind & luxury Sikh typography styling
│   ├── layout.tsx             # Root layout with Cormorant Garamond & Plus Jakarta Sans
│   └── page.tsx               # Main single-page landing site
├── components/
│   ├── CultureGuideSection.tsx# Sikh Gurdwara etiquette accordion
│   ├── Footer.tsx             # Monogram, hashtags, copyright
│   ├── HeroSection.tsx        # Hero banner & live countdown
│   ├── MusicPlayer.tsx        # Ambient audio player & equalizer
│   ├── Navbar.tsx             # Sticky glassmorphic navigation
│   ├── RegistrySection.tsx    # Zero-fee Venmo & Zelle Sagan cards
│   ├── RsvpForm.tsx           # Soft RSVP & Mailing address collector
│   ├── ScheduleSection.tsx    # Anand Karaj & Reception event cards
│   ├── StorySection.tsx       # Story narrative & 3-photo editorial grid
│   └── TravelSection.tsx      # Airports & South Bay lodging
├── google-apps-script/
│   └── Code.gs                # Webhook script for Google Sheet ingestion
├── public/
│   ├── audio/                 # Audio assets (kangna-acoustic.mp3)
│   └── images/                # WithJoy photography assets
├── tailwind.config.ts         # Custom luxury color tokens & font variables
└── package.json
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the local development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## Google Sheets Webhook Integration Setup

1. Open your [Master Wedding Spreadsheet](https://docs.google.com/spreadsheets/d/1McD9Ms-SlecwR3OY6UtCJ3J8GMqvXcOx2tACVfOduhQ/edit?pli=1&gid=1181986301#gid=1181986301).
2. Click **Extensions** > **Apps Script**.
3. Replace all contents in `Code.gs` with the code in [`google-apps-script/Code.gs`](./google-apps-script/Code.gs).
4. Click **Deploy** > **New deployment**.
5. Select type **Web app**.
6. Configuration:
   - **Description**: `RSVP Ingestion Webhook`
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: `Anyone`
7. Click **Deploy**, authorize access, and copy the Web App URL (ends in `/exec`).
8. Add this URL to `.env.local` and your Vercel project environment variables:
   ```env
   NEXT_PUBLIC_RSVP_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec"
   ```

---

## Vercel & Custom Domain Deployment

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete MVP landing page with Google Sheets RSVP and address integration"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com/) with GitHub account `deepsync1210`.
3. Click **Add New** > **Project** and select `rani-pavin-wedding`.
4. Add the `NEXT_PUBLIC_RSVP_WEBHOOK_URL` environment variable.
5. Click **Deploy**.
6. Once deployed, navigate to **Project Settings** > **Domains** and add:
   - `raniandpavin.com`
   - `www.raniandpavin.com`
7. In Squarespace DNS Settings for `raniandpavin.com`:
   - **A Record**: `@` points to `76.76.21.21`
   - **CNAME Record**: `www` points to `cname.vercel-dns.com`
   - Remove any previous 301/302 URL forwarding rules.
