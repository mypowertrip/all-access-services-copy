import { useState } from 'react';
import ImageGallery from '../components/sales/ImageGallery';
import FinancingCalculator from '../components/sales/FinancingCalculator';
import ConditionReport from '../components/sales/ConditionReport';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X, Zap } from 'lucide-react';
import { salesInventory } from '../lib/salesInventory';
import { SITE_CONFIG } from '../lib/siteConfig';

export default function Sales() {
  const [selectedItem, setSelectedItem] = useState(null);

  const getBadgeStyles = (badge) => {
    if (!badge) return '';
    switch (badge.type) {
      case 'new-arrival':
        return 'bg-teal-500 text-black';
      case 'certified':
        return 'bg-orange-500 text-black';
      case 'price-reduced':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-black to-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">New & Pre-Owned</span>
            </div>
            <h1 className="font-barlow text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Equipment <span className="text-orange-500">Showroom</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">Browse detailed condition reports, 360° photo galleries, and calculate instant financing for high-ticket equipment.</p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!selectedItem ? (
          // Grid View
          <section key="grid" className="pb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {salesInventory.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedItem(item)}
                    className="group bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-all duration-500 text-left rounded-xl"
                  >
                    <div className="relative aspect-video overflow-hidden bg-zinc-800">
                      <img
                        src={item.gallery[0]}
                        alt={`${item.make} ${item.model}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {item.badge && (
                          <span className={`${getBadgeStyles(item.badge)} text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded`}>
                            {item.badge.label}
                          </span>
                        )}
                      </div>

                      {/* Condition Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded ${
                          item.condition === 'New'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                            : 'bg-gray-500/20 text-gray-300 border border-gray-500/40'
                        }`}>
                          {item.condition}
                        </span>
                      </div>

                      {/* Gallery Count */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 text-white text-[10px] font-semibold rounded">
                        📸 {item.gallery.length}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{item.type}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-500 text-xs">{item.year}</span>
                      </div>

                      <h3 className="font-barlow text-xl font-bold text-white mb-3">
                        {item.make} {item.model}
                      </h3>

                      <div className="mb-4 pb-4 border-b border-zinc-800">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Operating Hours</p>
                        <p className="text-sm font-bold text-gray-300">{item.hours.toLocaleString()} hrs</p>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          {item.originalPrice && (
                            <span className="text-gray-500 line-through text-sm mr-2">
                              ${item.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="text-2xl font-black text-orange-500">
                            ${item.price.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-orange-400 group-hover:text-orange-300 transition-colors">
                          <span className="text-xs font-bold uppercase">View</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </section>
        ) : (
          // Detail View
          <section key="detail" className="pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-7xl mx-auto px-4"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="text-orange-400 hover:text-orange-300 mb-8 text-sm font-bold uppercase flex items-center gap-1 transition-colors"
              >
                <X className="w-4 h-4" />
                Back to Showroom
              </button>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Gallery & Report */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h1 className="font-barlow text-4xl font-black text-white mb-2">
                      {selectedItem.make} {selectedItem.model}
                    </h1>
                    <p className="text-gray-400 mb-4">{selectedItem.year} • {selectedItem.type}</p>

                    {/* Badge Group */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedItem.badge && (
                        <span className={`${getBadgeStyles(selectedItem.badge)} text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg`}>
                          {selectedItem.badge.label}
                        </span>
                      )}
                      <span className={`text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg ${
                        selectedItem.condition === 'New'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-300'
                      }`}>
                        {selectedItem.condition}
                      </span>
                    </div>
                  </div>

                  {/* Gallery */}
                  <ImageGallery images={selectedItem.gallery} modelName={selectedItem.model} />

                  {/* Condition Report */}
                  <ConditionReport
                    condition={selectedItem.condition}
                    report={selectedItem.conditionReport}
                    hours={selectedItem.hours}
                  />
                </div>

                {/* Right: Price & Financing */}
                <div className="space-y-6">
                  {/* Price Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl p-6 text-black"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Current Price</p>
                    <div>
                      {selectedItem.originalPrice && (
                        <p className="text-lg line-through opacity-75 mb-1">
                          ${selectedItem.originalPrice.toLocaleString()}
                        </p>
                      )}
                      <p className="text-4xl font-black mb-4">${selectedItem.price.toLocaleString()}</p>
                    </div>

                    <a
                      href={`tel:${SITE_CONFIG.phoneTel}`}
                      className="block w-full py-3 bg-black hover:bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest rounded-lg transition-all text-center"
                    >
                      Contact Sales
                    </a>
                  </motion.div>

                  {/* Financing Calculator */}
                  <FinancingCalculator
                    price={selectedItem.price}
                    minDown={selectedItem.financeTerms.minDown}
                    maxTerm={selectedItem.financeTerms.maxTerm}
                  />

                  {/* Quick Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-3"
                  >
                    <h4 className="font-barlow text-lg font-bold text-white mb-4">Quick Features</h4>
                    {[
                      `${selectedItem.hours === 0 ? 'Factory New' : 'Certified'} Condition`,
                      `${selectedItem.year} Model Year`,
                      'Comprehensive Warranty Available',
                      'Delivery & Setup Included',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-teal-400 mt-1" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        )}
      </AnimatePresence>

      {/* CTA Section (Only show in grid view) */}
      {!selectedItem && (
        <section className="py-20 bg-gradient-to-br from-zinc-900 to-black border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-barlow text-4xl md:text-5xl font-black text-white mb-6"
            >
              Don't See What You Want?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            >
              Our inventory updates weekly. Contact our sales team to find exactly what you need.
            </motion.p>
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-lg transition-all"
            >
              Call Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      )}

    </div>
  );
}