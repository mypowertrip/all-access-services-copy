import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Zap, Shield, Globe, GitBranch, Layers } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track every metric that matters. Get instant insights with dashboards that update in milliseconds.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-50ms response times globally. Built on edge infrastructure for uncompromising performance.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant. End-to-end encryption, SSO, and granular role-based access control.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy to 30+ regions worldwide. Automatic failover and load balancing built in.'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Branch, preview, and merge changes with confidence. Full audit trail for every modification.'
  },
  {
    icon: Layers,
    title: 'Composable APIs',
    description: 'Build exactly what you need. Our API-first approach means infinite extensibility.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Everything you need to move fast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground leading-relaxed"
          >
            A complete toolkit designed for modern teams. No compromises.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}