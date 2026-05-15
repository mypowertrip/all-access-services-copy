import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Upload, FileText, CheckCircle, AlertCircle, Loader2, Edit3, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminIngest() {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const [extracted, setExtracted] = useState(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleFile = async (file) => {
    if (!file || file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file');
      return;
    }

    setUploading(true);
    setExtracted(null);
    setSaved(false);

    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setUploading(false);
    setExtracting(true);

    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are extracting data from an All Access Services equipment rental invoice/contract PDF.
Extract ALL of the following fields from the document. Return null for fields not found.

Fields to extract:
- invoice_number (e.g. "180487-5")
- invoice_date (e.g. "Mon 3/23/2026")
- invoice_status (e.g. "Closed", "Open")
- customer_number (the Customer # field)
- customer_name (company or person name)
- customer_address (billing address block)
- job_description (Job Descr field)
- delivery_address (full delivery address including location name)
- pickup_address (full pickup address)
- date_out (Date Out field)
- date_in (return/in date)
- ordered_by (Ordered By field)
- sales_rep (full sales rep info: name, phone, email)
- equipment_items: array of ALL line items, each with: qty (number), key (item code), description (item description), serial_number, status, returned_date, price (number, no $ sign)
- rental_sales_subtotal (Rental and Sales number)
- epa_fee (EPA number)
- rf_fee (RF number)
- subtotal (Subtotal number)
- total_amount (Total Amount number)
- discount (Discount number)
- total_paid (Total Paid number)
- total_due (Total Due number)
- payment_terms (Terms field, e.g. "On Account")
- notes (any other relevant notes)`,
      file_urls: [file_url],
      response_json_schema: {
        type: 'object',
        properties: {
          invoice_number: { type: 'string' },
          invoice_date: { type: 'string' },
          invoice_status: { type: 'string' },
          customer_number: { type: 'string' },
          customer_name: { type: 'string' },
          customer_address: { type: 'string' },
          job_description: { type: 'string' },
          delivery_address: { type: 'string' },
          pickup_address: { type: 'string' },
          date_out: { type: 'string' },
          date_in: { type: 'string' },
          ordered_by: { type: 'string' },
          sales_rep: { type: 'string' },
          equipment_items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                qty: { type: 'number' },
                key: { type: 'string' },
                description: { type: 'string' },
                serial_number: { type: 'string' },
                status: { type: 'string' },
                returned_date: { type: 'string' },
                price: { type: 'number' }
              }
            }
          },
          rental_sales_subtotal: { type: 'number' },
          epa_fee: { type: 'number' },
          rf_fee: { type: 'number' },
          subtotal: { type: 'number' },
          total_amount: { type: 'number' },
          discount: { type: 'number' },
          total_paid: { type: 'number' },
          total_due: { type: 'number' },
          payment_terms: { type: 'string' },
          notes: { type: 'string' }
        }
      }
    });

    setExtracting(false);
    setExtracted({ ...result, pdf_url: file_url, payment_status: 'unpaid', assigned_user_email: '' });
    setEditing(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSave = async () => {
    setSaving(true);
    await base44.entities.RentalContract.create(extracted);
    setSaving(false);
    setSaved(true);
    toast.success(`Contract ${extracted.invoice_number} saved to database!`);
  };

  const updateField = (key, value) => {
    setExtracted(prev => ({ ...prev, [key]: value }));
  };

  const fmt = (n) => n != null ? `$${Number(n).toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—';

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500">Admin Tool</span>
          </div>
          <h1 className="font-barlow text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            PDF Invoice Ingestion
          </h1>
          <p className="text-zinc-500 mt-2 text-sm">Upload an All Access Services invoice to extract and save customer data.</p>
        </div>

        {/* Upload Zone */}
        {!extracted && (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-none transition-all duration-200 p-16 text-center cursor-pointer ${
              dragging ? 'border-orange-500 bg-orange-500/5' : 'border-zinc-800 hover:border-orange-500/50 bg-zinc-950'
            }`}
            onClick={() => document.getElementById('pdf-input').click()}
          >
            <input
              id="pdf-input"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files[0])}
            />
            {uploading || extracting ? (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                <p className="text-zinc-400 font-semibold">
                  {uploading ? 'Uploading PDF...' : 'AI is extracting invoice data...'}
                </p>
                <p className="text-zinc-600 text-xs">{extracting ? 'This takes about 10-15 seconds' : ''}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border border-zinc-800 flex items-center justify-center">
                  <Upload className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Drop invoice PDF here</p>
                  <p className="text-zinc-500 text-sm mt-1">or click to browse</p>
                </div>
                <p className="text-zinc-700 text-xs">Supports All Access Services invoice PDFs</p>
              </div>
            )}
          </div>
        )}

        {/* Extracted Data Review */}
        {extracted && !saved && (
          <div className="space-y-6">
            {/* Actions bar */}
            <div className="flex items-center justify-between py-4 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold text-sm">Extraction complete — review and save</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setExtracted(null); setSaved(false); }}
                  className="flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  <X className="w-3.5 h-3.5" /> New Upload
                </button>
                <button
                  onClick={() => setEditing(!editing)}
                  className="flex items-center gap-2 px-4 py-2 border border-orange-500/50 text-orange-400 hover:text-orange-300 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" /> {editing ? 'Done Editing' : 'Edit'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
                >
                  {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                  Save to Database
                </button>
              </div>
            </div>

            {/* Invoice Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Invoice #', key: 'invoice_number' },
                { label: 'Date', key: 'invoice_date' },
                { label: 'Status', key: 'invoice_status' },
                { label: 'Customer #', key: 'customer_number' },
              ].map(({ label, key }) => (
                <div key={key} className="bg-zinc-950 border border-zinc-800 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{label}</div>
                  {editing ? (
                    <input
                      value={extracted[key] || ''}
                      onChange={(e) => updateField(key, e.target.value)}
                      className="w-full bg-transparent border-b border-orange-500/40 text-white text-sm focus:outline-none focus:border-orange-500 pb-1"
                    />
                  ) : (
                    <div className="text-white font-bold text-sm">{extracted[key] || '—'}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Customer Info */}
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mb-4">Customer Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Company / Name', key: 'customer_name' },
                  { label: 'Billing Address', key: 'customer_address' },
                  { label: 'Job Description', key: 'job_description' },
                  { label: 'Ordered By', key: 'ordered_by' },
                  { label: 'Sales Rep', key: 'sales_rep' },
                  { label: 'Payment Terms', key: 'payment_terms' },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{label}</div>
                    {editing ? (
                      <input
                        value={extracted[key] || ''}
                        onChange={(e) => updateField(key, e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-orange-500 px-3 py-2"
                      />
                    ) : (
                      <div className="text-white text-sm">{extracted[key] || '—'}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery / Pickup */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: '📦 Delivery Address', key: 'delivery_address', sub: `Date Out: ${extracted.date_out || '—'}` },
                { label: '🔁 Pickup Address', key: 'pickup_address', sub: `Date In: ${extracted.date_in || '—'}` },
              ].map(({ label, key, sub }) => (
                <div key={key} className="bg-zinc-950 border border-zinc-800 p-5">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{label}</div>
                  <div className="text-xs text-orange-400 mb-2">{sub}</div>
                  {editing ? (
                    <textarea
                      value={extracted[key] || ''}
                      onChange={(e) => updateField(key, e.target.value)}
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-orange-500 px-3 py-2 resize-none"
                    />
                  ) : (
                    <div className="text-white text-sm whitespace-pre-line">{extracted[key] || '—'}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Equipment Items */}
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mb-4">
                Equipment & Line Items ({extracted.equipment_items?.length || 0})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      {['Qty', 'Key', 'Description', 'Serial #', 'Status', 'Returned', 'Price'].map(h => (
                        <th key={h} className="text-left text-[10px] uppercase tracking-widest text-zinc-500 pb-2 pr-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(extracted.equipment_items || []).map((item, i) => (
                      <tr key={i} className="border-b border-zinc-900">
                        <td className="py-2 pr-4 text-zinc-300">{item.qty}</td>
                        <td className="py-2 pr-4 text-zinc-400 font-mono text-xs">{item.key}</td>
                        <td className="py-2 pr-4 text-white font-medium">{item.description}</td>
                        <td className="py-2 pr-4 text-zinc-400 font-mono text-xs">{item.serial_number || '—'}</td>
                        <td className="py-2 pr-4">
                          <span className={`text-xs font-bold px-2 py-0.5 ${item.status === 'Returned' ? 'bg-green-500/10 text-green-400' : 'bg-zinc-800 text-zinc-400'}`}>
                            {item.status || '—'}
                          </span>
                        </td>
                        <td className="py-2 pr-4 text-zinc-400 text-xs">{item.returned_date || '—'}</td>
                        <td className="py-2 text-orange-400 font-bold">{fmt(item.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Financials */}
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mb-4">Financial Summary</h3>
              <div className="space-y-2 max-w-sm ml-auto">
                {[
                  { label: 'Rental & Sales', key: 'rental_sales_subtotal' },
                  { label: 'EPA Fee', key: 'epa_fee' },
                  { label: 'RF Fee', key: 'rf_fee' },
                  { label: 'Subtotal', key: 'subtotal' },
                  { label: 'Total Amount', key: 'total_amount' },
                  { label: 'Discount', key: 'discount' },
                  { label: 'Total Paid', key: 'total_paid' },
                ].map(({ label, key }) => (
                  <div key={key} className="flex justify-between items-center py-1.5 border-b border-zinc-900">
                    <span className="text-zinc-500 text-sm">{label}</span>
                    <span className="text-zinc-300 font-mono text-sm">{fmt(extracted[key])}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-t-2 border-orange-500/30 mt-2">
                  <span className="text-white font-bold">Total Due</span>
                  <span className="text-orange-400 font-black text-lg font-mono">{fmt(extracted.total_due)}</span>
                </div>
              </div>
            </div>

            {/* Assign to Customer */}
            <div className="bg-zinc-950 border border-orange-500/30 p-6">
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 mb-1">Assign to Customer Login</h3>
              <p className="text-zinc-500 text-xs mb-4">Enter the customer's login email so they can see this contract in their portal.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="customer@email.com"
                  value={extracted.assigned_user_email || ''}
                  onChange={(e) => updateField('assigned_user_email', e.target.value)}
                  className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-orange-500 text-white text-sm px-4 py-3 focus:outline-none placeholder-zinc-600"
                />
                <div>
                  <select
                    value={extracted.payment_status}
                    onChange={(e) => updateField('payment_status', e.target.value)}
                    className="bg-zinc-900 border border-zinc-700 focus:border-orange-500 text-white text-sm px-4 py-3 focus:outline-none"
                  >
                    <option value="unpaid">Unpaid</option>
                    <option value="partial">Partial</option>
                    <option value="paid">Paid</option>
                    <option value="overdue">Overdue</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save button bottom */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-[0.25em] text-sm transition-colors disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Contract to Database
              </button>
            </div>
          </div>
        )}

        {/* Saved confirmation */}
        {saved && (
          <div className="text-center py-20 space-y-4">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
            <h2 className="font-barlow text-3xl font-bold uppercase text-white">Contract Saved!</h2>
            <p className="text-zinc-400">Invoice <span className="text-orange-400 font-bold">{extracted.invoice_number}</span> for <span className="text-white font-bold">{extracted.customer_name}</span> is now in the database.</p>
            {extracted.assigned_user_email && (
              <p className="text-zinc-500 text-sm">Assigned to: <span className="text-teal-400">{extracted.assigned_user_email}</span></p>
            )}
            <button
              onClick={() => { setExtracted(null); setSaved(false); }}
              className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Upload Another Invoice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}