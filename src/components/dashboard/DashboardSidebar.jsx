import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BarChart3, Users, Settings, Zap,
  FileText, Bell, HelpCircle, LogOut, ChevronDown
} from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mainNav = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: Users, label: 'Customers', path: '/dashboard/customers' },
  { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
];

const bottomNav = [
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help & Support', path: '/dashboard/help' },
];

export default function DashboardSidebar() {
  const location = useLocation();

  const NavItem = ({ icon: Icon, label, path }) => {
    const active = location.pathname === path;
    return (
      <Link
        to={path}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          active
            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
            : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
        }`}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2.5 px-5 border-b border-sidebar-border">
        <div className="w-7 h-7 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <Zap className="w-3.5 h-3.5 text-sidebar-primary-foreground" />
        </div>
        <span className="text-base font-bold tracking-tight text-sidebar-accent-foreground">Pulse</span>
      </div>

      {/* Workspace selector */}
      <div className="px-4 py-3">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center text-xs font-bold text-white">
            A
          </div>
          <div className="flex-1 text-left">
            <p className="text-xs font-semibold text-sidebar-accent-foreground">Acme Corp</p>
            <p className="text-[11px] text-sidebar-foreground/50">Pro Plan</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-sidebar-foreground/40" />
        </button>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {mainNav.map(item => (
          <NavItem key={item.path} {...item} />
        ))}
      </nav>

      {/* Bottom navigation */}
      <div className="px-4 pb-2 space-y-1 border-t border-sidebar-border pt-3">
        {bottomNav.map(item => (
          <NavItem key={item.path} {...item} />
        ))}
      </div>

      {/* User info */}
      <div className="px-4 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground text-xs font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-accent-foreground truncate">Jane Doe</p>
            <p className="text-[11px] text-sidebar-foreground/50 truncate">jane@acme.com</p>
          </div>
          <button className="p-1 rounded hover:bg-sidebar-accent transition-colors">
            <LogOut className="w-3.5 h-3.5 text-sidebar-foreground/40" />
          </button>
        </div>
      </div>
    </aside>
  );
}