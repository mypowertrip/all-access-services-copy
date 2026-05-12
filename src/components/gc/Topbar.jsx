import React from 'react';
import { Plus, Menu, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useOutletContext, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { base44 } from '@/api/base44Client';

export default function Topbar({ title, breadcrumb }) {
  const { user } = useAuth();
  let onMenuClick;
  try {
    const ctx = useOutletContext();
    onMenuClick = ctx?.onMenuClick;
  } catch {
    onMenuClick = undefined;
  }

  const initials = user?.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : user?.email?.[0]?.toUpperCase() ?? '?';

  return (
    <div className="h-14 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-30 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <div className="text-sm font-bold tracking-tight text-foreground">{title}</div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span className="font-bold tracking-widest uppercase text-[9px]">Ground Control</span>
            <span className="opacity-40">›</span>
            <span>{breadcrumb}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Live status */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-green-400 tracking-widest uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 live-dot" />
          Live
        </div>

        {/* Request Equipment */}
        <Link to="/reserve">
          <Button size="sm" className="h-8 gap-1.5 text-xs font-bold bg-primary hover:bg-primary/90 px-2 md:px-3">
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Request Equipment</span>
          </Button>
        </Link>

        {/* User avatar + name */}
        <div className="flex items-center gap-2 pl-2 border-l border-border">
          <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[11px] font-bold text-primary">
            {initials}
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs font-semibold text-foreground leading-none">{user?.full_name || user?.email || 'User'}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{user?.email}</div>
          </div>
          <button
            onClick={() => base44.auth.logout('/')}
            title="Sign out"
            className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}