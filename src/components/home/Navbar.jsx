import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Menu, X, Search, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { rentalModels } from '../../lib/rentalInventory';
import { SITE_CONFIG } from '../../lib/siteConfig';

const mainNavLinks = [
  {
    label: 'Rentals',
    href: '/rentals',
    children: [
      { label: 'Scissor Lifts', href: '/rentals/category/scissor-lifts' },
      { label: 'Straight Boom Lifts', href: '/rentals/category/straight-boom-lifts' },
      { label: 'Articulating Booms', href: '/rentals/category/articulating-boom-lifts' },
      { label: 'Telehandlers', href: '/rentals/category/telehandlers' },
      { label: 'Forklifts', href: '/rentals/category/forklifts' },
    ],
  },
  {
    label: 'Sales',
    href: '/sales',
    children: [
      { label: 'New Equipment', href: '/sales?filter=new' },
      { label: 'Pre-Owned', href: '/sales?filter=pre-owned' },
      { label: 'Certified', href: '/sales?filter=certified' },
    ],
  },
  { label: 'Service', href: '/service' },
  { label: 'Locations', href: '/locations' },
];

const industries = [
  { label: 'Space / Aerospace', slug: 'space-aerospace' },
  { label: 'Military', slug: 'military' },
  { label: 'Construction', slug: 'construction' },
  { label: 'Events', slug: 'events' },
  { label: 'Warehouse', slug: 'warehouse' },
  { label: 'Government', slug: 'government' },
];
const moreLinks = [
  { label: 'About', href: '/about' },
  { label: 'Get a Quote', href: '/reserve' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key !== 'Enter') return;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    const matches = rentalModels.filter(
      (m) => m.id.toLowerCase().includes(q) || m.name.toLowerCase().includes(q)
    );
    if (matches.length === 1) {
      navigate(`/rentals/model/${matches[0].id}`);
      setSearchQuery('');
      return;
    }
    navigate(`/rentals?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery('');
  };

  // Close drawer on outside click
  useEffect(() => {
    if (!drawerOpen) return;
    const handler = (e) => {
      if (!e.target.closest('#side-drawer') && !e.target.closest('#hamburger-btn')) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [drawerOpen]);

  return (
    <header className="fixed top-8 left-0 right-0 z-50">
      <nav
        className={`relative transition-all duration-300 border-b ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-orange-500/20 shadow-2xl shadow-black/60'
            : 'bg-black/80 backdrop-blur-sm border-zinc-900'
        }`}
      >
        {/* Subtle grid texture instead of metal photo */}
        <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />

        <div className={`max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between relative z-10 transition-all duration-300 ${
          scrolled ? 'h-14 sm:h-16 md:h-20' : 'h-16 sm:h-20 md:h-24'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" aria-label="All Access Services — Home">
            <img
              src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/17488701a_CleanLogo.png"
              alt="All Access Services"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? 'h-8 sm:h-10 md:h-12' : 'h-9 sm:h-12 md:h-14'
              }`}
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="pl-9 pr-3 h-9 w-56 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 focus:border-orange-500/60 text-zinc-200 text-sm rounded-none focus:outline-none focus:bg-zinc-900 transition-all placeholder-zinc-600"
              />
            </div>

            {/* Mobile search */}
            <button className="md:hidden text-zinc-400 hover:text-orange-400 transition-colors p-2" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>

            {/* Phone CTA — visible on tablet+ */}
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="hidden lg:flex items-center gap-2 text-zinc-300 hover:text-orange-400 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span className="font-numeric">{SITE_CONFIG.phone}</span>
            </a>

            {/* Customer portal */}
            <Link
              to="/dashboard"
              title="Customer Portal"
              className="hidden md:flex items-center justify-center w-9 h-9 bg-orange-500 hover:bg-orange-400 text-black transition-all"
            >
              <User className="w-4 h-4" />
            </Link>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className="text-zinc-300 hover:text-orange-400 transition-colors p-2"
              onClick={() => setDrawerOpen((o) => !o)}
              aria-label="Menu"
            >
              {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Single static accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </nav>

      {/* Right-side drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              id="side-drawer"
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-zinc-950 border-l border-orange-500/20 z-50 flex flex-col overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-zinc-900 bg-black">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 live-dot" />
                  <span className="text-zinc-100 font-bold text-xs uppercase tracking-[0.3em]">Menu</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="text-zinc-500 hover:text-orange-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 px-5 py-6 space-y-7">
                {/* Main */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Main</p>
                  <div>
                    {mainNavLinks.map((link) => (
                      <div key={link.label} className="border-b border-zinc-900 last:border-0">
                        <Link
                          to={link.href || '/'}
                          onClick={() => setDrawerOpen(false)}
                          className="flex items-center justify-between py-3 text-sm font-semibold text-zinc-200 hover:text-orange-400 transition-colors"
                        >
                          {link.label}
                          <span className="text-zinc-700 font-numeric text-[10px]">→</span>
                        </Link>
                        {link.children && (
                          <div className="pl-3 pb-2 -mt-1 space-y-0.5">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                onClick={() => setDrawerOpen(false)}
                                className="block py-1.5 text-xs text-zinc-500 hover:text-orange-400 transition-colors"
                              >
                                ─ {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">Industries</p>
                  <div className="grid grid-cols-2 gap-x-3">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/rentals/category/scissor-lifts?industry=${ind.slug}`}
                        onClick={() => setDrawerOpen(false)}
                        className="block py-2 text-xs text-zinc-400 hover:text-orange-400 border-b border-zinc-900 transition-colors"
                      >
                        {ind.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* More */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-3">More</p>
                  <div>
                    {moreLinks.map((m) => (
                      <Link
                        key={m.label}
                        to={m.href}
                        onClick={() => setDrawerOpen(false)}
                        className="block py-2.5 text-sm text-zinc-300 hover:text-orange-400 border-b border-zinc-900 transition-colors"
                      >
                        {m.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold uppercase tracking-[0.25em] transition-colors"
                >
                  <User className="w-4 h-4" />
                  Customer Portal
                </Link>
              </div>

              {/* Drawer footer */}
              <div className="px-5 py-4 border-t border-zinc-900 space-y-2.5 bg-black">
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-2.5 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-numeric">{SITE_CONFIG.phone}</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-2.5 text-zinc-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
                <Link
                  to="/locations"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-2.5 text-zinc-400 hover:text-orange-400 text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Find a Location
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}