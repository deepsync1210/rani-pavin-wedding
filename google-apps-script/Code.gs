/**
 * Rani & Pavin Wedding RSVP Webhook Handler
 * Target Google Sheet: https://docs.google.com/spreadsheets/d/1McD9Ms-SlecwR3OY6UtCJ3J8GMqvXcOx2tACVfOduhQ/edit
 * 
 * Instructions:
 * 1. Open your Master Wedding Spreadsheet in Google Sheets.
 * 2. Click Extensions > Apps Script.
 * 3. Replace all contents in Code.gs with this script.
 * 4. Click 'Deploy' > 'New deployment'.
 * 5. Select type: 'Web app'.
 * 6. Configuration:
 *    - Description: "RSVP Ingestion Webhook"
 *    - Execute as: "Me (your google account)"
 *    - Who has access: "Anyone"
 * 7. Click Deploy, Authorize access, and copy the Web App URL (ends in /exec).
 * 8. Set NEXT_PUBLIC_RSVP_WEBHOOK_URL="<your_copied_url>" in .env.local and in Vercel environment variables.
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("RSVPs") || ss.getActiveSheet();
    
    // Ensure header row exists if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email",
        "Phone",
        "Guest Count",
        "Events Attending",
        "Street Address",
        "Apt / Suite",
        "City",
        "State",
        "ZIP / Postal Code",
        "Country",
        "Dietary Restrictions",
        "Song Request",
        "Notes / Blessings"
      ]);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.guestCount || 1,
      data.eventsAttending || "",
      data.streetAddress || "",
      data.aptSuite || "",
      data.city || "",
      data.state || "",
      data.zipCode || "",
      data.country || "USA",
      data.dietaryRestrictions || "None",
      data.songRequest || "",
      data.notes || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "RSVP recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "alive", message: "Rani & Pavin RSVP Webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
