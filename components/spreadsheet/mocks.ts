import { Sheet } from "@rowsncolumns/spreadsheet";

export const mockSheets: Sheet[] = [
  {
    title: "Sheet 1",
    sheetId: 1,
    rowCount: 1_000,
    columnCount: 100,
    frozenColumnCount: 0,
    frozenRowCount: 0,
    columnMetadata: [],
    rowMetadata: [],
    conditionalFormats: [],
  },
  {
    title: "Sheet 2",
    sheetId: 2,
    rowCount: 1_000,
    columnCount: 100,
    frozenColumnCount: 0,
    frozenRowCount: 0,
    columnMetadata: [],
    rowMetadata: [],
  },
];
