import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Trash2, Calendar, MapPin, User, Building, Phone, Mail, ChevronRight, Shield } from 'lucide-react';
import SiteNav from '../components/layout/SiteNav';
import SiteFooter from '../components/layout/SiteFooter';
import { fuelBadge } from '../lib/equipmentData';

const STEPS = ['Your Quote', 'Delivery Details', 'Confirm'];

export default function Reserve() {
  const location = useLocation();
  const [cart, setCart] = useState(location.state?.cart || []);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [rental, setRental] = useState({
    startDate: '', endDate: '', deliveryAddress: '', siteContact: '',
    firstName: '', lastName: '', company: '', email: '', phone: '', notes: ''
  });

  const rentalDays = rental.startDate && rental.endDate
    ? Math.max(1, Math.ceil((new Date(rental.endDate) - new Date(rental.startDate)) / 86400000))
    : 1;

  const subtotal = cart.reduce((sum, item) => sum + item.dailyRate * rentalDays, 0);
  const deliveryFee = 250;
  const total = subtotal + deliveryFee;

  const remove = (id) => setCart(prev => prev.filter(c => c.id !== id));

  const canNext = () => {
    if (step === 0) return cart.length > 0 && rental.startDate && rental.endDate;
    if (step === 1) return rental.deliveryAddress && rental.firstName && rental.email && rental.phone;
    return true;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 font-inter">
        <SiteNav />
        <div className="flex items-center justify-center min-h-screen px-6 pt-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Quote Submitted!</h2>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              We received your rental request for {cart.length} item{cart.length > 1 ? 's' : ''}. Our team will contact you at <strong className="text-slate-700">{rental.email}</strong> within 2 business hours to confirm pricing and availability.
            </p>
            <div className="mt-6 p-5 rounded-xl bg-white border border-slate-100 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Rental period</span>
                <span className="font-semibold text-slate-900">{rental.startDate} → {rental.endDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Estimated total</span>
                <span className="font-black text-slate-900">${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Reference</span>
                <span className="font-mono font-bold text-orange">#{Math.random().toString(36).substr(2,8).toUpperCase()}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/equipment" className="w-full py-3 bg-orange text-white font-bold rounded-xl text-sm text-center">
                Browse More Equipment
              </Link>
              <Link to="/" className="w-full py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl text-sm text-center">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <SiteNav cartCount={cart.length} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Back */}
        <Link to="/equipment" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Equipment
        </Link>

        {/* Steps */}
        <div className="flex items-center gap-3 mb-10">
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                i === step ? 'bg-orange text-white shadow-md shadow-orange/20'
                : i < step ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-white text-slate-400 border border-slate-200'
              }`}>
                {i < step ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs">{i + 1}</span>}
                {s}
              </div>
              {i < STEPS.length - 1 && <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">

            {/* STEP 0 — Cart */}
            {step === 0 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h2 className="text-xl font-black text-slate-900">Your Quote</h2>

                {cart.length === 0 ? (
                  <div className="py-16 text-center rounded-2xl bg-white border border-slate-100">
                    <p className="text-slate-500 text-sm mb-4">Your quote is empty.</p>
                    <Link to="/equipment" className="text-sm font-bold text-orange hover:underline">Browse Equipment →</Link>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="w-20 h-16 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 overflow-hidden">
                        <img src={item.img} alt={item.model} className="h-14 object-contain" onError={() => {}} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.model}</div>
                            <div className="text-sm font-bold text-slate-900">{item.name}</div>
                          </div>
                          <button onClick={() => remove(item.id)} className="p-1 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors shrink-0">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${fuelBadge[item.fuel]}`}>{item.fuel}</span>
                          <div className="text-right">
                            <div className="text-sm font-black text-slate-900">${item.dailyRate}/day</div>
                            {rentalDays > 1 && <div className="text-xs text-slate-400">${(item.dailyRate * rentalDays).toLocaleString()} total</div>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Dates */}
                <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange" /> Rental Dates
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Start Date</label>
                      <input type="date" value={rental.startDate} min={new Date().toISOString().split('T')[0]}
                        onChange={e => setRental(r => ({ ...r, startDate: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/30" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">End Date</label>
                      <input type="date" value={rental.endDate} min={rental.startDate || new Date().toISOString().split('T')[0]}
                        onChange={e => setRental(r => ({ ...r, endDate: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/30" />
                    </div>
                  </div>
                  {rentalDays > 1 && (
                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-orange/5 border border-orange/10 rounded-lg px-3 py-2">
                      <Calendar className="w-4 h-4 text-orange shrink-0" />
                      <span><strong className="text-slate-900">{rentalDays} days</strong> rental period</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 1 — Delivery */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h2 className="text-xl font-black text-slate-900">Delivery Details</h2>

                <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange" /> Site Address
                  </h3>
                  <input type="text" placeholder="123 Jobsite Blvd, City, State, ZIP"
                    value={rental.deliveryAddress}
                    onChange={e => setRental(r => ({ ...r, deliveryAddress: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" />
                  <input type="text" placeholder="On-site contact name & phone"
                    value={rental.siteContact}
                    onChange={e => setRental(r => ({ ...r, siteContact: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" />
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-orange" /> Contact Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">First Name</label>
                      <input type="text" value={rental.firstName} onChange={e => setRental(r => ({ ...r, firstName: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Last Name</label>
                      <input type="text" value={rental.lastName} onChange={e => setRental(r => ({ ...r, lastName: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Company</label>
                    <input type="text" value={rental.company} onChange={e => setRental(r => ({ ...r, company: e.target.value }))}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Email *</label>
                      <input type="email" value={rental.email} onChange={e => setRental(r => ({ ...r, email: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Phone *</label>
                      <input type="tel" value={rental.phone} onChange={e => setRental(r => ({ ...r, phone: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Special Requirements</label>
                    <textarea value={rental.notes} onChange={e => setRental(r => ({ ...r, notes: e.target.value }))}
                      rows={3} placeholder="Any special site conditions, certifications, or instructions..."
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30 resize-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Confirm */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h2 className="text-xl font-black text-slate-900">Review & Confirm</h2>

                <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
                  {[
                    ['Equipment', cart.map(c => c.model).join(', ')],
                    ['Rental Period', `${rental.startDate} → ${rental.endDate} (${rentalDays} day${rentalDays > 1 ? 's' : ''})`],
                    ['Delivery To', rental.deliveryAddress],
                    ['Contact', `${rental.firstName} ${rental.lastName} · ${rental.email} · ${rental.phone}`],
                    ['Company', rental.company || '—'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex gap-4">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wide w-28 shrink-0 mt-0.5">{l}</div>
                      <div className="text-sm text-slate-700 font-medium">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <Shield className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    All equipment is fully insured, factory-inspected, and delivered by our certified team. By submitting, you agree to our rental terms. Final invoice issued upon delivery confirmation.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex gap-3">
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)}
                  className="flex items-center gap-2 px-5 py-3 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
              {step < 2 ? (
                <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-white font-bold text-sm rounded-xl transition-all ${
                    canNext() ? 'bg-orange hover:bg-orange/90 shadow-md shadow-orange/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}>
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={() => setSubmitted(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange hover:bg-orange/90 text-white font-bold text-sm rounded-xl shadow-md shadow-orange/20 transition-all">
                  <CheckCircle2 className="w-4 h-4" /> Submit Quote Request
                </button>
              )}
            </div>
          </div>

          {/* Order summary sidebar */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
                <h3 className="text-sm font-bold text-slate-900">Quote Summary</h3>
              </div>
              <div className="p-5 space-y-3">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-slate-600 truncate pr-4">{item.model}</span>
                    <span className="font-semibold text-slate-900 shrink-0">${(item.dailyRate * rentalDays).toLocaleString()}</span>
                  </div>
                ))}

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Subtotal ({rentalDays}d)</span>
                    <span className="text-slate-700">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Delivery & Setup</span>
                    <span className="text-slate-700">${deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-2 border-t border-slate-100">
                    <span className="text-slate-900">Estimated Total</span>
                    <span className="text-orange text-base">${total.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed pt-1">
                  Final pricing confirmed after delivery inspection. No credit card required to submit.
                </p>
              </div>

              <div className="px-5 pb-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Factory-inspected & insured
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 24/7 on-call support
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No hidden fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}