import { useState, useEffect } from 'react';
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
  {
    label: 'Parts',
  },
  {
    label: 'Service',
    children: ['Repair & Maintenance', 'Factory Authorized Service', 'Schedule Service']
  },
];

const moreLinks = ['About', 'Resources', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-black/90 border-b border-orange-500/20 px-4 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="tel:8887775990" className="flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            888-777-5990
          </a>
          <div />
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-[#111111]/98 backdrop-blur-md shadow-lg shadow-black/80 border-b border-teal-500/10' : 'bg-[#111111]/80 backdrop-blur-sm border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/7e6af21eb_Gemini_Generated_Image_k4mqi7k4mqi7k4mq.png"
              alt="All Access Services"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors">
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />}
                </button>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-black/95 border border-orange-500/20 backdrop-blur-md shadow-xl shadow-black/50 overflow-hidden">
                    {link.children.map((child) => (
                      <a key={child} href="#" className="block px-4 py-2.5 text-sm text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all border-b border-white/5 last:border-0">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-orange-400 transition-colors p-2">
              <Search className="w-4 h-4" />
            </button>

            {/* Customer portal — avatar icon */}
            <a
              href="/dashboard"
              title="Customer Portal"
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-orange-500/60 text-orange-400 hover:bg-orange-500 hover:text-black transition-all"
            >
              <User className="w-4 h-4" />
            </a>

            {/* Hamburger (always visible on desktop for "more" links too) */}
            <button
              className="text-gray-300 p-2 hover:text-orange-400 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Slide-down menu (mobile main links + always-visible more links) */}
        {mobileOpen && (
          <div className="bg-black/98 border-t border-white/5 px-4 py-4 space-y-1">
            {/* Main nav links (shown on mobile only, hidden on desktop since they're in the bar) */}
            <div className="lg:hidden space-y-1">
              {mainNavLinks.map((link) => (
                <a key={link.label} href="#" className="block py-3 px-2 text-sm font-medium text-gray-300 hover:text-orange-400 border-b border-white/5 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* More links — always available via hamburger */}
            <div className="pt-2 space-y-1">
              {moreLinks.map((label) => (
                <a key={label} href="#" className="block py-3 px-2 text-sm font-medium text-gray-400 hover:text-orange-400 border-b border-white/5 transition-colors">
                  {label}
                </a>
              ))}
              {/* Mobile customer portal link */}
              <a href="/dashboard" className="block py-3 px-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">
                Customer Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}