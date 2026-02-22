import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiAlertTriangle, FiShield } from 'react-icons/fi';

const HackTimeEstimate = ({ time, score, warnings }) => {
  const getTimeColor = () => {
    if (score <= 1) return 'text-red-400';
    if (score <= 2) return 'text-orange-400';
    if (score <= 3) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getTimeIcon = () => {
    if (score <= 1) return <FiAlertTriangle className="w-8 h-8 text-red-400" />;
    if (score >= 4) return <FiShield className="w-8 h-8 text-green-400" />;
    return <FiClock className="w-8 h-8 text-yellow-400" />;
  };

  const getRecommendations = (score, warnings) => {
    if (warnings && warnings.length > 0) return warnings;
    
    if (score <= 1) {
      return [
        'Use a mix of uppercase and lowercase letters',
        'Add numbers and special characters',
        'Make it longer (at least 12 characters)'
      ];
    }
    if (score <= 2) {
      return [
        'Add more variety in characters',
        'Avoid common patterns or sequences',
        'Consider using a passphrase'
      ];
    }
    if (score <= 3) {
      return [
        'Good password, but can be stronger',
        'Add another word or two',
        'Mix in some special characters'
      ];
    }
    return [
      'Excellent password!',
      'Remember to use unique passwords for each account',
      'Consider using a password manager'
    ];
  };

  const recommendations = getRecommendations(score, warnings);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {getTimeIcon()}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">Estimated Hack Time</h3>
          <motion.div
            key={time}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className={`text-3xl font-bold ${getTimeColor()} mb-4`}
          >
            {time}
          </motion.div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-400">Security Recommendations:</h4>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-2 text-sm"
                >
                  <span className="text-blue-400 mt-1">•</span>
                  <span className="text-gray-300">{rec}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HackTimeEstimate;