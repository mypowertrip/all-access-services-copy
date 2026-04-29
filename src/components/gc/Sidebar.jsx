import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Truck, Map, Wrench, FileText,
  Package, Bell, Settings, ChevronRight, X } from
'lucide-react';

const nav = [
{ icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
{ icon: Truck, label: 'Fleet', path: '/dashboard/fleet' },
{ icon: Map, label: 'Live Map', path: '/dashboard/map' },
{ icon: Wrench, label: 'Maintenance', path: '/dashboard/maintenance' },
{ icon: Package, label: 'Equipment', path: '/dashboard/equipment' },
{ icon: FileText, label: 'Rentals', path: '/dashboard/rentals' },
{ icon: Bell, label: 'Alerts', path: '/dashboard/alerts', badge: 5 }];


const bottom = [
{ icon: Settings, label: 'Settings', path: '/dashboard/settings' }];


export default function Sidebar({ open, onClose }) {
  const location = useLocation();

  const Item = ({ icon: Icon, label, path, badge }) => {
    const active = location.pathname === path;
    return (
      <Link
        to={path}
        onClick={onClose}
        className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
        active ?
        'bg-primary/10 text-primary border border-primary/20' :
        'text-muted-foreground hover:text-foreground hover:bg-accent'}`
        }>
        
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span className="flex-1">{label}</span>
        {badge &&
        <span className="text-[10px] font-bold bg-gc-red text-white px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        }
        {active && <ChevronRight className="w-3 h-3 opacity-50" />}
      </Link>);

  };

  return (
    <aside className={`
      w-60 h-screen bg-card border-r border-border flex flex-col z-40
      fixed left-0 top-0 pt-36 transition-transform duration-300
      ${open ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0
    `}>
      {/* Brand */}
      <div className="h-16 flex items-center justify-between px-3 border-b border-border">
        <Link to="/" onClick={onClose}>
          <img
            src="https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/43e14deaf_Gemini_Generated_Image_s7mhb8s7mhb8s7mh1.png"
            alt="All Access Services"
            className="h-12 w-auto object-contain" />
          
        </Link>
        <button onClick={onClose} className="lg:hidden p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Account */}
      <div className="px-3 py-3 border-b border-border">
        









        
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
        {nav.map((item) => <Item key={item.path} {...item} />)}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-3 space-y-0.5 border-t border-border pt-3">
        {bottom.map((item) => <Item key={item.path} {...item} />)}
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
    </aside>);

}