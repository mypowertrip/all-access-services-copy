// Centralized site config — update here and it propagates everywhere
export const SITE_CONFIG = {
  phone: '888-777-5990',
  phoneTel: '8887775990',
  email: 'info@allaccessservices.com',
  companyName: 'All Access Services',
  deliveryFee: 250,
  locations: [
    { name: 'San Diego',     address: '8711 N Magnolia Ave, Santee, CA 92071',          phone: '619-222-9337', tel: '6192229337', image: 'https://www.allaccessservices.com/images/allaccessrentals-home-locations-san-diego-img.jpg', hours: 'Mon-Fri: 7am-5pm' },
    { name: 'Orange County', address: '621 N Main St, Orange, CA 92868',                phone: '714-647-1552', tel: '7146471552', image: 'https://www.allaccessservices.com/images/allaccessrentals-home-locations-orange-county-img.jpg', hours: 'Mon-Fri: 7am-5pm' },
    { name: 'Riverside',     address: '3631 W Center Dr., Riverside, CA 92501',         phone: '951-672-0916', tel: '9516720916', image: 'https://www.allaccessservices.com/images/allaccessrentals-home-locations-riverside-img.jpg', hours: 'Mon-Fri: 7am-5pm' },
    { name: 'Los Angeles',   address: '8563 San Fernando Rd, Sun Valley, CA 91352',     phone: '323-949-2060', tel: '3239492060', image: 'https://www.allaccessservices.com/images/allaccessrentals-home-locations-los-angeles-img.jpg', hours: 'Mon-Fri: 7am-5pm' },
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
  SAFETY: '/safety',
  ABOUT: '/about',
  RESERVE: '/reserve',
  DASHBOARD: '/dashboard',
};