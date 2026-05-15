import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const mainNavLinks = [
  {
    label: 'Rentals',
    href: null,
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
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'San Diego', href: '/locations#san-diego' },
      { label: 'Orange County', href: '/locations#orange-county' },
      { label: 'Riverside', href: '/locations#riverside' },
      { label: 'Los Angeles', href: '/locations#los-angeles' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/reserve' },
];

export default function NavTabBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeouts = useRef({});
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on dashboard routes
  if (location.pathname.startsWith('/dashboard')) return null;

  const openDropdown = (label) => {
    clearTimeout(timeouts.current[label]);
    setActiveDropdown(label);
  };
  const closeDropdown = (label) => {
    timeouts.current[label] = setTimeout(() => {
      setActiveDropdown((prev) => (prev === label ? null : prev));
    }, 150);
  };

  // Tab content (label + chevron) — used by both Link and button branches
  const TabContent = ({ link, isActive }) => (
    <>
      <span className="relative">
        {link.label}
        <span
          className={`absolute -bottom-3 left-0 right-0 h-px bg-white/80 transition-transform duration-300 origin-left ${
            isActive ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </span>
      {link.children && (
        <motion.span animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3" />
        </motion.span>
      )}
    </>
  );

  // When not scrolled: top-[8rem] = ticker(2rem) + navbar(~6rem). When scrolled: ticker gone, navbar at top-0 so top-[5rem] (navbar h-20).
  return (
    <div className={`hidden md:block fixed left-0 right-0 z-30 border-b border-black/20 transition-all duration-300 ${scrolled ? 'top-[5rem]' : 'top-[8rem]'}`} style={{ backgroundColor: '#FF5C00' }}>
      <div className="max-w-7xl mx-auto flex items-center h-10">
        {mainNavLinks.map((link) => {
          const isActive = activeDropdown === link.label;
          const tabClass =
            'relative w-full h-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-[0.25em] text-black/90 hover:text-black transition-colors';

          return (
            <div
              key={link.label}
              className="relative h-full flex items-center flex-1 border-r border-black/10 last:border-r-0"
              onMouseEnter={() => openDropdown(link.label)}
              onMouseLeave={() => closeDropdown(link.label)}
            >
              {link.href ? (
                <Link to={link.href} className={tabClass}>
                  <TabContent link={link} isActive={isActive} />
                </Link>
              ) : (
                <button type="button" className={tabClass}>
                  <TabContent link={link} isActive={isActive} />
                </button>
              )}

              <AnimatePresence>
                {link.children && isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-56 z-50 bg-zinc-950 border border-orange-500/40 border-t-0 shadow-2xl shadow-black/80"
                    onMouseEnter={() => openDropdown(link.label)}
                    onMouseLeave={() => closeDropdown(link.label)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="group flex items-center justify-between px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-orange-400 hover:bg-orange-500/5 border-b border-zinc-900 last:border-0 transition-all"
                      >
                        {child.label}
                        <span className="text-zinc-700 group-hover:text-orange-500 font-numeric transition-colors">→</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}