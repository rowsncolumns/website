import {
  ConditionalFormatRule,
  Sheet,
  TableView,
} from "@rowsncolumns/spreadsheet";
import { uuid } from "@rowsncolumns/utils";
export const sheetId = 1;

export const mockSheets: Sheet[] = [
  {
    title: "Sheet 1",
    sheetId,
    rowCount: 1600,
    columnCount: 100,
    frozenColumnCount: 0,
    frozenRowCount: 0,
    columnMetadata: [
      null,
      null,
      {
        size: 135,
        resizedByUser: true,
      },
      {
        size: 76.5,
        resizedByUser: false,
        hiddenByUser: true,
      },
      {
        size: 113,
        resizedByUser: false,
      },
      {
        size: 106,
        resizedByUser: false,
      },
      {
        size: 92.5,
        resizedByUser: false,
        hiddenByUser: true,
      },
      {
        size: 106,
        resizedByUser: true,
      },
      {
        size: 129,
        resizedByUser: false,
      },
      {
        size: 129,
        resizedByUser: false,
      },
      {
        size: 129,
        resizedByUser: false,
      },
      {
        size: 104.5,
        resizedByUser: false,
      },
      {
        size: 120,
        resizedByUser: true,
      },
      {
        size: 300,
        resizedByUser: true,
      },
    ],
    rowMetadata: [],
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

export const mockConditionalFormatting: ConditionalFormatRule[] = [
  {
    id: 196120850,
    ranges: [
      {
        startRowIndex: 4,
        startColumnIndex: 5,
        endColumnIndex: 5,
        endRowIndex: 1000,
        sheetId: 1,
      },
    ],
    gradientRule: {
      minpoint: {
        color: {
          theme: 9,
          tint: 0.8,
        },
        type: "MIN",
      },
      maxpoint: {
        color: {
          theme: 9,
          tint: -0.25,
        },
        type: "MAX",
      },
    },
  },
  {
    id: 266693659,
    ranges: [
      {
        startRowIndex: 4,
        startColumnIndex: 4,
        endColumnIndex: 4,
        endRowIndex: 1000,
        sheetId: 1,
      },
    ],
    gradientRule: {
      minpoint: {
        color: {
          theme: 5,
          tint: 0.8,
        },
        type: "MIN",
      },
      maxpoint: {
        color: {
          theme: 5,
          tint: 0.4,
        },
        type: "MAX",
      },
    },
  },
];

export const mockTables: TableView[] = [
  {
    id: 532915708,
    range: {
      startRowIndex: 3,
      endRowIndex: 1077,
      startColumnIndex: 2,
      endColumnIndex: 13,
    },
    sheetId: 1,
    title: "Unicorn companies",
    columns: [
      {
        name: "Company",
      },
      {
        name: "Valuation",
      },
      {
        name: "Valuation ($)",
        formula:
          '=VALUE(LEFT(SUBSTITUTE([@Valuation],"$",""),LEN([@Valuation])-2))*IF(RIGHT([@Valuation],1)="B",1000000000,IF(RIGHT([@Valuation],1)="M",1000000,1))',
      },
      {
        name: "Funding ($)",
        formula:
          '=VALUE(LEFT(SUBSTITUTE([@Funding],"$",""),LEN([@Funding])-2))*IF(RIGHT([@Funding],1)="B",1000000000,IF(RIGHT([@Funding],1)="M",1000000,1))',
      },
      {
        name: "Funding",
      },
      {
        name: "Date Joined",
      },
      {
        name: "Industry",
      },
      {
        name: "City",
      },
      {
        name: "Country/Region",
      },
      {
        name: "Continent",
      },
      {
        name: "Year Founded",
      },
      {
        name: "Select Investors",
      },
    ],
    filterSpecs: [],
    headerRow: true,
    filterButton: true,
    sortSpecs: [],
    showRowStripes: true,
    theme: "TableStyleLight1",
  },
];
