import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';

const CORE_LINKS = [
  { label: 'Rentals', href: '/rentals', icon: null },
  { label: 'Sales', href: '/sales', icon: null },
  { label: 'Service', href: '/service', icon: null },
];

const UTILITY_LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: null },
  { label: 'Locations', href: '/locations', icon: null },
  { label: 'About', href: '/about', icon: null },
];

export default function PerimeterNavigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (href) => location.pathname.startsWith(href);

  return (
    <>
      {/* Perimeter Frame Border */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {/* Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        {/* Left */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />
        {/* Right */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />
      </div>

      {/* Left Navigation */}
      <nav className="fixed left-0 top-0 h-screen z-40 flex flex-col items-center justify-center py-8 pointer-events-auto">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="mb-12 flex flex-col items-center gap-2 group"
        >
          <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
            <span className="text-orange-500 font-black text-xs">AAS</span>
          </div>
          <span className="text-[8px] text-zinc-600 uppercase tracking-wider group-hover:text-orange-500 transition-colors">All Access</span>
        </Link>

        {/* Core Links */}
        <div className="flex flex-col gap-8">
          {CORE_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group relative text-zinc-500 hover:text-orange-500 transition-colors text-[10px] font-bold uppercase tracking-wider"
              title={link.label}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -right-6 top-1/2 w-1 h-4 bg-orange-500 -translate-y-1/2"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Right Navigation */}
      <nav className="fixed right-0 top-0 h-screen z-40 flex flex-col items-center justify-center py-8 pointer-events-auto">
        <div className="flex flex-col gap-8">
          {UTILITY_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group relative text-zinc-500 hover:text-orange-500 transition-colors text-[10px] font-bold uppercase tracking-wider"
              title={link.label}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-6 top-1/2 w-1 h-4 bg-orange-500 -translate-y-1/2"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Phone CTA at bottom right */}
        <a
          href={`tel:${SITE_CONFIG.phoneTel}`}
          className="absolute bottom-8 text-zinc-500 hover:text-orange-500 transition-colors text-[8px] font-bold uppercase tracking-wider"
          title="Call us"
        >
          {SITE_CONFIG.phone}
        </a>
      </nav>

      {/* Bottom Center Command Search */}
      <motion.button
        onClick={() => setSearchOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-12 h-12 rounded-full border-2 border-orange-500 bg-black/40 backdrop-blur-md hover:bg-orange-500/20 flex items-center justify-center transition-colors"
      >
        <Search className="w-5 h-5 text-orange-500" />
      </motion.button>

      {/* Command Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="absolute top-3 left-4 text-zinc-600 pointer-events-none">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  autoFocus
                  type="text"
                  placeholder="Search equipment, locations, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-zinc-900 border border-orange-500/30 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute top-3 right-4 text-zinc-600 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-zinc-900 border border-zinc-800 rounded-lg max-h-96 overflow-y-auto"
                >
                  <p className="text-sm text-zinc-500">
                    Search results for "<strong className="text-white">{searchQuery}</strong>" coming soon.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}