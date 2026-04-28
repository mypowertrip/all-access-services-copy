import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import RentalFilters from '../components/rentals/RentalFilters';
import ModelCard from '../components/rentals/ModelCard';
import QuoteCart from '../components/rentals/QuoteCart';
import ComparisonDrawer from '../components/rentals/ComparisonDrawer';
import QuoteRequestForm from '../components/rentals/QuoteRequestForm';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Phone } from 'lucide-react';
import { rentalModels, rentalCategories, heightRanges, widthRanges } from '../lib/rentalInventory';
import QuoteCartSidebar from '../components/rentals/QuoteCartSidebar';

export default function Rentals() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [quoteItems, setQuoteItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [comparisonItems, setComparisonItems] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [filters, setFilters] = useState({
    heightRange: null,
    power: null,
    widthRange: null
  });

  // Filter models based on category, search, and filters
  const filteredModels = useMemo(() => {
    let results = rentalModels;

    // Filter by category
    if (category) {
      results = results.filter((m) => m.category === category);
    }

    // Filter by search
    if (searchTerm) {
      results = results.filter((m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by height range
    if (filters.heightRange) {
      const range = heightRanges.find((r) => r.label === filters.heightRange);
      if (range) {
        results = results.filter((m) => m.height >= range.min && m.height <= range.max);
      }
    }

    // Filter by power source
    if (filters.power) {
      results = results.filter((m) => m.power === filters.power);
    }

    // Filter by width
    if (filters.widthRange) {
      const range = widthRanges.find((r) => r.label === filters.widthRange);
      if (range) {
        results = results.filter((m) => m.width >= range.min && m.width <= range.max);
      }
    }

    return results;
  }, [category, searchTerm, filters]);

  const handleAddToQuote = (model) => {
    setQuoteItems((prev) => {
      const updated = prev.find((item) => item.id === model.id) ?
      prev.filter((item) => item.id !== model.id) :
      [...prev, model];
      if (updated.length > 0) setIsCartOpen(true);
      return updated;
    });
  };

  const handleRemoveFromQuote = (modelId) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== modelId));
  };

  const handleCheckout = () => {
    navigate('/reserve', { state: { quoteItems } });
  };

  const handleAddToComparison = (model) => {
    setComparisonItems((prev) => {
      const updated = prev.find((item) => item.id === model.id) ?
      prev.filter((item) => item.id !== model.id) :
      [...prev, model];
      if (updated.length > 0) setIsComparisonOpen(true);
      return updated;
    });
  };

  const handleRemoveFromComparison = (modelId) => {
    setComparisonItems((prev) => prev.filter((item) => item.id !== modelId));
  };

  const handleClearComparison = () => {
    setComparisonItems([]);
    setIsComparisonOpen(false);
  };

  const handleOpenQuoteForm = (model) => {
    // Add model to quote items if not already there
    if (!quoteItems.find((item) => item.id === model.id)) {
      setQuoteItems((prev) => [...prev, model]);
    }
    setIsQuoteFormOpen(true);
  };

  const isQuoteCategory = category && category !== 'all';

  return (
    <div className="bg-black min-h-screen p-0 m-0">
      <QuoteCartSidebar />
      <Navbar className="pb-32 relative min-h-96 flex items-center justify-center overflow-hidden" />

      {/* Hero */}
      <section className="relative min-h-96 w-screen flex items-center justify-center overflow-hidden">
        <div className="bg-no-repeat absolute inset-0"

        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/8fa136f56_Gemini_Generated_Image_euc52keuc52keuc5.png)',
          backgroundPosition: 'center top'
        }}>
          
          
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} className="text-center hidden">

            
            <img
              src="https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/c480996d7_ChatGPT_Image_Apr_22__2026__12_15_08_AM.png"
              alt="All Access Services"
              className="h-32 md:h-40 mx-auto mb-6 object-contain" />
            
            <p className="text-orange-400 text-lg md:text-xl font-semibold tracking-widest mb-8">EQUIPMENT RENTALS. ANY JOB. ANY HEIGHT.</p>
            <a
              href="tel:8887775990"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition-all">
              
              <Phone className="w-4 h-4" />
              Call 888-777-5990
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      {!isQuoteCategory ?
      // Category selection view
      <section className="relative z-20 bg-black p-0">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rentalCategories.map((cat, i) =>
            <motion.button
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/rentals/category/${cat.slug}`)}
              className="group relative border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500 rounded-xl min-h-80 cursor-pointer text-left">
              
                  {/* Gradient Background */}
                  <div
                className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                style={{ background: cat.gradient }} />
              
                  
                  {/* Category image */}
                  {cat.image &&
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

              }

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                    <h3 className="font-barlow text-3xl font-bold text-white mb-3">{cat.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-300">
                        <span className="text-white text-sm">{rentalModels.filter((m) => m.category === cat.slug).length}</span> models
                      </span>
                      <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider group-hover:text-orange-300 transition-colors">
                        Browse <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.button>
            )}
            </div>
          </div>
        </section> :

      // Catalog with filters
      <section className="relative z-20 bg-black p-0">
         {/* Category Header Banner */}
          <div
          style={{ background: rentalCategories.find((c) => c.slug === category)?.gradient }}
          className="py-12 mb-12">
          
            <div className="max-w-7xl mx-auto px-4">
              <button
              onClick={() => navigate('/rentals')}
              className="text-white/80 hover:text-white mb-4 text-sm font-bold uppercase flex items-center gap-2 transition-colors">
              
                ← Back to Categories
              </button>
              <h2 className="font-barlow text-4xl md:text-5xl font-black text-white">
                {rentalCategories.find((c) => c.slug === category)?.name}
              </h2>
              <p className="text-white/80 text-lg mt-2 max-w-2xl">
                {rentalCategories.find((c) => c.slug === category)?.description}
              </p>
            </div>
          </div>

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
                  className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 text-white rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors placeholder-gray-600" />
                
                  </div>
                </div>

                {/* Results Info */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    Showing <span className="font-bold text-white">{filteredModels.length}</span> model{filteredModels.length !== 1 ? 's' : ''}
                  </p>
                  {quoteItems.length > 0 &&
              <span className="text-sm text-orange-400 font-semibold">
                      {quoteItems.length} in quote
                    </span>
              }
                </div>

                {/* Models Grid */}
                {filteredModels.length === 0 ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center">
              
                    <p className="text-gray-400 text-lg mb-2">No models match your filters.</p>
                    <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ heightRange: null, power: null, widthRange: null });
                }}
                className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                
                      Clear filters
                    </button>
                  </motion.div> :

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filteredModels.map((model) =>
              <ModelCard
                key={model.id}
                model={model}
                onAddToQuote={handleAddToQuote}
                inQuote={quoteItems.some((item) => item.id === model.id)}
                onCompare={handleAddToComparison}
                inComparison={comparisonItems.some((item) => item.id === model.id)}
                onRequestQuote={handleOpenQuoteForm} />

              )}
                  </div>
            }
              </div>
            </div>
        </section>
      }

      {/* Quote Cart */}
      <QuoteCart
        items={quoteItems}
        isOpen={isCartOpen}
        onRemove={handleRemoveFromQuote}
        onCheckout={handleCheckout}
        onOpenQuoteForm={() => setIsQuoteFormOpen(true)} />
      

      {/* Comparison Drawer */}
      <ComparisonDrawer
        models={comparisonItems}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onRemoveModel={handleRemoveFromComparison}
        onClear={handleClearComparison} />
      

      {/* Quote Request Form */}
      <QuoteRequestForm
        models={quoteItems}
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)} />
      

      <Footer />
    </div>);

}