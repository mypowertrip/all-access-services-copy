import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  { name: 'API Gateway v3', status: 'In Progress', progress: 72, lead: 'Sarah C.', priority: 'High', updated: '2h ago' },
  { name: 'Mobile SDK', status: 'In Review', progress: 90, lead: 'Marcus J.', priority: 'Medium', updated: '4h ago' },
  { name: 'Dashboard Redesign', status: 'In Progress', progress: 45, lead: 'Elena R.', priority: 'High', updated: '1d ago' },
  { name: 'Auth Service', status: 'Completed', progress: 100, lead: 'Alex K.', priority: 'Low', updated: '2d ago' },
  { name: 'Data Pipeline', status: 'Planning', progress: 12, lead: 'Jane D.', priority: 'Medium', updated: '3d ago' },
];

const statusStyles = {
  'In Progress': 'bg-blue-50 text-blue-700 border-blue-200',
  'In Review': 'bg-amber-50 text-amber-700 border-amber-200',
  'Completed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Planning': 'bg-slate-50 text-slate-600 border-slate-200',
};

const priorityStyles = {
  'High': 'bg-red-50 text-red-600',
  'Medium': 'bg-amber-50 text-amber-600',
  'Low': 'bg-slate-50 text-slate-500',
};

export default function ProjectsTable() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between p-6 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Active Projects</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{projects.length} projects in progress</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs h-8">
          View all
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-border bg-muted/40">
              <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Project</th>
              <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Progress</th>
              <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Lead</th>
              <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Priority</th>
              <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Updated</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i} className="border-t border-border hover:bg-muted/20 transition-colors">
                <td className="px-6 py-3.5 text-sm font-medium text-foreground">{p.name}</td>
                <td className="px-6 py-3.5">
                  <Badge variant="outline" className={`text-[11px] font-medium border ${statusStyles[p.status]}`}>
                    {p.status}
                  </Badge>
                </td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <Progress value={p.progress} className="h-1.5 w-20" />
                    <span className="text-xs text-muted-foreground">{p.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-sm text-muted-foreground">{p.lead}</td>
                <td className="px-6 py-3.5">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${priorityStyles[p.priority]}`}>
                    {p.priority}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-xs text-muted-foreground">{p.updated}</td>
                <td className="px-6 py-3.5">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}