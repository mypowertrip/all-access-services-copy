import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Hernandez',
    title: 'Project Manager, CK Construction',
    quote: 'All Access has been our go-to for aerial equipment for over 8 years. The ClearSky tracking system is a game changer — we always know where our rented equipment is.',
    rating: 5,
    initials: 'MH',
  },
  {
    name: 'Sarah Chen',
    title: 'Operations Director, Apex Electrical',
    quote: 'Fast delivery, pristine equipment, and the best service team in SoCal. When a machine had a minor issue on a Friday night, a tech was there within the hour.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'David Torres',
    title: 'Site Superintendent, Pacific Builders',
    quote: 'The variety of equipment they carry is unmatched. From 20-foot scissor lifts to 185-foot boom lifts — they have everything we need across all four of our active sites.',
    rating: 5,
    initials: 'DT',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-zinc-950 py-24 relative overflow-hidden">
      {/* Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

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
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Client Reviews</span>
            <div className="w-12 h-0.5 bg-orange-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-barlow text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            TRUSTED BY <span className="text-orange-500">PROFESSIONALS</span>
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 p-8 transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-500/30 mb-6" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <div className="w-10 h-10 bg-orange-500 flex items-center justify-center font-barlow font-black text-black text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.title}</div>
                </div>
              </div>

              {/* Bottom line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-6 py-4">
            <div className="text-3xl font-black font-barlow text-white">4.8</div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <div className="text-gray-500 text-xs mt-1">Based on 200+ Google Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}