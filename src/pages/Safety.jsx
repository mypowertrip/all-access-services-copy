import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Wrench, Award, ArrowRight } from 'lucide-react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Safety First, Always',
    body: "Safety is not a checkbox — it's the foundation of everything we do. When working at heights, lives are on the line, and we never forget that.",
  },
  {
    icon: Award,
    title: 'Factory Authorized Technicians',
    body: 'Every one of our techs is factory authorized by JLG, the industry leader in aerial work platforms. That means your equipment meets the highest standards — every time.',
  },
  {
    icon: Wrench,
    title: 'Decades of Experience',
    body: "Our team brings decades of hands-on experience inspecting, maintaining, and repairing aerial work platforms. We've seen it all, and we know what to look for.",
  },
  {
    icon: HardHat,
    title: 'Your Team's Safety Matters',
    body: 'We take the safety of you and your entire crew seriously. Every machine that leaves our yard has been rigorously inspected and cleared for safe operation.',
  },
];

export default function Safety() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-orange-500/40 px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">Our Commitment</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-barlow font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide mb-8"
          >
            <span className="text-white">SAFETY IS OUR</span>
            <br />
            <span style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>TOP PRIORITY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            That's why we put it at the top of our page. All Access understands that when working at heights,{' '}
            <span className="text-white font-semibold">lives are on the line</span> — and we never forget that.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      {/* Pillars */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 p-8 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 border border-orange-500/40 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                    <p.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-barlow font-black text-xl text-white uppercase tracking-wide">{p.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement block */}
      <section className="py-16 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-barlow font-black text-3xl md:text-4xl text-white leading-snug mb-6"
          >
            "All of our techs are factory authorized and have decades of experience inspecting, maintaining &amp; repairing aerial work platforms."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-orange-400 font-bold text-sm uppercase tracking-widest"
          >
            — The All Access Team
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-barlow font-black text-4xl md:text-5xl text-white mb-6"
          >
            READY TO WORK WITH A TEAM YOU CAN <span className="text-orange-500">TRUST?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/#rentals"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all glow-orange"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:8887775990"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-orange-500 text-white hover:text-orange-400 font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all"
            >
              Call 888-777-5990
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}