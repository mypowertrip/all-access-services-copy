import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  { initials: 'SC', name: 'Sarah Chen', action: 'deployed', target: 'production v2.4.1', time: '2m ago', color: 'bg-emerald-100 text-emerald-700' },
  { initials: 'MJ', name: 'Marcus Johnson', action: 'opened', target: 'Issue #847', time: '15m ago', color: 'bg-blue-100 text-blue-700' },
  { initials: 'ER', name: 'Elena Rodriguez', action: 'merged', target: 'PR #312', time: '1h ago', color: 'bg-violet-100 text-violet-700' },
  { initials: 'AK', name: 'Alex Kim', action: 'commented on', target: 'API redesign', time: '2h ago', color: 'bg-amber-100 text-amber-700' },
  { initials: 'JD', name: 'Jane Doe', action: 'created', target: 'Q4 roadmap', time: '3h ago', color: 'bg-rose-100 text-rose-700' },
];

export default function RecentActivity() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>
      <div className="space-y-4">
        {activities.map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className={`text-[10px] font-semibold ${a.color}`}>
                {a.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground truncate">
                <span className="font-medium">{a.name}</span>{' '}
                <span className="text-muted-foreground">{a.action}</span>{' '}
                <span className="font-medium">{a.target}</span>
              </p>
            </div>
            <span className="text-[11px] text-muted-foreground flex-shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}