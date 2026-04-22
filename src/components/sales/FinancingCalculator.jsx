import { useState, useMemo } from 'react';
import { DollarSign, Calendar, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinancingCalculator({ price, minDown, maxTerm }) {
  const [downPayment, setDownPayment] = useState(Math.ceil(price * 0.2));
  const [loanTerm, setLoanTerm] = useState(36);

  const calculation = useMemo(() => {
    const principal = price - downPayment;
    const interestRate = 0.065; // 6.5% APR
    const monthlyRate = interestRate / 12;
    
    const monthlyPayment =
      principal === 0
        ? 0
        : (principal * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) /
          (Math.pow(1 + monthlyRate, loanTerm) - 1);

    const totalInterest = monthlyPayment * loanTerm - principal;

    return {
      principal,
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalCost: Math.round(principal + totalInterest),
      monthsRemaining: loanTerm,
    };
  }, [price, downPayment, loanTerm]);

  const downPaymentPercent = ((downPayment / price) * 100).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 rounded-xl p-6 space-y-6"
    >
      <div>
        <h3 className="font-barlow text-xl font-bold text-white mb-4">Financing Calculator</h3>
        <p className="text-xs text-gray-400 uppercase tracking-wider">Est. at 6.5% APR</p>
      </div>

      {/* Down Payment Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-300">Down Payment</label>
          <span className="text-lg font-black text-orange-400">${downPayment.toLocaleString()}</span>
        </div>
        <div className="space-y-2">
          <input
            type="range"
            min={minDown}
            max={Math.ceil(price * 0.9)}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>${minDown.toLocaleString()}</span>
            <span className="text-orange-400">{downPaymentPercent}%</span>
            <span>${Math.ceil(price * 0.9).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Loan Term Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-300">Loan Term</label>
          <span className="text-lg font-black text-orange-400">{loanTerm} months</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[24, 36, 48, 60].filter(term => term <= maxTerm).map(term => (
            <button
              key={term}
              onClick={() => setLoanTerm(term)}
              className={`py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
                loanTerm === term
                  ? 'bg-orange-500 text-black'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              {term}mo
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3 pt-6 border-t border-zinc-800">
        <motion.div
          key={`monthly-${calculation.monthlyPayment}`}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-black/40 rounded-lg p-4"
        >
          <div className="flex items-start justify-between mb-1">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Estimated Monthly Payment</span>
            <DollarSign className="w-4 h-4 text-orange-400" />
          </div>
          <p className="text-3xl font-black text-white">
            ${calculation.monthlyPayment.toLocaleString()}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/40 rounded-lg p-3">
            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Total Interest</span>
            <p className="text-lg font-black text-gray-300">
              ${calculation.totalInterest.toLocaleString()}
            </p>
          </div>
          <div className="bg-black/40 rounded-lg p-3">
            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Total Cost</span>
            <p className="text-lg font-black text-teal-400">
              ${calculation.totalCost.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Info */}
      <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4 space-y-2">
        <p className="text-xs text-gray-400">
          <span className="font-semibold text-teal-400">Loan Amount:</span> ${calculation.principal.toLocaleString()}
        </p>
        <p className="text-xs text-gray-400">
          <span className="font-semibold text-teal-400">Total Payments:</span> {loanTerm}
        </p>
      </div>

      {/* CTA */}
      <a
        href="tel:8887775990"
        className="block w-full py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest rounded-lg transition-all text-center"
      >
        Talk to Sales
      </a>
    </motion.div>
  );
}