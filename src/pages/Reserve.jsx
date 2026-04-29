import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuoteCart } from '../components/rentals/QuoteCartContext';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Trash2, Calendar, MapPin, User, Building, Phone, Mail, ChevronRight, Shield, AlertCircle, Loader2 } from 'lucide-react';
import { validateQuoteForm } from '../lib/validation';
import { SITE_CONFIG } from '../lib/siteConfig';

const STEPS = ['Your Quote', 'Delivery Details', 'Confirm'];

export default function Reserve() {
  const { cartItems, startDate: cartStartDate, endDate: cartEndDate, removeFromCart, submitQuote } = useQuoteCart();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submittedQuoteId, setSubmittedQuoteId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [notes, setNotes] = useState('');
  const [rental, setRental] = useState({
    startDate: cartStartDate || '', endDate: cartEndDate || '', deliveryAddress: '', siteContact: '',
    firstName: '', lastName: '', company: '', email: '', phone: ''
  });

  // Pre-fill notes from QuoteCart context when cartItems exist
  useEffect(() => {
    const items = cartItems;
    if (items.length === 0) return;
    const sd = cartStartDate || rental.startDate || 'TBD';
    const ed = cartEndDate || rental.endDate || 'TBD';
    const itemLines = items.map(i => `- ${i.name}`).join('\n');
    setNotes(`Quote Request\nStart Date: ${sd}\nEnd Date: ${ed}\n\nEquipment Requested:\n${itemLines}`);
  }, [cartItems, cartStartDate, cartEndDate]);

  const rentalDays = rental.startDate && rental.endDate
    ? Math.max(1, Math.ceil((new Date(rental.endDate) - new Date(rental.startDate)) / 86400000))
    : 1;

  // Only calculate pricing if ALL items in cart have a real dailyRate
  const hasPricing = cartItems.length > 0 && cartItems.every(item => item.dailyRate != null);
  const subtotal    = hasPricing ? cartItems.reduce((sum, item) => sum + item.dailyRate * rentalDays, 0) : null;
  const deliveryFee = SITE_CONFIG.deliveryFee;
  const total       = hasPricing ? subtotal + deliveryFee : null;

  const canNext = () => {
    if (step === 0) return cartItems.length > 0 && rental.startDate && rental.endDate;
    if (step === 1) {
      const { isValid } = validateQuoteForm({
        firstName: rental.firstName,
        email: rental.email,
        phone: rental.phone,
        deliveryAddress: rental.deliveryAddress,
      });
      return isValid;
    }
    return true;
  };

  const handleStep1Next = () => {
    const { isValid, errors } = validateQuoteForm({
      firstName: rental.firstName,
      email: rental.email,
      phone: rental.phone,
      deliveryAddress: rental.deliveryAddress,
    });
    if (!isValid) { setFormErrors(errors); return; }
    setFormErrors({});
    setStep(s => s + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const result = await submitQuote({
        firstName: rental.firstName,
        lastName: rental.lastName,
        email: rental.email,
        phone: rental.phone,
        company: rental.company,
        deliveryAddress: rental.deliveryAddress,
        siteContact: rental.siteContact,
        startDate: rental.startDate,
        endDate: rental.endDate,
        notes,
      });
      setSubmittedQuoteId(result?.quoteId || '');
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err?.message || 'Failed to submit quote. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black font-inter pt-40">
        <div className="flex items-center justify-center min-h-screen px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-orange-500/20 border-2 border-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-2xl font-black text-white">Quote Submitted!</h2>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              We received your rental request. Our team will contact you at <strong className="text-white">{rental.email}</strong> within 2 business hours to confirm pricing and availability.
            </p>
            <div className="mt-6 p-5 rounded-xl bg-zinc-900 border border-zinc-800 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Rental period</span>
                <span className="font-semibold text-white">{rental.startDate} → {rental.endDate}</span>
              </div>
              {total != null && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Estimated total</span>
                  <span className="font-black text-orange-400">${total.toLocaleString()}</span>
                </div>
              )}
              {submittedQuoteId && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Reference</span>
                  <span className="font-mono font-bold text-orange-400">{submittedQuoteId}</span>
                </div>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/rentals" className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl text-sm text-center transition-colors">
                Browse More Equipment
              </Link>
              <Link to="/" className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl text-sm text-center border border-zinc-800 transition-colors">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-inter">

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Back */}
        <Link to="/rentals" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Rentals
        </Link>

        {/* Steps */}
        <div className="flex items-center gap-3 mb-10">
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                i === step ? 'bg-orange-500 text-black shadow-md shadow-orange-500/20'
                : i < step ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                : 'bg-zinc-900 text-gray-400 border border-zinc-800'
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
                <h2 className="text-xl font-black text-white">Your Quote</h2>

                {cartItems.length === 0 ? (
                   <div className="py-16 text-center rounded-2xl bg-zinc-900 border border-zinc-800">
                     <p className="text-gray-400 text-sm mb-4">Your quote is empty.</p>
                     <Link to="/rentals" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">Browse Rentals →</Link>
                   </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm">
                      <div className="w-20 h-16 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 overflow-hidden">
                        <img src={item.img} alt={item.model} className="h-14 object-contain" onError={() => {}} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.model}</div>
                            <div className="text-sm font-bold text-white">{item.name}</div>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="p-1 rounded-lg hover:bg-red-500/20 text-gray-500 hover:text-red-400 transition-colors shrink-0">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${SITE_CONFIG.fuelBadge[item.fuel]}`}>{item.fuel}</span>
                          <div className="text-right">
                            <div className="text-sm font-black text-orange-400">${item.dailyRate}/day</div>
                            {rentalDays > 1 && <div className="text-xs text-gray-500">${(item.dailyRate * rentalDays).toLocaleString()} total</div>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Dates */}
                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" /> Rental Dates
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">Start Date</label>
                      <input type="date" value={rental.startDate} min={new Date().toISOString().split('T')[0]}
                        onChange={e => setRental(r => ({ ...r, startDate: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm bg-zinc-800 border border-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">End Date</label>
                      <input type="date" value={rental.endDate} min={rental.startDate || new Date().toISOString().split('T')[0]}
                        onChange={e => setRental(r => ({ ...r, endDate: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm bg-zinc-800 border border-zinc-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50" />
                    </div>
                  </div>
                  {rentalDays > 1 && (
                    <div className="flex items-center gap-2 text-sm text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-lg px-3 py-2">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span><strong className="text-white">{rentalDays} days</strong> rental period</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 1 — Delivery */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h2 className="text-xl font-black text-white">Delivery Details</h2>

                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" /> Site Address
                  </h3>
                  <input type="text" placeholder="123 Jobsite Blvd, City, State, ZIP"
                    value={rental.deliveryAddress}
                    onChange={e => setRental(r => ({ ...r, deliveryAddress: e.target.value }))}
                    className={`w-full px-3 py-2.5 text-sm bg-zinc-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600 ${formErrors.deliveryAddress ? 'border-red-500/50' : 'border-zinc-700'}`} />
                  {formErrors.deliveryAddress && <p className="text-xs text-red-400 mt-1">{formErrors.deliveryAddress}</p>}
                  <input type="text" placeholder="On-site contact name & phone"
                    value={rental.siteContact}
                    onChange={e => setRental(r => ({ ...r, siteContact: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600" />
                </div>

                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-500" /> Contact Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">First Name *</label>
                      <input type="text" value={rental.firstName} onChange={e => setRental(r => ({ ...r, firstName: e.target.value }))}
                        className={`w-full px-3 py-2.5 text-sm bg-zinc-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600 ${formErrors.firstName ? 'border-red-500/50' : 'border-zinc-700'}`} required />
                      {formErrors.firstName && <p className="text-xs text-red-400 mt-1">{formErrors.firstName}</p>}
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">Last Name</label>
                      <input type="text" value={rental.lastName} onChange={e => setRental(r => ({ ...r, lastName: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">Company</label>
                    <input type="text" value={rental.company} onChange={e => setRental(r => ({ ...r, company: e.target.value }))}
                      className="w-full px-3 py-2.5 text-sm bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">Email *</label>
                      <input type="email" value={rental.email} onChange={e => setRental(r => ({ ...r, email: e.target.value }))}
                        className={`w-full px-3 py-2.5 text-sm bg-zinc-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600 ${formErrors.email ? 'border-red-500/50' : 'border-zinc-700'}`} required />
                      {formErrors.email && <p className="text-xs text-red-400 mt-1">{formErrors.email}</p>}
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">Phone *</label>
                      <input type="tel" value={rental.phone} onChange={e => setRental(r => ({ ...r, phone: e.target.value }))}
                        className={`w-full px-3 py-2.5 text-sm bg-zinc-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600 ${formErrors.phone ? 'border-red-500/50' : 'border-zinc-700'}`} required />
                      {formErrors.phone && <p className="text-xs text-red-400 mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1.5">Special Requirements</label>
                    <textarea value={notes} onChange={e => setNotes(e.target.value)}
                      rows={5} placeholder="Any special site conditions, certifications, or instructions..."
                      className="w-full px-3 py-2.5 text-sm bg-zinc-800 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-white placeholder-gray-600 resize-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Confirm */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h2 className="text-xl font-black text-white">Review & Confirm</h2>

                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 space-y-4">
                  {[
                    ['Equipment', cartItems.map(c => c.model).join(', ')],
                    ['Rental Period', `${rental.startDate} → ${rental.endDate} (${rentalDays} day${rentalDays > 1 ? 's' : ''})`],
                    ['Delivery To', rental.deliveryAddress],
                    ['Contact', `${rental.firstName} ${rental.lastName} · ${rental.email} · ${rental.phone}`],
                    ['Company', rental.company || '—'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex gap-4">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide w-28 shrink-0 mt-0.5">{l}</div>
                      <div className="text-sm text-gray-300 font-medium">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Shield className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-orange-300 leading-relaxed">
                    All equipment is fully insured, factory-inspected, and delivered by our certified team. By submitting, you agree to our rental terms. Final invoice issued upon delivery confirmation.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            {submitError && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}
            <div className="flex gap-3">
              {step > 0 && (
                <button onClick={() => { setStep(s => s - 1); setSubmitError(''); }}
                  className="flex items-center gap-2 px-5 py-3 border border-zinc-700 text-gray-400 hover:text-white font-semibold text-sm rounded-xl hover:bg-zinc-900 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              )}
              {step < 2 ? (
                <button
                  onClick={step === 1 ? handleStep1Next : () => setStep(s => s + 1)}
                  disabled={!canNext()}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-black font-bold text-sm rounded-xl transition-all ${
                    canNext() ? 'bg-orange-500 hover:bg-orange-400 shadow-md shadow-orange-500/20' : 'bg-zinc-800 text-gray-600 cursor-not-allowed'
                  }`}>
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm rounded-xl shadow-md shadow-orange-500/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              )}
            </div>
          </div>

          {/* Order summary sidebar */}
          <div>
            <div className="sticky top-40 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-800 bg-zinc-950">
                <h3 className="text-sm font-bold text-white">Quote Summary</h3>
              </div>
              <div className="p-5 space-y-3">
                 {cartItems.map(item => (
                   <div key={item.id} className="flex justify-between text-sm">
                     <span className="text-gray-400 truncate pr-4">{item.model || item.name}</span>
                     <span className="font-semibold text-orange-400 shrink-0">
                       {item.dailyRate != null ? `$${(item.dailyRate * rentalDays).toLocaleString()}` : '—'}
                     </span>
                   </div>
                 ))}

                 <div className="pt-3 border-t border-zinc-800 space-y-2">
                   {hasPricing ? (
                     <>
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-500">Subtotal ({rentalDays}d)</span>
                         <span className="text-gray-300">${subtotal.toLocaleString()}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-500">Delivery & Setup</span>
                         <span className="text-gray-300">${deliveryFee}</span>
                       </div>
                       <div className="flex justify-between text-sm font-bold pt-2 border-t border-zinc-800">
                         <span className="text-white">Estimated Total</span>
                         <span className="text-orange-400 text-base">${total.toLocaleString()}</span>
                       </div>
                     </>
                   ) : (
                     <div className="text-sm text-gray-500 italic">
                       Pricing will be confirmed after your quote is reviewed.
                     </div>
                   )}
                 </div>
                 <p className="text-[10px] text-gray-600 leading-relaxed pt-1">
                   Final pricing confirmed after delivery inspection. No credit card required to submit.
                 </p>
               </div>

               <div className="px-5 pb-5 space-y-2">
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                   <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Factory-inspected & insured
                 </div>
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                   <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> 24/7 on-call support
                 </div>
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                   <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> No hidden fees
                 </div>
               </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}