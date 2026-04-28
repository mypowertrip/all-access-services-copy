import Navbar from '../components/home/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Clock, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Repair & Maintenance',
    description: 'Full service diagnostics, repairs, and routine maintenance on all equipment.',
  },
  {
    icon: CheckCircle2,
    title: 'Factory Authorized',
    description: 'JLG-certified technicians with genuine parts and factory-standard service.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick scheduling and expedited service to minimize your downtime.',
  },
];

export default function Service() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Repair & Service</span>
            </div>
            <h1 className="font-barlow text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Keep Your Fleet <span className="text-orange-500">Running Strong</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">JLG-authorized factory-trained technicians keeping your equipment operating at peak performance.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 p-8 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="font-barlow text-2xl font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="pb-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow text-4xl md:text-5xl font-black text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Simple, straightforward service process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Schedule', desc: 'Book your service appointment online or by phone.' },
              { num: '02', title: 'Inspect', desc: 'Our technicians perform a full diagnostic assessment.' },
              { num: '03', title: 'Repair', desc: 'We fix any issues with genuine JLG parts.' },
              { num: '04', title: 'Test', desc: 'Equipment is tested and certified before return.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-zinc-800/50 border border-zinc-700 p-6 text-center"
              >
                <div className="text-4xl font-barlow font-black text-orange-500 mb-3">{step.num}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-0.5 bg-orange-500" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-barlow text-4xl font-black text-white mb-6">Schedule Service Today</h2>
          <a href="tel:8887775990" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-10 py-5 transition-all">
            Call Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}