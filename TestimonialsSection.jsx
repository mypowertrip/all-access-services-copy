import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Hernandez',
    title: 'Project Manager · CK Construction',
    quote:
      "All Access has been our go-to for aerial equipment for over 8 years. The ClearSky tracking system is a game changer — we always know where our rented equipment is.",
    rating: 5,
    initials: 'MH',
  },
  {
    name: 'Sarah Chen',
    title: 'Operations Director · Apex Electrical',
    quote:
      'Fast delivery, pristine equipment, and the best service team in SoCal. When a machine had a minor issue on a Friday night, a tech was there within the hour.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'David Torres',
    title: 'Site Superintendent · Pacific Builders',
    quote:
      'The variety of equipment they carry is unmatched. From 20-foot scissor lifts to 185-foot boom lifts — they have everything we need across all four of our active sites.',
    rating: 5,
    initials: 'DT',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="relative bg-zinc-950 py-20 md:py-32 overflow-hidden">
      {/* Single hairline accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
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
              Client Reviews
            </span>
            <div className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="font-barlow text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
            Trusted By <span style={{ WebkitTextStroke: '2px #f97316', color: 'rgba(249,115,22,0.04)' }}>Professionals.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col bg-black/60 border border-zinc-800 hover:border-orange-500/40 p-7 transition-all duration-500"
            >
              {/* Big background quote mark */}
              <Quote className="absolute -top-3 -left-1 w-24 h-24 text-orange-500/[0.06] -rotate-12" strokeWidth={1.5} />

              <Quote className="relative w-6 h-6 text-orange-500/70 mb-5" strokeWidth={2} />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-7 flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-zinc-800/80">
                <div className="w-9 h-9 bg-orange-500 flex items-center justify-center font-barlow font-black text-black text-xs">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-sm truncate">{t.name}</div>
                  <div className="text-zinc-500 text-[11px] truncate">{t.title}</div>
                </div>
              </figcaption>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.figure>
          ))}
        </div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-4 bg-black/60 border border-zinc-800 px-6 py-4">
            <div className="font-numeric text-3xl font-bold text-white">4.8</div>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-0.5">
                Based on 200+ Google Reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
