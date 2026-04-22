import { ShieldCheck, ArrowRight } from 'lucide-react';

const ITEMS = [
  "SAFETY IS AT THE TOP OF OUR WEBSITE BECAUSE IT IS OUR TOP PRIORITY",
  "SAFETY ISN'T JUST A BOX WE CHECK — WE LIVE IT",
  'COMMITTED TO THE SAFEST AERIAL EQUIPMENT POSSIBLE',
  'MOST METICULOUSLY MAINTAINED FLEET IN THE INDUSTRY',
  'JLG FACTORY AUTHORIZED TECHNICIANS',
  'SEE WHY OUR EQUIPMENT IS THE SAFEST IN THE INDUSTRY',
];

export default function SafetyTicker() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <a
      href="/safety"
      className="block w-full overflow-hidden group"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60 }}
    >
      {/* Caution tape stripes top border */}
      <div style={{
        height: 8,
        background: 'repeating-linear-gradient(135deg, #000 0px, #000 10px, #f97316 10px, #f97316 20px)',
      }} />

      {/* Main ticker row */}
      <div className="flex items-center" style={{ background: '#f97316' }}>
        {/* Left label */}
        <div className="shrink-0 flex items-center gap-2 px-4 py-2 border-r-2 border-black/30" style={{
          background: 'repeating-linear-gradient(135deg, #000 0px, #000 8px, #f97316 8px, #f97316 16px)',
          minWidth: 90,
        }}>
          <ShieldCheck className="w-4 h-4 text-white drop-shadow" />
          <span className="text-white font-barlow font-black text-sm uppercase tracking-widest whitespace-nowrap drop-shadow">Safety</span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{ animation: 'ticker 30s linear infinite' }}
          >
            {repeated.map((item, i) => (
              <span key={i} className="font-barlow font-black text-sm uppercase tracking-widest text-black px-8 py-2 inline-flex items-center gap-4">
                {item}
                <span className="text-black/40 text-base">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <div className="shrink-0 flex items-center gap-1.5 px-4 py-2 border-l-2 border-black/30 text-black font-black text-xs uppercase tracking-widest whitespace-nowrap group-hover:bg-black/10 transition-colors" style={{
          background: 'repeating-linear-gradient(135deg, #000 0px, #000 8px, #f97316 8px, #f97316 16px)',
        }}>
          <span className="text-white drop-shadow">Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform drop-shadow" />
        </div>
      </div>

      {/* Caution tape stripes bottom border */}
      <div style={{
        height: 8,
        background: 'repeating-linear-gradient(135deg, #000 0px, #000 10px, #f97316 10px, #f97316 20px)',
      }} />

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </a>
  );
}