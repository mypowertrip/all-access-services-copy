import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SCISSOR_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/09404de17_generated_418edddd.png";
const BOOM_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/b576b6a80_generated_91f959ee.png";
const SERVICE_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/c59a9cc2c_generated_56e4e2da.png";

const services = [
  {
    title: 'Equipment Rentals',
    description: 'Daily, weekly, and monthly rental options on the industry\'s most reliable aerial work platforms.',
    cta: 'Browse Rentals',
    href: '/rentals',
    img: SCISSOR_IMG,
    accent: 'orange',
  },
  {
    title: 'Equipment Sales',
    description: 'New and certified pre-owned JLG equipment with competitive financing options available.',
    cta: 'View Inventory',
    href: '/sales',
    img: BOOM_IMG,
    accent: 'teal',
  },
  {
    title: 'Service & Repair',
    description: 'JLG-authorized factory-trained technicians keeping your fleet running at peak performance.',
    cta: 'Schedule Service',
    href: '/service',
    img: SERVICE_IMG,
    accent: 'orange',
  },
];

export default function ServicesSection() {
  return (
    <section id="rentals" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-0.5 bg-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">What We Offer</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.href}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer block"
            >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="absolute inset-0"
            >
              {/* Image */}
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${s.accent === 'teal' ? 'bg-teal-500' : 'bg-orange-500'}`} />

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${s.accent === 'teal' ? 'bg-teal-400' : 'bg-orange-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${s.accent === 'teal' ? 'text-teal-400' : 'text-orange-400'}`}>
                  0{i + 1}
                </div>
                <h3 className="font-barlow text-3xl font-black text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {s.description}
                </p>
                <span className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${s.accent === 'teal' ? 'text-teal-400' : 'text-orange-400'} opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}