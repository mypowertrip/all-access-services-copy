import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '@/lib/AuthContext';

export default function GCLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, isLoadingAuth, user } = useAuth();

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="w-7 h-7 border-3 rounded-full animate-spin" style={{ borderWidth: 3, borderColor: 'rgba(249,115,22,0.3)', borderTopColor: 'hsl(24 100% 50%)' }} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 lg:ml-60 min-h-screen w-full pt-36">
        <Outlet context={{ onMenuClick: () => setSidebarOpen(true) }} />
      </main>
    </div>
  );
}