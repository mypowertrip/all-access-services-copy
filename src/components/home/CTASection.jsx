import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 transform rotate-45 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 transform rotate-45 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-0.5 bg-black/30" />
          <span className="text-black/70 text-xs font-bold uppercase tracking-widest">Ready to Start?</span>
          <div className="w-12 h-0.5 bg-black/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-barlow text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-none mb-6"
        >
          LET'S GET YOUR<br />PROJECT ELEVATED
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/80 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Our team is ready to help you find the perfect equipment solution. 
          Get a quote in minutes or speak with an expert today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/reserve"
            className="group inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest px-10 py-5 transition-all"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-black font-bold text-sm uppercase tracking-widest px-10 py-5 transition-all"
          >
            <Phone className="w-4 h-4" />
            {SITE_CONFIG.phone}
          </a>
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-black/20"
        >
          <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-black/70 hover:text-black transition-colors text-sm font-semibold">
            <Mail className="w-4 h-4" />
            Email Us
          </a>
          <span className="flex items-center gap-2 text-black/70 text-sm font-semibold">
            <MessageSquare className="w-4 h-4" />
            Live Chat
          </span>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} className="flex items-center gap-2 text-black/70 hover:text-black transition-colors text-sm font-semibold">
            <Phone className="w-4 h-4" />
            Request Callback
          </a>
        </motion.div>
      </div>
    </section>
  );
}