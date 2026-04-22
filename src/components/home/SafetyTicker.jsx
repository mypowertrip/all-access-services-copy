import { ShieldCheck, ArrowRight } from 'lucide-react';

const LINES = [
  { text: "Safety isn't a checkbox — it's our top priority.", bold: true },
  { text: "The only JLG Factory Service Centers in the USA.", bold: true },
  { text: "Find out why our lifts are the safest in the industry.", bold: false },
];

export default function SafetyTicker() {
  return (
    <a
      href="/safety"
      className="block group"
      style={{
        position: 'fixed',
        top: 112,
        right: 0,
        zIndex: 40,
        width: '55%',
        background: 'linear-gradient(to right, transparent 0%, #f5a623 12%, #f5a623 100%)',
      }}
    >
      <div className="flex items-center gap-5 px-8 py-4" style={{ paddingLeft: '10%' }}>
        {/* Shield icon */}
        <ShieldCheck className="w-12 h-12 shrink-0" style={{ color: '#c2410c' }} />

        {/* Lines */}
        <div className="flex-1">
          {LINES.map((line, i) => (
            <p
              key={i}
              className={`text-black leading-snug ${line.bold ? 'font-bold text-base' : 'font-normal text-sm'}`}
            >
              {line.text}
            </p>
          ))}
        </div>

        {/* Learn More */}
        <div className="shrink-0 flex items-center gap-1 ml-4">
          <span className="font-bold text-sm group-hover:underline whitespace-nowrap" style={{ color: '#c2410c' }}>
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: '#c2410c' }} />
        </div>
      </div>
    </a>
  );
}