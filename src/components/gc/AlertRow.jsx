import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export default function AlertRow({ level = 'red', title, sub, time, action, onAction }) {
  const colors = {
    red:    'border-gc-red/20 bg-gc-red/5',
    yellow: 'border-gc-yellow/20 bg-gc-yellow/5',
    orange: 'border-gc-orange/20 bg-gc-orange/5',
  };
  const iconColors = {
    red:    'text-gc-red',
    yellow: 'text-gc-yellow',
    orange: 'text-gc-orange',
  };
  return (
    <div className={`flex items-center gap-4 px-4 py-3 rounded-lg border ${colors[level]}`}>
      <AlertTriangle className={`w-4 h-4 flex-shrink-0 ${iconColors[level]}`} />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5 truncate">{sub}</div>
      </div>
      <div className="text-[11px] text-muted-foreground flex-shrink-0 mr-2">{time}</div>
      {action && (
        <button
          onClick={onAction}
          className={`text-[11px] font-bold px-3 py-1.5 rounded border flex-shrink-0 transition-colors ${
            level === 'red'
              ? 'border-gc-orange/40 text-gc-orange hover:bg-gc-orange/10'
              : 'border-border text-muted-foreground hover:text-foreground hover:border-border/60'
          }`}
        >
          {action}
        </button>
      )}
    </div>
  );
}