import { ShieldCheck, ArrowRight } from 'lucide-react';

const ITEMS = [
  "SAFETY IS AT THE TOP OF OUR WEBSITE BECAUSE IT IS OUR TOP PRIORITY",
  "SAFETY ISN'T JUST A BOX WE CHECK — WE LIVE IT",
  'COMMITTED TO THE SAFEST AERIAL EQUIPMENT POSSIBLE',
  'MOST METICULOUSLY MAINTAINED FLEET IN THE INDUSTRY',
  'JLG FACTORY AUTHORIZED TECHNICIANS',
];

export default function SafetyTicker() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <a
      href="/safety"
      className="block w-full bg-orange-500 hover:bg-orange-400 transition-colors overflow-hidden group"
      style={{ position: 'fixed', top: 96, left: 0, right: 0, zIndex: 40 }}
    >
      <div className="flex items-center">
        {/* Left label */}
        <div className="shrink-0 flex items-center gap-2 bg-black/20 px-4 py-2.5 border-r border-white/20">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span className="text-white font-barlow font-black text-sm uppercase tracking-widest whitespace-nowrap">Safety</span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{
              animation: 'ticker 30s linear infinite',
            }}
          >
            {repeated.map((item, i) => (
              <span key={i} className="font-barlow font-bold text-sm uppercase tracking-widest text-black px-8 py-2.5 inline-flex items-center gap-4">
                {item}
                <span className="text-white/50 text-xs">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <div className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 bg-black/20 border-l border-white/20 text-white font-bold text-xs uppercase tracking-widest whitespace-nowrap group-hover:bg-black/30 transition-colors">
          Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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