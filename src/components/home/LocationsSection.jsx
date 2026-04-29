import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

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
          {SITE_CONFIG.locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500"
            >
              {/* Google Maps Static Image */}
              <div className="aspect-video relative overflow-hidden bg-zinc-800">
                <img 
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(loc.address)}&zoom=14&size=600x400&style=element:geometry%7Ccolor:0x212121&style=element:labels%7Cvisibility:off&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x38414e&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0x38414e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x38414e&style=feature:poi%7Ccolor:0x2c2c2c&style=feature:poi%7Celement:labels.text%7Ccolor:0x757575&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212121&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x212121&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3335&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&markers=color:0xf97316%7Clabel:${loc.name.charAt(0)}%7C${encodeURIComponent(loc.address)}&key=AIzaSyBvGLEBDKM0FTKNaC3s-ks5LjUZeW2fGCQ`}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                />
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
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-800 hover:bg-orange-500 text-white hover:text-black text-xs font-bold text-center py-2.5 uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                    <Navigation className="w-3 h-3" />
                    Directions
                  </a>
                  <a href={`tel:${loc.phone.replace(/-/g, '')}`} className="flex-1 border border-zinc-700 hover:border-orange-500 text-gray-300 hover:text-orange-400 text-xs font-bold text-center py-2.5 uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                    <Phone className="w-3 h-3" />
                    Call Branch
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