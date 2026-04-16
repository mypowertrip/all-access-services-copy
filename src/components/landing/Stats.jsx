import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '<50ms', label: 'Avg. Response' },
  { value: '2,400+', label: 'Teams Active' },
  { value: '10M+', label: 'Events / Day' },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center lg:px-8"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}