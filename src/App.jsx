import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Reserve from './pages/Reserve';
import GCDashboard from './pages/GCDashboard';
import GCFleet from './pages/GCFleet';
import GCLayout from './components/gc/GCLayout';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-7 h-7 border-3 border-slate-200 border-t-orange rounded-full animate-spin" style={{ borderWidth: 3, borderTopColor: 'hsl(22 96% 51%)' }} />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      {/* Public site */}
      <Route path="/" element={<Home />} />
      <Route path="/equipment" element={<Equipment />} />
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
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;