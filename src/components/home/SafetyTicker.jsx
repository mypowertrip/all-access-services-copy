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
      className="block w-full bg-orange-500 hover:bg-orange-400 transition-colors overflow-hidden group"
      style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 40 }}>
      
      



























      

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </a>);

}