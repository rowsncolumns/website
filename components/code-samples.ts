export const sample1 = `import { 
  SpreadsheetProvider, CanvasGrid, Toolbar, ButtonUndo, 
  ButtonRedo, RangeSelector, FormulaBarLabel, FormulaBarInput, 
  BottomBar, SheetSwitcher, SheetTabs, SheetStatus 
} from "@rowsncolumns/spreadsheet"

const App = () => {
  const sheet = { id: 1, rowCount: 1000, columnCount: 1000 }
  return (
    <>
      <Toolbar>
        <ButtonUndo onClick={} />
        <ButtonRedo onClick={} />
        {/*..import all other controls*/}
      </Toolbar>
      <FormulaBar>
        <RangeSelector />
        <FormulaBarInput />
      </FormulaBar>
      <CanvasGrid
        sheetId={sheet.id}
        rowCount={sheet.rowCount}
        columnCount={sheet.columnCount}
        getCellData={(sheetId: number, rowIndex: number, columnIndex: number): CellData => {
          return {
            userEnteredValue: {
              formulaValue: '=SUM(4,4)'
            },
            formattedValue: "8"
          }
        }}
      />
      <BottomBar>
        <SheetSwitcher />
        <SheetTabs />
        <SheetStatus />
      </BottomBar>
    </>
  )
}

{/* Wrap your app in SpreadsheetProvider */}
export const Spreadsheet = () => (
  <SpreadsheetProvider>
    <App />
  </SpreadsheetProvider>
)
`;

export const sample2 = `import type { CellData } from "@rowsncolumns/spreadsheet"
import {
  useSpreadsheetState,
  Sheet,
  SheetData,
  RowData
} from "@rowsncolumns/spreadsheet-state"

type MyCellData = CellData & {
  customProperty: 'hello'
}
type SheetData<T extends CellData> = Record<number, RowData<T>[]>
type RowData<T> = {
  values: T[]
}

const App = () => {
  const [ sheets, onChangeSheets ] = useState<Sheet[]>([])
  const [ sheetData, onChangeSheetData ] = useState<SheetData<MyCellData>>({ })
  return (
    <CanvasGrid<MyCellData>
      getCellData={(sheetId, rowIndex, columnIndex) => {
        return sheetData[sheetId]?.[rowIndex]?.values?.[columnIndex]
      }}
      onChange={(value: string, sheetId: number, rowIndex: number, columnIndex: number) => {
        // Persist and generate undo/redo patches
        // If you are using useSpreadsheetState hook,its all built-in
        onChangeSheetData(prevData => ...)
      }}
    />
  )
}

{/* Wrap your app in SpreadsheetProvider */}
export const Spreadsheet = () => (
  <SpreadsheetProvider>
    <App />
  </SpreadsheetProvider>
)
`;

export const sample3 = `import { 
  defaultSpreadsheetTheme,
  Sheet,
  SheetData,
} from "@rowsncolumns/spreadsheet-state"
import { 
  CellData,
  NamedRange,
  EmbeddedObject,
  EmbeddedChart,
  TableView,
  SpreadsheetTheme,
  CanvasGrid,
  SpreadsheetProvider
} from "@rowsncolumns/spreadsheet"

const App = () => {
  const [sheets, onChangeSheets] = useState<Sheet[]>([]);
  const [sheetData, onChangeSheetData] = useState<SheetData<CellData>>({});
  const [scale, onChangeScale] = useState(1);
  const [colorMode, onChangeColorMode] = useState<ColorMode>();
  const [charts, onChangeCharts] = useState<EmbeddedChart[]>([]);
  const [embeds, onChangeEmbeds] = useState<EmbeddedObject[]>([]);
  const [tables, onChangeTables] = useState<TableView[]>([]);
  const [namedRanges, onChangeNamedRanges] = useState<NamedRange[]>();
  const [theme, onChangeTheme] = useState<SpreadsheetTheme>(defaultSpreadsheetTheme);
  const locale = "en-GB";
  const currency = "USD";
  const {
    activeCell,
    activeSheetId,
    selections,
    rowCount,
    columnCount,
    frozenColumnCount,
    frozenRowCount,
    rowMetadata,
    columnMetadata,
    merges,
    protectedRanges,
    bandedRanges,
    conditionalFormats,
    isDarkMode,
    spreadsheetColors,
    canRedo,
    canUndo,
    undo,
    redo,    
    ...// other Spreadsheet methods
  } = useSpreadsheetState({
    sheets,
    sheetData,
    tables,
    functions,
    namedRanges,
    theme,
    colorMode,
    locale,
    onChangeSheets,
    onChangeSheetData,
    onChangeEmbeds,
    onChangeCharts,
    onChangeTables,
    onChangeNamedRanges,
    onChangeTheme,
  })
  return (
    <>
      <Toolbar>
      <ButtonUndo onClick={onUndo} disabled={!canUndo} />
      <ButtonRedo onClick={onRedo} disabled={!canRedo} />
        {/*..import all other controls*/}
      </Toolbar>

      <CanvasGrid
        {...spreadsheetColors}
        enableTextOverflow
        stickyEditor={true}
        scale={scale}
        conditionalFormats={conditionalFormats}
        sheetId={activeSheetId}
        rowCount={rowCount}
        columnCount={columnCount}
        frozenColumnCount={frozenColumnCount}
        frozenRowCount={frozenRowCount}
        rowMetadata={rowMetadata}
        columnMetadata={columnMetadata}
        activeCell={activeCell}
        selections={selections}
        theme={theme}
        merges={merges}
        charts={charts}
        embeds={embeds}
        tables={tables}
        {/* Other methods from the hook */}
      />
    </>
  )
}

{/* Wrap your app in SpreadsheetProvider */}
export const Spreadsheet = () => (
  <SpreadsheetProvider>
    <App />
  </SpreadsheetProvider>
)
`;
