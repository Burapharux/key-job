// Load environment variables (simulating a .env)
const token = PropertiesService.getScriptProperties().getProperty('LINE_CHANNEL_ACCESS_TOKEN');
const groupId = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID');

let notifier;
let lineSubscriber;

// Setup a trigger for form submission
function createItServiceFormSubmitTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  if (triggers.length > 0) {
    console.log("Please remove existing triggers before creating a new one.");
    return;
  }
  ScriptApp.newTrigger("onFormSubmitItServiceTriggerHandler")
    .forForm(FormApp.openById(itSupportFormConfig.formId))
    .onFormSubmit()
    .create();
  console.log("Ran the createFormSubmitTrigger");
}

// Setup a trigger for sheet edit
function createItServiceSheetEditTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === 'onEditItServiceTriggerHandler') {
      Logger.log('Trigger already exists. Skipping creation.');
      return;
    }
  }
  ScriptApp.newTrigger('onEditItServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(itSupportUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}

// Initialize notifiers and subscribers
function setUpNotifiers() {
  notifier = new Notifier();
  lineSubscriber = new LineSubscriber(token, groupId);
  notifier.subscribe(lineSubscriber);
}

// Wrapper for form submission event
function onFormSubmitItServiceTriggerHandler(e) {
  setUpNotifiers();
  notifier.setStrategy(new NewFormSubmissionStrategy(itSupportFormConfig));
  notifier.executeStrategy(e);
}

// Handler for sheet edit event
function onEditItServiceTriggerHandler(e) {
  setUpNotifiers();
  notifier.setStrategy(new UpdateSheetStrategy(itSupportUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// Setup function to initialize everything
function setup() {
  setUpNotifiers();
  createItServiceFormSubmitTrigger();
  createItServiceSheetEditTrigger();
  console.log("Setup completed. Triggers created for form submission and onEdit events.");
}
