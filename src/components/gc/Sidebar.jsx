import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Truck, ChevronRight, X } from 'lucide-react';

const nav = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Truck, label: 'Fleet', path: '/dashboard/fleet' },
];

export default function Sidebar({ open, onClose }) {
  const location = useLocation();

  const Item = ({ icon: Icon, label, path }) => {
    const active = location.pathname === path;
    return (
      <Link
        to={path}
        onClick={onClose}
        className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
          active
            ? 'bg-primary/10 text-primary border border-primary/20'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span className="flex-1">{label}</span>
        {active && <ChevronRight className="w-3 h-3 opacity-50" />}
      </Link>
    );
  };

  return (
    <aside
      style={{ top: 'var(--site-nav-height)' }}
      className={`w-60 bg-card border-r border-border flex flex-col z-30 fixed left-0 transition-transform duration-300 bottom-0 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
    >
      {/* Brand */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-border">
        <Link to="/" onClick={onClose}>
          <img
            src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/231c7b7f8_GroundControl.png"
            alt="Ground Control"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <button onClick={onClose} className="lg:hidden p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Live indicator */}
      <div className="px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 live-dot" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-green-400">Live Feed Active</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        {nav.map((item) => <Item key={item.path} {...item} />)}
      </nav>
    </aside>
  );
}