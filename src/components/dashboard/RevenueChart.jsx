import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 18400, users: 1200 },
  { month: 'Feb', revenue: 22100, users: 1450 },
  { month: 'Mar', revenue: 19800, users: 1380 },
  { month: 'Apr', revenue: 27600, users: 1800 },
  { month: 'May', revenue: 32100, users: 2100 },
  { month: 'Jun', revenue: 29400, users: 1950 },
  { month: 'Jul', revenue: 35800, users: 2400 },
  { month: 'Aug', revenue: 41200, users: 2780 },
  { month: 'Sep', revenue: 38900, users: 2600 },
  { month: 'Oct', revenue: 44600, users: 3050 },
  { month: 'Nov', revenue: 48200, users: 3300 },
  { month: 'Dec', revenue: 52100, users: 3600 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-foreground text-background px-3 py-2 rounded-lg shadow-lg">
        <p className="text-xs font-medium mb-1">{label}</p>
        <p className="text-xs">Revenue: <span className="font-semibold">${(payload[0].value / 1000).toFixed(1)}k</span></p>
        <p className="text-xs">Users: <span className="font-semibold">{payload[1].value.toLocaleString()}</span></p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Revenue Overview</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Monthly revenue and user growth</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-violet-400" />
            <span className="text-muted-foreground">Users</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(270, 60%, 65%)" stopOpacity={0.15} />
              <stop offset="100%" stopColor="hsl(270, 60%, 65%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} dy={8} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} tickFormatter={v => `$${v / 1000}k`} dx={-8} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="revenue" stroke="hsl(221, 83%, 53%)" strokeWidth={2} fill="url(#revenueGrad)" />
          <Area type="monotone" dataKey="users" stroke="hsl(270, 60%, 65%)" strokeWidth={2} fill="url(#usersGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}