type TableCell = string | number | boolean | null;

interface ResultTableColumn {
  key: string;
  label: string;
}

interface ResultTableProps {
  columns: ResultTableColumn[];
  rows: Record<string, TableCell>[];
  title?: string;
}

export default function ResultTable({
  columns,
  rows,
  title = "Result Set",
}: ResultTableProps) {
  return (
    <div className="overflow-hidden border-2 border-slate-100 bg-slate-950">
      <div className="border-b-2 border-slate-100 bg-slate-900 px-4 py-3">
        <p className="text-sm font-black uppercase text-emerald-300">{title}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-800">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="border border-slate-600 px-4 py-3 font-black uppercase text-cyan-300"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-slate-950">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="border border-slate-700 px-4 py-3 text-slate-200"
                  >
                    {String(row[column.key] ?? "NULL")}
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
