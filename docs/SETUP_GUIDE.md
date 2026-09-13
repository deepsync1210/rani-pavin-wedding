# Rani & Pavin Wedding Website — Setup & Deployment Guide

## 1. Local Development Setup

### Prerequisites
- **Node.js**: v18+ or v20 LTS recommended.
- **Git**: Installed and authenticated.

### Running Locally
```bash
# 1. Clone the repository (if not already cloned)
git clone https://github.com/deepsync1210/rani-pavin-wedding.git
cd rani-pavin-wedding

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 2. Master Google Spreadsheet Webhook Deployment

To connect the soft RSVP and address intake form directly to your [Master Wedding Spreadsheet](https://docs.google.com/spreadsheets/d/1McD9Ms-SlecwR3OY6UtCJ3J8GMqvXcOx2tACVfOduhQ/edit?pli=1&gid=1181986301#gid=1181986301):

1. Open the Google Spreadsheet in your web browser.
2. In the top menu, navigate to **Extensions** > **Apps Script**.
3. Clear out any existing placeholder code in `Code.gs`.
4. Copy and paste the complete code from [`google-apps-script/Code.gs`](../google-apps-script/Code.gs).
5. In the top right, click the blue **Deploy** button > **New deployment**.
6. Click the gear icon next to "Select type" and choose **Web app**.
7. Fill in the deployment details:
   - **Description**: `RSVP and Address Ingestion Webhook`
   - **Execute as**: `Me (<your-email>@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: allows the server webhook to post data)*
8. Click **Deploy**.
9. If prompted, click **Authorize access**, select your Google account, click **Advanced**, and then click **Go to Untitled project (unsafe)** to grant spreadsheet write permissions.
10. Copy the generated **Web app URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`).
11. Update your local `.env.local` file:
    ```env
    NEXT_PUBLIC_RSVP_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec"
    ```

---

## 3. Vercel Production Deployment & Domain Mapping

### Step 1: Deploy on Vercel
1. Sign in to [Vercel](https://vercel.com/) with GitHub account `deepsync1210`.
2. Click **Add New** > **Project**.
3. Select `rani-pavin-wedding` from your GitHub repository list.
4. In the **Environment Variables** section, add:
   - **Name**: `NEXT_PUBLIC_RSVP_WEBHOOK_URL`
   - **Value**: *(Your Google Apps Script Web App URL from Step 2)*
5. Click **Deploy**.

### Step 2: Custom Domain Mapping (`raniandpavin.com`)
1. In Vercel, go to **Project Settings** > **Domains**.
2. Add `raniandpavin.com` and `www.raniandpavin.com`.
3. Log in to your **Squarespace Domains** management panel for `raniandpavin.com`.
4. Go to **DNS Settings** and configure:
   | Record Type | Host | Points To | TTL |
   | :--- | :--- | :--- | :--- |
   | `A` | `@` | `76.76.21.21` | 3600 (or Default) |
   | `CNAME` | `www` | `cname.vercel-dns.com` | 3600 (or Default) |
5. In Squarespace, remove any older 301 or 302 URL redirects that might conflict with the DNS A record.
6. Once configured, Vercel will automatically provision a free Let's Encrypt SSL/TLS certificate within 15–30 minutes.

---

## 4. Replacing Background Audio or Images

### Background Audio
- Place your audio file in `public/audio/kangna-acoustic.mp3`.
- The `MusicPlayer` component automatically references `/audio/kangna-acoustic.mp3`.

### Images
- Place new photos in `public/images/`.
- Update references in `components/HeroSection.tsx` and `components/StorySection.tsx`.
