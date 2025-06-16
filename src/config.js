const token = PropertiesService.getScriptProperties().getProperty('LINE_CHANNEL_ACCESS_TOKEN');
const groupIdIT = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_IT');
const groupIdCleaning = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_CLEANING');


const itSupportFormConfig = {
    outputTemplate: "ได้รับการแจ้งซ่อมต่อแผนกไอที: {{title}} ที่ห้อง/ตึก: {{room}}",
    fieldMap: {
        title: 'B1',        // Maps 'title' placeholder to the form field 'Summary'
        room: 'D1' // Maps 'department' placeholder to the form field 'Department'
    },
    sheetId: PropertiesService.getScriptProperties().getProperty('SHEET_ID_IT'), // The ID of the Google Sheet
    sheetName: PropertiesService.getScriptProperties().getProperty('SHEET_NAME_IT'), // The name of the Google Sheet
    formId: PropertiesService.getScriptProperties().getProperty('FORM_ID_IT') // The ID of the Google Form
};

const itSupportUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ของห้อง/ตึก {{place}} เป็นสถานะ {{status}}",
    fieldMap: {
        title: 2,   // Column index for the problem title (1-based)
        place: 4,             // Maps 'place' placeholder to the form field 'Place'
        status: 9   // Column index for the status (1-based)
    },
    targetColumn: 9, // The column index that triggers the strategy (1-based)
    sheetId: PropertiesService.getScriptProperties().getProperty('SHEET_ID_IT'), // The ID of the Google Sheet
    sheetName: PropertiesService.getScriptProperties().getProperty('SHEET_NAME_IT') // The name of the Google Sheet
};

const itSupportLineConfig = {
    token: token, // The LINE channel access token
    groupId: groupIdIT // The LINE group ID to send messages to
};

const cleaningServiceFormConfig = {
    outputTemplate: "ได้รับการแจ้งต่อแผนกแม่บ้าน: {{title}} ที่: {{room}}",
    fieldMap: {
        title: "B1",        // Maps 'title' placeholder to the form field 'Summary'
        room: "C1" // Maps 'department' placeholder to the form field 'Department'
    },
    sheetId: PropertiesService.getScriptProperties().getProperty('SHEET_ID_CLEANING'), // The ID of the Google Sheet
    sheetName: PropertiesService.getScriptProperties().getProperty('SHEET_NAME_CLEANING'), // The name of the Google Sheet
    formId: PropertiesService.getScriptProperties().getProperty('FORM_ID_CLEANING') // The ID of the Google Form
};

const cleaningServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ที่ {{place}} เป็นสถานะ {{status}}",
    fieldMap: {
        title: 2,   // Column index for the problem title (1-based)
        place: 3,             // Maps 'place' placeholder to the form field 'Place'
        status: 6   // Column index for the status (1-based)
    },
    targetColumn: 6, // The column index that triggers the strategy (1-based)
    sheetId: PropertiesService.getScriptProperties().getProperty('SHEET_ID_CLEANING'), // The ID of the Google Sheet
    sheetName: PropertiesService.getScriptProperties().getProperty('SHEET_NAME_CLEANING')
};

const cleaningServiceLineConfig = {
    token: token, // The LINE channel access token
    groupId: groupIdCleaning // The LINE group ID to send messages to
};