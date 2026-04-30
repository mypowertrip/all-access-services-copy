import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const ITEMS = [
  "SAFETY ISN'T JUST A BOX WE CHECK — WE LIVE IT",
  'COMMITTED TO THE SAFEST AERIAL EQUIPMENT POSSIBLE',
  'MOST METICULOUSLY MAINTAINED FLEET IN THE INDUSTRY',
  'JLG FACTORY AUTHORIZED TECHNICIANS',
  "THAT'S WHY SAFETY IS AT THE TOP OF OUR PAGE",
];

export default function SafetyTicker() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <Link
      to="/safety"
      className="block w-full bg-orange-500 hover:bg-orange-400 transition-colors overflow-hidden fixed top-0 left-0 right-0 z-50 group"
    >
      <div className="flex gap-0 py-2 animate-ticker whitespace-nowrap items-center">
        {repeated.map((text, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            {/* Caution tape hashes */}
            <span className="inline-flex items-center mx-3 gap-px shrink-0" aria-hidden>
              {Array.from({ length: 6 }).map((_, j) => (
                <span
                  key={j}
                  className="inline-block w-2.5 h-4 shrink-0"
                  style={{
                    background: j % 2 === 0 ? '#000' : 'transparent',
                    transform: 'skewX(-20deg)',
                  }}
                />
              ))}
            </span>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-black text-black uppercase tracking-[0.2em]">
              <ShieldCheck className="w-3.5 h-3.5" />
              {text}
            </span>
            {/* Caution tape hashes */}
            <span className="inline-flex items-center mx-3 gap-px shrink-0" aria-hidden>
              {Array.from({ length: 6 }).map((_, j) => (
                <span
                  key={j}
                  className="inline-block w-2.5 h-4 shrink-0"
                  style={{
                    background: j % 2 === 0 ? '#000' : 'transparent',
                    transform: 'skewX(-20deg)',
                  }}
                />
              ))}
            </span>
          </span>
        ))}
      </div>
    </Link>
  );
}