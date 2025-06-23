// Load environment variables 
let notifier;
let lineSubscriber;

// Initialize notifiers and subscribers
// Do not hesitate to modify this function if more subscribers are needed
function setUpNotifiers(token, groupId) {
  notifier = new Notifier();
  lineSubscriber = new LineSubscriber(token, groupId);
  notifier.subscribe(lineSubscriber);
}

// IT Service
function createItServiceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitItServiceTriggerHandler")
    .forForm(FormApp.openById(itSupportFormConfig.formId))
    .onFormSubmit()
    .create();
  Logger.log("Ran the createFormSubmitTrigger");
}
function createItServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditItServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(itSupportUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}
function onFormSubmitItServiceTriggerHandler(e) {
  setUpNotifiers(itSupportLineConfig.token, itSupportLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(itSupportFormConfig));
  notifier.executeStrategy(e);
}
function onEditItServiceTriggerHandler(e) {
  setUpNotifiers(itSupportLineConfig.token, itSupportLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(itSupportUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// Cleaning Service
function createCleaningServiceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitCleaningServiceTriggerHandler")
    .forForm(FormApp.openById(cleaningServiceFormConfig.formId))
    .onFormSubmit()
    .create();
  Logger.log("Ran the createCleaningServiceFormSubmitTrigger");
}
function createCleaningServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditCleaningServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(cleaningServiceUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
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

// Facility Service
function createFacilityServiceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitFacilityServiceTriggerHandler")
    .forForm(FormApp.openById(facilityServiceFormConfig.formId))
    .onFormSubmit()
    .create();
  Logger.log("Ran the createFacilityServiceFormSubmitTrigger");
}
function createFacilityServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditFacilityServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(facilityServiceUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}
function onFormSubmitFacilityServiceTriggerHandler(e) {
  setUpNotifiers(facilityServiceLineConfig.token, facilityServiceLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(facilityServiceFormConfig));
  notifier.executeStrategy(e);
}
function onEditFacilityServiceTriggerHandler(e) {
  setUpNotifiers(facilityServiceLineConfig.token, facilityServiceLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(facilityServiceUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// IR Service
function createIRserviceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitIRSericeTriggerHandler")
    .forForm(FormApp.openById(irServiceFormConfig.formId))
    .onFormSubmit()
    .create();
  Logger.log("Ran the createIRserviceFormSubmitTrigger");
}
function createIRserviceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditIRServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(irServiceUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}
function onFormSubmitIRSericeTriggerHandler(e) {
  setUpNotifiers(irServiceLineConfig.token, irServiceLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(irServiceFormConfig));
  notifier.executeStrategy(e);
}
function onEditIRServiceTriggerHandler(e) {
  setUpNotifiers(irServiceLineConfig.token, irServiceLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(irServiceUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// Meeting Service
function createMeetingRoomFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitMeetingServiceTriggerHandler")
    .forForm(FormApp.openById(meetingServiceFormConfig.formId))
    .onFormSubmit()
    .create();
  Logger.log("Ran the createMeetingRoomFormSubmitTrigger");
}
function createMeetingServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditMeetingServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(meetingServiceUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}
function onFormSubmitMeetingServiceTriggerHandler(e) {
  setUpNotifiers(meetingServiceLineConfig.token, meetingServiceLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(meetingServiceFormConfig));
  notifier.executeStrategy(e);
}
function onEditMeetingServiceTriggerHandler(e) {
  setUpNotifiers(meetingServiceLineConfig.token, meetingServiceLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(meetingServiceUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// Logistics Service
function createLogisticsServiceFormSubmitTrigger() {
  ScriptApp.newTrigger("onFormSubmitLogisticsServiceTriggerHandler")
    .forForm(FormApp.openById(logisticsServiceFormConfig.formId))
    .onFormSubmit()
    .create();
  Logger.log("Ran the createLogisticsServiceFormSubmitTrigger");
}
function createLogisticsServiceSheetEditTrigger() {
  ScriptApp.newTrigger('onEditLogisticsServiceTriggerHandler')
    .forSpreadsheet(SpreadsheetApp.openById(logisticsServiceUpdateSheetConfig.sheetId))
    .onEdit()
    .create();
  Logger.log('Trigger created successfully.');
}
function onFormSubmitLogisticsServiceTriggerHandler(e) {
  setUpNotifiers(logisticsServiceLineConfig.token, logisticsServiceLineConfig.groupId);
  notifier.setStrategy(new NewFormSubmissionStrategy(logisticsServiceFormConfig));
  notifier.executeStrategy(e);
}
function onEditLogisticsServiceTriggerHandler(e) {
  setUpNotifiers(logisticsServiceLineConfig.token, logisticsServiceLineConfig.groupId);
  notifier.setStrategy(new UpdateSheetStrategy(logisticsServiceUpdateSheetConfig));
  notifier.executeStrategy(e);
}

// Setup function to initialize everything
function setup() {
  // Delete existing triggers to avoid duplicates
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  createCleaningServiceFormSubmitTrigger();
  createCleaningServiceSheetEditTrigger();
  createItServiceFormSubmitTrigger();
  createItServiceSheetEditTrigger();
  createFacilityServiceFormSubmitTrigger();
  // createFacilityServiceSheetEditTrigger();
  createIRserviceFormSubmitTrigger();
  createIRserviceSheetEditTrigger();
  createMeetingRoomFormSubmitTrigger();
  createMeetingServiceSheetEditTrigger();
  createLogisticsServiceFormSubmitTrigger();
  createLogisticsServiceSheetEditTrigger();
  Logger.log("Setup completed. Triggers created for form submission and onEdit events.");
}
