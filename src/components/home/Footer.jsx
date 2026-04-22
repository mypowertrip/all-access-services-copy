import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  'Equipment': ['Scissor Lifts', 'Boom Lifts', 'Knuckle Booms', 'Telehandlers', 'Forklifts', 'Attachments'],
  'Services': ['Equipment Rentals', 'Equipment Sales', 'Service & Repair', 'Parts Store', 'Training'],
  'Company': ['About Us', 'Our Locations', 'Careers', 'Contact Us', 'Blog'],
  'Support': ['Request a Quote', 'Schedule Service', 'Resources', 'FAQ', 'Safety Information'],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-6">
              <img
                src="https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/77e6b1f2e_Gemini_Generated_Image_pixvcspixvcspixv1.png"
                alt="All Access Rentals"
                className="h-28 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Southern California's premier aerial work platform rental, sales, and service provider. JLG Authorized Dealer.
            </p>
            <div className="space-y-3">
              <a href="tel:8887775990" className="flex items-center gap-3 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors">
                <Phone className="w-4 h-4" />
                888-777-5990
              </a>
              <a href="mailto:info@allaccessservices.com" className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@allaccessservices.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {[
                 { Icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
                 { Icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
                 { Icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                 { Icon: Youtube, label: 'YouTube', url: 'https://youtube.com' },
               ].map(({ Icon, label, url }) => (
                   <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-zinc-900 hover:bg-orange-500 flex items-center justify-center text-gray-400 hover:text-black transition-all">
                     <Icon className="w-4 h-4" />
                   </a>
                 ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  let href = '#';
                  if (title === 'Services' && link === 'Equipment Rentals') href = '/rentals';
                  else if (title === 'Services' && link === 'Equipment Sales') href = '/sales';
                  else if (title === 'Services' && link === 'Service & Repair') href = '/service';
                  else if (title === 'Company' && link === 'Our Locations') href = '/locations';
                  else if (title === 'Company' && link === 'Contact Us') href = 'tel:8887775990';

                  return (
                    <li key={link}>
                      <a href={href} className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  );
                })}
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
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
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
            <div className="flex items-center gap-6">
              <a href="/#privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
               <a href="/#terms" className="hover:text-orange-400 transition-colors">Terms of Service</a>
               <a href="/#accessibility" className="hover:text-orange-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}