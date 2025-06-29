const token = PropertiesService.getScriptProperties().getProperty('LINE_CHANNEL_ACCESS_TOKEN');
const tokenIt = PropertiesService.getScriptProperties().getProperty('LINE_ACCESS_TOKEN_IT');
const groupIdIT = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_IT');
const groupIdCleaning = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_CLEANING');

// Extract sheet and form IDs/names once
const sheetIdIT = PropertiesService.getScriptProperties().getProperty('SHEET_ID_IT');
const sheetNameIT = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_IT');
const formIdIT = PropertiesService.getScriptProperties().getProperty('FORM_ID_IT');

const sheetIdCleaning = PropertiesService.getScriptProperties().getProperty('SHEET_ID_CLEANING');
const sheetNameCleaning = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_CLEANING');
const formIdCleaning = PropertiesService.getScriptProperties().getProperty('FORM_ID_CLEANING');

const sheetIdFacility = PropertiesService.getScriptProperties().getProperty('SHEET_ID_FACILITY');
const sheetNameFacility = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_FACILITY');
const formIdFacility = PropertiesService.getScriptProperties().getProperty('FORM_ID_FACILITY');
const groupIdFacility = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_FACILITY');

const sheetIdIR = PropertiesService.getScriptProperties().getProperty('SHEET_ID_IR');
const sheetNameIR = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_IR');
const formIdIR = PropertiesService.getScriptProperties().getProperty('FORM_ID_IR');
const groupIdIR = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_IR');

const sheetIdMeeting = PropertiesService.getScriptProperties().getProperty('SHEET_ID_MEETING');
const sheetNameMeeting = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_MEETING');
const formIdMeeting = PropertiesService.getScriptProperties().getProperty('FORM_ID_MEETING');
const groupIdMeeting = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_MEETING');

const sheetIdLogistics = PropertiesService.getScriptProperties().getProperty('SHEET_ID_LOGISTICS');
const sheetNameLogistics = PropertiesService.getScriptProperties().getProperty('SHEET_NAME_LOGISTICS');
const formIdLogistics = PropertiesService.getScriptProperties().getProperty('FORM_ID_LOGISTICS');
const groupIdLogistics = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID_LOGISTICS');
const calendarIdLogistics = PropertiesService.getScriptProperties().getProperty('CALENDAR_ID_LOGISTICS');


const itSupportFormConfig = {
    outputTemplate: "ได้รับการแจ้งซ่อมต่อแผนกไอที: {{title}} ที่ห้อง/ตึก: {{room}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdIT + "/edit?usp=sharing",
    fieldMap: {
        title: 'B1',
        room: 'D1'
    },
    sheetId: sheetIdIT,
    sheetName: sheetNameIT,
    formId: formIdIT
};

const itSupportUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ของห้อง/ตึก {{place}} เป็นสถานะ {{status}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdIT + "/edit?usp=sharing",
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
    token: tokenIt,
    groupId: groupIdIT
};

const cleaningServiceFormConfig = {
    outputTemplate: "ได้รับการแจ้งต่อแผนกแม่บ้าน: {{title}} ที่: {{room}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdCleaning + "/edit?usp=sharing",
    fieldMap: {
        title: "B1",
        room: "C1"
    },
    sheetId: sheetIdCleaning,
    sheetName: sheetNameCleaning,
    formId: formIdCleaning
};

const cleaningServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ที่ {{place}} เป็นสถานะ {{status}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdCleaning + "/edit?usp=sharing",
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

const facilityServiceFormConfig = {
    outputTemplate: "ได้รับงานใหม่ {{title}} ที่ห้อง {{room}} ชั้น {{floor}} ตึก {{building}} สาขา {{branch}} แจ้งโดย {{requester}} มีความเร่งด่วน {{urgency}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdFacility + "/edit?usp=sharing",
    fieldMap: {
        title: "E1",
        room: "M1",
        floor: "L1",
        building: "K1",
        branch: "J1",
        urgency: "N1",
        requester: "F1"
    },
    sheetId: sheetIdFacility,
    sheetName: sheetNameFacility,
    formId: formIdFacility
};

const facilityServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ที่ห้อง {{room}} ชั้น {{floor}} ตึก {{building}} สาขา {{branch}} ได้ถูกรับแจ้งโดย {{responsible}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdFacility + "/edit?usp=sharing",
    fieldMap: {
        title: 6,
        room: 13,
        floor: 12,
        building: 11,
        branch: 10,
        responsible: 17
    },
    targetColumn: 17,
    sheetId: sheetIdFacility,
    sheetName: sheetNameFacility
};

const facilityServiceLineConfig = {
    token: token,
    groupId: groupIdFacility
};

const irServiceFormConfig = {
    outputTemplate: "ได้รับการแจ้งต่อฝ่าย IR: {{title}} รายละเอียด: {{info}} โดย: {{requester}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdIR + "/edit?usp=sharing",
    fieldMap: {
        title: "B1",
        info: "C1",
        requester: "H1"
    },
    sheetId: sheetIdIR,
    sheetName: sheetNameIR,
    formId: formIdIR
};

const irServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ที่ {{info}} เป็นสถานะ {{status}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdIR + "/edit?usp=sharing",
    fieldMap: {
        title: 2,
        info: 3,
        status: 9
    },
    targetColumn: 9,
    sheetId: sheetIdIR,
    sheetName: sheetNameIR
};

const irServiceLineConfig = {
    token: token,
    groupId: groupIdIR
};

const meetingServiceFormConfig = {
    outputTemplate: "ได้รับการแจ้งต่อฝ่ายประชุม: {{title}} เริ่มวันที่: {{startDate}} เวลา: {{startTime}} เสร็จวันที่: {{stopDate}} เวลา: {{stopTime}} โดย: {{requester}}\nสถานที่ประชุม: {{info}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdMeeting + "/edit?usp=sharing",
    fieldMap: {
        title: "B1",
        info: "C1",
        startDate: "E1",
        stopDate: "G1",
        startTime: "F1",
        stopTime: "H1",
        requester: "J1"
    },
    sheetId: sheetIdMeeting,
    sheetName: sheetNameMeeting,
    formId: formIdMeeting
};

const meetingServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตการจอง {{title}} ที่ {{info}} เป็นสถานะ {{status}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdMeeting + "/edit?usp=sharing",
    fieldMap: {
        title: 2,
        info: 3,
        status: 11
    },
    targetColumn: 11,
    sheetId: sheetIdMeeting,
    sheetName: sheetNameMeeting
};  

const meetingServiceLineConfig = {
    token: token,
    groupId: groupIdMeeting
};

const logisticsServiceFormConfig = {
    outputTemplate: "ได้รับการจอง: {{title}} วันที่: {{date}} โดย: {{requester}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdLogistics + "/edit?usp=sharing",
    fieldMap: {
        title: "B1",
        date: "C1",
        requester: "E1"
    },
    sheetId: sheetIdLogistics,
    sheetName: sheetNameLogistics,
    formId: formIdLogistics
};

const logisticsServiceUpdateSheetConfig = {
    outputTemplate: "อัพเดตการจอง {{title}} วันที่ {{date}} เป็นสถานะ {{status}}\n"+"https://docs.google.com/spreadsheets/d/" + sheetIdLogistics + "/edit?usp=sharing",
    fieldMap: {
        title: 2,
        date: 3,
        status: 6
    },
    targetColumn: 6,
    sheetId: sheetIdLogistics,
    sheetName: sheetNameLogistics
};

const logisticsServiceFormToCalendarConfig = {
    outputTemplate: "{{title}}|{{startDate}} {{startTime}}|{{requester}}",
    // Assuming startDate and startTime are in the format "YYYY-MM-DD" and "HH:mm"
    fieldMap: {
        title: "B1",
        startDate: "C1",
        startTime: "D1",
        requester: "E1"
    },
    sheetId: sheetIdLogistics,
    sheetName: sheetNameLogistics,
    formId: formIdLogistics,
    calendarId: calendarIdLogistics
};

const logisticsServiceLineConfig = {
    token: token,
    groupId: groupIdLogistics
};