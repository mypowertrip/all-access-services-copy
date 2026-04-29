import React from 'react';
import { Plus, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useOutletContext } from 'react-router-dom';

export default function Topbar({ title, breadcrumb }) {
  let onMenuClick;
  try {
    const ctx = useOutletContext();
    onMenuClick = ctx?.onMenuClick;
  } catch {
    onMenuClick = undefined;
  }

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
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-gc-green tracking-widest uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-gc-green live-dot" />
          Live
        </div>

        <Button size="sm" className="h-8 gap-1.5 text-xs font-bold bg-primary hover:bg-primary/90 px-2 md:px-3">
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Request Equipment</span>
        </Button>
      </div>
    </div>
  );
}