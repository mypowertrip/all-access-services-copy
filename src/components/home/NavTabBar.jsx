import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
  },
  { label: 'Aerospace' },
  {
    label: 'Locations',
    children: ['San Diego', 'Orange County', 'Inland Empire', 'Los Angeles']
  },
  { label: 'About' },
  { label: 'Contact' }
];

export default function NavTabBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  return (
    <div className="hidden md:block fixed top-24 left-0 right-0 z-40 bg-gradient-to-b from-[#d97706] via-[#ea580c] to-[#ca4504] border-b-2 border-[#8b3a02] shadow-lg shadow-orange-950/50" style={{
      backgroundImage: 'linear-gradient(180deg, #d97706 0%, #ea580c 50%, #ca4504 100%), repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center gap-0 h-10">
        {mainNavLinks.map((link, idx) => (
          <div
            key={link.label}
            className="relative group h-full flex items-center flex-1 border-r border-[#8b3a02] last:border-r-0"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout);
              setActiveDropdown(link.label);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => setActiveDropdown(null), 150);
              setDropdownTimeout(timeout);
            }}
          >
            {/* 3D Tab Button */}
            <motion.button
              className={`relative w-full h-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest transition-all ${
                activeDropdown === link.label
                  ? 'text-white'
                  : 'text-orange-950 hover:text-white'
              }`}
              style={{
                background: activeDropdown === link.label
                  ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)'
                  : 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%)',
                boxShadow: activeDropdown === link.label
                  ? 'inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3)'
                  : 'inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              {link.label}
              {link.children && (
                <motion.div
                  animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3" />
                </motion.div>
              )}
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {link.children && activeDropdown === link.label && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-0 w-48 z-50 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-orange-600/40 border-t-0 shadow-2xl shadow-black/80 overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-orange-400 hover:bg-orange-600/20 border-b border-zinc-800/50 last:border-0 transition-all"
                    >
                      {child}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}