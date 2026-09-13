import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raniandpavin.com"),
  title: "Rani & Pavin — June 19, 2027 | San Jose, CA",
  description:
    "Celebrating the Union of Rani Sidhu & Pavin Virdee. Saturday, June 19, 2027 in San Jose & the Bay Area, California. Save the date, explore event details, Gurdwara etiquette, travel, and soft RSVP.",
  keywords: [
    "Rani Sidhu",
    "Pavin Virdee",
    "Rani and Pavin Wedding",
    "Sikh Wedding",
    "Anand Karaj",
    "San Jose Gurdwara",
    "Bay Area Wedding",
  ],
  authors: [{ name: "Rani Sidhu & Pavin Virdee" }],
  openGraph: {
    title: "Rani & Pavin — June 19, 2027 | San Jose, CA",
    description: "Celebrating the Union of Rani Sidhu & Pavin Virdee • June 19, 2027 • San Jose, California",
    url: "https://raniandpavin.com",
    siteName: "Rani & Pavin Wedding",
    images: [
      {
        url: "/images/hero_proposal.jpg",
        width: 1200,
        height: 630,
        alt: "Rani Sidhu & Pavin Virdee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rani & Pavin — June 19, 2027",
    description: "Celebrating the Union of Rani Sidhu & Pavin Virdee • San Jose, California",
    images: ["/images/hero_proposal.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-background text-charcoal antialiased selection:bg-navy selection:text-background">
        {children}
      </body>
    </html>
  );
}
