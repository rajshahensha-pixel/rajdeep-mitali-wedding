const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'RSVP';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp','Guest Name','Attendance','Number of Guests','Message','Source'
      ]);
    }

    const p = e.parameter || {};
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.attendance || '',
      p.guests || '1',
      p.message || '',
      'Wedding Website'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Rajdeep & Mitali RSVP endpoint is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}
