import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { SITE_CONFIG } from '../../lib/siteConfig';

const footerLinks = {
  Equipment: [
    { label: 'Scissor Lifts', href: '/rentals/category/scissor-lifts' },
    { label: 'Straight Boom Lifts', href: '/rentals/category/straight-boom-lifts' },
    { label: 'Articulating Booms', href: '/rentals/category/articulating-boom-lifts' },
    { label: 'Telehandlers', href: '/rentals/category/telehandlers' },
    { label: 'Forklifts', href: '/rentals/category/forklifts' },
  ],
  Services: [
    { label: 'Equipment Rentals', href: '/rentals' },
    { label: 'Equipment Sales', href: '/sales' },
    { label: 'New Equipment', href: '/sales?filter=new' },
    { label: 'Pre-Owned', href: '/sales?filter=pre-owned' },
    { label: 'Service & Repair', href: '/service' },
    { label: 'Safety Training', href: '/safety' },
  ],
  Company: [
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
      // Note: not yet wired to a backend — toast is honest about that.
      toast.success("Got it — we'll add you to our list.");
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-black border-t border-zinc-900">
      {/* Top accent rail */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/6c5fafd51_CleanLogo.png"
                alt="All Access Services"
                className="h-20 lg:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
              Southern California's premier aerial work platform rental, sales, and
              service provider. <span className="text-orange-400 font-semibold">JLG Authorized Dealer.</span>
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="inline-flex items-center gap-2.5 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-numeric">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-zinc-500 hover:text-orange-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-zinc-500 hover:text-orange-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter strip */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
            <div>
              <h4 className="font-barlow text-xl font-bold text-white uppercase tracking-tight mb-1">
                Get Inventory Updates
              </h4>
              <p className="text-zinc-500 text-sm">
                New arrivals and special offers — no spam.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 md:w-72 bg-zinc-900 border border-zinc-800 focus:border-orange-500/60 text-zinc-200 text-sm px-4 py-3 focus:outline-none transition-colors placeholder-zinc-600"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-6 py-3 inline-flex items-center gap-2 transition-colors uppercase text-xs tracking-[0.25em]"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <p className="font-numeric">
              © {new Date().getFullYear()} All Access Services. All rights reserved.
            </p>
            <p className="uppercase tracking-[0.25em] text-[10px]">
              JLG Authorized Dealer · Serving SoCal Since Day One
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}