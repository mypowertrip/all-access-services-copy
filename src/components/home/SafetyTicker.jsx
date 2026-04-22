import { ShieldCheck, ArrowRight } from 'lucide-react';

const ITEMS = [
  "Safety isn't a checkbox — it's our top priority. That's why it's at the top of our website.",
  "The only JLG Factory Service Centers in the USA",
  "Find out why our lifts are the safest in the industry.",
];

export default function SafetyTicker() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <a
      href="/safety"
      className="block w-full overflow-hidden group"
      style={{ position: 'fixed', top: 96, left: 0, right: 0, zIndex: 40 }}
    >
      {/* Main ticker row */}
      <div className="flex items-stretch" style={{ background: '#f97316' }}>

        {/* Left label — caution stripe + label */}
        <div className="shrink-0 flex items-stretch">
          {/* Left caution stripe */}
          <div style={{ width: 14, background: 'repeating-linear-gradient(135deg, #000 0px, #000 8px, #f97316 8px, #f97316 16px)' }} />
          <div className="flex items-center gap-2 px-4 bg-black">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-orange-400 font-barlow font-black text-xs uppercase tracking-widest whitespace-nowrap">Safety</span>
          </div>
          {/* Inner left stripe */}
          <div style={{ width: 14, background: 'repeating-linear-gradient(135deg, #000 0px, #000 8px, #f97316 8px, #f97316 16px)' }} />
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'ticker 18s linear infinite' }}
          >
            {repeated.map((item, i) => (
              <span key={i} className="font-barlow font-black text-sm uppercase tracking-widest text-white py-1.5 px-8 inline-flex items-center gap-4" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>
                {item}
                {/* Caution stripe separator */}
                <span style={{ display: 'inline-block', width: 20, height: '100%', minHeight: 28, background: 'repeating-linear-gradient(135deg, #000 0px, #000 6px, #f97316 6px, #f97316 12px)', borderRadius: 0, flexShrink: 0, alignSelf: 'stretch' }} />
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA — inner stripe + label + outer stripe */}
        <div className="shrink-0 flex items-stretch">
          {/* Inner right stripe */}
          <div style={{ width: 14, background: 'repeating-linear-gradient(135deg, #000 0px, #000 8px, #f97316 8px, #f97316 16px)' }} />
          <div className="flex items-center gap-1.5 px-4 bg-black group-hover:bg-zinc-900 transition-colors whitespace-nowrap">
            <span className="text-orange-400 font-black text-xs uppercase tracking-widest">Learn More</span>
            <ArrowRight className="w-3 h-3 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
          {/* Right caution stripe */}
          <div style={{ width: 14, background: 'repeating-linear-gradient(135deg, #000 0px, #000 8px, #f97316 8px, #f97316 16px)' }} />
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </a>
  );
}