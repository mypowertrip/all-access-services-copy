import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Shield, Zap, Phone, BarChart3, Wrench } from 'lucide-react';

const features = [
  { icon: Radio, title: 'ClearSky™ Telematics', desc: 'Real-time GPS tracking, fuel levels, runtime hours, and diagnostic data streamed live from every unit in your fleet.' },
  { icon: BarChart3, title: 'Ground Control Dashboard', desc: 'One command center for your entire operation. KPIs, alerts, rental status, and maintenance schedules at a glance.' },
  { icon: Wrench, title: 'Predictive Maintenance', desc: 'Factory-certified technicians dispatched automatically when units flag anomalies — before downtime happens.' },
  { icon: Shield, title: 'Mission-Grade Security', desc: 'SOC 2 compliant infrastructure. Granular access controls built for clearance-sensitive environments.' },
  { icon: Phone, title: 'Dedicated Concierge', desc: 'A named equipment specialist assigned to your account. 24/7 phone support, not a ticket queue.' },
  { icon: Zap, title: 'Rapid Deployment', desc: 'Equipment staged and certified within 24 hours of activation. Your fleet, your timeline.' },
];

export default function LandingPlatform() {
  return (
    <section id="platform" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="h-px w-6 bg-gc-orange" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gc-orange">The Platform</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black tracking-tight text-foreground"
          >
            Built for operators who can't afford downtime
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base text-muted-foreground leading-relaxed"
          >
            All Access Unlimited combines white-glove service with enterprise telematics. Every unit. Every site. Always mission-ready.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-lg border border-border bg-card hover:border-gc-orange/20 hover:bg-gc-orange/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-gc-orange/10 flex items-center justify-center mb-4 group-hover:bg-gc-orange/15 transition-colors">
                  <Icon className="w-4 h-4 text-gc-orange" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}