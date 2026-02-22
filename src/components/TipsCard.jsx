import React from 'react';
import { motion } from 'framer-motion';
import { FiInfo, FiCheckCircle, FiXCircle, FiLock, FiKey, FiShield } from 'react-icons/fi';

const TipsCard = () => {
  const tips = [
    {
      icon: FiKey,
      title: 'Length Matters',
      description: 'Longer passwords are exponentially harder to crack. Aim for at least 12 characters.',
      good: 'CorrectHorseBatteryStaple',
      bad: 'password123'
    },
    {
      icon: FiShield,
      title: 'Use Variety',
      description: 'Mix uppercase, lowercase, numbers, and symbols to increase complexity.',
      good: 'P@ssw0rd!2024#Secure',
      bad: 'password'
    },
    {
      icon: FiLock,
      title: 'Avoid Common Patterns',
      description: 'Don\'t use sequential characters, repeated patterns, or personal information.',
      good: 'Myd0g!Luvs2Run',
      bad: '12345678'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <FiInfo className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">Security Tips</h3>
      </div>

      <div className="space-y-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-start space-x-3">
              <tip.icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">{tip.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{tip.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <FiCheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium">Good</span>
                </div>
                <code className="text-xs text-green-300 break-all">{tip.good}</code>
              </div>
              
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <FiXCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 font-medium">Bad</span>
                </div>
                <code className="text-xs text-red-300 break-all">{tip.bad}</code>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TipsCard;