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
  // Repeat the items twice so the marquee can loop seamlessly when the
  // first half scrolls off (translateX -50%).
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <Link
      to="/safety"
      // top-16 sm:top-20 md:top-24 -> sits flush below the Navbar at every breakpoint
      className="block w-full bg-orange-500 hover:bg-orange-400 transition-colors overflow-hidden fixed top-16 sm:top-20 md:top-24 left-0 right-0 z-40 group"
    >
      <div className="flex gap-12 py-2 animate-ticker whitespace-nowrap">
        {repeated.map((text, i) => (
          
          <span
            key={i}
            className="inline-flex items-center gap-2.5 text-[11px] font-black text-black uppercase tracking-[0.2em] shrink-0"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            {text}
          </span>
        ))}
      </div>
    </Link>
  );
}