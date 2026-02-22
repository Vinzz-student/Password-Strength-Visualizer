import React from 'react';
import { motion } from 'framer-motion';
import { FiPieChart, FiType, FiHash, FiCode } from 'react-icons/fi';

const PatternVisualization = ({ distribution, total }) => {
  if (!distribution || total === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <FiPieChart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">Enter a password to see pattern distribution</p>
      </div>
    );
  }

  const patterns = [
    { key: 'lowercase', label: 'Lowercase', icon: FiType, color: 'blue', value: distribution.lowercase },
    { key: 'uppercase', label: 'Uppercase', icon: FiType, color: 'purple', value: distribution.uppercase },
    { key: 'numbers', label: 'Numbers', icon: FiHash, color: 'green', value: distribution.numbers },
    { key: 'symbols', label: 'Symbols', icon: FiCode, color: 'yellow', value: distribution.symbols }
  ];

  const getPercentage = (value) => ((value / total) * 100).toFixed(1);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-500 text-blue-400',
      purple: 'from-purple-500 to-purple-600 bg-purple-500 text-purple-400',
      green: 'from-green-500 to-green-600 bg-green-500 text-green-400',
      yellow: 'from-yellow-500 to-yellow-600 bg-yellow-500 text-yellow-400'
    };
    return colors[color];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <FiPieChart className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">Character Pattern Distribution</h3>
      </div>

      <div className="space-y-4">
        {patterns.map((pattern, index) => (
          <motion.div
            key={pattern.key}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <pattern.icon className={`w-4 h-4 text-${pattern.color}-400`} />
                <span className="text-sm font-medium text-gray-300">{pattern.label}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-400">{pattern.value} chars</span>
                <span className={`text-sm font-bold text-${pattern.color}-400`}>
                  {getPercentage(pattern.value)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${getPercentage(pattern.value)}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${getColorClasses(pattern.color)}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{total}</div>
            <div className="text-xs text-gray-400">Total Characters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {Object.values(distribution).filter(v => v > 0).length}
            </div>
            <div className="text-xs text-gray-400">Character Types Used</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PatternVisualization;