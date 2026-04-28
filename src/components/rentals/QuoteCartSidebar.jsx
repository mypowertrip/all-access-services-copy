import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, X, Trash2, ArrowRight, ChevronDown } from 'lucide-react';
import { useQuoteCart } from './QuoteCartContext';
import DateRangePicker from './DateRangePicker';

export default function QuoteCartSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [listExpanded, setListExpanded] = useState(true);
  const { cartItems, cartCount, removeFromCart, clearCart } = useQuoteCart();
  const navigate = useNavigate();

  return (
    <>
      {/* FAB trigger button */}
      <div className="fixed bottom-20 md:bottom-8 right-24 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 bg-zinc-900 border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-800 transition-colors"
          aria-label="Open quote cart"
        >
          <ShoppingCart className="w-6 h-6 text-orange-400" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 text-black text-xs font-black rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className="fixed top-0 right-0 h-full w-full md:w-96 bg-[#111111] border-l border-zinc-800 z-50 flex flex-col shadow-2xl transition-transform duration-300"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <h2 className="font-barlow text-lg font-bold text-white uppercase tracking-wider">Your Quote List</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Date picker */}
        <div className="px-5 py-4 border-b border-zinc-800 bg-[#1a1a1a]">
          <DateRangePicker />
        </div>

        {/* Collapsible Quote List */}
        <div className="border-b border-zinc-800">
          <button
            onClick={() => setListExpanded(o => !o)}
            className="w-full flex items-center justify-between px-5 py-3 text-xs font-black uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors"
          >
            <span>Your Quote List {cartCount > 0 && `(${cartCount})`}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${listExpanded ? 'rotate-180' : ''}`} />
          </button>

          {listExpanded && (
            <div className="px-5 pb-4 space-y-2">
              {cartItems.length === 0 ? (
                <div className="text-center py-6">
                  <ShoppingCart className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No items in your quote yet.</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{item.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{item.category?.replace(/-/g, ' ')}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-1" />

        {/* Footer actions */}
        <div className="px-5 py-4 border-t border-zinc-800 space-y-3">
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-red-400 border border-zinc-700 hover:border-red-500/40 rounded-lg transition-all"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          )}
          <button
            onClick={() => { setIsOpen(false); navigate('/reserve'); }}
            disabled={cartItems.length === 0}
            className={`w-full flex items-center justify-center gap-2 py-3 font-bold text-sm uppercase tracking-wider rounded-lg transition-all ${
              cartItems.length > 0
                ? 'bg-orange-500 hover:bg-orange-400 text-black'
                : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
            }`}
          >
            Request Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}