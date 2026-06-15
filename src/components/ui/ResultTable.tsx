import type { SampleTable, TableColumn, TableRow } from "../../types/learning";

interface ResultTableProps {
  table?: SampleTable;
  columns?: TableColumn[];
  rows?: TableRow[];
  title?: string;
}

export default function ResultTable({
  table,
  columns,
  rows,
  title,
}: ResultTableProps) {
  const tableColumns = table?.columns ?? columns ?? [];
  const tableRows = table?.rows ?? rows ?? [];
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
              {tableColumns.map((column) => (
                <th
                  key={column.name}
                  className="border-b-2 border-r-2 border-slate-700 px-4 py-3 text-xs font-black uppercase text-cyan-300 last:border-r-0"
                >
                  <span>{column.name}</span>
                  <span className="ml-2 text-slate-500">({column.type})</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id} className="odd:bg-slate-950 even:bg-slate-900">
                {tableColumns.map((column) => (
                  <td
                    key={`${row.id}-${column.name}`}
                    className="border-r-2 border-t-2 border-slate-800 px-4 py-3 text-slate-200 last:border-r-0"
                  >
                    {String(row.values[column.name] ?? "NULL")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
