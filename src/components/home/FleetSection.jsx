import { motion } from 'framer-motion';
import { Wifi, Shield, Gauge, Wrench, Clock, MapPin } from 'lucide-react';

const FLEET_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/f21576185_generated_cdbad3bf.png";

const features = [
  {
    icon: Wifi,
    title: 'ClearSky Connected',
    description: 'Real-time GPS tracking and telematics on every unit in our fleet.',
  },
  {
    icon: Shield,
    title: 'JLG Authorized',
    description: 'Factory-trained technicians and genuine JLG parts on every service.',
  },
  {
    icon: Gauge,
    title: 'Fleet Analytics',
    description: 'Two-way data transmission for true fleet interactivity.',
  },
  {
    icon: Wrench,
    title: '24/7 Support',
    description: 'Around-the-clock technical support and emergency service.',
  },
];

export default function FleetSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={FLEET_IMG} alt="Aerial view of fleet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-0.5 bg-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Smart Fleet Technology</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-barlow text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-6"
            >
              CLEARSKY™<br />
              <span className="text-teal-400">SMART FLEET</span><br />
              CONNECTED
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Our entire fleet is equipped with JLG's industry-leading ClearSky Smart Fleet technology, 
              giving you unprecedented visibility and control over your rental equipment.
            </motion.p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-black/50 border border-zinc-800 p-5 hover:border-teal-500/50 transition-colors group"
                >
                  <f.icon className="w-6 h-6 text-teal-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-teal-500/10 blur-3xl rounded-full" />
            <div className="relative bg-black/80 border border-teal-500/30 p-10">
              <div className="space-y-8">
                {[
                  { val: '500+', label: 'Connected Units', sub: 'Real-time GPS tracking' },
                  { val: '99.8%', label: 'Fleet Uptime', sub: 'Industry-leading reliability' },
                  { val: '<2hr', label: 'Response Time', sub: 'Average service response' },
                ].map((stat, i) => (
                  <div key={stat.label} className="border-b border-zinc-800 pb-8 last:border-0 last:pb-0">
                    <div className="font-barlow text-5xl font-black text-teal-400 mb-1">{stat.val}</div>
                    <div className="text-white font-semibold">{stat.label}</div>
                    <div className="text-gray-500 text-sm">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}