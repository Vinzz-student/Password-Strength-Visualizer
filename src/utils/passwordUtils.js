import zxcvbn from 'zxcvbn';

export const analyzePassword = (password) => {
  if (!password) return null;
  return zxcvbn(password);
};

export const getStrengthColor = (score) => {
  const colors = {
    0: 'from-red-500 to-red-600',
    1: 'from-orange-500 to-orange-600',
    2: 'from-yellow-500 to-yellow-600',
    3: 'from-blue-500 to-blue-600',
    4: 'from-green-500 to-green-600'
  };
  return colors[score] || colors[0];
};

export const getStrengthLabel = (score) => {
  const labels = {
    0: 'Very Weak',
    1: 'Weak',
    2: 'Fair',
    3: 'Good',
    4: 'Strong'
  };
  return labels[score] || 'Unknown';
};

export const calculatePatternDistribution = (password) => {
  const patterns = {
    lowercase: 0,
    uppercase: 0,
    numbers: 0,
    symbols: 0
  };

  if (!password) return patterns;

  for (let char of password) {
    if (/[a-z]/.test(char)) patterns.lowercase++;
    else if (/[A-Z]/.test(char)) patterns.uppercase++;
    else if (/[0-9]/.test(char)) patterns.numbers++;
    else patterns.symbols++;
  }

  return patterns;
};

export const estimateHackTime = (score, password) => {
  const baseTimes = {
    0: 'instantly',
    1: 'seconds',
    2: 'minutes',
    3: 'hours',
    4: 'centuries'
  };

  const detailedTimes = {
    0: 'Less than a second',
    1: 'A few seconds',
    2: 'A few minutes',
    3: 'A few hours',
    4: 'Hundreds of years'
  };

  if (score === 4 && password.length > 12) {
    return 'Billions of years';
  }

  return detailedTimes[score] || baseTimes[score];
};