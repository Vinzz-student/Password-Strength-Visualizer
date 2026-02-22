import { useState, useEffect, useCallback } from 'react';
import { analyzePassword, calculatePatternDistribution, estimateHackTime } from '../utils/passwordUtils';

export const usePasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [patternDistribution, setPatternDistribution] = useState(null);
  const [hackTime, setHackTime] = useState('');

  useEffect(() => {
    if (password) {
      const result = analyzePassword(password);
      setAnalysis(result);
      setPatternDistribution(calculatePatternDistribution(password));
      setHackTime(estimateHackTime(result.score, password));
    } else {
      setAnalysis(null);
      setPatternDistribution(null);
      setHackTime('');
    }
  }, [password]);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const clearPassword = useCallback(() => {
    setPassword('');
  }, []);

  return {
    password,
    analysis,
    patternDistribution,
    hackTime,
    handlePasswordChange,
    clearPassword
  };
};