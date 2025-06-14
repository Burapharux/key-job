class Strategy {
  execute(e) {
    throw new Error("Method not implemented.");
  }
}

class NewFormSubmissionStrategy extends Strategy {
  constructor(config) {
    super();
    this.outputTemplate = config.outputTemplate;
    this.fieldMap = config.fieldMap;
    this.sheet = SpreadsheetApp.openById(sheetId);
    this.sheetObj = this.sheet.getSheetByName(sheetName);
  }

  static getReducedItemResponses(itemResponses) {
    return itemResponses.reduce((acc, itemResponse) => {
      acc[itemResponse.getItem().getTitle()] = itemResponse.getResponse();
      return acc;
    }, {});
  }

  execute(e) {
    let formResponse = e.response;
    let itemResponses = formResponse.getItemResponses();
    const reducedItemResponses = NewFormSubmissionStrategy.getReducedItemResponses(itemResponses);

    // Build output string using template and fieldMap
    let output = this.outputTemplate;
    for (const [placeholder, fieldId] of Object.entries(this.fieldMap)) {
      output = output.replace(`{{${placeholder}}}`, reducedItemResponses[this.sheetObj.getRange(fieldId).getValue()] || "");
    }
    return output;
  }
}

class UpdateSheetStrategy extends Strategy {
  constructor(config) {
    super();
    this.outputTemplate = config.outputTemplate;
    this.fieldMap = config.fieldMap;
    this.targetColumn = config.targetColumn;
  }

  execute(e) {
    const sheet = e.source.getActiveSheet();
    const editedRow = e.range.getRow();
    const editedColumn = e.range.getColumn();

    if (editedColumn === this.targetColumn) {
      const rowData = sheet.getRange(editedRow, 1, 1, sheet.getLastColumn()).getValues()[0];
      let output = this.outputTemplate;
      for (const [placeholder, colIndex] of Object.entries(this.fieldMap)) {
        output = output.replace(`{{${placeholder}}}`, rowData[colIndex - 1] || "");
      }
      return output;
    }
    return undefined;
  }
}