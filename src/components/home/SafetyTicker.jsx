import { ShieldCheck, ArrowRight } from 'lucide-react';

const LINES = [
  { text: "Safety isn't a checkbox — it's our top priority.", bold: true },
  { text: "The only JLG Factory Service Centers in the USA.", bold: false },
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
      <div className="flex items-center gap-3 px-5 py-2" style={{ paddingLeft: '10%' }}>
        {/* Shield icon */}
        <ShieldCheck className="w-6 h-6 shrink-0" style={{ color: '#c2410c' }} />

        {/* Lines */}
        <div className="flex-1">
          {LINES.map((line, i) => (
            <p
              key={i}
              className={`text-black leading-tight ${line.bold ? 'font-bold text-xs' : 'font-normal text-xs'}`}
            >
              {line.text}
            </p>
          ))}
        </div>

        {/* Learn More */}
        <div className="shrink-0 flex items-center gap-1 ml-2">
          <span className="font-semibold text-xs group-hover:underline whitespace-nowrap" style={{ color: '#c2410c' }}>
            Learn More
          </span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color: '#c2410c' }} />
        </div>
      </div>
    </a>
  );
}