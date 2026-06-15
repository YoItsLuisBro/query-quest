interface QueryBlockProps {
  query: string;
  label?: string;
}

export default function QueryBlock({
  query,
  label = "Query Active",
}: QueryBlockProps) {
  return (
    <div>
      <div className="border-x-2 border-t-2 border-slate-600 bg-slate-900 px-4 py-2">
        <p className="text-xs font-black uppercase text-cyan-300">{label}</p>
      </div>

      <pre className="overflow-x-auto border-2 border-slate-600 bg-slate-950 p-4 text-sm leading-7 text-cyan-200">
        <code>{query}</code>
      </pre>
    </div>
  );
}
