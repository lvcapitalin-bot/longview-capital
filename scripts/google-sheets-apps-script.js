/**
 * LONGVIEW CAPITAL - GOOGLE SHEETS LEAD COLLECTOR
 * =========================================================================
 * This Google Apps Script automatically captures inquiries from lvcapital.in
 * and appends them into your Google Sheet in real time.
 * 
 * INSTRUCTIONS TO SET UP:
 * 1. Open Google Sheets (https://sheets.new) while logged into lvcapital.in@gmail.com
 * 2. Name your sheet: "Longview Capital - Website Inquiries"
 * 3. Click Extensions > Apps Script in the top menu.
 * 4. Delete whatever code is there and paste this entire file.
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Set:
 *    - Description: "Longview Capital Leads"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone"  <-- IMPORTANT!
 * 8. Click "Deploy".
 * 9. Authorize access if prompted.
 * 10. Copy the "Web app URL" (starts with https://script.google.com/macros/s/...)
 * 11. Add it to Vercel as environment variable: GOOGLE_SHEETS_WEBHOOK_URL
 * =========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent writes

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // 1. If sheet is brand new, create styled professional headers
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Date & Time (IST)",
        "Investor Name",
        "Mobile Number",
        "Email Address",
        "City",
        "Service Interest",
        "Investment Experience",
        "Form Source",
        "Message / Requirement",
        "Lead Status"
      ];
      sheet.appendRow(headers);

      // Style headers in Longview Capital Navy (#102542) & Gold/Ivory (#FAF8F5)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#102542");
      headerRange.setFontColor("#FAF8F5");
      headerRange.setFontSize(10);
      sheet.setFrozenRows(1);
    }

    // 2. Parse incoming payload
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");
    var name = data.name || data.fullName || "";
    var mobile = data.mobile || "";
    var email = data.email || "";
    var city = data.city || "Not Specified";
    var interest = data.interest || "General";
    var experience = data.investmentExperience || "Not Specified";
    var formType = data.formType || "Website";
    var message = data.message || "None";
    var status = "New Lead";

    // 3. Append the row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      mobile,
      email,
      city,
      interest,
      experience,
      formType,
      message,
      status
    ]);

    // 4. Auto-resize columns to fit content cleanly
    sheet.autoResizeColumns(1, 10);

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Lead recorded in Google Sheets successfully",
      name: name
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Simple health check endpoint when accessed in browser
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "Longview Capital Google Sheets Webhook",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
