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
  CanvasGrid,
  BottomBar,
  NewSheetButton,
  SheetSwitcher,
  SheetTabs,
  SheetStatus,
  SpreadsheetProvider,
  TableActions,
  ColorMode,
  FormulaBarInput,
  ButtonInsertImage,
  SheetSearch,
} from "@rowsncolumns/spreadsheet";
import {
  SheetData,
  useSpreadsheetState,
  pattern_currency_decimal,
  pattern_percent_decimal,
  TableEditor,
  DeleteSheetConfirmation,
  NamedRangeEditor,
  useSearch,
} from "@rowsncolumns/spreadsheet-state";
import { Separator, IconButton } from "@rowsncolumns/ui";
import { functionDescriptions, functions } from "@rowsncolumns/functions";
import { mockSheets, mockTables } from "./mocks";
import { mockSheetdata } from "./mock-sheetdata";
import { useColorMode } from "@/lib/theme";
import { useSupabaseSpreadsheet } from "@rowsncolumns/supabase-spreadsheet";
import { MagnifyingGlassIcon } from "@rowsncolumns/icons";
import { createClient } from "@supabase/supabase-js";
import { getUniqueName } from "./names";

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    realtime: {
      params: {
        eventsPerSecond: 20,
      },
    },
  }
);

const userId = crypto.randomUUID();
const userName = getUniqueName();

export const Spreadsheet = () => {
  const App = () => {
    const [sheets, onChangeSheets] = useState<Sheet[]>(mockSheets);
    const [sheetData, onChangeSheetData] =
      useState<SheetData<CellData>>(mockSheetdata);
    const [scale, onChangeScale] = useState(1);
    const [colorMode, onChangeColorMode] = useColorMode();
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
      spreadsheetColors,
      canRedo,
      canUndo,
      isDarkMode,
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
      onRepeatFormatting,
      onUpdateTable,
      onDragOver,
      onDrop,
      onInsertFile,
      onFreezeColumn,
      onFreezeRow,
      onChangeSpreadsheetTheme,
      onUpdateNote,
      onInsertNote,
      onSortRange,
      onProtectRange,
      onUnProtectRange,
      onRequestDefineNamedRange,
      onRequestUpdateNamedRange,
      onDeleteNamedRange,
      onCreateNamedRange,
      onUpdateNamedRange,
      enqueueCalculation,
      getNonEmptyColumnCount,
      getNonEmptyRowCount,
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
      onChangeNamedRanges,
      onChangeTheme,
      onChangeHistory(patches) {
        onBroadcastPatch(patches);
      },
      colorMode,
    });

    const {
      onSearch,
      onResetSearch,
      onFocusNextResult,
      onFocusPreviousResult,
      hasNextResult,
      hasPreviousResult,
      borderStyles,
      isSearchActive,
      onRequestSearch,
      currentResult,
      totalResults,
      searchQuery,
    } = useSearch({
      getCellData,
      sheetId: activeSheetId,
      getNonEmptyColumnCount,
      getNonEmptyRowCount,
    });

    const { onBroadcastPatch, users } = useSupabaseSpreadsheet({
      supabase: supabaseClient,
      userId,
      userName,
      activeCell,
      sheetId: activeSheetId,
      onChangeSheetData,
      enqueueCalculation,
      onChangeSheets,
      onChangeTables,
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
            value={
              currentCellFormat?.textFormat?.fontSize ?? DEFAULT_FONT_SIZE_PT
            }
            onChange={(fontSize) => {
              onChangeFormatting(activeSheetId, "textFormat", {
                fontSize,
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
            isDarkMode={isDarkMode}
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
            isDarkMode={isDarkMode}
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

          <ButtonInsertImage onInsertFile={onInsertFile} />

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

          <IconButton onClick={onRequestSearch}>
            <MagnifyingGlassIcon />
          </IconButton>
        </Toolbar>

        <FormulaBar>
          <RangeSelector
            sheetId={activeSheetId}
            selections={selections}
            activeCell={activeCell}
            onChangeActiveCell={onChangeActiveCell}
            onChangeSelections={onChangeSelections}
            sheets={sheets}
            rowCount={rowCount}
            columnCount={columnCount}
            onChangeActiveSheet={onChangeActiveSheet}
            onRequestDefineNamedRange={onRequestDefineNamedRange}
            onRequestUpdateNamedRange={onRequestUpdateNamedRange}
            onDeleteNamedRange={onDeleteNamedRange}
            namedRanges={namedRanges}
            tables={tables}
          />
          <Separator orientation="vertical" />
          <FormulaBarLabel>fx</FormulaBarLabel>
          <FormulaBarInput
            activeCell={activeCell}
            functionDescriptions={functionDescriptions}
          />
        </FormulaBar>

        <CanvasGrid
          {...spreadsheetColors}
          borderStyles={borderStyles}
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
          onRepeatFormatting={onRepeatFormatting}
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
          onRequestDefineNamedRange={onRequestDefineNamedRange}
          onFreezeColumn={onFreezeColumn}
          onFreezeRow={onFreezeRow}
          onUpdateNote={onUpdateNote}
          onSortRange={onSortRange}
          onProtectRange={onProtectRange}
          onUnProtectRange={onUnProtectRange}
          namedRanges={namedRanges}
          users={users}
          userId={userId}
          licenseKey="rmdort-personal-0adf-45de-5fbc-81ce-b007-99e2-982d-b8bb-df0f-7c84-0ed8-74f2-8dd0-7993-bb88-9f64"
          onRequestSearch={onRequestSearch}
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
        <NamedRangeEditor
          sheetId={activeSheetId}
          rowCount={rowCount}
          columnCount={columnCount}
          getSheetName={getSheetName}
          onCreateNamedRange={onCreateNamedRange}
          onUpdateNamedRange={onUpdateNamedRange}
        />

        <SheetSearch
          isActive={isSearchActive}
          onSubmit={onSearch}
          onReset={onResetSearch}
          onNext={onFocusNextResult}
          onPrevious={onFocusPreviousResult}
          disableNext={!hasNextResult}
          disablePrevious={!hasPreviousResult}
          currentResult={currentResult}
          totalResults={totalResults}
          searchQuery={searchQuery}
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
