import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';


const PILLARS = [
  { icon: Shield, label: 'Safety First', desc: 'OSHA-compliant equipment, pre-delivery inspections, and certified operators on every job.' },
  { icon: Award, label: 'Quality', desc: 'JLG Authorized Dealer with factory-trained technicians and genuine parts.' },
  { icon: Users, label: 'Integrity', desc: 'Transparent pricing, no hidden fees, and 24/7 on-call support for every rental.' },
  { icon: Clock, label: 'Decades of Experience', desc: 'Serving Southern California since day one across aerospace, construction, events, and government.' },
];

export default function About() {
  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">About Us</span>
            <h1 className="font-barlow font-bold text-6xl md:text-8xl text-white leading-none mt-4 mb-6 uppercase">
              About All Access<br />
              <span style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>Services</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-2xl leading-relaxed font-semibold">
              Safety, Quality, and Integrity since day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Feature Image */}
      <section className="py-20 bg-zinc-900/40 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="font-barlow text-4xl font-black text-white mb-6">
                BUILT ON THE JOBSITE
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                All Access Services, Inc. started with two men looking for honest work. After years of tireless and exhaustive work, they were able to start an equipment service yard in San Diego. They continued to work long days by delivering equipment during the day and finishing paperwork by night. As the years rolled by, they were able to hire more workers and expand to Orange County. We now have locations to serve you in the Los Angeles, Orange, Riverside and San Diego Counties — we continue to grow every year and stand by our motto no matter what.
              </p>

              {/* Motto Block */}
              <div className="border-l-4 border-orange-500 pl-5 py-3 bg-orange-500/5 rounded-r-lg">
                <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-2">Our Motto</p>
                <p className="text-gray-200 text-sm leading-relaxed italic">
                  "Bill only what we quoted, always be on time, and have the highest quality most reliable equipment on the market. We promise to get you there! Any place, Anytime... <span className="font-black text-orange-400 not-italic">ANYWHERE.</span>"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <img
                src="https://www.allaccessservices.com/images/allaccessrentals-home-welcome-text-img.jpg"
                alt="All Access Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-barlow text-4xl font-black text-white">OUR <span className="text-orange-500">VALUES</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/40 rounded-xl transition-all"
              >
                <div className="w-12 h-12 shrink-0 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{p.label}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-barlow text-4xl font-black text-black mb-4">READY TO GET STARTED?</h2>
          <p className="text-black/80 text-lg mb-8">Request a quote today — our team responds within 2 business hours.</p>
          <Link
            to="/reserve"
            className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-lg transition-all"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}