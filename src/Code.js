// Load environment variables 
let notifier;
let lineSubscriber;

// Setup a trigger for form submission
function createItServiceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitItServiceTriggerHandler")
    .forForm(FormApp.openById(itSupportFormConfig.formId))
    .onFormSubmit()
    .create();
  console.log("Ran the createFormSubmitTrigger");
}

// Setup a trigger for sheet edit
function createItServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditItServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(itSupportUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}

function createCleaningServiceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitCleaningServiceTriggerHandler")
    .forForm(FormApp.openById(cleaningServiceFormConfig.formId))
    .onFormSubmit()
    .create();
  console.log("Ran the createCleaningServiceFormSubmitTrigger");
}

function createCleaningServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditCleaningServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(cleaningServiceUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}

// Initialize notifiers and subscribers
// Do not hesitate to modify this function if more subscribers are needed
function setUpNotifiers(token, groupId) {
  notifier = new Notifier();
  lineSubscriber = new LineSubscriber(token, groupId);
  notifier.subscribe(lineSubscriber);
}

// Wrapper for form submission event
function onFormSubmitItServiceTriggerHandler(e) {
  setUpNotifiers(itSupportLineConfig.token, itSupportLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(itSupportFormConfig));
  notifier.executeStrategy(e);
}

// Handler for sheet edit event
function onEditItServiceTriggerHandler(e) {
  setUpNotifiers(itSupportLineConfig.token, itSupportLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(itSupportUpdateSheetConfig));
  notifier.executeStrategy(e);
}

function onFormSubmitCleaningServiceTriggerHandler(e) {
  setUpNotifiers(cleaningServiceLineConfig.token, cleaningServiceLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(cleaningServiceFormConfig));
  notifier.executeStrategy(e);
}

function onEditCleaningServiceTriggerHandler(e) {
  setUpNotifiers(cleaningServiceLineConfig.token, cleaningServiceLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(cleaningServiceUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// Setup function to initialize everything
function setup() {
  setUpNotifiers();
  // Delete existing triggers to avoid duplicates
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  createCleaningServiceFormSubmitTrigger();
  createCleaningServiceSheetEditTrigger();
  createItServiceFormSubmitTrigger();
  createItServiceSheetEditTrigger();
  console.log("Setup completed. Triggers created for form submission and onEdit events.");
}
