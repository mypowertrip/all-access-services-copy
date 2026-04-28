import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../lib/siteConfig';
import LocationMap from '../components/LocationMap';

const locations = SITE_CONFIG.locations;

export default function Locations() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Find Us</span>
            </div>
            <h1 className="font-barlow text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 uppercase">
              <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>4 LOCATIONS</span> ACROSS SOCAL
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">Visit any of our regional branches for rentals, sales, service, and parts.</p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500"
              >
                {/* Location Label */}
                <div className="px-6 pt-4 pb-2">
                  <h3 className="font-barlow text-2xl font-bold text-white">{loc.name}</h3>
                </div>

                {/* Map */}
                <div className="aspect-video relative overflow-hidden bg-zinc-800">
                  <LocationMap location={loc} />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/-/g, '')}`} className="text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors">
                      {loc.phone}
                    </a>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-orange-500 text-white hover:text-black text-xs font-bold py-2.5 uppercase tracking-wider transition-all"
                  >
                    <ArrowRight className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}