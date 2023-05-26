"use client";
import "@rowsncolumns/spreadsheet/dist/spreadsheet.min.css";
import { useState, useMemo } from "react";
import {
  Sheet,
  CellData,
  EmbeddedChart,
  EmbeddedObject,
  TableView,
  NamedRange,
  SpreadsheetTheme,
  defaultSpreadsheetTheme,
  Toolbar,
  ButtonUndo,
  ButtonRedo,
  ToolbarSeparator,
  ScaleSelector,
  ButtonFormatCurrency,
  ButtonFormatPercent,
  ButtonDecreaseDecimal,
  ButtonIncreaseDecimal,
  TextFormatSelector,
  FontFamilySelector,
  FontSizeSelector,
  DEFAULT_FONT_SIZE_PT,
  ButtonBold,
  ButtonItalic,
  ButtonUnderline,
  ButtonStrikethrough,
  TextColorSelector,
  BackgroundColorSelector,
  BorderSelector,
  MergeCellsSelector,
  TextHorizontalAlignSelector,
  TextVerticalAlignSelector,
  TextWrapSelector,
  ThemeSelector,
  ButtonSwitchColorMode,
  FormulaBar,
  RangeSelector,
  FormulaBarLabel,
  ConnectedCellInput,
  CanvasGrid,
  BottomBar,
  NewSheetButton,
  SheetSwitcher,
  SheetTabs,
  SheetStatus,
  SpreadsheetProvider,
  TableActions,
} from "@rowsncolumns/spreadsheet";
import {
  SheetData,
  useSpreadsheetState,
  pattern_currency_decimal,
  pattern_percent_decimal,
  TableEditor,
  DeleteSheetConfirmation,
} from "@rowsncolumns/spreadsheet-state";
import { Separator } from "@rowsncolumns/ui";
import { functionDescriptions, functions } from "@rowsncolumns/functions";
import { mockSheets, mockTables } from "./mocks";
import { mockSheetdata } from "./mock-sheetdata";

