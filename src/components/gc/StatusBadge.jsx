import React from 'react';

const config = {
  active:      { dot: 'bg-gc-green',  text: 'text-gc-green',  label: 'Active' },
  idle:        { dot: 'bg-gc-yellow', text: 'text-gc-yellow', label: 'Idle' },
  maintenance: { dot: 'bg-gc-red',    text: 'text-gc-red',    label: 'Maintenance' },
  charging:    { dot: 'bg-gc-teal',   text: 'text-gc-teal',   label: 'Charging' },
  offline:     { dot: 'bg-muted-foreground', text: 'text-muted-foreground', label: 'Offline' },
};

export default function StatusBadge({ status }) {
  const c = config[status] || config.offline;
  return (
    <span className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} live-dot`} />
      <span className={`text-xs font-semibold tracking-wide uppercase ${c.text}`}>{c.label}</span>
    </span>
  );
}