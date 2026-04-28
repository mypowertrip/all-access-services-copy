import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { rentalModels } from '../../lib/rentalInventory';
import NavTabBar from './NavTabBar';
import { SITE_CONFIG } from '../../lib/siteConfig';

const mainNavLinks = [
{
  label: 'Rentals',
  href: '/rentals',
  children: ['Scissor Lifts', 'Boom Lifts', 'Telehandlers', 'Forklifts', 'Low Level Access']
},
{
  label: 'Sales',
  href: '/sales',
  children: ['New Equipment', 'Pre-Owned', 'Financing']
},
{ label: 'Service', href: '/service' },
{ label: 'Locations', href: '/locations' }];


const industries = ['Space / Aerospace', 'Military', 'Construction', 'Events', 'Warehouse', 'Government'];
const moreLinks = ['About', 'Resources', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key !== 'Enter') return;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    // Check for model ID / name match first
    const matches = rentalModels.filter((m) =>
    m.id.toLowerCase().includes(q) || m.name.toLowerCase().includes(q)
    );
    if (matches.length === 1) {
      navigate(`/product/${matches[0].id}`);
      setSearchQuery('');
      return;
    }
    // Multiple or no exact model match — navigate to rentals with search intent
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
    <header className="fixed top-0 left-0 right-0 z-50">


      {/* Main nav */}
      <nav 
        className={`transition-all duration-300 relative shadow-lg shadow-black/50 border-b border-gray-600`}
        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/69f03230e61a9516ac171fbd/57d7c81ee_metalmesh.png)',
          backgroundSize: '600px',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24 relative z-10">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Home">
            <img
              src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/7330a415e_allaccessrentals-logo.png"
              alt="All Access Rentals"
              className="h-14 w-auto object-contain" />
            







            
            
          </a>



          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search field */}
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Search model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="pl-8 pr-3 h-8 w-40 bg-white/5 border border-white/10 text-gray-300 text-xs rounded focus:outline-none focus:border-orange-500/60 transition-colors placeholder-gray-600" />
              
            </div>
            {/* Mobile search icon */}
            <button className="md:hidden text-gray-400 hover:text-orange-400 transition-colors p-2">
              <Search className="w-4 h-4" />
            </button>

            {/* Customer portal — avatar icon */}
            <a
              href="/dashboard"
              title="Customer Portal" className="bg-[hsl(var(--primary))] text-slate-50 rounded-full hidden md:flex items-center justify-center w-8 h-8 border border-orange-500/60 hover:bg-orange-500 hover:text-black transition-all">



            </a>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className="text-gray-300 p-3 hover:text-orange-400 transition-colors md:p-2"
              onClick={() => setDrawerOpen((o) => !o)}
              aria-label="Menu">
              
              {drawerOpen ? <X className="w-6 h-6 md:w-5 md:h-5" /> : <Menu className="w-6 h-6 md:w-5 md:h-5" />}
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

                {/* Mobile navigation menu */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-3">Main Menu</p>
                  <div className="space-y-1">
                    {mainNavLinks.map((link) =>
                  <div key={link.label}>
                        <a href={link.href || '#'} className="block py-2.5 text-sm font-medium text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                          {link.label}
                        </a>
                        {link.children &&
                    <div className="bg-zinc-900/50 border-l-2 border-orange-600/40 ml-0">
                            {link.children.map((child) => {
                        const childHref = child.toLowerCase().replace(/\s+/g, '-');
                        return (
                          <a
                            key={child}
                            href={`${link.href}/${childHref}`}
                            className="block px-4 py-2 text-xs text-gray-400 hover:text-orange-400 transition-colors">
                            
                                  {child}
                                </a>);

                      })}
                          </div>
                    }
                      </div>
                  )}
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-3">Industries</p>
                  <div className="space-y-1">
                    {industries.map((ind) => {
                    const indHref = ind.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <a key={ind} href={`/rentals?industry=${indHref}`} className="block py-2.5 text-sm text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                          {ind}
                        </a>);

                  })}
                  </div>
                </div>

                {/* More */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-3">More</p>
                  <div className="space-y-1">
                    {moreLinks.map((label) => {
                    const href = label === 'About' ? '/about' : label === 'Contact' ? '/reserve' : label === 'Resources' ? '/safety' : '/safety';
                    return (
                      <a key={label} href={href} className="block py-2.5 text-sm text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                          {label}
                        </a>);

                  })}
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
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className="flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}