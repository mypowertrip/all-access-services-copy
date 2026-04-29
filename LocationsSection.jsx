import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

export default function LocationsSection() {
  return (
    <section id="locations" className="relative bg-black py-20 md:py-32">
      {/* Atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-orange-400">
              Where to Find Us
            </span>
            <div className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="font-barlow text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
            <span className="font-numeric text-orange-500">04</span> Locations<br />
            <span style={{ WebkitTextStroke: '2px white', color: 'rgba(255,255,255,0.04)' }}>
              Across SoCal.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {SITE_CONFIG.locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              id={slugify(loc.name)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800 hover:border-orange-500/60 transition-all duration-500"
            >
              {/* Map preview — keyless, no API needed */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <iframe
                  title={`Map of ${loc.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[60%] contrast-90 brightness-50 group-hover:brightness-75 group-hover:grayscale-[30%] transition-all duration-700"
                  style={{ border: 0 }}
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
                {/* Name overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <h3 className="font-barlow text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-orange-500 live-dot" />
                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-orange-400">
                      Open
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-400 text-xs leading-relaxed">{loc.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <a
                    href={`tel:${loc.tel}`}
                    className="font-numeric text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="text-zinc-500 text-xs">{loc.hours}</span>
                </div>

                {/* Buttons */}
                <div className="pt-3 mt-auto border-t border-zinc-800 grid grid-cols-2 gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-orange-500 text-zinc-200 hover:text-black text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    Directions
                  </a>
                  <a
                    href={`tel:${loc.tel}`}
                    className="inline-flex items-center justify-center gap-1.5 border border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    Call
                  </a>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}