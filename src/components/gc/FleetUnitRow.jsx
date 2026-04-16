import React from 'react';
import StatusBadge from './StatusBadge';
import { MoreHorizontal } from 'lucide-react';

export default function FleetUnitRow({ unit }) {
  return (
    <tr className="border-t border-border hover:bg-accent/30 transition-colors">
      <td className="px-4 py-3">
        <div className="text-xs font-black text-gc-orange">U-{unit.id}</div>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm font-semibold text-foreground">{unit.model}</div>
        <div className="text-[11px] text-muted-foreground">{unit.type}</div>
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={unit.status} />
      </td>
      <td className="px-4 py-3 text-xs text-muted-foreground">{unit.site}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden w-16">
            <div
              className={`h-full rounded-full ${
                unit.fuel > 60 ? 'bg-gc-green' : unit.fuel > 30 ? 'bg-gc-yellow' : 'bg-gc-red'
              }`}
              style={{ width: `${unit.fuel}%` }}
            />
          </div>
          <span className="text-[11px] text-muted-foreground">{unit.fuel}%</span>
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-muted-foreground">{unit.hours}h</td>
      <td className="px-4 py-3 text-xs text-muted-foreground">{unit.nextService}</td>
      <td className="px-4 py-3">
        <button className="p-1 rounded hover:bg-muted transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </td>
    </tr>
  );
}