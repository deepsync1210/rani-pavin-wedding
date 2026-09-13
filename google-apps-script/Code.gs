/**
 * ==============================================================================
 * Rani & Pavin Wedding — Website RSVP & Address Ingestion Webhook
 * ==============================================================================
 * 
 * HOW THIS WORKS:
 * - This script automatically writes submissions to a dedicated tab named:
 *   "Website RSVPs"
 * - If the "Website RSVPs" tab does not exist, the script automatically creates
 *   it, styles the headers with bold text, colors the tab, and freezes the top row.
 * - Your master planning tabs and existing formulas are NEVER overwritten or altered!
 * 
 * ==============================================================================
 * STEP-BY-STEP SETUP INSTRUCTIONS:
 * ==============================================================================
 * 
 * OPTION A: Deploy directly inside your Master Wedding Spreadsheet
 * ---------------------------------------------------------------
 * 1. Open your Master Spreadsheet:
 *    https://docs.google.com/spreadsheets/d/1McD9Ms-SlecwR3OY6UtCJ3J8GMqvXcOx2tACVfOduhQ/edit
 * 2. In the top menu, click Extensions > Apps Script.
 * 3. Delete any code currently in the editor and paste THIS ENTIRE FILE.
 * 4. Click the Save icon (floppy disk).
 * 5. Click the blue "Deploy" button (top right) > "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Set configuration:
 *    - Description: "Website RSVP Ingestion Webhook"
 *    - Execute as: "Me (your Google email)"
 *    - Who has access: "Anyone" (Required so the website can submit without login)
 * 8. Click "Deploy".
 * 9. Click "Authorize access" > Choose your Google account > Click "Advanced" > Click "Go to Untitled project (unsafe)".
 * 10. Copy the Web App URL (ends in /exec).
 * 11. Add it to .env.local and Vercel environment variables as NEXT_PUBLIC_RSVP_WEBHOOK_URL.
 * 
 * OPTION B: Deploy in a Brand-New Standalone Spreadsheet
 * ------------------------------------------------------
 * If you prefer keeping everything 100% physically separated from the master sheet:
 * 1. Go to sheets.google.com and create a new blank spreadsheet called:
 *    "Rani & Pavin — Website RSVPs & Addresses"
 * 2. Follow Steps 2 through 11 above on that new spreadsheet!
 * ==============================================================================
 */

var TARGET_TAB_NAME = "Website RSVPs";

function getOrCreateTargetSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(TARGET_TAB_NAME);

  if (!sheet) {
    // Create dedicated clean tab to prevent touching existing tabs
    sheet = ss.insertSheet(TARGET_TAB_NAME);
    sheet.setTabColor("#1C3B34"); // Heritage green tab color
  }

  // If header row does not exist, initialize it
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp (PST)",
      "Full Name",
      "Email Address",
      "Mobile Phone",
      "Total Party Count",
      "Events Attending (June 19, 2027)",
      "Street Address",
      "Apt / Suite / Unit",
      "City",
      "State / Province",
      "ZIP / Postal Code",
      "Country",
      "Dietary Restrictions",
      "DJ Song Request",
      "Notes & Blessings"
    ];

    sheet.appendRow(headers);

    // Style the header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1C3B34");
    headerRange.setFontColor("#FAF8F5");
    headerRange.setFontFamily("Arial");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function doPost(e) {
  try {
    var sheet = getOrCreateTargetSheet();
    var data = {};
    
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var timestamp = Utilities.formatDate(
      new Date(),
      "America/Los_Angeles",
      "yyyy-MM-dd HH:mm:ss"
    );

    sheet.appendRow([
      timestamp,
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
      data.country || "United States",
      data.dietaryRestrictions || "None",
      data.songRequest || "",
      data.notes || ""
    ]);

    // Format new row styling
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, 15);
    rowRange.setFontFamily("Arial");
    rowRange.setVerticalAlignment("middle");

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        message: "RSVP recorded successfully in " + TARGET_TAB_NAME,
        row: lastRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        message: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "alive",
      targetTab: TARGET_TAB_NAME,
      message: "Rani & Pavin RSVP Webhook is ready and listening."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
