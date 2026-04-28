import { useQuoteCart } from './QuoteCartContext';

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useQuoteCart();
  const today = new Date().toISOString().split('T')[0];

  const inputClass = "w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-white text-sm rounded-lg focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600";

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="flex-1">
        <label className="block text-xs font-bold uppercase tracking-widest text-orange-500 mb-1.5">
          Start Date
        </label>
        <input
          type="date"
          value={startDate}
          min={today}
          onChange={e => setStartDate(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className="flex-1">
        <label className="block text-xs font-bold uppercase tracking-widest text-orange-500 mb-1.5">
          End Date
        </label>
        <input
          type="date"
          value={endDate}
          min={startDate || today}
          onChange={e => setEndDate(e.target.value)}
          className={inputClass}
        />
      </div>
    </div>
  );
}