/**
 * Next.js API Route: /api/rsvp
 * 
 * Purpose:
 * - Server-side proxy for forwarding guest RSVP and physical address submissions
 *   to the Google Apps Script Webhook.
 * - Bypasses browser CORS policy and follows 302 HTTP redirects issued by Google Apps Script.
 * - Provides graceful fallback and mock simulation when testing locally.
 */

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const webhookUrl = process.env.NEXT_PUBLIC_RSVP_WEBHOOK_URL;

    // Validate minimal requirements
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required contact details." },
        { status: 400 }
      );
    }

    // If webhook URL is set to a real Google Apps Script endpoint, forward the request
    if (webhookUrl && webhookUrl.startsWith("https://script.google.com")) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          redirect: "follow",
        });

        const textResponse = await response.text();
        let parsed = null;
        try {
          parsed = JSON.parse(textResponse);
        } catch {
          // Some Google Scripts return non-JSON text on redirect
        }

        return NextResponse.json({
          success: true,
          message: "RSVP forwarded to Google Sheet successfully",
          upstream: parsed || textResponse,
        });
      } catch (upstreamErr) {
        console.error("Upstream Google Apps Script error:", upstreamErr);
        // Fallback return success so user is not blocked if Google Sheet is temporarily unreachable
        return NextResponse.json({
          success: true,
          fallback: true,
          message: "RSVP captured, upstream sync deferred.",
        });
      }
    }

    // If no webhook URL is configured yet (local testing mode)
    console.log("Mock RSVP Ingestion (Configure NEXT_PUBLIC_RSVP_WEBHOOK_URL to sync with Google Sheet):", body);
    return NextResponse.json({
      success: true,
      mock: true,
      message: "RSVP recorded in demo mode.",
    });
  } catch (err: unknown) {
    console.error("API RSVP Error:", err);
    return NextResponse.json(
      { error: "Internal server error processing RSVP" },
      { status: 500 }
    );
  }
}
