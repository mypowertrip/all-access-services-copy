import { motion } from 'framer-motion';
import { MapPin, Smartphone, Globe, Zap, Shield, BarChart3, Wifi, Wrench, Lock, Download, ArrowRight, ExternalLink } from 'lucide-react';

// ClearSky hexagon SVG decoration
const HexPattern = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <polygon points="100,30 148,57.5 148,112.5 100,140 52,112.5 52,57.5" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.15"/>
  </svg>
);

const mobileFeatures = [
  { icon: MapPin, title: 'Find My Machine', desc: 'Activate a beacon for visual and audible cues — locate any unit on the yard in seconds.' },
  { icon: Smartphone, title: 'Digital Analyzer Reader', desc: 'Generate one-page summaries of machine set-up, diagnostics, and fault log data — shareable instantly.' },
  { icon: Lock, title: 'Digital Access Control', desc: 'Manage machine restrictions (lockout, creep, creep+) through app or web portal to prevent unauthorized use.' },
  { icon: Shield, title: 'Machine Status Indication', desc: 'Color-coded beacon shows active DTCs, battery/fuel level, ignition status at a glance.' },
];

const webFeatures = [
  { icon: BarChart3, title: 'Dynamic Dashboard', desc: 'Drag-and-drop widgets. Filter by fleet, model, or site. Every role gets the insights they need.' },
  { icon: Globe, title: 'Automatic Site Networks', desc: 'When two+ machines are within range, they auto-form a Site Network — geofencing without the manual setup.' },
  { icon: Zap, title: 'Quick Data Filters', desc: 'Powerful fleet-wide filters persist across the portal no matter where you navigate.' },
  { icon: Download, title: 'Export & Share', desc: 'Generate reports in PDF or spreadsheet formats to share with your team instantly.' },
];

const apiStats = [
  { val: '35+', label: 'Unique Data Points', sub: 'Per machine per transmission' },
  { val: '99.8%', label: 'Fleet Uptime', sub: 'Industry-leading reliability' },
  { val: '<2hr', label: 'Avg Response Time', sub: 'Emergency service call-out' },
  { val: '500+', label: 'Connected Units', sub: 'Across our SoCal fleet' },
];

export default function FleetSection() {
  return (
    <section className="bg-[#111111] overflow-hidden">

      {/* ── HERO BLOCK ── */}
      <div className="relative border-b border-teal-500/10">
        {/* Hex decorations */}
        <HexPattern className="absolute -right-16 top-0 w-96 text-teal-400 opacity-20 pointer-events-none" />
        <HexPattern className="absolute -left-20 bottom-0 w-64 text-teal-400 opacity-10 pointer-events-none" />
        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Smart Fleet Technology</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-barlow font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-4"
            >
              SMART<br />
              <span className="text-teal-400">CAPABILITIES</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-6"
            >
              A new frontier in connectivity solutions for the industry
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Our entire fleet is equipped with JLG's ClearSky Smart Fleet™ — a robust, constantly evolving platform delivering new functionalities, new insights, and new ways to run efficient, more cost-effective operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://smartfleet.jlg.com/features"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all"
              >
                Explore ClearSky™
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://smartfleet.jlg.com/documents/ClearSky-Brochure-EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-orange-500 text-gray-400 hover:text-orange-400 font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Get Brochure
              </a>
            </motion.div>
          </div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-teal-500/5 blur-3xl rounded-full" />
            <div className="relative border border-teal-500/20 bg-black/60 backdrop-blur-sm">
              {/* Header bar like ClearSky portal */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-teal-500/20 bg-teal-500/5">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">ClearSky™ Fleet Dashboard</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-zinc-800">
                {apiStats.map((stat, i) => (
                  <div key={stat.label} className="p-6 group hover:bg-teal-500/5 transition-colors">
                    <div className="font-barlow text-4xl font-black text-teal-400 mb-1">{stat.val}</div>
                    <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE APP BLOCK ── */}
      <div className="relative border-b border-teal-500/10">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Comprehensive Mobile App</span>
            </div>
            <h3 className="font-barlow font-black text-3xl md:text-4xl text-white tracking-tight mb-3">
              PRODUCTIVITY AT <span className="text-teal-400">THUMB'S REACH</span>
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Developed from the ground up for an authentic mobile experience, the ClearSky Smart Fleet app keeps you in control — even when cellular data and Wi-Fi are unavailable.*
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {mobileFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#111111] p-6 group hover:bg-teal-500/5 transition-colors"
              >
                <div className="w-10 h-10 border border-teal-500/30 flex items-center justify-center mb-4 group-hover:border-teal-400/60 transition-colors">
                  <f.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WEB PORTAL BLOCK ── */}
      <div className="relative border-b border-teal-500/10">
        <HexPattern className="absolute right-0 top-1/2 -translate-y-1/2 w-80 text-teal-400 opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">User-Friendly Web Portal</span>
            </div>
            <h3 className="font-barlow font-black text-3xl md:text-4xl text-white tracking-tight mb-3">
              TOTAL FLEET <span className="text-orange-400">VISIBILITY</span>
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Clear, intuitive navigation alongside powerful features for immediate visibility to your fleet's health and performance data — all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {webFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#111111] p-6 group hover:bg-orange-500/5 transition-colors"
              >
                <div className="w-10 h-10 border border-orange-500/30 flex items-center justify-center mb-4 group-hover:border-orange-400/60 transition-colors">
                  <f.icon className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── API / DATA FEED BLOCK ── */}
      <div className="relative">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Wifi className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Enhanced API Data Feed</span>
              </div>
              <h3 className="font-barlow font-black text-3xl md:text-4xl text-white tracking-tight mb-4">
                INTEGRATE WITH YOUR<br />
                <span className="text-teal-400">OWN SYSTEMS</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                ClearSky's API data feed integrates into your existing telematics solution. Our multi-layered feed provides more than 35 unique data points — giving you a vivid picture of equipment activity and status, with machine hours down to fractional level.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Integrate into your ERP, view it in a custom portal, or share it with any software provider — the choice is yours.
              </p>
              <a
                href="https://smartfleet.jlg.com/features"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all"
              >
                Learn More About ClearSky
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-px"
            >
              {[
                { label: 'GPS Location & Geofencing', color: 'teal' },
                { label: 'Machine Hours (fractional)', color: 'teal' },
                { label: 'Active Fault Codes & DTCs', color: 'orange' },
                { label: 'Battery / Fuel Level', color: 'teal' },
                { label: 'Ignition & Motion State', color: 'orange' },
                { label: 'Utilization & Productivity Data', color: 'teal' },
                { label: 'Scheduled Maintenance Alerts', color: 'orange' },
                { label: 'Digital Access Control Status', color: 'teal' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 px-5 py-3.5 bg-zinc-900/60 border-l-2 border-transparent hover:border-teal-400 hover:bg-teal-500/5 transition-all group"
                >
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.color === 'teal' ? 'bg-teal-400' : 'bg-orange-400'}`} />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item.label}</span>
                  <Zap className="w-3 h-3 text-gray-600 ml-auto group-hover:text-teal-400 transition-colors" />
                </motion.div>
              ))}
              <p className="text-gray-600 text-xs pt-2 text-right">+ 27 more data points</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}