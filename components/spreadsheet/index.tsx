"use client";
import "@rowsncolumns/spreadsheet/dist/spreadsheet.min.css";
import { useState, useMemo, Suspense } from "react";
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
  ButtonPaintFormat,
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
  ButtonDecreaseIndent,
  ButtonIncreaseIndent,
  CellStyleSelector,
  TableStyleSelector,
  LoadingIndicator,
  ConditionalFormatRule,
  ProtectedRange,
  ButtonInsertChart,
  InsertMenu,
  ButtonInsertLink,
  DataValidationRuleRecord,
  ButtonPrint,
  ButtonClearFormatting,
  FloatingCellEditor,
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
  ResizeDimensionEditor,
  CellFormatEditorDialog,
  CellFormatEditor,
  ConditionalFormatEditor,
  ConditionalFormatDialog,
  InsertImageDialog,
  InsertImageEditor,
  InsertLinkDialog,
  InsertLinkEditor,
  DataValidationEditorDialog,
  DataValidationEditor,
  ErrorStateDialog,
  EmbedEditorDialog,
  EmbedEditor,
} from "@rowsncolumns/spreadsheet-state";
import { Separator, IconButton } from "@rowsncolumns/ui";
import { functionDescriptions, functions } from "@rowsncolumns/functions";
import { mockConditionalFormatting, mockSheets, mockTables } from "./mocks";
import { mockSheetdata } from "./mock-sheetdata";
import { useColorMode } from "@/lib/theme";
import { useSupabaseSpreadsheet } from "@rowsncolumns/supabase-spreadsheet";
import { MagnifyingGlassIcon } from "@rowsncolumns/icons";
import { createClient } from "@supabase/supabase-js";
import { getUniqueName } from "./names";
import {
  ChartEditor,
  ChartEditorDialog,
  useCharts,
  ChartComponent,
} from "@rowsncolumns/charts";
import { Styles } from "./style";

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

type SpreadsheetProps = {
  allowUpload?: boolean;
};

