import React from 'react';
import { motion } from 'framer-motion';
import { getStrengthColor, getStrengthLabel } from '../utils/passwordUtils';
import { FiShield, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const StrengthMeter = ({ score = 0 }) => {
  const percentage = ((score + 1) / 5) * 100;
  const color = getStrengthColor(score);
  const label = getStrengthLabel(score);

  const getIcon = () => {
    if (score <= 1) return <FiAlertCircle className="w-6 h-6 text-red-400" />;
    if (score <= 2) return <FiShield className="w-6 h-6 text-yellow-400" />;
    return <FiCheckCircle className="w-6 h-6 text-green-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getIcon()}
          <h3 className="text-xl font-semibold text-white">Password Strength</h3>
        </div>
        <motion.span
          key={score}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white font-bold text-lg shadow-lg`}
        >
          {label}
        </motion.span>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-gray-400">
              Strength Score: {score + 1}/5
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-700">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${color}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`h-2 rounded-full ${
              index <= score 
                ? `bg-gradient-to-r ${getStrengthColor(index)}` 
                : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StrengthMeter;