import { SheetData } from "@rowsncolumns/spreadsheet-state";
import { sheetId } from "./mocks";
import { sheetInitialData } from "./sheetdata";

export const mockSheetdata: SheetData = {
  [sheetId]: sheetInitialData as any,
  "2": [
    null,
    null,
    {
      values: [null, null, null, {}],
    },
  ],
};
