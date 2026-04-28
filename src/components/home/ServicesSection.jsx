import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Equipment Rentals',
    href: '/rentals',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
  },
  {
    title: 'Equipment Sales',
    href: '/sales',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80',
  },
  {
    title: 'Service & Repair',
    href: '/service',
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link to={s.href} className="group block overflow-hidden rounded-lg">
                {/* Photo */}
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Title bar */}
                <div className="bg-white group-hover:bg-orange-500 transition-colors duration-300 py-4 px-6 text-center">
                  <h3 className="font-barlow text-xl font-bold text-black group-hover:text-white tracking-wide transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}