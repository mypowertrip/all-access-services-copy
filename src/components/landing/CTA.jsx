import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-foreground overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violet-500/10" />
          <div className="relative px-8 py-20 sm:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-background max-w-xl mx-auto">
              Ready to build something exceptional?
            </h2>
            <p className="mt-4 text-lg text-background/60 max-w-md mx-auto">
              Join thousands of teams already shipping faster with Pulse.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 h-12 text-sm font-semibold gap-2" asChild>
                <Link to="/dashboard">
                  Get started free <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-background/70 hover:text-background hover:bg-background/10 px-8 h-12 text-sm font-medium">
                Schedule a demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}