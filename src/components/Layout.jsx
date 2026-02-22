import React from 'react';
import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass-effect border-b border-white/10 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-900 rounded-lg p-2">
                  <FiShield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Password Strength Visualizer
                </h1>
                <p className="text-sm text-gray-400">Real-time password security analysis</p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="glass-effect border-t border-white/10 mt-auto"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2024 Password Strength Visualizer - Educational Tool for Digital Security</p>
            <p className="mt-2 md:mt-0">
              Powered by zxcvbn library | 
              <span className="text-blue-400 ml-1">Real-time analysis</span>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;