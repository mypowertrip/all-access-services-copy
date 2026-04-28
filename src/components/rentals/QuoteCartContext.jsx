import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

const QuoteCartContext = createContext(null);
const STORAGE_KEY = 'aas_quote_cart';

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { cartItems: [], startDate: '', endDate: '' };
    return JSON.parse(saved);
  } catch {
    return { cartItems: [], startDate: '', endDate: '' };
  }
}

export function QuoteCartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => loadFromStorage().cartItems);
  const [startDate, setStartDateState] = useState(() => loadFromStorage().startDate);
  const [endDate, setEndDateState] = useState(() => loadFromStorage().endDate);

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cartItems, startDate, endDate }));
    } catch {
      // localStorage unavailable (private mode, full, etc.) — fail silently
    }
  }, [cartItems, startDate, endDate]);

  const setStartDate = useCallback((val) => setStartDateState(val), []);
  const setEndDate   = useCallback((val) => setEndDateState(val),   []);

  const addToCart = useCallback((model) => {
    setCartItems(prev => prev.find(i => i.id === model.id) ? prev : [...prev, model]);
  }, []);

  const removeFromCart = useCallback((modelId) => {
    setCartItems(prev => prev.filter(i => i.id !== modelId));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setStartDateState('');
    setEndDateState('');
  }, []);

  const isInCart = useCallback((modelId) => {
    return cartItems.some(i => i.id === modelId);
  }, [cartItems]);

  // Real quote submission — calls backend function
  const submitQuote = useCallback(async (formData) => {
    const res = await base44.functions.invoke('submitQuoteRequest', {
      ...formData,
      equipmentIds:   cartItems.map(i => i.id),
      equipmentNames: cartItems.map(i => i.name),
      startDate,
      endDate,
      source: 'reserve',
    });
    if (res.data?.success) {
      clearCart();
    }
    return res.data;
  }, [cartItems, startDate, endDate, clearCart]);

  return (
    <QuoteCartContext.Provider value={{
      cartItems,
      cartCount: cartItems.length,
      startDate,
      endDate,
      setStartDate,
      setEndDate,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      submitQuote,
    }}>
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) throw new Error('useQuoteCart must be used within a QuoteCartProvider');
  return ctx;
}