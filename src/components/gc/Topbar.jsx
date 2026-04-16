import React from 'react';
import { Bell, Search, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Topbar({ title, breadcrumb }) {
  return (
    <div className="h-14 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-30 flex items-center justify-between px-6">
      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">{title}</div>
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="font-bold tracking-widest uppercase text-[9px]">Ground Control</span>
          <span className="opacity-40">›</span>
          <span>{breadcrumb}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input placeholder="Search units, sites..." className="pl-8 h-8 w-52 text-xs bg-muted/50 border-border" />
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gc-green tracking-widest uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-gc-green live-dot" />
          Live
        </div>

        <button className="relative p-2 rounded-md hover:bg-accent transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-gc-red rounded-full border border-background" />
        </button>

        <Button size="sm" className="h-8 gap-1.5 text-xs font-bold bg-primary hover:bg-primary/90 px-3">
          <Plus className="w-3.5 h-3.5" /> Request Equipment
        </Button>
      </div>
    </div>
  );
}