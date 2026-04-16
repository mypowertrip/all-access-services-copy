import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function SiteFooter() {
  const cols = [
    { title: 'Equipment', links: [['Boom Lifts', '/equipment?cat=boom'], ['Scissor Lifts', '/equipment?cat=scissor'], ['Telehandlers', '/equipment?cat=telehandler'], ['Forklifts', '/equipment?cat=forklift']] },
    { title: 'Company', links: [['About Us', '/#about'], ['Industries', '/#industries'], ['Ground Control', '/#ground-control'], ['Careers', '/']] },
    { title: 'Support', links: [['How It Works', '/#how'], ['Safety Standards', '/'], ['Maintenance', '/'], ['FAQs', '/']] },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <path d="M8 24L16 8L24 24L20 24L16 16L12 24Z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-black text-white tracking-tight">All Access Services</div>
                <div className="text-[9px] font-bold tracking-widest text-orange uppercase">Equipment Rental</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Premium aerial and material handling equipment rental for construction, industrial, and mission-critical operations.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="w-3.5 h-3.5 text-orange shrink-0" />
                <span>(800) 555-0100</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="w-3.5 h-3.5 text-orange shrink-0" />
                <span>rentals@allaccess.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin className="w-3.5 h-3.5 text-orange shrink-0" />
                <span>Serving nationwide · 24/7 Support</span>
              </div>
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-sm hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 All Access Services, Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs">
            <span>Fleet intelligence powered by</span>
            <span className="font-bold text-orange">Ground Control™</span>
          </div>
        </div>
      </div>
    </footer>
  );
}