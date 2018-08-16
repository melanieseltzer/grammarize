const grammarize = (amount, singular, plural) => {
  if (typeof amount !== 'number' || typeof singular !== 'string' || typeof plural !== 'string') {
    return null;
  }

  return Math.abs(amount) === 1 ? singular : plural;
};

export default grammarize;
