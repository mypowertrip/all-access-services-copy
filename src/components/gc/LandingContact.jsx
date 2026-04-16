import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingContact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-6 bg-gc-orange" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-gc-orange">Membership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              Request access to All Access Unlimited
            </h2>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Membership is by application only. Our team will review your operational requirements and match you with the right fleet configuration and concierge specialist.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Shield, label: 'Security Cleared Operations', desc: 'Cleared facilities support available. NDA and compliance packages on request.' },
                { icon: Clock, label: '24-Hour Onboarding', desc: 'From approval to active fleet access in 24 hours or less.' },
                { icon: Users, label: 'Dedicated Concierge', desc: 'One named specialist for your account. Direct line, always.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-md bg-gc-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gc-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-8"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-gc-green/10 border border-gc-green/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 rounded-full bg-gc-green" />
                </div>
                <div className="text-sm font-bold text-foreground">Request received</div>
                <div className="text-xs text-muted-foreground mt-2">Our team will contact you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Organization</label>
                  <Input placeholder="e.g. Lockheed Martin" className="bg-muted/50 h-10 text-sm" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">First Name</label>
                    <Input placeholder="Jane" className="bg-muted/50 h-10 text-sm" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Last Name</label>
                    <Input placeholder="Doe" className="bg-muted/50 h-10 text-sm" required />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Work Email</label>
                  <Input type="email" placeholder="jane@lockheed.com" className="bg-muted/50 h-10 text-sm" required />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-muted/50 h-10 text-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">Operational Need</label>
                  <textarea
                    placeholder="Briefly describe your fleet requirements and site locations..."
                    rows={3}
                    className="w-full text-sm bg-muted/50 border border-input rounded-md px-3 py-2.5 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <Button type="submit" className="w-full h-11 font-bold uppercase tracking-wide text-sm gap-2">
                  Submit Request <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">
                  By submitting you agree to our terms. Membership subject to approval.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}