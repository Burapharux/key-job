const token = PropertiesService.getScriptProperties().getProperty('LINE_CHANNEL_ACCESS_TOKEN');
const groupIdIT = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_IT');
const groupIdCleaning = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_CLEANING');

// Extract sheet and form IDs/names once
const sheetIdIT = PropertiesService.getScriptProperties().getProperty('SHEET_ID_IT');
const sheetNameIT = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_IT');
const formIdIT = PropertiesService.getScriptProperties().getProperty('FORM_ID_IT');

const sheetIdCleaning = PropertiesService.getScriptProperties().getProperty('SHEET_ID_CLEANING');
const sheetNameCleaning = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_CLEANING');
const formIdCleaning = PropertiesService.getScriptProperties().getProperty('FORM_ID_CLEANING');

const itSupportFormConfig = {
    outputTemplate: "ได้รับการแจ้งซ่อมต่อแผนกไอที: {{title}} ที่ห้อง/ตึก: {{room}}",
    fieldMap: {
        title: 'B1',
        room: 'D1'
    },
    sheetId: sheetIdIT,
    sheetName: sheetNameIT,
    formId: formIdIT
};

const itSupportUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ของห้อง/ตึก {{place}} เป็นสถานะ {{status}}",
    fieldMap: {
        title: 2,
        place: 4,
        status: 9
    },
    targetColumn: 9,
    sheetId: sheetIdIT,
    sheetName: sheetNameIT
};

const itSupportLineConfig = {
    token: token,
    groupId: groupIdIT
};

const cleaningServiceFormConfig = {
    outputTemplate: "ได้รับการแจ้งต่อแผนกแม่บ้าน: {{title}} ที่: {{room}}",
    fieldMap: {
        title: "B1",
        room: "C1"
    },
    sheetId: sheetIdCleaning,
    sheetName: sheetNameCleaning,
    formId: formIdCleaning
};

const cleaningServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ที่ {{place}} เป็นสถานะ {{status}}",
    fieldMap: {
        title: 2,
        place: 3,
        status: 6
    },
    targetColumn: 6,
    sheetId: sheetIdCleaning,
    sheetName: sheetNameCleaning
};

const cleaningServiceLineConfig = {
    token: token,
    groupId: groupIdCleaning
};