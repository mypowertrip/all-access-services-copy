import React from 'react';
import GCLogo from './GCLogo';

export default function LandingFooter() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <GCLogo size={24} />
              <div>
                <div className="text-[10px] font-black tracking-widest uppercase text-foreground">Ground Control</div>
                <div className="text-[9px] font-bold tracking-wider text-gc-orange uppercase">All Access Unlimited</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              White-glove fleet management for military, aerospace, and space operators.
            </p>
          </div>
          {[
            { title: 'Platform', links: ['Dashboard', 'ClearSky™ Telematics', 'Maintenance', 'Rentals', 'Alerts'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Partners'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground">© 2026 All Access Services. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground">
            Powered by <span className="font-bold text-gc-orange">Ground Control</span> Fleet Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}