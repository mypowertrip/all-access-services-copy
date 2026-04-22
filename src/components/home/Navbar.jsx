import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown, Search, User } from 'lucide-react';

const mainNavLinks = [
{
  label: 'Rentals',
  children: ['Scissor Lifts', 'Boom Lifts', 'Knuckle Booms', 'Telehandlers', 'Forklifts', 'Attachments']
},
{
  label: 'Sales',
  children: ['New Equipment', 'Pre-Owned Equipment', 'Featured Inventory']
},
{ label: 'Parts' },
{
  label: 'Service',
  children: ['Repair & Maintenance', 'Factory Authorized Service', 'Schedule Service']
}];


const industries = ['Space / Aerospace', 'Military', 'Construction', 'Events', 'Warehouse', 'Government'];
const moreLinks = ['About', 'Resources', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50">


      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-[#111111]/98 backdrop-blur-md shadow-lg shadow-black/80 border-b border-teal-500/10' : 'bg-[#111111]/80 backdrop-blur-sm border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img src="https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/c480996d7_ChatGPT_Image_Apr_22__2026__12_15_08_AM.png"

            alt="All Access Services" className="h-36 w-auto object-contain"

            style={{ mixBlendMode: 'screen', maxWidth: '200px' }} />
            
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-3">
            {mainNavLinks.map((link) =>
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}>
              
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                </button>
                {link.children && activeDropdown === link.label &&
              <div className="absolute top-full left-0 mt-1 w-52 bg-black/95 border border-orange-500/20 backdrop-blur-md shadow-xl shadow-black/50 overflow-hidden">
                    {link.children.map((child) =>
                <a key={child} href="#" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all border-b border-white/5 last:border-0">
                        {child}
                      </a>
                )}
                  </div>
              }
              </div>
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search field */}
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 h-8 w-40 bg-white/5 border border-white/10 text-gray-300 text-xs rounded focus:outline-none focus:border-orange-500/60 transition-colors placeholder-gray-600" />
              
            </div>
            {/* Mobile search icon */}
            <button className="md:hidden text-gray-400 hover:text-orange-400 transition-colors p-2">
              <Search className="w-4 h-4" />
            </button>

            {/* Customer portal — avatar icon */}
            <a
              href="/dashboard"
              title="Customer Portal"
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/60 text-orange-400 hover:bg-orange-500 hover:text-black transition-all">
              
              <User className="w-4 h-4" />
            </a>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className="text-gray-300 p-2 hover:text-orange-400 transition-colors"
              onClick={() => setDrawerOpen((o) => !o)}
              aria-label="Menu">
              
              {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Right-side drawer */}
      <AnimatePresence>
        {drawerOpen &&
        <>
            {/* Backdrop */}
            <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setDrawerOpen(false)} />
          

            {/* Drawer panel */}
            <motion.div
            id="side-drawer"
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#0d0d0d] border-l border-white/10 z-50 flex flex-col overflow-y-auto">
            
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <span className="text-white font-bold text-sm uppercase tracking-widest">Menu</span>
                <button onClick={() => setDrawerOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 px-5 py-6 space-y-8">

                {/* Mobile-only main nav links */}
                <div className="lg:hidden">
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-3">Navigate</p>
                  <div className="space-y-1">
                    {mainNavLinks.map((link) =>
                  <a key={link.label} href="#" className="block py-2.5 text-sm font-medium text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                        {link.label}
                      </a>
                  )}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-3">Industries</p>
                  <div className="space-y-1">
                    {industries.map((ind) =>
                  <a key={ind} href="#" className="block py-2.5 text-sm text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                        {ind}
                      </a>
                  )}
                  </div>
                </div>

                {/* More */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-3">More</p>
                  <div className="space-y-1">
                    {moreLinks.map((label) =>
                  <a key={label} href="#" className="block py-2.5 text-sm text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                        {label}
                      </a>
                  )}
                  </div>
                </div>

                {/* Customer portal */}
                <a
                href="/dashboard"
                className="flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">
                
                  <User className="w-4 h-4" />
                  Customer Portal
                </a>
              </div>

              {/* Drawer footer */}
              <div className="px-5 py-4 border-t border-white/10">
                <a href="tel:8887775990" className="flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  888-777-5990
                </a>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}