import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const LOCATION_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/77c06582e_generated_c9135d9e.png";

const locations = [
  {
    name: 'San Diego',
    address: '8711 N Magnolia Ave, Santee, CA 92071',
    phone: '619-222-9337',
    hours: 'Mon-Fri: 7am-5pm',
  },
  {
    name: 'Orange County',
    address: '621 N Main St, Orange, CA 92868',
    phone: '714-647-1552',
    hours: 'Mon-Fri: 7am-5pm',
  },
  {
    name: 'Riverside',
    address: '2865 S La Cadena Dr, Colton, CA 92324',
    phone: '909-266-8771',
    hours: 'Mon-Fri: 7am-5pm',
  },
  {
    name: 'Los Angeles',
    address: '8563 San Fernando Rd, Sun Valley, CA 91352',
    phone: '818-482-2001',
    hours: 'Mon-Fri: 7am-5pm',
  },
];

export default function LocationsSection() {
  return (
    <section id="locations" className="bg-black py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Locations</span>
            <div className="w-12 h-0.5 bg-orange-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-barlow text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            <span className="text-orange-500">4 LOCATIONS</span> ACROSS SOCAL
          </motion.h2>
        </div>

        {/* Locations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img src={LOCATION_IMG} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                
                {/* Location name overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-barlow text-2xl font-black text-white">{loc.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`tel:${loc.phone.replace(/-/g, '')}`} className="text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors">
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-gray-400 text-sm">{loc.hours}</span>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex gap-3">
                  <a href="#" className="flex-1 bg-zinc-800 hover:bg-orange-500 text-white hover:text-black text-xs font-bold text-center py-2.5 uppercase tracking-wider transition-all">
                    Get Directions
                  </a>
                  <a href="#" className="flex-1 border border-zinc-700 hover:border-orange-500 text-gray-300 hover:text-orange-400 text-xs font-bold text-center py-2.5 uppercase tracking-wider transition-all">
                    Contact
                  </a>
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}