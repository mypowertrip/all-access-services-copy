import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SiteNav({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navLinks = [
    { label: 'Equipment', href: '/equipment' },
    { label: 'How It Works', href: '/#how' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Ground Control', href: '/#ground-control', highlight: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm shadow-slate-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center shadow-md shadow-orange/30">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <path d="M8 24L16 8L24 24L20 24L16 16L12 24Z" fill="white" />
            </svg>
          </div>
          <div className="leading-none">
            <div className="text-sm font-black tracking-tight text-slate-900">All Access</div>
            <div className="text-[9px] font-bold tracking-widest text-orange uppercase">Services</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.label} to={l.href}
              className={`text-sm font-semibold transition-colors ${
                l.highlight
                  ? 'text-orange hover:text-orange/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + cart */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard" className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            Client Login
          </Link>
          {cartCount > 0 && (
            <Link to="/reserve" className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          )}
          <Link to="/equipment"
            className="px-4 py-2 bg-orange hover:bg-orange/90 text-white text-sm font-bold rounded-lg transition-colors shadow-md shadow-orange/20">
            Browse Equipment
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          {cartCount > 0 && (
            <Link to="/reserve" className="relative p-1.5">
              <ShoppingCart className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange text-white text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
            </Link>
          )}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-4">
              {navLinks.map(l => (
                <Link key={l.label} to={l.href}
                  className={`block text-sm font-semibold py-1 ${l.highlight ? 'text-orange' : 'text-slate-700'}`}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link to="/equipment" className="w-full text-center py-2.5 bg-orange text-white text-sm font-bold rounded-lg">
                  Browse Equipment
                </Link>
                <Link to="/dashboard" className="w-full text-center py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg">
                  Client Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}