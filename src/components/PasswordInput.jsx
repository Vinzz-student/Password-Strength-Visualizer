import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff, FiX, FiKey } from 'react-icons/fi';

const PasswordInput = ({ password, onChange, onClear }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FiKey className="w-5 h-5" />
          </div>
          
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onChange}
            placeholder="Enter your password to analyze..."
            className="w-full pl-12 pr-24 py-4 bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
              type="button"
            >
              {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
            </button>
            
            {password && (
              <button
                onClick={onClear}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-700"
                type="button"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {password && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-4 -bottom-8 text-xs text-gray-400"
          >
            {password.length} characters
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PasswordInput;