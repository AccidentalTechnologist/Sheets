// This will add a custom menu to your Google sheet
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('My Toolbox') // Name of the menu
    .addItem('Add Date', 'CurrentDate') // Menu item that runs your function
    .addItem('Add Time', 'CurrentTime') // Menu item that runs your function    
    .addToUi();
}

function CurrentTime() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getActiveCell();
  const now = new Date();
  cell.setValue(Utilities.formatDate(now, Session.getScriptTimeZone(), 'HH:mm:ss'));  // e.g. 14:23:05
}

function CurrentDate() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getActiveCell();
  const now = new Date();
  cell.setValue(Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd'));  // <-- format: 2025-05-31
}