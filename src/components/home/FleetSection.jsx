import { motion } from 'framer-motion';
import { MapPin, Smartphone, Globe, Zap, Shield, BarChart3, Wifi, Wrench, Lock, Download, ArrowRight, ExternalLink, Hash } from 'lucide-react';

// ClearSky hexagon SVG — matches JLG site exactly
const HexOutline = ({ className }) =>
<span className={className} style={{ display: 'inline-flex' }}>
    <svg viewBox="0 0 120 138" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <polygon points="60,4 116,34 116,104 60,134 4,104 4,34" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </span>;


const mobileFeatures = [
{
  icon: MapPin,
  title: 'Find My Machine',
  desc: 'Using geolocation, activate a machine\'s beacon for visual and audible cues — effortless equipment identification in seconds.'
},
{
  icon: Smartphone,
  title: 'Digital Analyzer Reader',
  desc: 'Generate an easy-reference one-page summary of machine set-up, diagnostics, and fault log data — shareable instantly.'
},
{
  icon: Lock,
  title: 'Digital Access Control',
  desc: 'Manage machine restrictions (lockout, creep, creep+) through app or web portal to prevent unauthorized use.'
},
{
  icon: Shield,
  title: 'Machine Status Indication',
  desc: 'Beacon color delivers at-a-glance identification of active DTCs, battery/fuel level, ignition status and more.'
}];


const webFeatures = [
{
  icon: BarChart3,
  title: 'Dynamic Dashboard',
  desc: 'Drag-and-drop widgets. Filter by fleet, model, or site. Every role gets the actionable insights they need.'
},
{
  icon: Globe,
  title: 'Automatic Site Networks',
  desc: 'When two+ machines are within range, they auto-form a Site Network — geofencing without the manual setup.'
},
{
  icon: Zap,
  title: 'Quick Data Filters',
  desc: 'Powerful fleet-wide filters persist across the portal no matter where you navigate.'
},
{
  icon: Download,
  title: 'Export & Share',
  desc: 'Generate reports in PDF or spreadsheet formats to share with your team instantly.'
}];


const apiDataPoints = [
{ label: 'GPS Location & Geofencing', color: 'teal' },
{ label: 'Machine Hours (fractional)', color: 'teal' },
{ label: 'Active Fault Codes & DTCs', color: 'orange' },
{ label: 'Battery / Fuel Level', color: 'teal' },
{ label: 'Ignition & Motion State', color: 'orange' },
{ label: 'Utilization & Productivity Data', color: 'teal' },
{ label: 'Scheduled Maintenance Alerts', color: 'orange' },
{ label: 'Digital Access Control Status', color: 'teal' }];


