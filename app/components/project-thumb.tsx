const PALETTES: Record<string, string[]> = {
  portfolio: ["#22d3ee", "#0ea5e9", "#6366f1"],
  api: ["#4ade80", "#22c55e", "#16a34a"],
  dashboard: ["#f59e0b", "#f97316", "#ea580c"],
  ecommerce: ["#f97316", "#7c3aed", "#1e1b4b"],
  tasks: ["#e879f9", "#a855f7", "#7c3aed"],
  blog: ["#f472b6", "#ec4899", "#db2777"],
};

export function ProjectThumb({ type }: { type: string }) {
  const cols = PALETTES[type] || ["#6366f1", "#a78bfa", "#818cf8"];

  return (
    <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`g-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cols[0]} />
          <stop offset="100%" stopColor={cols[1]} />
        </linearGradient>
      </defs>
      <rect width="280" height="160" fill={`url(#g-${type})`} />
      <rect width="280" height="20" fill="rgba(0,0,0,0.35)" />
      <circle cx="12" cy="10" r="4" fill="#ff5f56" />
      <circle cx="24" cy="10" r="4" fill="#ffbd2e" />
      <circle cx="36" cy="10" r="4" fill="#27c93f" />
      <rect x="50" y="5" width="180" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
      <rect x="10" y="30" width="120" height="10" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="10" y="46" width="80" height="6" rx="2" fill="rgba(255,255,255,0.35)" />
      <rect x="10" y="60" width="100" height="6" rx="2" fill="rgba(255,255,255,0.35)" />
      <rect x="150" y="28" width="118" height="90" rx="4" fill={cols[2]} opacity="0.4" />
      <rect x="10" y="80" width="120" height="60" rx="4" fill="rgba(0,0,0,0.2)" />
    </svg>
  );
}
