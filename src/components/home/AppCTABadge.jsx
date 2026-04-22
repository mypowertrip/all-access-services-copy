import { Smartphone, ArrowRight } from 'lucide-react';

export default function AppCTABadge() {
  return (
    <a
      href="/dashboard"
      className="group fixed right-4 z-40 flex items-center gap-3 bg-[#111] border border-teal-500/40 hover:border-orange-500/60 px-4 py-3 transition-all duration-300 hover:bg-[#181818]"
      style={{ top: 132 }}
    >
      {/* Hexagon phone icon */}
      <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
        {/* Teal hex border SVG */}
        <svg viewBox="0 0 44 44" className="absolute inset-0 w-full h-full text-teal-500/60 group-hover:text-orange-500/60 transition-colors" fill="none">
          <polygon points="22,2 40,12 40,32 22,42 4,32 4,12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
        <Smartphone className="w-4 h-4 text-orange-400 relative z-10" />
      </div>

      {/* Text */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-teal-400 leading-none mb-0.5">New App</p>
        <p className="text-xs font-bold text-white uppercase tracking-wide leading-none">Ground Control™</p>
        <p className="text-[10px] text-gray-500 mt-0.5 leading-none">Manage your fleet</p>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center w-6 h-6 border border-orange-500/50 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all ml-1">
        <ArrowRight className="w-3 h-3 text-orange-400 group-hover:text-black transition-colors" />
      </div>
    </a>
  );
}