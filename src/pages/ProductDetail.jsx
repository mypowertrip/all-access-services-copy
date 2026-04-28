import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Plus, Check, MapPin, Zap, Gauge, Download } from 'lucide-react';
import { rentalModels, rentalCategories } from '../lib/rentalInventory';
import { useQuoteCart } from '../components/rentals/QuoteCartContext';
import { SITE_CONFIG } from '../lib/siteConfig';

const ATTACHMENTS = {
  'boom-lifts': ['Jib Boom Extension', 'Sky Welder Bracket', 'Work Light Kit'],
  'knuckle-booms': ['Jib Boom Extension', 'Sky Welder Bracket', 'Work Light Kit'],
  'articulating-booms': ['Jib Boom Extension', 'Sky Welder Bracket', 'Work Light Kit'],
  'scissor-lifts': ['Pipe Cradle', 'Material Tray', 'Mesh Gate'],
  'telehandlers': ['Pallet Forks', 'Hook & Block Attachment', 'Boom Extension'],
  'forklifts': ['Side Shifter', 'Fork Positioner', 'Carton Clamp'],
};

const LOCATIONS = SITE_CONFIG.locations;

const INCLUDED = [
  { icon: '⛽', label: 'Fuel / Full Charge', desc: 'Delivered full, returned full policy' },
  { icon: '🚚', label: 'Delivery & Pickup', desc: 'Certified transport to your jobsite' },
  { icon: '📋', label: 'Operator Manual', desc: 'Full documentation included' },
  { icon: '🔍', label: 'Safety Inspection', desc: 'Pre-delivery factory-level check' },
];

const CATEGORY_GRADIENTS = {
  'scissor-lifts': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  'boom-lifts': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  'articulating-booms': 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
  'knuckle-booms': 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
  'telehandlers': 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
  'forklifts': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
};

