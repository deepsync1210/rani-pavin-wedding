# Rani & Pavin Wedding Website — Technical Architecture & Design Document

## 1. Overview
The Rani & Pavin Wedding portal is a server-rendered, statically optimized single-page web application engineered with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It is tailored to act as a high-elegance informational portal for ~500 wedding guests, a soft RSVP estimator, a physical mailing address collector, and a zero-fee cash registry.

---

## 2. Design System & Editorial Luxury Aesthetic
The visual identity aligns with modern editorial Sikh luxury, matching warm, cinematic aesthetics.

### Color Palette Tokens (Defined in `tailwind.config.ts` & `globals.css`)
| Token Name | Hex Value | Semantic Purpose |
| :--- | :--- | :--- |
| `background` | `#FAF8F5` | Warm Alabaster / Rice Paper primary background |
| `surface` | `#F3EDE2` | Soft Linen Cream for cards, containers, and badges |
| `champagne` | `#C5A880` | Muted Warm Champagne Gold for borders, icons, accents |
| `heritage` | `#1C3B34` | Deep Heritage Forest Green for buttons, active accents, headers |
| `charcoal` | `#18181B` | Charcoal Slate / Near-black for primary readable text |
| `mutedText` | `#71717A` | Muted Zinc Grey for secondary captions and subtitles |
| `borderLight` | `#E5DDCF` | Hairline Champagne for elegant structural dividers |

### Typography Tokens
- **Serif Heading Font**: `Cormorant Garamond` (Google Font loaded via `next/font/google`). Used for titles, couples' names, quotes, and timeline headers.
- **Sans Body & UI Font**: `Plus Jakarta Sans` (Google Font loaded via `next/font/google`). Used for forms, navigation, labels, and readable paragraph text.

---

## 3. Component Architecture

```
app/
 ├── layout.tsx                # Root layout, Google Fonts injection, SEO & OpenGraph metadata
 ├── page.tsx                  # Home page assembling all sections and audio state
 ├── globals.css               # Global utilities, glassmorphism, animations
 └── api/
      └── rsvp/
           └── route.ts        # Server-side proxy forwarding RSVPs to Google Apps Script

components/
 ├── Navbar.tsx                # Sticky glassmorphic navbar with R&P monogram & audio toggle
 ├── HeroSection.tsx           # Full-screen viewport hero, imagery, live countdown to June 19, 2027
 ├── StorySection.tsx          # Narrative (Chicago to Bay Area) & 3-photo asymmetrical masonry grid
 ├── ScheduleSection.tsx       # Anand Karaj & Reception cards, timeline breakdown, Google Calendar sync
 ├── CultureGuideSection.tsx   # Sikh Gurdwara etiquette accordion (Rumals, dress code, shoe removal, Langar)
 ├── TravelSection.tsx         # Airport guidance (SJC primary, SFO, OAK) and South Bay lodging
 ├── RegistrySection.tsx       # Zero-fee Sagan blessings, Venmo & Zelle 1-click copy with toast
 ├── RsvpForm.tsx              # Soft RSVP + physical mailing address collector with confetti
 ├── MusicPlayer.tsx           # Ambient background audio player (Kangna Acoustic Mix) with equalizer
 └── Footer.tsx                # Monogram, date, wedding hashtag (#RaniFoundHerPavin), copyright
```

---

## 4. Decoupled Google Sheets RSVP Ingestion Pipeline

### Why Decoupled Serverless Webhooks?
For an event of ~500 guests, maintaining a relational database (PostgreSQL, Supabase, etc.) introduces unnecessary infrastructure management, authentication overhead, and ongoing hosting costs. Instead, this architecture routes form submissions directly into the couple's **Master Google Spreadsheet**:

```
[User Browser]
       │
       ▼ (POST /api/rsvp)
[Next.js Server API Route]
       │
       ▼ (HTTPS POST with JSON payload + follows 302 redirects)
[Google Apps Script Webhook (Code.gs)]
       │
       ▼ (SpreadsheetApp.appendRow)
[Master Google Spreadsheet: RSVPs Sheet]
```

### Addressing Google Apps Script CORS & 302 Redirects
Google Apps Script webhooks execute a `302 Found` HTTP redirect when handling POST requests. Direct browser-to-Google-Script `fetch()` calls often trigger CORS errors or fail in modern web browsers when redirects strip origin headers. 

**Solution**: The Next.js `/api/rsvp` route handler acts as a server-to-server proxy. The browser posts to the same origin (`/api/rsvp`), and the Next.js server calls Google Apps Script with `redirect: "follow"`, guaranteeing 100% submission reliability without client-side CORS issues.

---

## 5. Audio Playback Strategy
Browsers enforce strict autoplay prevention policies that block unmuted audio without a prior user gesture.
- The `MusicPlayer` component attempts initial playback upon mount.
- If blocked, it attaches a one-time global interaction listener (`click`, `touchstart`) that activates playback on the user's first tap anywhere on the page.
- A persistent floating pill in the bottom right allows manual play/pause, displays an animated equalizer bar, and provides a direct link to the track on Spotify.
