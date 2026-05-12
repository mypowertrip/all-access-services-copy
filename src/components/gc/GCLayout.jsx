import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '@/lib/AuthContext';
import { base44 } from '@/api/base44Client';
import { LogIn, ShieldCheck } from 'lucide-react';

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
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-center space-y-6">
          <img
            src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/231c7b7f8_GroundControl.png"
            alt="Ground Control"
            className="h-24 mx-auto object-contain"
          />
          <div className="space-y-2">
            <h1 className="font-barlow text-2xl font-bold text-white uppercase tracking-widest">Customer Portal</h1>
            <p className="text-zinc-500 text-sm">Sign in to access your fleet dashboard and account.</p>
          </div>
          <button
            onClick={() => base44.auth.redirectToLogin('/dashboard')}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest py-3 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
          <div className="flex items-center justify-center gap-2 text-zinc-700 text-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure login — All Access Services</span>
          </div>
        </div>
      </div>
    );
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

      <main className="flex-1 lg:ml-60 min-h-screen w-full pt-[96px] md:pt-[120px] lg:pt-[136px]">
        <Outlet context={{ onMenuClick: () => setSidebarOpen(true) }} />
      </main>
    </div>
  );
}