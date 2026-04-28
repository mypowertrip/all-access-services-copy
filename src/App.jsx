import { Toaster } from "@/components/ui/toaster"
import ErrorBoundary from './components/ErrorBoundary';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import Home from './pages/Home';
import Safety from './pages/Safety';
import Equipment from './pages/Equipment';
import Reserve from './pages/Reserve';
import Rentals from './pages/Rentals';
import Sales from './pages/Sales';
import Service from './pages/Service';
import Locations from './pages/Locations';
import GCDashboard from './pages/GCDashboard';
import ProductDetail from './pages/ProductDetail';
import GCFleet from './pages/GCFleet';
import GCLayout from './components/gc/GCLayout';
import About from './pages/About';
import { QuoteCartProvider } from './components/rentals/QuoteCartContext';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="w-7 h-7 border-3 border-zinc-800 border-t-orange rounded-full animate-spin" style={{ borderWidth: 3, borderTopColor: 'hsl(24 100% 50%)' }} />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <QuoteCartProvider>
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1">
    <Routes>
      {/* Public site */}
      <Route path="/" element={<Home />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/rentals/category/:category" element={<Rentals />} />
      <Route path="/rentals/model/:modelId" element={<ProductDetail />} />
      {/* Legacy route redirects */}
      <Route path="/rentals/category/boom-lifts" element={<Navigate to="/rentals/category/straight-boom-lifts" replace />} />
      <Route path="/rentals/category/knuckle-booms" element={<Navigate to="/rentals/category/straight-boom-lifts" replace />} />
      <Route path="/rentals/category/articulating-booms" element={<Navigate to="/rentals/category/articulating-boom-lifts" replace />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/service" element={<Service />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/about" element={<About />} />
      <Route path="/reserve" element={<Reserve />} />

      {/* Ground Control dashboard (member portal) */}
      <Route element={<GCLayout />}>
        <Route path="/dashboard" element={<GCDashboard />} />
        <Route path="/dashboard/fleet" element={<GCFleet />} />
        <Route path="/dashboard/map" element={<GCDashboard />} />
        <Route path="/dashboard/maintenance" element={<GCDashboard />} />
        <Route path="/dashboard/equipment" element={<GCDashboard />} />
        <Route path="/dashboard/rentals" element={<GCDashboard />} />
        <Route path="/dashboard/alerts" element={<GCDashboard />} />
        <Route path="/dashboard/settings" element={<GCDashboard />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </main>
      <Footer />
    </div>
    </QuoteCartProvider>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;