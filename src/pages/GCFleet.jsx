import React, { useState } from 'react';
import Topbar from '../components/gc/Topbar';
import FleetUnitRow from '../components/gc/FleetUnitRow';
import { Search, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";

const fleet = [
  { id: '01', model: 'JLG 450AJ', type: 'Articulating Boom', status: 'active', site: 'Site Alpha', fuel: 82, hours: 1240, nextService: 'May 2' },
  { id: '02', model: 'JLG 800AJ', type: 'Articulating Boom', status: 'active', site: 'Site Alpha', fuel: 65, hours: 980, nextService: 'May 10' },
  { id: '03', model: 'JLG 800AJ', type: 'Articulating Boom', status: 'idle', site: 'Site Alpha', fuel: 91, hours: 720, nextService: 'Apr 19' },
  { id: '04', model: 'JLG E450AJ', type: 'Electric Articulating', status: 'idle', site: 'Site Alpha', fuel: 44, hours: 540, nextService: 'Jun 1' },
  { id: '05', model: 'Genie Z-60/37', type: 'Articulating Boom', status: 'active', site: 'Site Bravo', fuel: 77, hours: 1560, nextService: 'Apr 28' },
  { id: '06', model: 'JLG 600S', type: 'Telescopic Boom', status: 'active', site: 'Site Bravo', fuel: 58, hours: 2100, nextService: 'May 5' },
  { id: '07', model: 'JLG 1850SJ', type: 'Telescopic Boom', status: 'active', site: 'Site Alpha', fuel: 73, hours: 890, nextService: 'May 20' },
  { id: '08', model: 'JLG 450AJ', type: 'Articulating Boom', status: 'maintenance', site: 'Site Alpha', fuel: 30, hours: 2850, nextService: 'Overdue' },
  { id: '09', model: 'JLG E300AJP', type: 'Electric Articulating', status: 'active', site: 'Site Alpha', fuel: 88, hours: 320, nextService: 'Jul 15' },
  { id: '10', model: 'JLG 4069LE', type: 'Electric Scissor', status: 'active', site: 'Site Charlie', fuel: 70, hours: 450, nextService: 'Jun 10' },
  { id: '11', model: 'JLG 3246ES', type: 'Electric Scissor', status: 'active', site: 'Site Charlie', fuel: 62, hours: 280, nextService: 'Jun 20' },
  { id: '12', model: 'JLG ES2646', type: 'Electric Scissor', status: 'charging', site: 'Site Bravo', fuel: 18, hours: 610, nextService: 'May 12' },
  { id: '13', model: 'JLG SkyTrak 6042', type: 'Telehandler', status: 'maintenance', site: 'Site Charlie', fuel: 45, hours: 3200, nextService: 'Overdue' },
  { id: '14', model: 'Genie GTH-636', type: 'Telehandler', status: 'active', site: 'Site Alpha', fuel: 84, hours: 1100, nextService: 'May 30' },
  { id: '15', model: 'JLG G9-43A', type: 'Telehandler', status: 'active', site: 'Site Bravo', fuel: 69, hours: 760, nextService: 'Jun 5' },
  { id: '16', model: 'Genie Z-80/60', type: 'Articulating Boom', status: 'offline', site: '—', fuel: 0, hours: 4100, nextService: 'In Depot' },
];

const filterTabs = ['All', 'Active', 'Idle', 'Maintenance', 'Charging', 'Offline'];

export default function GCFleet() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = fleet.filter(u => {
    const matchSearch = u.model.toLowerCase().includes(search.toLowerCase()) ||
      u.site.toLowerCase().includes(search.toLowerCase()) ||
      `U-${u.id}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filter === 'All' || u.status === filter.toLowerCase();
    return matchSearch && matchStatus;
  });

  const counts = filterTabs.reduce((acc, t) => {
    acc[t] = t === 'All' ? fleet.length : fleet.filter(u => u.status === t.toLowerCase()).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <Topbar title="Fleet" breadcrumb="All Units" />
      <div className="p-6 space-y-4">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex gap-1 flex-wrap">
            {filterTabs.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                  filter === t
                    ? 'bg-primary/15 text-primary border border-primary/25'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent'
                }`}
              >
                {t}
                <span className={`ml-1.5 text-[10px] ${filter === t ? 'text-primary/70' : 'text-muted-foreground/50'}`}>
                  {counts[t]}
                </span>
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search units..."
              className="pl-8 h-8 w-52 text-xs bg-muted/50"
            />
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Unit</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Model</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Site</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Fuel / Battery</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Total Hrs</th>
                <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Next Service</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => <FleetUnitRow key={u.id} unit={u} />)}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-16 text-center text-sm text-muted-foreground">No units match your filter.</div>
          )}
        </div>
        <div className="text-[11px] text-muted-foreground">Showing {filtered.length} of {fleet.length} units · ClearSky™ Telematics</div>
      </div>
    </div>
  );
}