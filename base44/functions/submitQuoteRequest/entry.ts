import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

// Simple sanitize: strip angle brackets to prevent XSS
function sanitize(val) {
  if (typeof val !== 'string') return val;
  return val.replace(/[<>]/g, '').trim().slice(0, 2000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const stripped = String(phone).replace(/[\s\-().+]/g, '');
  return /^\d{10,15}$/.test(stripped);
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const payload = await req.json();

    const { firstName, lastName, email, phone, company, deliveryAddress, siteContact,
            startDate, endDate, equipmentIds, equipmentNames, notes, source } = payload;

    // --- Server-side validation ---
    if (!firstName || String(firstName).trim().length < 2)
      return Response.json({ error: 'First name must be at least 2 characters' }, { status: 400 });
    if (!email || !validateEmail(email))
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    if (!phone || !validatePhone(phone))
      return Response.json({ error: 'Invalid phone number (need 10+ digits)' }, { status: 400 });
    if (!deliveryAddress || String(deliveryAddress).trim().length < 10)
      return Response.json({ error: 'Please enter a full delivery address' }, { status: 400 });

    // --- Generate sequential-looking quote ID using timestamp ---
    const now = new Date();
    const datePart = now.toISOString().split('T')[0].replace(/-/g, '');
    const timePart = now.getTime().toString().slice(-6);
    const quoteId = `Q-${datePart}-${timePart}`;

    // --- Save to Quote entity ---
    const quote = await base44.asServiceRole.entities.Quote.create({
      quote_id: quoteId,
      first_name: sanitize(firstName),
      last_name: sanitize(lastName || ''),
      email: sanitize(email).toLowerCase(),
      phone: sanitize(phone),
      company: sanitize(company || ''),
      delivery_address: sanitize(deliveryAddress),
      site_contact: sanitize(siteContact || ''),
      start_date: sanitize(startDate || ''),
      end_date: sanitize(endDate || ''),
      equipment_ids: Array.isArray(equipmentIds) ? equipmentIds.map(id => sanitize(String(id))) : [],
      equipment_names: Array.isArray(equipmentNames) ? equipmentNames.map(n => sanitize(String(n))) : [],
      notes: sanitize(notes || ''),
      status: 'new',
      source: sanitize(source || 'unknown'),
    });

    // --- Send emails (best-effort — quote is already saved above) ---
    const equipmentList = (equipmentNames || []).map(n => `  • ${n}`).join('\n') || '  • (see notes)';
    const period = startDate && endDate ? `${startDate} → ${endDate}` : 'To be confirmed';

    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: email,
        subject: `Quote Request Received — ${quoteId}`,
        body: `Hi ${firstName},\n\nThank you for your equipment rental request. We'll contact you within 2 business hours to confirm pricing and availability.\n\nQuote Reference: ${quoteId}\nRental Period: ${period}\n\nEquipment Requested:\n${equipmentList}\n\nDelivery To: ${deliveryAddress}\n\nIf you have any questions, call us at 888-777-5990.\n\nBest regards,\nAll Access Services Team`,
      });
    } catch (emailErr) {
      console.warn('Customer confirmation email failed (non-fatal):', emailErr.message);
    }

    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: 'info@allaccessservices.com',
        subject: `New Quote Request — ${quoteId} from ${firstName} ${lastName || ''}`,
        body: `New quote request received!\n\nQuote ID: ${quoteId}\nCustomer: ${firstName} ${lastName || ''}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone}\n\nRental Period: ${period}\nDelivery To: ${deliveryAddress}\nSite Contact: ${siteContact || 'N/A'}\n\nEquipment:\n${equipmentList}\n\nNotes:\n${notes || 'None'}`,
      });
    } catch (emailErr) {
      console.warn('Internal notification email failed (non-fatal):', emailErr.message);
    }

    return Response.json({ success: true, quoteId });
  } catch (error) {
    console.error('submitQuoteRequest error:', error);
    return Response.json({ error: error.message || 'Failed to submit quote' }, { status: 500 });
  }
});