import React, { useState } from 'react';
import Topbar from '../components/gc/Topbar';
import KpiCard from '../components/gc/KpiCard';
import AlertRow from '../components/gc/AlertRow';
import SiteMap from '../components/gc/SiteMap';
import StatusBadge from '../components/gc/StatusBadge';
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const hoursData = [
  { t: '6am', hrs: 4 }, { t: '8am', hrs: 18 }, { t: '10am', hrs: 42 },
  { t: '12pm', hrs: 67 }, { t: '2pm', hrs: 81 }, { t: '4pm', hrs: 94 },
  { t: '6pm', hrs: 88 }, { t: '8pm', hrs: 62 },
];

const recentRentals = [
  { id: 'R-1041', unit: '450AJ', site: 'Site Alpha', customer: 'Lockheed Martin', start: 'Apr 8', end: 'Apr 22', status: 'active' },
  { id: 'R-1039', unit: 'ES2646', site: 'Site Bravo', customer: 'Northrop Grumman', start: 'Apr 5', end: 'Apr 19', status: 'active' },
  { id: 'R-1038', unit: '800AJ', site: 'Site Alpha', customer: 'SpaceX', start: 'Apr 1', end: 'Apr 20', status: 'idle' },
  { id: 'R-1035', unit: 'SkyTrak', site: 'Site Charlie', customer: 'Boeing', start: 'Mar 28', end: 'Apr 18', status: 'maintenance' },
];

const statusCol = {
  active: 'text-gc-green',
  idle: 'text-gc-yellow',
  maintenance: 'text-gc-red',
};

export default function GCDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen">
      <Topbar title="Dashboard" breadcrumb="Overview" />

      <div className="p-6 space-y-6">
        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
          <KpiCard label="Active Units" value="14" sub="of 16 total" trend="2 from yesterday" trendDir="up" color="green" />
          <KpiCard label="Maintenance Alerts" value="3" sub="2 overdue, 1 upcoming" trend="Needs attention" trendDir="down" color="red" />
          <KpiCard label="Hours Today" value="94.2" sub="fleet runtime hrs" trend="12% vs avg" trendDir="up" color="orange" />
          <KpiCard label="Open Rentals" value="7" sub="across 3 sites" trend="2 expiring soon" trendDir="flat" color="teal" />
          <KpiCard label="Outstanding" value="$4,820" sub="1 invoice due in 3d" trend="Net 30" trendDir="flat" color="yellow" />
        </div>

        {/* Map + Alerts */}
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Map */}
          <div className="lg:col-span-3 rounded-lg border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div>
                <div className="text-xs font-bold text-foreground">Live Fleet Map</div>
                <div className="text-[10px] text-muted-foreground">Site Alpha — 5 units tracked</div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gc-green tracking-widest uppercase">
                <div className="w-1.5 h-1.5 rounded-full bg-gc-green live-dot" />
                ClearSky™ Live
              </div>
            </div>
            <SiteMap className="h-56 w-full" />
          </div>

          {/* Alerts panel */}
          <div className="lg:col-span-2 rounded-lg border border-border bg-card flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div>
                <div className="text-xs font-bold text-foreground">Active Alerts</div>
                <div className="text-[10px] text-muted-foreground">5 items require attention</div>
              </div>
              <button className="text-[10px] font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="p-3 space-y-2 flex-1">
              <AlertRow level="red" title="Unit 08 — Annual Inspection Overdue" sub="450AJ · Site Alpha · Due 3 days ago · Factory-certified required" time="3d ago" action="Schedule" />
              <AlertRow level="red" title="Unit 12 — Battery Below 20%" sub="ES2646 · Site Bravo · Currently charging at depot" time="1h ago" action="Dismiss" />
              <AlertRow level="yellow" title="Unit 03 — Quarterly Inspection Due in 5 Days" sub="800AJ · Site Alpha · Schedule before Apr 14" time="Today" action="Schedule" />
              <AlertRow level="orange" title="Rental R-1041 Expiring in 6 Days" sub="Lockheed Martin · 450AJ · Site Alpha" time="Today" action="Renew" />
            </div>
          </div>
        </div>

        {/* Hours Chart + Recent Rentals */}
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Chart */}
          <div className="lg:col-span-2 rounded-lg border border-border bg-card p-4">
            <div className="mb-4">
              <div className="text-xs font-bold text-foreground">Fleet Runtime Today</div>
              <div className="text-[10px] text-muted-foreground">Cumulative hours across active units</div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={hoursData}>
                <defs>
                  <linearGradient id="hrsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF6410" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#EF6410" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 15%)" vertical={false} />
                <XAxis dataKey="t" axisLine={false} tickLine={false} tick={{ fill: 'hsl(215 10% 45%)', fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(215 10% 45%)', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ background: 'hsl(220 13% 9%)', border: '1px solid hsl(220 13% 15%)', borderRadius: 6 }}
                  labelStyle={{ color: 'hsl(210 20% 92%)', fontSize: 11, fontWeight: 700 }}
                  itemStyle={{ color: '#EF6410', fontSize: 11 }}
                />
                <Area type="monotone" dataKey="hrs" stroke="#EF6410" strokeWidth={2} fill="url(#hrsGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Rentals */}
          <div className="lg:col-span-3 rounded-lg border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div>
                <div className="text-xs font-bold text-foreground">Recent Rentals</div>
                <div className="text-[10px] text-muted-foreground">7 open across 3 sites</div>
              </div>
              <button className="text-[10px] font-bold text-primary hover:underline">View All</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ID</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Unit</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hidden md:table-cell">Customer</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Dates</th>
                  <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRentals.map(r => (
                  <tr key={r.id} className="border-t border-border hover:bg-accent/20 transition-colors">
                    <td className="px-4 py-3 text-[11px] font-bold text-gc-orange">{r.id}</td>
                    <td className="px-4 py-3">
                      <div className="text-xs font-semibold text-foreground">{r.unit}</div>
                      <div className="text-[10px] text-muted-foreground">{r.site}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground hidden md:table-cell">{r.customer}</td>
                    <td className="px-4 py-3 text-[11px] text-muted-foreground">{r.start} – {r.end}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}