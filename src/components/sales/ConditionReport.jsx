import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function ConditionReport({ condition, report, hours }) {
  const conditionColors = {
    'Factory New': 'text-green-400 bg-green-500/10 border-green-500/30',
    'Showroom Condition': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    'Excellent': 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    'Good': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    'Fair': 'text-orange-400 bg-orange-500/10 border-orange-500/30',
  };

  const statusIcon = {
    'Factory New': <CheckCircle2 className="w-4 h-4" />,
    'Showroom Condition': <CheckCircle2 className="w-4 h-4" />,
    'Excellent': <CheckCircle2 className="w-4 h-4" />,
    'Good': <Clock className="w-4 h-4" />,
    'Fair': <AlertCircle className="w-4 h-4" />,
  };

  const colorClass = conditionColors[report.overall] || 'text-gray-400 bg-gray-500/10 border-gray-500/30';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 rounded-xl p-6 space-y-6"
    >
      <div>
        <h3 className="font-barlow text-xl font-bold text-white mb-4">Condition Report</h3>

        {/* Overall Status */}
        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${colorClass} mb-6`}>
          {statusIcon[report.overall]}
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Overall Condition</span>
            <span className="font-bold">{report.overall}</span>
          </div>
        </div>

        {/* Operating Hours (if applicable) */}
        {hours !== undefined && hours > 0 && (
          <div className="flex items-center gap-3 mb-6 p-3 bg-black/40 rounded-lg">
            <Clock className="w-4 h-4 text-orange-400" />
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider block">Operating Hours</span>
              <span className="text-lg font-bold text-white">{hours.toLocaleString()} hrs</span>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Report Items */}
      <div className="space-y-3">
        {Object.entries(report).map(([key, value]) => {
          if (key === 'overall') return null;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-3 p-3 bg-black/40 rounded-lg"
            >
              <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-sm text-gray-300">{value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Download Button */}
      <button className="w-full py-3 border border-zinc-700 hover:border-orange-500/50 text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-widest rounded-lg transition-all">
        Download Full Report
      </button>
    </motion.div>
  );
}