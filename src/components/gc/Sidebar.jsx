import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GCLogo from './GCLogo';
import {
  LayoutDashboard, Truck, Map, Wrench, FileText,
  Package, Bell, Settings, ChevronRight, Radio
} from 'lucide-react';

const nav = [
  { icon: LayoutDashboard, label: 'Dashboard',   path: '/dashboard' },
  { icon: Truck,           label: 'Fleet',        path: '/dashboard/fleet' },
  { icon: Map,             label: 'Live Map',     path: '/dashboard/map' },
  { icon: Wrench,          label: 'Maintenance',  path: '/dashboard/maintenance' },
  { icon: Package,         label: 'Equipment',    path: '/dashboard/equipment' },
  { icon: FileText,        label: 'Rentals',      path: '/dashboard/rentals' },
  { icon: Bell,            label: 'Alerts',       path: '/dashboard/alerts', badge: 5 },
];

const bottom = [
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  const Item = ({ icon: Icon, label, path, badge }) => {
    const active = location.pathname === path;
    return (
      <Link
        to={path}
        className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
          active
            ? 'bg-primary/10 text-primary border border-primary/20'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span className="flex-1">{label}</span>
        {badge && (
          <span className="text-[10px] font-bold bg-gc-red text-white px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
        {active && <ChevronRight className="w-3 h-3 opacity-50" />}
      </Link>
    );
  };

  return (
    <aside className="w-60 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0 z-40">
      {/* Brand */}
      <div className="h-14 flex items-center gap-3 px-4 border-b border-border">
        <GCLogo size={28} />
        <div>
          <div className="text-xs font-black tracking-widest uppercase text-foreground leading-none">Ground Control</div>
          <div className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase mt-0.5">Fleet Intelligence</div>
        </div>
      </div>

      {/* Account */}
      <div className="px-3 py-3 border-b border-border">
        <div className="px-3 py-2.5 rounded-md bg-accent/50 border border-border">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-primary/15 flex items-center justify-center text-[11px] font-black text-primary">
              AA
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-foreground truncate">All Access Unlimited</div>
              <div className="text-[10px] text-muted-foreground">Enterprise · 16 Units</div>
            </div>
          </div>
        </div>
      </div>

      {/* Live indicator */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gc-green live-dot" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-gc-green">Live Feed Active</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto pb-4">
        {nav.map(item => <Item key={item.path} {...item} />)}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-3 space-y-0.5 border-t border-border pt-3">
        {bottom.map(item => <Item key={item.path} {...item} />)}
        <div className="flex items-center gap-3 px-3 py-2.5 mt-1">
          <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-[11px] font-bold text-foreground">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-foreground">Jane Doe</div>
            <div className="text-[10px] text-muted-foreground">Fleet Operator</div>
          </div>
        </div>
      </div>
    </aside>
  );
}