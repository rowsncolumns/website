import { Sheet, TableView } from "@rowsncolumns/spreadsheet";

export const mockSheets: Sheet[] = [
  {
    title: "Sheet 1",
    sheetId: 1,
    rowCount: 1000,
    columnCount: 100,
    frozenColumnCount: 0,
    frozenRowCount: 0,
    columnMetadata: [
      null,
      null,
      null,
      null,
      { size: 104, resizedByUser: false },
    ],
    rowMetadata: [],
    conditionalFormats: [
      {
        ranges: [
          {
            startRowIndex: 2,
            endRowIndex: 2,
            startColumnIndex: 1,
            endColumnIndex: 2,
          },
        ],
        booleanRule: {
          condition: {
            type: "NUMBER_LESS",
            values: [
              {
                userEnteredValue: "0.5",
              },
            ],
          },
          format: {
            textFormat: {
              color: "red",
            },
          },
        },
      },
    ],
    bandedRanges: [],
  },
  {
    title: "Sheet 2",
    sheetId: 2,
    rowCount: 1000,
    columnCount: 100,
    frozenColumnCount: 0,
    frozenRowCount: 0,
    columnMetadata: [],
    rowMetadata: [],
  },
];

export const mockTables: TableView[] = [
  {
    id: 738655737,
    range: {
      startRowIndex: 3,
      startColumnIndex: 2,
      endColumnIndex: 18,
      endRowIndex: 56,
    },
    sheetId: 1,
    title: "Covid Data",
    columns: [
      { name: "date" },
      { name: "states" },
      {
        name: "% Negative",
        formula: "=[@negative]/SUM([@positive],[@negative])",
      },
      { name: "positive" },
      { name: "negative" },
      { name: "pending" },
      { name: "hospitalizedCurrently" },
      { name: "hospitalizedCumulative" },
      { name: "inIcuCurrently" },
      { name: "inIcuCumulative" },
      { name: "onVentilatorCurrently" },
      { name: "onVentilatorCumulative" },
      { name: "dateChecked" },
      { name: "death" },
      { name: "hospitalized" },
      { name: "totalTestResults" },
      { name: "lastModified" },
    ],
    filterSpecs: [],
    headerRow: true,
    filterButton: true,
    sortSpecs: [],
    showRowStripes: false,
  },
];
