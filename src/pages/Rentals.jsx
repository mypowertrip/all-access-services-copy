import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import RentalFilters from '../components/rentals/RentalFilters';
import ModelCard from '../components/rentals/ModelCard';
import QuoteCart from '../components/rentals/QuoteCart';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { rentalModels, heightRanges, widthRanges } from '../lib/rentalInventory';

export default function Rentals() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [quoteItems, setQuoteItems] = useState([]);
  const [filters, setFilters] = useState({
    heightRange: null,
    power: null,
    widthRange: null,
  });

  // Filter models based on category, search, and filters
  const filteredModels = useMemo(() => {
    let results = rentalModels;

    // Filter by category
    if (category) {
      results = results.filter(m => m.category === category);
    }

    // Filter by search
    if (searchTerm) {
      results = results.filter(m =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by height range
    if (filters.heightRange) {
      const range = heightRanges.find(r => r.label === filters.heightRange);
      if (range) {
        results = results.filter(m => m.height >= range.min && m.height <= range.max);
      }
    }

    // Filter by power source
    if (filters.power) {
      results = results.filter(m => m.power === filters.power);
    }

    // Filter by width
    if (filters.widthRange) {
      const range = widthRanges.find(r => r.label === filters.widthRange);
      if (range) {
        results = results.filter(m => m.width >= range.min && m.width <= range.max);
      }
    }

    return results;
  }, [category, searchTerm, filters]);

  const handleAddToQuote = (model) => {
    setQuoteItems(prev =>
      prev.find(item => item.id === model.id)
        ? prev.filter(item => item.id !== model.id)
        : [...prev, model]
    );
  };

  const handleRemoveFromQuote = (modelId) => {
    setQuoteItems(prev => prev.filter(item => item.id !== modelId));
  };

  const handleCheckout = () => {
    navigate('/reserve', { state: { quoteItems } });
  };

  const isQuoteCategory = category && category !== 'all';

  return (
    <div className="bg-black min-h-screen pb-32">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-black to-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Equipment Rentals</span>
            </div>
            <h1 className="font-barlow text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
              Smart <span className="text-orange-500">Catalog</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">Find the perfect equipment for your project. Filter by specs, bundle equipment into a single quote, and download spec sheets.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      {!isQuoteCategory ? (
        // Category selection view
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { slug: 'boom-lifts', name: 'Boom Lifts', icon: '🚀' },
                { slug: 'scissor-lifts', name: 'Scissor Lifts', icon: '📐' },
                { slug: 'telehandlers', name: 'Telehandlers', icon: '🏗️' },
                { slug: 'low-level-access', name: 'Low Level Access', icon: '⬆️' },
              ].map((cat, i) => (
                <motion.a
                  key={cat.slug}
                  href={`/rentals/${cat.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500 rounded-xl p-6 cursor-pointer"
                >
                  <div className="text-5xl mb-4">{cat.icon}</div>
                  <h3 className="font-barlow text-2xl font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {rentalModels.filter(m => m.category === cat.slug).length} models
                  </p>
                  <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider group-hover:text-orange-300 transition-colors">
                    Browse <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Catalog with filters
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Back button */}
            <button
              onClick={() => navigate('/rentals')}
              className="text-orange-400 hover:text-orange-300 mb-6 text-sm font-bold uppercase"
            >
              ← Back to Categories
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <RentalFilters onFiltersChange={setFilters} />
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search by model name or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600"
                    />
                  </div>
                </div>

                {/* Results Info */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    Showing <span className="font-bold text-white">{filteredModels.length}</span> model{filteredModels.length !== 1 ? 's' : ''}
                  </p>
                  {quoteItems.length > 0 && (
                    <span className="text-sm text-orange-400 font-semibold">
                      {quoteItems.length} in quote
                    </span>
                  )}
                </div>

                {/* Models Grid */}
                {filteredModels.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center"
                  >
                    <p className="text-gray-400 text-lg mb-2">No models match your filters.</p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setFilters({ heightRange: null, power: null, widthRange: null });
                      }}
                      className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filteredModels.map((model) => (
                      <ModelCard
                        key={model.id}
                        model={model}
                        onAddToQuote={handleAddToQuote}
                        inQuote={quoteItems.some(item => item.id === model.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quote Cart */}
      <QuoteCart
        items={quoteItems}
        onRemove={handleRemoveFromQuote}
        onCheckout={handleCheckout}
      />

      <Footer />
    </div>
  );
}