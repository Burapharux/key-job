// Load environment variables (simulating a .env)
const token = PropertiesService.getScriptProperties().getProperty('LINE_CHANNEL_ACCESS_TOKEN');
const groupId = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID');
const sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
const sheetName = PropertiesService.getScriptProperties().getProperty('SHEET_NAME');
const problemTitleCellName = PropertiesService.getScriptProperties().getProperty('PROBLEM_TITLE_CELL_NAME');
const statusColumnIndex = Number(PropertiesService.getScriptProperties().getProperty('STATUS_COLUMN'));
const problemTitleColumnIndex = Number(PropertiesService.getScriptProperties().getProperty('PROBLEM_TITLE_COLUMN'));
const placeCellName = PropertiesService.getScriptProperties().getProperty('PLACE_CELL_NAME');
const formId = PropertiesService.getScriptProperties().getProperty('FORM_ID');

let notifier;
let lineSubscriber;

// Setup a trigger
function createFormSubmitTrigger() {
  let triggers = ScriptApp.getProjectTriggers();
  if (triggers.length > 0) return console.log("Please remove existing triggers before creating a new one.");

  ScriptApp.newTrigger("wrappedOnFormSubmit").forForm(FormApp.openById(formId)).onFormSubmit().create();
  console.log("Ran the createFormSubmitTrigger");
}

function createSheetEditTrigger() {
  // Check if the trigger already exists to avoid duplicates
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === 'onEditTriggerHandler') {
      Logger.log('Trigger already exists. Skipping creation.');
      return; // Exit if this trigger already exists
    }
  }
  
  // Create the trigger for the onEdit event
  ScriptApp.newTrigger('onEditTriggerHandler')
           .forSpreadsheet(SpreadsheetApp.openById(sheetId)) // Set the trigger for the specific spreadsheet
           .onEdit()
           .create();
  
  Logger.log('Trigger created successfully.');
}

function setUpNotifiers() {
  notifier = new Notifier();
  lineSubscriber = new LineSubscriber(token, groupId);
  notifier.subscribe(lineSubscriber);
}

// Wrapper function to handle form submission
function wrappedOnFormSubmit(e) {
  setUpNotifiers();
  const bugReportFormConfig = {
    outputTemplate: "ได้รับการแจ้งซ่อมต่อแผนกไอที: {{title}} ที่ห้อง/ตึก: {{room}}",
    fieldMap: {
      title: problemTitleCellName,        // Maps 'title' placeholder to the form field 'Summary'
      room: placeCellName // Maps 'department' placeholder to the form field 'Department'
    }
  };
  notifier.setStrategy(new NewFormSubmissionStrategy(bugReportFormConfig));
  notifier.executeStrategy(e);
}

function onEditTriggerHandler(e) {
  setUpNotifiers();
  const updateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ของห้อง/ตึก {{place}} เป็นสถานะ {{status}}",
    fieldMap: {
      title: problemTitleColumnIndex,   // Column index for the problem title (1-based)
      place: 4,             // Maps 'place' placeholder to the form field 'Place'
      status: statusColumnIndex   // Column index for the status (1-based)
    },
    targetColumn: statusColumnIndex // The column index that triggers the strategy (1-based)
  };
  notifier.setStrategy(new UpdateSheetStrategy(updateSheetConfig));
  notifier.executeStrategy(e);
}

function setup() {
  setUpNotifiers();
  createFormSubmitTrigger();
  createSheetEditTrigger();
  console.log("Setup completed. Triggers created for form submission and onEdit events.");
}
