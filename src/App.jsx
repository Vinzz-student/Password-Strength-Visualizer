import React from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import PasswordInput from './components/PasswordInput';
import StrengthMeter from './components/StrengthMeter';
import PatternVisualization from './components/PatternVisualization';
import HackTimeEstimate from './components/HackTimeEstimate';
import TipsCard from './components/TipsCard';
import { usePasswordStrength } from './hooks/usePasswordStrength';

function App() {
  const {
    password,
    analysis,
    patternDistribution,
    hackTime,
    handlePasswordChange,
    clearPassword
  } = usePasswordStrength();

  const totalChars = password.length;
  const warnings = analysis?.feedback?.warning ? [analysis.feedback.warning] : [];
  const suggestions = analysis?.feedback?.suggestions || [];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Visualize Your Password Security
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Understand password strength through real-time visualization, pattern analysis, and security recommendations
          </p>
        </motion.div>

        {/* Input Section */}
        <div className="mb-8">
          <PasswordInput
            password={password}
            onChange={handlePasswordChange}
            onClear={clearPassword}
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {password && analysis ? (
              <>
                <StrengthMeter score={analysis.score} />
                <PatternVisualization 
                  distribution={patternDistribution} 
                  total={totalChars}
                />
              </>
            ) : (
              <div className="glass-card p-12 text-center">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-white mb-2">Ready to analyze</h3>
                <p className="text-gray-400">Type a password above to see its strength visualization</p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {password && analysis ? (
              <HackTimeEstimate 
                time={hackTime}
                score={analysis.score}
                warnings={[...warnings, ...suggestions]}
              />
            ) : (
              <div className="glass-card p-12 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-2">Wait for input</h3>
                <p className="text-gray-400">Security estimates will appear here</p>
              </div>
            )}
            <TipsCard />
          </div>
        </div>

        {/* Stats Bar (when password exists) */}
        {password && analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">{totalChars}</div>
                <div className="text-xs text-gray-400">Characters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {Object.values(patternDistribution || {}).filter(v => v > 0).length}
                </div>
                <div className="text-xs text-gray-400">Character Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {analysis?.crack_times_display?.offline_fast_hashing_1e10_per_second || 'N/A'}
                </div>
                <div className="text-xs text-gray-400">Crack Time (Fast Hash)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {analysis?.score + 1}/5
                </div>
                <div className="text-xs text-gray-400">Strength Score</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

export default App;