export default function ProductDetail() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const { isInCart, addToCart, removeFromCart } = useQuoteCart();
  const [activeTab, setActiveTab] = useState('specs');

  const model = rentalModels.find(m => m.id === modelId);
  const inCart = model ? isInCart(model.id) : false;

  if (!model) {
    return (
      <div className="bg-black min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Model Not Found</h2>
          <Link to="/rentals" className="text-orange-400 hover:text-orange-300 font-semibold">← Back to Rentals</Link>
        </div>
      </div>
    );
  }

  const gradient = CATEGORY_GRADIENTS[model.category] || 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)';
  const attachments = ATTACHMENTS[model.category] || [];
  const categoryLabel = rentalCategories.find(c => c.slug === model.category)?.name || model.category;

  const specs = [
    { label: 'Platform Height', value: model.height > 0 ? `${model.height} ft` : '—' },
    { label: 'Horizontal Reach', value: model.reach > 0 ? `${model.reach} ft` : '—' },
    { label: 'Lift Capacity', value: `${model.capacity.toLocaleString()} lbs` },
    { label: 'Power Source', value: model.power },
    { label: 'Width', value: `${model.width} in` },
    { label: 'Machine Weight', value: `${model.weight.toLocaleString()} lbs` },
  ];

  // Bar chart values: normalize to max of 100
  const chartStats = [
    { label: 'Height', value: model.height, max: 140, unit: 'ft' },
    { label: 'Reach', value: model.reach, max: 100, unit: 'ft' },
    { label: 'Capacity', value: model.capacity, max: 30000, unit: 'lbs' },
    { label: 'Width', value: model.width, max: 120, unit: 'in' },
  ].filter(s => s.value > 0);

  const handleToggleCart = () => {
    if (inCart) {
      removeFromCart(model.id);
    } else {
      addToCart({ id: model.id, name: model.name, category: model.category });
    }
  };

  return (
    <div className="bg-black min-h-screen pb-24">

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pt-32 pb-8 md:pt-36 md:pb-12">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Left: text */}
          <div>
            <Link
              to={`/rentals/category/${model.category}`}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {categoryLabel}
            </Link>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4"
              style={{ borderColor: 'rgba(249,115,22,0.5)', color: '#f97316', background: 'rgba(249,115,22,0.1)' }}
            >
              {categoryLabel}
            </span>
            <h1 className="font-barlow font-black text-5xl md:text-7xl text-white leading-none">{model.name}</h1>
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg ${
                model.power === 'Electric' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40' : 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
              }`}>
                {model.power === 'Electric' ? <Zap className="w-3 h-3" /> : <Gauge className="w-3 h-3" />}
                {model.power}
              </span>
              {model.height > 0 && <span className="text-gray-400 text-sm">{model.height} ft platform height</span>}
            </div>
            <a
              href={model.specSheet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 border border-zinc-600 hover:border-orange-500/60 text-gray-300 hover:text-orange-400 text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg transition-all"
            >
              <Download className="w-4 h-4" /> Spec Sheet
            </a>
          </div>
          {/* Right: product image on white */}
          <div className="relative rounded-xl overflow-hidden bg-white flex items-center justify-center min-h-[320px]">
            <img
              src={model.imageUrl}
              alt={model.name}
              className="w-full h-80 object-contain p-6"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden w-full h-80 items-center justify-center text-gray-400 text-sm font-semibold">
              No Image Available
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Tab Headers */}
        <div className="flex gap-0 border-b border-zinc-800 mb-8">
          {['specs', 'included', 'diagram'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === tab
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab === 'specs' ? 'Specifications' : tab === 'included' ? "What's Included" : 'Reach Diagram'}
            </button>
          ))}
        </div>

        {/* Specs Tab */}
        {activeTab === 'specs' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="overflow-hidden border border-zinc-800 rounded-xl">
              <table className="w-full">
                <tbody>
                  {specs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? 'bg-zinc-900/50' : 'bg-black'}>
                      <td className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500 w-1/3">{spec.label}</td>
                      <td className="px-6 py-4 text-sm font-bold text-white">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Included Tab */}
        {activeTab === 'included' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INCLUDED.map(item => (
              <div key={item.label} className="flex gap-4 p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Diagram Tab */}
        {activeTab === 'diagram' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Performance Overview</p>
            <div className="space-y-5">
              {chartStats.map(stat => {
                const pct = Math.min((stat.value / stat.max) * 100, 100);
                return (
                  <div key={stat.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-300">{stat.label}</span>
                      <span className="text-sm font-black text-white">{stat.value.toLocaleString()} {stat.unit}</span>
                    </div>
                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #f97316, #ea580c)' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Recommended Attachments */}
        {attachments.length > 0 && (
          <div className="mt-12">
            <h3 className="font-barlow font-bold text-2xl text-white mb-4 uppercase tracking-wide">Recommended Attachments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {attachments.map(att => (
                <div key={att} className="p-5 bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 rounded-xl transition-all">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-3">
                    <span className="text-orange-400 text-lg">🔧</span>
                  </div>
                  <p className="text-sm font-bold text-white">{att}</p>
                  <p className="text-xs text-gray-500 mt-1">Ask about availability</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nearest Locations */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-orange-400" />
            <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide">Nearest Locations</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.map(loc => (
              <a
                key={loc.name}
                href={`tel:${loc.tel}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:border-orange-500/50 text-sm font-semibold text-gray-300 hover:text-orange-400 bg-zinc-900/50 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                {loc.name} · {loc.phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 border-t border-zinc-800 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Rental Pricing</p>
            <p className="text-lg font-black text-orange-400">Call for Quote</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-orange-500/50 text-gray-300 hover:text-orange-400 font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
            <button
              onClick={handleToggleCart}
              className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-all ${
                inCart
                  ? 'border border-green-500/50 text-green-400 bg-green-500/10 hover:bg-green-500/20'
                  : 'bg-orange-500 hover:bg-orange-400 text-black'
              }`}
            >
              {inCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {inCart ? '✓ Added to Quote' : '＋ Add to Quote'}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}