export const Spreadsheet = ({ allowUpload }: SpreadsheetProps) => {
  const App = () => {
    const locale = "en-US";
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
    const [conditionalFormats, onChangeConditionalFormats] = useState<
      ConditionalFormatRule[]
    >(mockConditionalFormatting);
    const [dataValidations, onChangeDataValidations] = useState<
      DataValidationRuleRecord[]
    >([]);
    const [protectedRanges, onChangeProtectedRanges] = useState<
      ProtectedRange[]
    >([]);
    const [userDefinedColors, setUserDefinedColors] = useState<string[]>([]);

    const {
      activeCell,
      activeSheetId,
      selections,
      rowCount,
      columnCount,
      frozenColumnCount,
      frozenRowCount,
      showGridLines,
      rowMetadata,
      columnMetadata,
      merges,
      bandedRanges,
      basicFilter,
      spreadsheetColors,
      canRedo,
      canUndo,
      isDarkMode,
      onUndo,
      onRedo,
      getCellData,
      getSheetName,
      getSheetId,
      getEffectiveFormat,
      onRequestCalculate,
      onRequestFormatCells,
      onChangeActiveCell,
      onChangeActiveSheet,
      onSelectNextSheet,
      onSelectPreviousSheet,
      onChangeSelections,
      onChange,
      onChangeBatch,
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
      onCreateBasicFilter,
      onCreateTable,
      onRemoveTable,
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
      getEffectiveValue,
      onIncreaseIndent,
      onDecreaseIndent,
      onRequestResize,
      onAutoResize,
      onInsertDate,
      onInsertTime,
      onInsertDateTime,
      onInsertImage,
      onInsertLink,
      onInsertCheckbox,
      onRequestInsertImage,
      onRequestInsertLink,
      getSheetColumnCount,
      getSheetRowCount,
      createHistory,
      onRequestConditionalFormat,
      onRequestDataValidation,
      onCreateConditionalFormattingRule,
      onUpdateConditionalFormattingRule,
      onDeleteConditionalFormattingRule,
      onPreviewConditionalFormattingRule,
      onCreateDataValidationRule,
      onUpdateDataValidationRule,
      onDeleteDataValidationRule,
      onDeleteDataValidationRules,
      getSeriesValuesFromRange,
      getDomainValuesFromRange,
      onInsertTableColumn,
      onDeleteTableColumn,
      onDeleteTableRow,
      onInsertTableRow,
      onInsertAutoSum,
      onRequestEditEmbed,

      importCSVFile,
      importExcelFile,

      getUserEnteredValue,
      getFormattedValue,
      calculateNow,

      // Paint format,
      onSavePaintFormat,
      isPaintFormatActive,
    } = useSpreadsheetState({
      sheets,
      sheetData,
      tables,
      functions,
      namedRanges,
      theme,
      colorMode,
      conditionalFormats,
      locale,
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
      onChangeProtectedRanges,
      onChangeConditionalFormats,
      onChangeDataValidations,
      fileSizeLimit: 100 * 1024 * 1024, // 100 MB Limit
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
      sheets,
      searchAllSheets: true,
      onChangeActiveSheet,
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
      disable: false,
      onChangeSheetData,
      enqueueCalculation,
      onChangeSheets,
      onChangeTables,
    });

    // Charts module
    const {
      onRequestEditChart,
      onDeleteChart,
      onMoveChart,
      onResizeChart,
      onUpdateChart,
      onCreateChart,
      selectedChart,
    } = useCharts({
      createHistory,
      onChangeCharts,
      getEffectiveValue,
      getFormattedValue,
    });

    // Format fo the current cell
    const currentCellFormat = useMemo(
      () =>
        getEffectiveFormat(
          activeSheetId,
          activeCell.rowIndex,
          activeCell.columnIndex
        ),
      [activeSheetId, activeCell, getEffectiveFormat]
    );

    return (
      <>
        <Styles />
        {allowUpload ? (
          <div className="p-2">
            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const isCSV = file.type === "text/csv";
                  const isExcel = file.name.endsWith("xlsx");
                  if (isCSV) {
                    await importCSVFile(file);
                  } else if (isExcel) {
                    await importExcelFile(file);
                  }

                  calculateNow({
                    disableEvaluation: true,
                    shouldResetCellDependencyGraph: true,
                  });
                }
              }}
            />
          </div>
        ) : null}

        {/* {collab ? (
          <div className="p-2 font-sans italic text-yellow-700 text-sm text-center">
            In the demo, data is not stored permanently in the server database.
            So, in collaboration mode, if you encounter an application exception
            error, kindly refresh the browser.
          </div>
        ) : (
          false
        )} */}
        <Toolbar>
          <ButtonUndo onClick={onUndo} disabled={!canUndo} />
          <ButtonRedo onClick={onRedo} disabled={!canRedo} />
          <ButtonPrint onClick={() => window.print()} />
          <ButtonClearFormatting
            onClick={() => {
              onClearFormatting(activeSheetId, activeCell, selections);
            }}
          />
          <ButtonPaintFormat
            isActive={isPaintFormatActive}
            onClick={() =>
              onSavePaintFormat(activeSheetId, activeCell, selections)
            }
          />
          <ToolbarSeparator />
          <ScaleSelector value={scale} onChange={onChangeScale} />
          <ToolbarSeparator />
          <ButtonFormatCurrency
            onClick={() => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "numberFormat",
                {
                  type: "CURRENCY",
                  pattern: pattern_currency_decimal,
                }
              );
            }}
          />
          <ButtonFormatPercent
            onClick={() => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "numberFormat",
                {
                  type: "PERCENT",
                  pattern: pattern_percent_decimal,
                }
              );
            }}
          />
          <ButtonDecreaseDecimal
            onClick={() =>
              onChangeDecimals(
                activeSheetId,
                activeCell,
                selections,
                "decrement"
              )
            }
          />
          <ButtonIncreaseDecimal
            onClick={() =>
              onChangeDecimals(
                activeSheetId,
                activeCell,
                selections,
                "increment"
              )
            }
          />
          <TextFormatSelector
            cellFormat={currentCellFormat}
            onChangeFormatting={(type, value) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                type,
                value
              );
            }}
            onRequestFormatCells={onRequestFormatCells}
          />
          <ToolbarSeparator />
          <FontFamilySelector
            value={currentCellFormat?.textFormat?.fontFamily}
            theme={theme}
            onChange={(value) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  fontFamily: value,
                }
              );
            }}
          />
          <ToolbarSeparator />
          <FontSizeSelector
            value={
              currentCellFormat?.textFormat?.fontSize ?? DEFAULT_FONT_SIZE_PT
            }
            onChange={(fontSize) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  fontSize,
                }
              );
            }}
          />
          <ToolbarSeparator />
          <ButtonBold
            isActive={currentCellFormat?.textFormat?.bold}
            onClick={() => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  bold: !currentCellFormat?.textFormat?.bold,
                }
              );
            }}
          />
          <ButtonItalic
            isActive={currentCellFormat?.textFormat?.italic}
            onClick={() => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  italic: !currentCellFormat?.textFormat?.italic,
                }
              );
            }}
          />
          <ButtonUnderline
            isActive={currentCellFormat?.textFormat?.underline}
            onClick={() => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  underline: !currentCellFormat?.textFormat?.underline,
                }
              );
            }}
          />
          <ButtonStrikethrough
            isActive={currentCellFormat?.textFormat?.strikethrough}
            onClick={() => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  strikethrough: !currentCellFormat?.textFormat?.strikethrough,
                }
              );
            }}
          />
          <TextColorSelector
            color={currentCellFormat?.textFormat?.color}
            theme={theme}
            isDarkMode={isDarkMode}
            onChange={(color) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "textFormat",
                {
                  color,
                }
              );
            }}
            userDefinedColors={userDefinedColors}
            onAddUserDefinedColor={(color) =>
              setUserDefinedColors((prev) => prev.concat(color))
            }
          />
          <ToolbarSeparator />
          <BackgroundColorSelector
            color={currentCellFormat?.backgroundColor}
            theme={theme}
            onChange={(color) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "backgroundColor",
                color
              );
            }}
            userDefinedColors={userDefinedColors}
            onAddUserDefinedColor={(color) =>
              setUserDefinedColors((prev) => prev.concat(color))
            }
          />

          <BorderSelector
            borders={currentCellFormat?.borders}
            onChange={(location, color, style) => {
              onChangeBorder(
                activeSheetId,
                activeCell,
                selections,
                location,
                color,
                style
              );
            }}
            theme={theme}
            isDarkMode={isDarkMode}
            userDefinedColors={userDefinedColors}
            onAddUserDefinedColor={(color) =>
              setUserDefinedColors((prev) => prev.concat(color))
            }
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
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "horizontalAlignment",
                value
              );
            }}
          />

          <TextVerticalAlignSelector
            value={currentCellFormat?.verticalAlignment}
            onChange={(value) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "verticalAlignment",
                value
              );
            }}
          />
          <TextWrapSelector
            value={currentCellFormat?.wrapStrategy}
            onChange={(value) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                "wrapStrategy",
                value
              );
            }}
          />

          <ButtonDecreaseIndent
            onClick={() => {
              onDecreaseIndent(activeSheetId, activeCell, selections);
            }}
          />

          <ButtonIncreaseIndent
            onClick={() => {
              onIncreaseIndent(activeSheetId, activeCell, selections);
            }}
          />
          <ToolbarSeparator />

          <InsertMenu
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onCreateNewSheet={onCreateNewSheet}
            onCreateChart={onCreateChart}
            onRequestInsertImage={onRequestInsertImage}
            onRequestInsertLink={onRequestInsertLink}
            onInsertCellsShiftDown={onInsertCellsShiftDown}
            onInsertCellsShiftRight={onInsertCellsShiftRight}
            onInsertColumn={onInsertColumn}
            onInsertRow={onInsertRow}
            onRequestDataValidation={onRequestDataValidation}
          />

          <ButtonInsertChart
            onClick={() => onCreateChart(activeSheetId, activeCell, selections)}
          />

          <ButtonInsertImage
            onInsertFile={(file) => {
              onInsertFile(file, activeSheetId, activeCell, {
                insertOverCells: true,
              });
            }}
          />

          <ButtonInsertLink
            onClick={() =>
              onRequestInsertLink(activeSheetId, activeCell, selections)
            }
          />

          <ToolbarSeparator />

          <TableStyleSelector
            theme={theme}
            tables={tables}
            activeCell={activeCell}
            selections={selections}
            sheetId={activeSheetId}
            onCreateTable={onCreateTable}
            onUpdateTable={onUpdateTable}
          />

          <CellStyleSelector
            currency={"USD"}
            onChangeFormatting={(...args) => {
              onChangeFormatting(
                activeSheetId,
                activeCell,
                selections,
                ...args
              );
            }}
            selectedFormat={currentCellFormat}
            onClearFormatting={() =>
              onClearFormatting(activeSheetId, activeCell, selections)
            }
            theme={theme}
          />

          <ThemeSelector
            theme={theme}
            onChangeTheme={onChangeSpreadsheetTheme}
          />

          <ToolbarSeparator />

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
            merges={merges}
          />
          <Separator orientation="vertical" />
          <FormulaBarLabel>fx</FormulaBarLabel>
          <FormulaBarInput
            sheetId={activeSheetId}
            activeCell={activeCell}
            functionDescriptions={functionDescriptions}
          />
        </FormulaBar>

        <CanvasGrid
          {...spreadsheetColors}
          showSelectionResizeHandles
          getSheetId={getSheetId}
          showGridLines={showGridLines}
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
          basicFilter={basicFilter}
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
          onChangeBatch={onChangeBatch}
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
          onRequestResize={onRequestResize}
          onAutoResize={onAutoResize}
          onCreateBasicFilter={onCreateBasicFilter}
          onCreateTable={onCreateTable}
          onRemoveTable={onRemoveTable}
          onChangeScale={onChangeScale}
          onInsertDate={onInsertDate}
          onInsertTime={onInsertTime}
          onInsertDateTime={onInsertDateTime}
          onRequestFormatCells={onRequestFormatCells}
          onRequestConditionalFormat={onRequestConditionalFormat}
          onRequestDataValidation={onRequestDataValidation}
          getSheetColumnCount={getSheetColumnCount}
          getSheetRowCount={getSheetRowCount}
          getChartComponent={(props) => (
            <ChartComponent
              {...props}
              isDarkMode={isDarkMode}
              getSeriesValuesFromRange={getSeriesValuesFromRange}
              getDomainValuesFromRange={getDomainValuesFromRange}
              onRequestEdit={onRequestEditChart}
              onRequestCalculate={onRequestCalculate}
            />
          )}
          onInsertTableColumn={onInsertTableColumn}
          onDeleteTableColumn={onDeleteTableColumn}
          onDeleteTableRow={onDeleteTableRow}
          onInsertTableRow={onInsertTableRow}
          onInsertAutoSum={onInsertAutoSum}
          onRequestEditEmbed={onRequestEditEmbed}
        />

        <LoadingIndicator />

        <BottomBar>
          <NewSheetButton onClick={() => onCreateNewSheet()} />

          <SheetSwitcher
            sheets={sheets}
            activeSheetId={activeSheetId}
            onChangeActiveSheet={onChangeActiveSheet}
            onShowSheet={onShowSheet}
          />

          <SheetTabs
            sheets={sheets}
            protectedRanges={protectedRanges}
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
            userDefinedColors={userDefinedColors}
            onAddUserDefinedColor={(color) =>
              setUserDefinedColors((prev) => prev.concat(color))
            }
          />

          <SheetStatus
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onRequestCalculate={onRequestCalculate}
            rowCount={rowCount}
            columnCount={columnCount}
            merges={merges}
          />
        </BottomBar>

        <ConditionalFormatDialog>
          <ConditionalFormatEditor
            sheetId={activeSheetId}
            theme={theme}
            conditionalFormats={conditionalFormats}
            functionDescriptions={functionDescriptions}
            onCreateRule={onCreateConditionalFormattingRule}
            onDeleteRule={onDeleteConditionalFormattingRule}
            onUpdateRule={onUpdateConditionalFormattingRule}
            onPreviewRule={onPreviewConditionalFormattingRule}
          />
        </ConditionalFormatDialog>

        <DataValidationEditorDialog>
          <DataValidationEditor
            dataValidations={dataValidations}
            sheetId={activeSheetId}
            functionDescriptions={functionDescriptions}
            onDeleteRules={onDeleteDataValidationRules}
            onDeleteRule={onDeleteDataValidationRule}
            onCreateRule={onCreateDataValidationRule}
            onUpdateRule={onUpdateDataValidationRule}
          />
        </DataValidationEditorDialog>

        <TableEditor
          sheetId={activeSheetId}
          onSubmit={onUpdateTable}
          theme={theme}
        />
        <DeleteSheetConfirmation
          sheetId={activeSheetId}
          onDeleteSheet={onDeleteSheet}
        />
        <NamedRangeEditor
          sheetId={activeSheetId}
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

        <CellFormatEditorDialog>
          <CellFormatEditor
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onChangeFormatting={onChangeFormatting}
            cellFormat={currentCellFormat}
            getEffectiveValue={getEffectiveValue}
            onMergeCells={onMergeCells}
            theme={theme}
            isDarkMode={isDarkMode}
            onChangeBorder={onChangeBorder}
          />
        </CellFormatEditorDialog>

        <ResizeDimensionEditor
          onResize={onResize}
          onAutoResize={onAutoResize}
        />

        <ChartEditorDialog>
          <ChartEditor
            sheetId={activeSheetId}
            chart={selectedChart}
            onSubmit={onUpdateChart}
          />
        </ChartEditorDialog>

        <InsertImageDialog>
          <InsertImageEditor
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onInsertImage={onInsertImage}
          />
        </InsertImageDialog>

        <EmbedEditorDialog>
          <EmbedEditor
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onInsertImage={onInsertImage}
          />
        </EmbedEditorDialog>

        <InsertLinkDialog>
          <InsertLinkEditor
            sheetId={activeSheetId}
            activeCell={activeCell}
            selections={selections}
            onInsertLink={onInsertLink}
          />
        </InsertLinkDialog>

        <ErrorStateDialog />

        <div className="sm:hidden">
          <FloatingCellEditor
            initialValue={getUserEnteredValue(
              activeSheetId,
              activeCell.rowIndex,
              activeCell.columnIndex
            )}
            theme={theme}
            sheetId={activeSheetId}
            activeCell={activeCell}
            onChange={onChange}
            cellFormat={currentCellFormat}
            onChangeFormatting={onChangeFormatting}
            onInsertRow={onInsertRow}
            onInsertColumn={onInsertColumn}
            functionDescriptions={functionDescriptions}
          />
        </div>
      </>
    );
  };

  return (
    <SpreadsheetProvider>
      <App />
    </SpreadsheetProvider>
  );
};