export default function FleetSection() {
  return (
    <section className="bg-[#0f0f0f] overflow-hidden">

      {/* ── HERO BLOCK ── */}
      <div className="relative border-b border-zinc-800">
        {/* Hex decorations matching JLG site */}
        <HexOutline className="absolute -right-8 top-8 w-48 text-teal-400/20 pointer-events-none hidden lg:block" />
        <HexOutline className="absolute right-24 top-0 w-28 text-teal-400/10 pointer-events-none hidden lg:block" />
        <HexOutline className="absolute -left-12 bottom-0 w-36 text-zinc-600/20 pointer-events-none hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Teal eyebrow line — matches JLG style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6">
              
              <div className="w-8 h-0.5 bg-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Powered by Ground Control™</span>
            </motion.div>

            {/* Outlined headline — matches JLG "SMART CAPABILITIES" style */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-barlow font-black text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
              
              <span className="text-white">SMART</span>
              <br />
              <span style={{ WebkitTextStroke: '2px #2dd4bf', color: 'transparent' }}>CAPABILITIES</span>
            </motion.h2>

            {/* Orange all-caps subtitle — matches JLG exactly */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
              
              A new frontier in connectivity solutions for the industry
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg">
              
              Our entire fleet is equipped with Ground Control™ — a robust, constantly evolving platform delivering new functionalities, new insights, and new ways to run efficient, more cost-effective operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4">
              
              {/* Outlined button — matches JLG "GET BROCHURE" style */}
              <a
                href="https://smartfleet.jlg.com/documents/ClearSky-Brochure-EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:border-teal-400 hover:text-teal-400 font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all">
                
                <Download className="w-3.5 h-3.5" />
                Get Brochure
              </a>
              <a
                href="https://smartfleet.jlg.com/features"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-teal-400 text-gray-400 hover:text-teal-400 font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all">
                
                Explore Ground Control™
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right: laptop+phone mockup panel (mimicking JLG) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative flex items-center justify-center">
            
            {/* Hex background glow */}
            <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-full" />
            {/* Stats panel styled like ClearSky portal */}
            <div className="relative w-full border border-teal-500/20 bg-black/70">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-teal-500/20 bg-teal-500/5">
                <HexOutline className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Ground Control™ Fleet Dashboard</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-teal-400 text-[10px] font-bold uppercase tracking-widest">Live</span>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-zinc-800/80">
                {[
                { val: '35+', label: 'Unique Data Points', sub: 'Per machine per transmission' },
                { val: '99.8%', label: 'Fleet Uptime', sub: 'Industry-leading reliability' },
                { val: '<2hr', label: 'Avg Response Time', sub: 'Emergency service call-out' },
                { val: '3000+', label: 'Connected Units', sub: 'Across our SoCal fleet' }].
                map((stat) =>
                <div key={stat.label} className="p-6 group hover:bg-teal-500/5 transition-colors">
                    <div className="font-barlow text-4xl font-black text-teal-400 mb-1">{stat.val}</div>
                    <div className="text-white font-semibold text-sm mb-0.5">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sub}</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE APP BLOCK ── */}
      <div className="relative border-b border-zinc-800">
        <div className="relative max-w-7xl mx-auto px-4 py-20 hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-teal-400" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Comprehensive Mobile App</span>
            </div>
            <h3 className="font-barlow font-black text-4xl md:text-5xl text-white tracking-tight leading-none mb-4">
              PRODUCTIVITY AT<br />
              <span style={{ WebkitTextStroke: '2px #2dd4bf', color: 'transparent' }}>THUMB'S REACH</span>
            </h3>
            <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
              Developed from the ground up for an authentic mobile experience, the Ground Control™ app keeps you in control — even when cellular data and Wi-Fi are unavailable.*
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {mobileFeatures.map((f, i) =>
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0f0f0f] p-7 group hover:bg-teal-500/5 transition-colors relative">
              
                {/* Hex icon container matching JLG */}
                <div className="relative w-12 h-12 flex items-center justify-center mb-5">
                  <HexOutline className="absolute inset-0 w-full h-full text-teal-400/50 group-hover:text-teal-400 transition-colors" />
                  <f.icon className="w-5 h-5 text-teal-400 relative z-10" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                {/* Bottom orange accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ── WEB PORTAL BLOCK ── */}
      <div className="relative border-b border-zinc-800">
        <HexOutline className="absolute right-0 top-1/2 -translate-y-1/2 w-72 text-zinc-700/20 pointer-events-none hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">User-Friendly Web Portal</span>
            </div>
            <h3 className="font-barlow font-black text-4xl md:text-5xl text-white tracking-tight leading-none mb-4">
              TOTAL FLEET<br />
              <span style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>VISIBILITY</span>
            </h3>
            <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
              Clear, intuitive navigation alongside powerful features for immediate visibility to your fleet's health and performance data — all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {webFeatures.map((f, i) =>
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0f0f0f] p-7 group hover:bg-orange-500/5 transition-colors relative">
              
                <div className="relative w-12 h-12 flex items-center justify-center mb-5">
                  <HexOutline className="absolute inset-0 w-full h-full text-orange-500/50 group-hover:text-orange-400 transition-colors" />
                  <f.icon className="w-5 h-5 text-orange-400 relative z-10" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{f.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ── API / DATA FEED BLOCK ── */}
      <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 py-24 hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-0.5 bg-teal-400" />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Enhanced API Data Feed</span>
              </div>
              <h3 className="font-barlow font-black text-4xl md:text-5xl text-white tracking-tight leading-none mb-6">
                INTEGRATE WITH<br />
                <span style={{ WebkitTextStroke: '2px #2dd4bf', color: 'transparent' }}>YOUR SYSTEMS</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Ground Control™'s API data feed integrates into your existing telematics solution. Our multi-layered feed provides more than 35 unique data points — giving you a vivid picture of equipment activity and status, with machine hours down to fractional level.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Integrate into your ERP, view it in a custom portal, or share it with any software provider — the choice is yours.
              </p>
              <a
                href="https://smartfleet.jlg.com/documents/product-sheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:border-orange-500 hover:text-orange-400 font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all">
                
                <Download className="w-3.5 h-3.5" />
                Get Info Sheet
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-px">
              
              {apiDataPoints.map((item, i) =>
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 px-5 py-4 bg-zinc-900/60 border-l-2 border-transparent hover:border-teal-400 hover:bg-teal-500/5 transition-all group cursor-default">
                
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.color === 'teal' ? 'bg-teal-400' : 'bg-orange-400'}`} />
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{item.label}</span>
                  <Zap className="w-3 h-3 text-zinc-700 ml-auto group-hover:text-teal-400 transition-colors" />
                </motion.div>
              )}
              <p className="text-zinc-600 text-xs pt-3 text-right">+ 27 more data points</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>);

}