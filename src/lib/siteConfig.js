// Centralized site config — update here and it propagates everywhere
export const SITE_CONFIG = {
  phone: '888-777-5990',
  phoneTel: '8887775990',
  email: 'info@allaccessservices.com',
  companyName: 'All Access Services',
  deliveryFee: 250,
  locations: [
    { name: 'San Diego',     phone: '619-222-9337', tel: '6192229337' },
    { name: 'Orange County', phone: '714-647-1552', tel: '7146471552' },
    { name: 'Riverside',     phone: '951-672-0916', tel: '9516720916' },
    { name: 'Los Angeles',   phone: '323-949-2060', tel: '3239492060' },
  ],
};

export const ROUTES = {
  HOME: '/',
  RENTALS: '/rentals',
  RENTALS_CATEGORY: (slug) => `/rentals/category/${slug}`,
  PRODUCT_DETAIL: (modelId) => `/rentals/model/${modelId}`,
  SALES: '/sales',
  SERVICE: '/service',
  LOCATIONS: '/locations',
  EQUIPMENT: '/equipment',
  SAFETY: '/safety',
  ABOUT: '/about',
  RESERVE: '/reserve',
  DASHBOARD: '/dashboard',
};