import { useState, useMemo } from 'react';
import RentalFilters from '../components/rentals/RentalFilters';
import ModelCard from '../components/rentals/ModelCard';
import QuoteCart from '../components/rentals/QuoteCart';
import ComparisonDrawer from '../components/rentals/ComparisonDrawer';
import QuoteRequestForm from '../components/rentals/QuoteRequestForm';
import { motion } from 'framer-motion';
import { Search, Phone } from 'lucide-react';
import { rentalModels, rentalCategories, heightRanges, widthRanges } from '../lib/rentalInventory';
import QuoteCartSidebar from '../components/rentals/QuoteCartSidebar';
import { useQuoteCart } from '../components/rentals/QuoteCartContext';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export default function Rentals() {
  const { cartItems, addToCart, removeFromCart, isInCart } = useQuoteCart();
  const { category: categoryParam } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Validate the URL category param against known slugs, fall back to first
  const initialCategory = rentalCategories.find((c) => c.slug === categoryParam)?.slug ?? rentalCategories[0].slug;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') ?? '');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [comparisonItems, setComparisonItems] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [filters, setFilters] = useState({
    heightRange: null,
    power: null,
    widthRange: null
  });

  // Filter models based on selected category, search, and filters
  const filteredModels = useMemo(() => {
    let results = rentalModels;

    // Filter by selected category
    results = results.filter((m) => m.category === selectedCategory);

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
  }, [selectedCategory, searchTerm, filters]);

  const handleAddToQuote = (model) => {
    if (isInCart(model.id)) {
      removeFromCart(model.id);
    } else {
      addToCart(model);
      setIsCartOpen(true);
    }
  };

  const handleRemoveFromQuote = (modelId) => {
    removeFromCart(modelId);
  };

  const handleCheckout = () => {
    // Navigate to reserve page handled by QuoteCart component
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
    if (!isInCart(model.id)) {
      addToCart(model);
    }
    setIsQuoteFormOpen(true);
  };

  const industryParam = searchParams.get('industry');
  const industryLabel = industryParam
    ? industryParam.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : null;

  const currentCategoryData = rentalCategories.find((c) => c.slug === selectedCategory);

  return (
    <div className="bg-black min-h-screen p-0 m-0">
      <QuoteCartSidebar />

      {/* Hero */}
      <section className="relative w-screen h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://media.base44.com/images/public/69f03230e61a9516ac171fbd/b5ba9747b_Gemini_Generated_Image_voqgksvoqgksvoqg.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'scroll'
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
      <section className="relative z-20 bg-black p-0">
        {/* Category Header Banner */}
        <div
          style={{ background: currentCategoryData?.gradient }}
          className="py-12 mb-8">

          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-barlow text-4xl md:text-5xl font-black text-white uppercase">
              {industryLabel ? `${industryLabel} Rentals` : 'Rentals'}
              <br />
              <span style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>
                {currentCategoryData?.name}
              </span>
            </h2>
            <p className="text-white/80 text-lg mt-2 max-w-2xl">
              {currentCategoryData?.description}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-4">
            {rentalCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setSelectedCategory(cat.slug);
                  navigate(`/rentals/category/${cat.slug}`, { replace: true });
                }}
                className={`px-4 py-2 font-bold text-sm uppercase tracking-widest transition-all ${
                  selectedCategory === cat.slug
                    ? 'text-orange-400 border-b-2 border-orange-400'
                    : 'text-gray-400 hover:text-white'
                }`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 pb-12">
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
              {cartItems.length > 0 &&
                <span className="text-sm text-orange-400 font-semibold">
                  {cartItems.length} in quote
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
                    onCompare={handleAddToComparison}
                    inComparison={comparisonItems.some((item) => item.id === model.id)}
                    onRequestQuote={handleOpenQuoteForm} />

                )}
              </div>
            }
          </div>
        </div>
      </section>

      {/* Quote Cart */}
      <QuoteCart
        items={cartItems}
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
        models={cartItems}
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)} />


    </div>);

}