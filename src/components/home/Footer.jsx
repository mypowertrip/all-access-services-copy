import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { SITE_CONFIG } from '../../lib/siteConfig';

const footerLinks = {
  'Equipment': [
    { label: 'Scissor Lifts', href: '/rentals/category/scissor-lifts' },
    { label: 'Straight Boom Lifts', href: '/rentals/category/straight-boom-lifts' },
    { label: 'Articulating Booms', href: '/rentals/category/articulating-boom-lifts' },
    { label: 'Telehandlers', href: '/rentals/category/telehandlers' },
    { label: 'Forklifts', href: '/rentals/category/forklifts' },
  ],
  'Services': [
    { label: 'Equipment Rentals', href: '/rentals' },
    { label: 'Equipment Sales', href: '/sales' },
    { label: 'New Equipment', href: '/sales?filter=new' },
    { label: 'Pre-Owned', href: '/sales?filter=pre-owned' },
    { label: 'Service & Repair', href: '/service' },
    { label: 'Safety Training', href: '/safety' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Our Locations', href: '/locations' },
    { label: 'Contact Us', href: '/reserve' },
    { label: 'Ground Control', href: '/dashboard' },
    { label: 'Request a Quote', href: '/reserve' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success('Thanks — you\'re on the list.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-black border-t border-zinc-900">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/6c5fafd51_CleanLogo.png"
                alt="All Access Services"
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Southern California's premier aerial work platform rental, sales, and service provider. JLG Authorized Dealer.
            </p>
            <div className="space-y-3">
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="flex items-center gap-3 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </div>


          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold mb-1">Get Inventory Updates</h4>
              <p className="text-gray-500 text-sm">Be the first to know about new arrivals and special offers.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
               <input
                 type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 className="flex-1 md:w-64 bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
               />
               <button type="submit" className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-6 py-3 flex items-center gap-2 transition-colors">
                 <ArrowRight className="w-4 h-4" />
               </button>
             </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} All Access Services. All rights reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  );
}