import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GroundControlCTA() {
  return (
    <section className="relative bg-black py-20 overflow-hidden border-y border-zinc-800">
      {/* Background hex grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Teal + orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* SVG hex decoration */}
      <svg className="absolute right-8 top-8 w-48 opacity-10 text-teal-400 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="100,30 148,57.5 148,112.5 100,140 52,112.5 52,57.5" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
      <svg className="absolute left-8 bottom-8 w-32 opacity-10 text-teal-400 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left: Badge + Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1">
            
            {/* NEW badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Zap className="w-3 h-3" />
              New Division
            </div>

            <h2 className="font-barlow text-3xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-4">
              Introducing<br />
              <span className="text-orange-500">Ground</span> <span style={{ WebkitTextStroke: '2px #2dd4bf', color: 'transparent' }}>Control</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-6">
              <span className="text-teal-400 font-semibold">Ground Control</span> is a dedicated 24/7 service command that ensures continuous oversight and rapid response across all equipment operations. Backed by real-time technology and a centralized app, it provides <span className="text-white font-semibold">full visibility into equipment status</span>, instant service access, and immediate action when issues arise.
            </p>

            <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-8">
              More than support, Ground Control is an always-on service layer — actively monitoring performance, coordinating response, and maintaining uptime in environments where delays are not acceptable.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['24/7 Monitoring', 'Real-Time Visibility', 'Rapid Response', 'Always-On Uptime'].map((tag, i) =>
              <span key={tag} className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded border ${i % 2 === 0 ? 'text-orange-300 border-orange-500/30 bg-orange-500/5' : 'text-teal-300 border-teal-500/30 bg-teal-500/5'}`}>
                  {tag}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/reserve" className="bg-[hsl(var(--ring))] text-black px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-lg inline-flex items-center gap-3 hover:bg-teal-400 transition-all">CONTACT GROUND CONTROL





              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-3 border border-teal-500/50 hover:border-teal-400 text-teal-400 hover:text-teal-300 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition-all">
                
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-96">
            
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-teal-500/30 rounded-2xl p-8 overflow-hidden">
              {/* Inner glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

              {/* GC Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/8d33e4979_GroundControl.png"
                  alt="Ground Control"
                  className="h-36 w-auto object-contain drop-shadow-lg" />
                
              </div>
              <p className="text-center text-teal-400 text-xs font-semibold uppercase tracking-widest mb-6">by All Access Services</p>

              <div className="space-y-4">
                {[
                { label: 'Availability', value: '24/7 Always-On', accent: 'orange' },
                { label: 'Response', value: 'Immediate Action', accent: 'teal' },
                { label: 'Visibility', value: 'Real-Time Equipment Status', accent: 'orange' },
                { label: 'Coverage', value: 'All Operations', accent: 'teal' }].
                map((item) =>
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.label}</span>
                    <span className={`text-sm font-medium ${item.accent === 'orange' ? 'text-orange-400' : 'text-teal-400'}`}>{item.value}</span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-3 w-full bg-teal-500 hover:bg-teal-400 text-black font-bold text-sm uppercase tracking-widest py-4 rounded-lg transition-all">
                  
                  <Zap className="w-4 h-4" />
                  Preview the App
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);

}