import type { SampleTable, TableColumn, TableRow } from "../../types/learning";

interface DisplayColumn {
  key: string;
  label: string;
}

type FlexibleColumn = TableColumn | DisplayColumn;
type FlexibleRow = TableRow | Record<string, unknown>;

interface ResultTableProps {
  table?: SampleTable;
  columns?: FlexibleColumn[];
  rows?: FlexibleRow[];
  title?: string;
}

function isTableColumn(column: FlexibleColumn): column is TableColumn {
  return "name" in column && "type" in column;
}

function isTableRow(row: FlexibleRow): row is TableRow {
  return "id" in row && "values" in row;
}

function getColumnKey(column: FlexibleColumn) {
  return isTableColumn(column) ? column.name : column.key;
}

function getColumnLabel(column: FlexibleColumn) {
  return isTableColumn(column) ? column.name : column.label;
}

function getColumnType(column: FlexibleColumn) {
  return isTableColumn(column) ? column.type : null;
}

function getRowId(row: FlexibleRow, index: number) {
  return isTableRow(row) ? row.id : `row-${index}`;
}

function getCellValue(row: FlexibleRow, columnKey: string) {
  if (isTableRow(row)) {
    return row.values[columnKey] ?? "NULL";
  }

  return row[columnKey] ?? "NULL";
}

export default function ResultTable({
  table,
  columns,
  rows,
  title,
}: ResultTableProps) {
  const tableColumns: FlexibleColumn[] = table?.columns ?? columns ?? [];
  const tableRows: FlexibleRow[] = table?.rows ?? rows ?? [];
  const tableTitle = title ?? table?.name;

  if (tableColumns.length === 0) {
    return (
      <div className="border-2 border-slate-700 bg-slate-950 p-4">
        <p className="text-sm font-black uppercase text-slate-400">
          No table data available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-2 border-slate-100 bg-slate-950 shadow-[5px_5px_0px_#22d3ee]">
      {tableTitle ? (
        <div className="border-b-2 border-slate-100 bg-cyan-300 px-4 py-3">
          <p className="text-xs font-black uppercase text-slate-950">
            Table: {tableTitle}
          </p>
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left font-mono text-sm">
          <thead>
            <tr className="bg-slate-900">
              {tableColumns.map((column) => {
                const columnKey = getColumnKey(column);
                const columnType = getColumnType(column);

                return (
                  <th
                    key={columnKey}
                    className="border-b-2 border-r-2 border-slate-700 px-4 py-3 text-xs font-black uppercase text-cyan-300 last:border-r-0"
                  >
                    <span>{getColumnLabel(column)}</span>

                    {columnType ? (
                      <span className="ml-2 text-slate-500">
                        ({columnType})
                      </span>
                    ) : null}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {tableRows.map((row, rowIndex) => {
              const rowId = getRowId(row, rowIndex);

              return (
                <tr key={rowId} className="odd:bg-slate-950 even:bg-slate-900">
                  {tableColumns.map((column) => {
                    const columnKey = getColumnKey(column);

                    return (
                      <td
                        key={`${rowId}-${columnKey}`}
                        className="border-r-2 border-t-2 border-slate-800 px-4 py-3 text-slate-200 last:border-r-0"
                      >
                        {String(getCellValue(row, columnKey))}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
