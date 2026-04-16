import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GCLogo from './GCLogo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'How It Works', href: '#how' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <GCLogo size={28} />
          <div>
            <div className="text-xs font-black tracking-widest uppercase text-foreground leading-none">Ground Control</div>
            <div className="text-[9px] font-bold tracking-wider text-gc-orange uppercase mt-0.5">All Access Unlimited</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-xs font-bold tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard"
            className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide">
            Log In
          </Link>
          <Link to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold rounded-md transition-colors uppercase tracking-wide">
            Request Membership
          </Link>
        </div>

        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map(l => (
                <a key={l.label} href={l.href}
                  className="block text-xs font-bold uppercase tracking-wide text-muted-foreground py-2"
                  onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border">
                <Link to="/dashboard"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-md uppercase tracking-wide">
                  Request Membership
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}