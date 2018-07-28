const grammarize = (amount, singular, plural) => {
  if (typeof amount !== 'number') {
    return null;
  }

  if (typeof singular !== 'string') {
    return null;
  }

  if (typeof plural !== 'string') {
    return null;
  }

  return Math.abs(amount) === 1 ? singular : plural;
};

export default grammarize;
