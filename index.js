const grammarize = (amount, base, singular, plural) => {
  if (typeof amount === 'number') {
    if (base && typeof base === 'string') {
      return Math.abs(amount) === 1 ? base + singular : base + plural;
    }

    if (!base) {
      return Math.abs(amount) === 1 ? singular : plural;
    }

    return null;
  }
  return null;
};

export default grammarize;
