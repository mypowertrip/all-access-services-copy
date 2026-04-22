import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight, Mail } from 'lucide-react';

const LOCATION_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/77c06582e_generated_c9135d9e.png";

const locations = [
  {
    name: 'San Diego',
    address: '8711 N Magnolia Ave, Santee, CA 92071',
    phone: '619-222-9337',
    email: 'sandiego@allaccessservices.com',
    hours: 'Mon-Fri: 7am-5pm, Sat: 8am-2pm',
    services: ['Rentals', 'Sales', 'Service', 'Parts'],
  },
  {
    name: 'Orange County',
    address: '621 N Main St, Orange, CA 92868',
    phone: '714-647-1552',
    email: 'orangecounty@allaccessservices.com',
    hours: 'Mon-Fri: 7am-5pm, Sat: 8am-2pm',
    services: ['Rentals', 'Sales', 'Service', 'Parts'],
  },
  {
    name: 'Riverside',
    address: '2865 S La Cadena Dr, Colton, CA 92324',
    phone: '909-266-8771',
    email: 'riverside@allaccessservices.com',
    hours: 'Mon-Fri: 7am-5pm, Sat: 8am-2pm',
    services: ['Rentals', 'Sales', 'Service'],
  },
  {
    name: 'Los Angeles',
    address: '8563 San Fernando Rd, Sun Valley, CA 91352',
    phone: '818-482-2001',
    email: 'losangeles@allaccessservices.com',
    hours: 'Mon-Fri: 7am-5pm, Sat: 8am-2pm',
    services: ['Rentals', 'Sales', 'Service', 'Parts'],
  },
];

export default function Locations() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
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
            <h1 className="font-barlow text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              <span className="text-orange-500">4 Locations</span> Across SoCal
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
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img src={LOCATION_IMG} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-barlow text-3xl font-black text-white">{loc.name}</h3>
                  </div>
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

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="text-gray-400 text-sm hover:text-orange-400 transition-colors break-all">
                      {loc.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-400 text-sm">{loc.hours}</span>
                  </div>

                  <div className="pt-4 border-t border-zinc-700">
                    <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-widest">Services Available</p>
                    <div className="flex flex-wrap gap-2">
                      {loc.services.map(svc => (
                        <span key={svc} className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 border border-orange-500/30">{svc}</span>
                      ))}
                    </div>
                  </div>

                  <a href={`https://maps.google.com/?q=${loc.address}`} target="_blank" rel="noopener noreferrer" className="block w-full bg-zinc-800 hover:bg-orange-500 text-white hover:text-black text-xs font-bold text-center py-2.5 uppercase tracking-wider transition-all">
                    Get Directions
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}