export const Spreadsheet = () => {
  const App = () => {
    const [sheets, onChangeSheets] = useState<Sheet[]>(mockSheets);
    const [sheetData, onChangeSheetData] =
      useState<SheetData<CellData>>(mockSheetdata);
    const [scale, onChangeScale] = useState(1);
    const [charts, onChangeCharts] = useState<EmbeddedChart[]>([]);
    const [embeds, onChangeEmbeds] = useState<EmbeddedObject[]>([]);
    const [tables, onChangeTables] = useState<TableView[]>(mockTables);
    const [namedRanges, onChangeNamedRanges] = useState<NamedRange[]>([]);
    const [theme, onChangeTheme] = useState<SpreadsheetTheme>(
      defaultSpreadsheetTheme
    );

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
      colorMode,
      spreadsheetColors,
      canRedo,
      canUndo,
      onUndo,
      onRedo,
      getCellData,
      getSheetName,
      getUserEnteredFormat,
      onRequestCalculate,
      onChangeActiveCell,
      onChangeActiveSheet,
      onSelectNextSheet,
      onSelectPreviousSheet,
      onChangeSelections,
      onChange,
      onDelete,
      onChangeFormatting,
      onClearFormatting,
      onUnMergeCells,
      onMergeCells,
      onResize,
      onChangeBorder,
      onChangeDecimals,
      onChangeSheetTabColor,
      onRenameSheet,
      onRequestDeleteSheet,
      onDeleteSheet,
      onShowSheet,
      onHideSheet,
      onProtectSheet,
      onUnProtectSheet,
      onMoveSheet,
      onCreateNewSheet,
      onDuplicateSheet,
      onHideColumn,
      onShowColumn,
      onHideRow,
      onShowRow,
      onFill,
      onFillRange,
      onMoveChart,
      onResizeChart,
      onDeleteChart,
      onMoveEmbed,
      onResizeEmbed,
      onDeleteEmbed,
      onDeleteRow,
      onDeleteColumn,
      onDeleteCellsShiftUp,
      onDeleteCellsShiftLeft,
      onInsertCellsShiftRight,
      onInsertCellsShiftDown,
      onInsertRow,
      onInsertColumn,
      onMoveColumns,
      onMoveRows,
      onMoveSelection,
      onSortColumn,
      onSortTable,
      onFilterTable,
      onResizeTable,
      onCopy,
      onPaste,
      onCreateTable,
      onRequestEditTable,
      onUpdateTable,
      onDragOver,
      onDrop,
      onFreezeColumn,
      onFreezeRow,
      onChangeSpreadsheetTheme,
      onChangeColorMode,
      onUpdateNote,
      onInsertNote,
      onSortRange,
      onProtectRange,
      onUnProtectRange,
    } = useSpreadsheetState({
      sheets,
      sheetData,
      tables,
      functions,
      namedRanges,
      theme,
      onChangeSheets,
      onChangeSheetData,
      onChangeEmbeds,
      onChangeCharts,
      onChangeTables,
      onChangeTheme,
      initialColorMode: "light",
    });

    // Format fo the current cell
    const currentCellFormat = useMemo(
      () =>
        getUserEnteredFormat(
          activeSheetId,
          activeCell.rowIndex,
          activeCell.columnIndex
        ),
      [activeSheetId, activeCell, getUserEnteredFormat]
    );

    return (
      <>
        <Toolbar>
          <ButtonUndo onClick={onUndo} disabled={!canUndo} />
          <ButtonRedo onClick={onRedo} disabled={!canRedo} />
          <ToolbarSeparator />
          <ScaleSelector value={scale} onChange={onChangeScale} />
          <ToolbarSeparator />
          <ButtonFormatCurrency
            onClick={() => {
              onChangeFormatting(activeSheetId, "numberFormat", {
                type: "CURRENCY",
                pattern: pattern_currency_decimal,
              });
            }}
          />
          <ButtonFormatPercent
            onClick={() => {
              onChangeFormatting(activeSheetId, "numberFormat", {
                type: "PERCENT",
                pattern: pattern_percent_decimal,
              });
            }}
          />
          <ButtonDecreaseDecimal
            onClick={() => onChangeDecimals(activeSheetId, "decrement")}
          />
          <ButtonIncreaseDecimal
            onClick={() => onChangeDecimals(activeSheetId, "increment")}
          />
          <TextFormatSelector
            sheetId={activeSheetId}
            onChangeFormatting={onChangeFormatting}
          />
          <ToolbarSeparator />
          <FontFamilySelector
            value={currentCellFormat?.textFormat?.fontFamily}
            theme={theme}
            onChange={(value) => {
              onChangeFormatting(activeSheetId, "textFormat", {
                fontFamily: value,
              });
            }}
          />
          <ToolbarSeparator />
          <FontSizeSelector
            value={String(
              currentCellFormat?.textFormat?.fontSize ?? DEFAULT_FONT_SIZE_PT
            )}
            onChange={(value) => {
              onChangeFormatting(activeSheetId, "textFormat", {
                fontSize: Number(value),
              });
            }}
          />
          <ToolbarSeparator />
          <ButtonBold
            isActive={currentCellFormat?.textFormat?.bold}
            onClick={() => {
              onChangeFormatting(activeSheetId, "textFormat", {
                bold: !currentCellFormat?.textFormat?.bold,
              });
            }}
          />
          <ButtonItalic
            isActive={currentCellFormat?.textFormat?.italic}
            onClick={() => {
              onChangeFormatting(activeSheetId, "textFormat", {
                italic: !currentCellFormat?.textFormat?.italic,
              });
            }}
          />
          <ButtonUnderline
            isActive={currentCellFormat?.textFormat?.underline}
            onClick={() => {
              onChangeFormatting(activeSheetId, "textFormat", {
                underline: !currentCellFormat?.textFormat?.underline,
              });
            }}
          />
          <ButtonStrikethrough
            isActive={currentCellFormat?.textFormat?.strikethrough}
            onClick={() => {
              onChangeFormatting(activeSheetId, "textFormat", {
                strikethrough: !currentCellFormat?.textFormat?.strikethrough,
              });
            }}
          />
          <TextColorSelector
            color={currentCellFormat?.textFormat?.color}
            theme={theme}
            onChange={(color) => {
              onChangeFormatting(activeSheetId, "textFormat", {
                color,
              });
            }}
          />
          <ToolbarSeparator />
          <BackgroundColorSelector
            color={currentCellFormat?.backgroundColor}
            theme={theme}
            onChange={(color) => {
              onChangeFormatting(activeSheetId, "backgroundColor", color);
            }}
          />

          <BorderSelector
            borders={currentCellFormat?.borders}
            sheetId={activeSheetId}
            onChange={onChangeBorder}
            theme={theme}
          />
          <MergeCellsSelector
            activeCell={activeCell}
            selections={selections}
            sheetId={activeSheetId}
            merges={merges}
            onUnMerge={onUnMergeCells}
            onMerge={onMergeCells}
          />
          <ToolbarSeparator />
          <TextHorizontalAlignSelector
            value={currentCellFormat?.horizontalAlignment}
            onChange={(value) => {
              onChangeFormatting(activeSheetId, "horizontalAlignment", value);
            }}
          />
          <TextVerticalAlignSelector
            value={currentCellFormat?.verticalAlignment}
            onChange={(value) => {
              onChangeFormatting(activeSheetId, "verticalAlignment", value);
            }}
          />
          <TextWrapSelector
            value={currentCellFormat?.wrapStrategy}
            onChange={(value) => {
              onChangeFormatting(activeSheetId, "wrapStrategy", value);
            }}
          />
          <ToolbarSeparator />

          <TableActions
            tables={tables}
            activeCell={activeCell}
            selections={selections}
            sheetId={activeSheetId}
            onRequestEditTable={onRequestEditTable}
            onCreateTable={onCreateTable}
          />

          <ToolbarSeparator />
          <ThemeSelector
            theme={theme}
            onChangeTheme={onChangeSpreadsheetTheme}
          />
          <ButtonSwitchColorMode
            colorMode={colorMode}
            onClick={() =>
              onChangeColorMode((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
        </Toolbar>

        <FormulaBar>
          <RangeSelector
            selections={selections}
            activeCell={activeCell}
            onChangeActiveCell={onChangeActiveCell}
            onChangeSelections={onChangeSelections}
            sheets={sheets}
            rowCount={rowCount}
            columnCount={columnCount}
            onChangeActiveSheet={onChangeActiveSheet}
            namedRanges={namedRanges}
            tables={tables}
          />
          <Separator orientation="vertical" />
          <FormulaBarLabel>fx</FormulaBarLabel>
          <ConnectedCellInput
            activeCell={activeCell}
            functionDescriptions={functionDescriptions}
          />
        </FormulaBar>

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
          protectedRanges={protectedRanges}
          bandedRanges={bandedRanges}
          functionDescriptions={functionDescriptions}
          getSheetName={getSheetName}
          getCellData={getCellData}
          onChangeActiveCell={onChangeActiveCell}
          onChangeSelections={onChangeSelections}
          onChangeActiveSheet={onChangeActiveSheet}
          onRequestCalculate={onRequestCalculate}
          onSelectNextSheet={onSelectNextSheet}
          onSelectPreviousSheet={onSelectPreviousSheet}
          onChangeFormatting={onChangeFormatting}
          onHideColumn={onHideColumn}
          onShowColumn={onShowColumn}
          onHideRow={onHideRow}
          onShowRow={onShowRow}
          onDelete={onDelete}
          onClearContents={onDelete}
          onFill={onFill}
          onFillRange={onFillRange}
          onResize={onResize}
          onMoveChart={onMoveChart}
          onMoveEmbed={onMoveEmbed}
          onResizeChart={onResizeChart}
          onDeleteChart={onDeleteChart}
          onResizeEmbed={onResizeEmbed}
          onDeleteEmbed={onDeleteEmbed}
          onDeleteRow={onDeleteRow}
          onDeleteColumn={onDeleteColumn}
          onDeleteCellsShiftUp={onDeleteCellsShiftUp}
          onDeleteCellsShiftLeft={onDeleteCellsShiftLeft}
          onInsertCellsShiftRight={onInsertCellsShiftRight}
          onInsertCellsShiftDown={onInsertCellsShiftDown}
          onInsertRow={onInsertRow}
          onInsertColumn={onInsertColumn}
          onMoveColumns={onMoveColumns}
          onMoveRows={onMoveRows}
          onMoveSelection={onMoveSelection}
          onCreateNewSheet={onCreateNewSheet}
          onChange={onChange}
          onUndo={onUndo}
          onRedo={onRedo}
          onSortColumn={onSortColumn}
          onSortTable={onSortTable}
          onFilterTable={onFilterTable}
          onResizeTable={onResizeTable}
          onClearFormatting={onClearFormatting}
          onCopy={onCopy}
          onPaste={onPaste}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onRequestEditTable={onRequestEditTable}
          onFreezeColumn={onFreezeColumn}
          onFreezeRow={onFreezeRow}
          onUpdateNote={onUpdateNote}
          onSortRange={onSortRange}
          onProtectRange={onProtectRange}
          onUnProtectRange={onUnProtectRange}
          namedRanges={namedRanges}
        />

        <BottomBar>
          <NewSheetButton onClick={onCreateNewSheet} />

          <SheetSwitcher
            sheets={sheets}
            activeSheetId={activeSheetId}
            onChangeActiveSheet={onChangeActiveSheet}
            onShowSheet={onShowSheet}
          />

          <SheetTabs
            sheets={sheets}
            activeSheetId={activeSheetId}
            theme={theme}
            onChangeActiveSheet={onChangeActiveSheet}
            onRenameSheet={onRenameSheet}
            onChangeSheetTabColor={onChangeSheetTabColor}
            onDeleteSheet={onRequestDeleteSheet}
            onHideSheet={onHideSheet}
            onMoveSheet={onMoveSheet}
            onProtectSheet={onProtectSheet}
            onUnProtectSheet={onUnProtectSheet}
            onDuplicateSheet={onDuplicateSheet}
          />

          <SheetStatus
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onRequestCalculate={onRequestCalculate}
            rowCount={rowCount}
            columnCount={columnCount}
          />
        </BottomBar>

        <TableEditor
          sheetId={activeSheetId}
          rowCount={rowCount}
          columnCount={columnCount}
          getSheetName={getSheetName}
          onSubmit={onUpdateTable}
        />
        <DeleteSheetConfirmation
          sheetId={activeSheetId}
          onDeleteSheet={onDeleteSheet}
        />
      </>
    );
  };

  return (
    <SpreadsheetProvider>
      <App />
    </SpreadsheetProvider>
  );
};
