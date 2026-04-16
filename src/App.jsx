import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import GCLanding from './pages/GCLanding';
import GCDashboard from './pages/GCDashboard';
import GCFleet from './pages/GCFleet';
import GCLayout from './components/gc/GCLayout';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<GCLanding />} />
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
  )
}

export default App