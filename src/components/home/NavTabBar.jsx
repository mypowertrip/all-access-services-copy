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
  }
];

export default function NavTabBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  return (
    <div className="fixed top-24 left-0 right-0 z-45 bg-gradient-to-b from-[#0a0a0a] to-[#000000] border-b border-orange-500/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 h-14">
        {mainNavLinks.map((link) => (
          <div
            key={link.label}
            className="relative group h-full flex items-center"
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
              className={`relative px-6 h-full flex items-center gap-2 font-medium text-sm uppercase tracking-wider transition-all ${
                activeDropdown === link.label
                  ? 'text-orange-400'
                  : 'text-gray-400 hover:text-orange-400'
              }`}
              style={{
                background: activeDropdown === link.label
                  ? 'linear-gradient(180deg, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.05) 100%)'
                  : 'transparent',
                borderRadius: '8px 8px 0 0',
                boxShadow: activeDropdown === link.label
                  ? 'inset 0 1px 0 rgba(249, 115, 22, 0.3), 0 4px 12px rgba(249, 115, 22, 0.1)'
                  : 'none'
              }}
            >
              {link.label}
              {link.children && (
                <motion.div
                  animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
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
                  className="absolute top-full left-0 mt-0 w-56 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] border border-orange-500/20 border-t-0 shadow-2xl shadow-black/70 overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(249, 115, 22, 0.1)'
                  }}
                >
                  {link.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 border-b border-zinc-800/50 last:border-0 transition-all"
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