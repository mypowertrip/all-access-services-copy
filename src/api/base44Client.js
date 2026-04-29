import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

//Create a client with authentication required
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl
});

// Suppress "App not found" errors that occur during SDK initialization
// These are expected when the app doesn't exist on the Base44 backend
if (base44?.api?.interceptors?.response) {
  base44.api.interceptors.response.use(
    response => response,
    error => {
      // Suppress 404 "App not found" errors - these are handled gracefully by AuthContext
      if (error?.response?.status === 404 && error?.response?.data?.message?.includes('not found')) {
        // Return a rejected promise but suppress the error logging
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
}
