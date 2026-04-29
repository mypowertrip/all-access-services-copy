import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  { label: 'Forklifts', href: '/rentals/category/forklifts' }]

},
{
  label: 'Sales',
  href: '/sales',
  children: [
  { label: 'New Equipment', href: '/sales?filter=new' },
  { label: 'Pre-Owned', href: '/sales?filter=pre-owned' },
  { label: 'Certified', href: '/sales?filter=certified' }]

},
{ label: 'Service', href: '/service' },
{
  label: 'Locations',
  href: '/locations',
  children: [
  { label: 'San Diego', href: '/locations#san-diego' },
  { label: 'Orange County', href: '/locations#orange-county' },
  { label: 'Inland Empire', href: '/locations#inland-empire' },
  { label: 'Los Angeles', href: '/locations#los-angeles' }]

},
{ label: 'About', href: '/about' },
{ label: 'Contact', href: '/reserve' }];


export default function NavTabBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeouts = useRef({});

  const openDropdown = (label) => {
    clearTimeout(timeouts.current[label]);
    setActiveDropdown(label);
  };

  const closeDropdown = (label) => {
    timeouts.current[label] = setTimeout(() => {
      setActiveDropdown((prev) => prev === label ? null : prev);
    }, 150);
  };

  return (
    <div className="hidden md:block fixed top-20 md:top-24 left-0 right-0 z-40 bg-orange-600 border-b border-orange-700">
      <div className="max-w-7xl mx-auto flex items-center gap-0 h-10">
        {mainNavLinks.map((link) =>
        <div
          key={link.label}
          className="relative h-full flex items-center flex-1 border-r border-[#8b3a02] last:border-r-0"
          onMouseEnter={() => openDropdown(link.label)}
          onMouseLeave={() => closeDropdown(link.label)}>
          
            {/* Tab Button */}
            <a
            href={link.href || '#'} className="relative w-full h-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest transition-all text-white hover:text-black"



            style={{
              background: activeDropdown === link.label ?
              'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)' :
              'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)',
              boxShadow: activeDropdown === link.label ?
              'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.3)' :
              'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2)'
            }}>
            
              {link.label}
              {link.children &&
            <motion.div
              animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
              transition={{ duration: 0.2 }}>
              
                  <ChevronDown className="w-3 h-3" />
                </motion.div>
            }
            </a>

            {/* Dropdown */}
            <AnimatePresence>
              {link.children && activeDropdown === link.label &&
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-0 w-48 z-50 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-orange-600/40 border-t-0 shadow-2xl shadow-black/80 overflow-hidden">
              
                  {link.children.map((child) =>
              <a
                key={child.label}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-orange-500/10 border-b border-zinc-800/50 last:border-0 transition-all">
                
                      {child.label}
                    </a>
              )}
                </motion.div>
            }
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>);

}