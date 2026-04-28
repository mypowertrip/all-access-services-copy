import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Send } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

export default function QuoteRequestForm({ models, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    rentalDuration: '1-week',
    deliveryAddress: '',
    projectDescription: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success state
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        rentalDuration: '1-week',
        deliveryAddress: '',
        projectDescription: '',
      });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-full md:w-96 bg-gradient-to-b from-zinc-900 to-black border-l border-zinc-800 z-50 flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 shrink-0">
          <h2 className="font-barlow text-lg font-bold text-white">
            Request Quote
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {/* Equipment Summary */}
            {models.length > 0 && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mb-4">
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-2">Selected Equipment</p>
                <div className="space-y-1">
                  {models.map(model => (
                    <p key={model.id} className="text-xs text-gray-300">{model.name} • {model.height}ft</p>
                  ))}
                </div>
              </div>
            )}

            {/* Company Name */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600"
                placeholder="Your company"
              />
            </div>

            {/* Contact Name */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Contact Name *
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Rental Duration */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Rental Duration *
              </label>
              <select
                name="rentalDuration"
                value={formData.rentalDuration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors"
              >
                <option value="1-week">1 Week</option>
                <option value="2-weeks">2 Weeks</option>
                <option value="1-month">1 Month</option>
                <option value="2-months">2 Months</option>
                <option value="3-months">3 Months</option>
                <option value="6-months">6 Months</option>
                <option value="1-year">1 Year</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Delivery Address */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Delivery Address
              </label>
              <textarea
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600 resize-none h-20"
                placeholder="Street address, city, state, zip"
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-1.5">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600 resize-none h-20"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest rounded-lg transition-all mt-6"
            >
              <Send className="w-4 h-4" />
              Submit Request
            </button>
          </form>
        ) : (
          <div className="flex-1 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-barlow text-lg font-bold text-white">Request Submitted!</h3>
              <p className="text-sm text-gray-400">We'll be in touch shortly to confirm your quote.</p>
            </motion.div>
          </div>
        )}

        {/* Footer - Phone CTA */}
        <div className="border-t border-zinc-800 px-6 py-4 shrink-0 bg-zinc-900/50">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Or call us directly:</p>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 border border-teal-500/40 font-bold text-sm uppercase tracking-widest rounded-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </motion.div>

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />
    </AnimatePresence>
  );
}