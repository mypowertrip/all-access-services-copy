import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Pulse transformed how our engineering team tracks performance. We caught a critical bottleneck within hours of onboarding.",
    name: "Sarah Chen",
    role: "VP Engineering, Lattice",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "The real-time dashboards are addictive. Our entire leadership team checks Pulse before their morning coffee.",
    name: "Marcus Johnson",
    role: "CTO, Ramp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "We evaluated six analytics platforms. Pulse was the only one that felt like it was built for how modern teams actually work.",
    name: "Elena Rodriguez",
    role: "Head of Product, Notion",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Loved by teams everywhere
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}