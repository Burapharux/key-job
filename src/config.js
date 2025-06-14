const problemTitleCellName = PropertiesService.getScriptProperties().getProperty('PROBLEM_TITLE_CELL_NAME');
const statusColumnIndex = Number(PropertiesService.getScriptProperties().getProperty('STATUS_COLUMN'));
const problemTitleColumnIndex = Number(PropertiesService.getScriptProperties().getProperty('PROBLEM_TITLE_COLUMN'));
const placeCellName = PropertiesService.getScriptProperties().getProperty('PLACE_CELL_NAME');


const itSupportFormConfig = {
    outputTemplate: "ได้รับการแจ้งซ่อมต่อแผนกไอที: {{title}} ที่ห้อง/ตึก: {{room}}",
    fieldMap: {
        title: problemTitleCellName,        // Maps 'title' placeholder to the form field 'Summary'
        room: placeCellName // Maps 'department' placeholder to the form field 'Department'
    }
};

const itSupportUpdateSheetConfig = {
    outputTemplate: "อัพเดตงาน {{title}} ของห้อง/ตึก {{place}} เป็นสถานะ {{status}}",
    fieldMap: {
        title: problemTitleColumnIndex,   // Column index for the problem title (1-based)
        place: 4,             // Maps 'place' placeholder to the form field 'Place'
        status: statusColumnIndex   // Column index for the status (1-based)
    },
    targetColumn: statusColumnIndex // The column index that triggers the strategy (1-based)
};