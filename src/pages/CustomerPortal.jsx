import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { FileText, Package, MapPin, DollarSign, Calendar, ChevronDown, ChevronUp, LogIn } from 'lucide-react';

export default function CustomerPortal() {
  const [user, setUser] = useState(null);
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    base44.auth.isAuthenticated().then(async (authed) => {
      if (authed) {
        const me = await base44.auth.me();
        setUser(me);
        const all = await base44.entities.RentalContract.filter({ assigned_user_email: me.email });
        setContracts(all);
      }
      setLoading(false);
    });
  }, []);

  const fmt = (n) => n != null ? `$${Number(n).toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—';

  const statusColor = {
    paid: 'bg-green-500/10 text-green-400 border-green-500/20',
    unpaid: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    partial: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    overdue: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  const totalDue = contracts.reduce((s, c) => s + (c.total_due || 0), 0);
  const totalPaid = contracts.reduce((s, c) => s + (c.total_paid || 0), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-7 h-7 rounded-full animate-spin" style={{ borderWidth: 3, borderStyle: 'solid', borderColor: 'rgba(249,115,22,0.2)', borderTopColor: '#FF5C00' }} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-sm">
          <img src="https://media.base44.com/images/public/69f03230e61a9516ac171fbd/17488701a_CleanLogo.png" alt="All Access" className="h-16 mx-auto" />
          <h1 className="font-barlow text-3xl font-black uppercase text-white tracking-widest">Customer Portal</h1>
          <p className="text-zinc-500 text-sm">Sign in to view your rental contracts and invoices.</p>
          <button
            onClick={() => base44.auth.redirectToLogin('/portal')}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-widest py-4 text-sm transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-6 h-px bg-orange-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500">Customer Portal</span>
          </div>
          <h1 className="font-barlow text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            Welcome, {user.full_name || user.email}
          </h1>
          <p className="text-zinc-500 text-sm mt-1">{user.email}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

        {/* KPI Strip */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Total Contracts', value: contracts.length, icon: FileText, color: 'text-white' },
            { label: 'Total Billed', value: fmt(contracts.reduce((s, c) => s + (c.total_amount || 0), 0)), icon: DollarSign, color: 'text-orange-400' },
            { label: 'Balance Due', value: fmt(totalDue - totalPaid), icon: DollarSign, color: totalDue - totalPaid > 0 ? 'text-red-400' : 'text-green-400' },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-zinc-950 border border-zinc-800 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-zinc-600" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">{label}</span>
              </div>
              <div className={`font-barlow text-2xl font-black ${color}`}>{value}</div>
            </div>
          ))}
        </div>

        {/* Contracts */}
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mb-4">Your Contracts</h2>

          {contracts.length === 0 ? (
            <div className="text-center py-20 border border-zinc-800 bg-zinc-950">
              <FileText className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
              <p className="text-zinc-500">No contracts on file yet.</p>
              <p className="text-zinc-700 text-xs mt-1">Contact us to get your invoices linked to your account.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {contracts.map((c) => (
                <div key={c.id} className="border border-zinc-800 bg-zinc-950 hover:border-orange-500/30 transition-colors">
                  {/* Contract row header */}
                  <button
                    onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500">Invoice</div>
                        <div className="font-bold text-white font-mono">{c.invoice_number}</div>
                      </div>
                      <div className="hidden sm:block">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500">Date</div>
                        <div className="text-sm text-zinc-300">{c.invoice_date}</div>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500">Job Site</div>
                        <div className="text-sm text-zinc-300 max-w-[200px] truncate">{c.job_description || c.delivery_address || '—'}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500">Total Due</div>
                        <div className="font-black text-orange-400 font-mono">{fmt(c.total_due)}</div>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 border ${statusColor[c.payment_status] || statusColor.unpaid}`}>
                        {c.payment_status}
                      </span>
                      {expanded === c.id ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                    </div>
                  </button>

                  {/* Expanded detail */}
                  {expanded === c.id && (
                    <div className="border-t border-zinc-800 p-5 space-y-6">
                      {/* Delivery / Pickup */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex gap-3">
                          <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Delivery</div>
                            <div className="text-sm text-zinc-300">{c.delivery_address || '—'}</div>
                            <div className="text-xs text-orange-400 mt-1">{c.date_out}</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Calendar className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Pickup</div>
                            <div className="text-sm text-zinc-300">{c.pickup_address || '—'}</div>
                            <div className="text-xs text-zinc-500 mt-1">{c.date_in}</div>
                          </div>
                        </div>
                      </div>

                      {/* Equipment */}
                      {c.equipment_items?.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
                            <Package className="w-3 h-3" /> Equipment & Line Items
                          </div>
                          <div className="space-y-2">
                            {c.equipment_items.map((item, i) => (
                              <div key={i} className="flex items-start justify-between py-2 border-b border-zinc-900 last:border-0 gap-4">
                                <div className="flex-1">
                                  <div className="text-sm text-white font-medium">{item.description}</div>
                                  {item.serial_number && <div className="text-xs text-zinc-600 font-mono mt-0.5">S/N: {item.serial_number}</div>}
                                  <div className="flex gap-3 mt-1">
                                    {item.status && <span className="text-[10px] text-zinc-500">Status: {item.status}</span>}
                                    {item.returned_date && <span className="text-[10px] text-zinc-500">Returned: {item.returned_date}</span>}
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  {item.qty > 1 && <div className="text-xs text-zinc-500">×{item.qty}</div>}
                                  <div className="text-orange-400 font-bold font-mono text-sm">{fmt(item.price)}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Financials */}
                      <div className="max-w-xs ml-auto space-y-1.5">
                        {[
                          { label: 'Rental & Sales', val: c.rental_sales_subtotal },
                          { label: 'EPA', val: c.epa_fee },
                          { label: 'Subtotal', val: c.subtotal },
                          { label: 'Total Amount', val: c.total_amount },
                          { label: 'Discount', val: c.discount ? -c.discount : null },
                          { label: 'Total Paid', val: c.total_paid ? -c.total_paid : null },
                        ].filter(x => x.val != null).map(({ label, val }) => (
                          <div key={label} className="flex justify-between text-sm">
                            <span className="text-zinc-500">{label}</span>
                            <span className="text-zinc-300 font-mono">{fmt(Math.abs(val))}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-sm font-black pt-2 border-t border-zinc-800">
                          <span className="text-white">Total Due</span>
                          <span className="text-orange-400 font-mono">{fmt(c.total_due)}</span>
                        </div>
                      </div>

                      {/* PDF link */}
                      {c.pdf_url && (
                        <a
                          href={c.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-orange-400 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          View Original Invoice PDF
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}