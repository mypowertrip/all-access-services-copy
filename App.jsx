import { Toaster } from "sonner";
import ErrorBoundary from './components/ErrorBoundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import { lazy, Suspense } from 'react';
import Navbar from './components/home/Navbar';
import NavTabBar from './components/home/NavTabBar';
import SafetyTicker from './components/home/SafetyTicker';
import Footer from './components/home/Footer';
import GCLayout from './components/gc/GCLayout';
import { QuoteCartProvider } from './components/rentals/QuoteCartContext';

const Home = lazy(() => import('./pages/Home'));
const Safety = lazy(() => import('./pages/Safety'));
const Reserve = lazy(() => import('./pages/Reserve'));
const Rentals = lazy(() => import('./pages/Rentals'));
const Sales = lazy(() => import('./pages/Sales'));
const Service = lazy(() => import('./pages/Service'));
const Locations = lazy(() => import('./pages/Locations'));
const GCDashboard = lazy(() => import('./pages/GCDashboard'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const GCFleet = lazy(() => import('./pages/GCFleet'));
const About = lazy(() => import('./pages/About'));

const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black">
    <div
      className="w-7 h-7 rounded-full animate-spin"
      style={{ borderWidth: 3, borderStyle: 'solid', borderColor: 'hsl(0 0% 15%)', borderTopColor: 'hsl(24 100% 50%)' }}
    />
  </div>
);

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) return <Spinner />;
  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <QuoteCartProvider>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <SafetyTicker />
        <NavTabBar />
        <main className="flex-1" style={{ paddingTop: 'var(--site-nav-height)' }}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              {/* Public site */}
              <Route path="/" element={<Home />} />
              <Route path="/rentals" element={<Navigate to="/rentals/category/scissor-lifts" replace />} />
              {/* Legacy redirects must come before the dynamic :category route */}
              <Route path="/rentals/category/boom-lifts" element={<Navigate to="/rentals/category/straight-boom-lifts" replace />} />
              <Route path="/rentals/category/knuckle-booms" element={<Navigate to="/rentals/category/articulating-boom-lifts" replace />} />
              <Route path="/rentals/category/:category" element={<Rentals />} />
              <Route path="/rentals/model/:modelId" element={<ProductDetail />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/service" element={<Service />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/about" element={<About />} />
              <Route path="/reserve" element={<Reserve />} />

              {/* Ground Control dashboard (member portal) */}
              <Route element={<GCLayout />}>
                <Route path="/dashboard" element={<GCDashboard />} />
                <Route path="/dashboard/fleet" element={<GCFleet />} />
                {/* Sub-routes that are not yet built bounce back to the dashboard */}
                <Route path="/dashboard/map" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard/maintenance" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard/equipment" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard/rentals" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard/alerts" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard/settings" element={<Navigate to="/dashboard" replace />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
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
          <Toaster richColors position="top-right" />
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
