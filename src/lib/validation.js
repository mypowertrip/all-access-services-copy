// Shared input validation utilities

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  // Allow formats: 10 digits, (555) 123-4567, 555-123-4567, +1-555-123-4567, etc.
  const stripped = phone.replace(/[\s\-().+]/g, '');
  return /^\d{10,15}$/.test(stripped);
};

export const sanitizeText = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // strip angle brackets to prevent XSS
    .trim()
    .slice(0, 2000); // enforce max length
};

export const validateQuoteForm = ({ firstName, email, phone, deliveryAddress }) => {
  const errors = {};
  if (!firstName || firstName.trim().length < 2)     errors.firstName = 'First name must be at least 2 characters';
  if (!email || !validateEmail(email))                errors.email = 'Please enter a valid email address';
  if (!phone || !validatePhone(phone))                errors.phone = 'Please enter a valid phone number (10+ digits)';
  if (!deliveryAddress || deliveryAddress.trim().length < 10) errors.deliveryAddress = 'Please enter a full delivery address';
  return { isValid: Object.keys(errors).length === 0, errors };
};