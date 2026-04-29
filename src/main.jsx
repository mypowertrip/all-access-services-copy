import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Suppress Base44 SDK "App not found" errors in console
// These are expected when the app doesn't exist on the backend
const originalError = console.error;
console.error = function(...args) {
  const errorMessage = String(args[0] || '');
  const errorData = String(args[1]?.message || args[1] || '');

  // Suppress Base44 "App not found" 404 errors
  if (
    (errorMessage.includes('[Base44 SDK Error]') && errorMessage.includes('404')) ||
    errorMessage.includes('App not found') ||
    errorData.includes('App not found') ||
    (typeof args[0] === 'object' && args[0]?.message?.includes('App not found'))
  ) {
    return; // Silently ignore these errors
  }

  // Call original console.error for all other errors
  originalError.apply(console, args);
};

// Also suppress unhandled promise rejection errors for Base44 "App not found"
window.addEventListener('unhandledrejection', (event) => {
  const errorMessage = String(event.reason?.message || event.reason || '');

  if (errorMessage.includes('App not found') || errorMessage.includes('404')) {
    // Check if this is a Base44 API error
    if (event.reason?.response?.status === 404 || errorMessage.includes('not found')) {
      event.preventDefault(); // Prevent the error from being logged
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
