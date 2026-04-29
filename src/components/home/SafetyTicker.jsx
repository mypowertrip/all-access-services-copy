import { ShieldCheck, ArrowRight } from 'lucide-react';

const ITEMS = [
"SAFETY ISN'T JUST A BOX WE CHECK — WE LIVE IT",
'COMMITTED TO THE SAFEST AERIAL EQUIPMENT POSSIBLE',
'MOST METICULOUSLY MAINTAINED FLEET IN THE INDUSTRY',
'JLG FACTORY AUTHORIZED TECHNICIANS',
"THAT'S WHY SAFETY IS AT THE TOP OF OUR PAGE"];


export default function SafetyTicker() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <a
      href="/safety"
      className="block w-full bg-orange-500 hover:bg-orange-400 transition-colors overflow-hidden group fixed top-16 sm:top-20 md:top-24 left-0 right-0 z-40 pointer-events-auto">
      
      <div className="flex gap-6 py-2 animate-none" style={{ animation: 'ticker 40s linear infinite' }}>
        {repeated.map((text, i) => (
          <span key={i} className="whitespace-nowrap text-xs font-semibold text-black uppercase tracking-widest flex items-center gap-2 shrink-0">
            {text}
            <ShieldCheck className="w-3.5 h-3.5" />
          </span>
        ))}
      </div>

























      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </a>);

}