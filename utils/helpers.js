module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="mushroom">🍄</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="cookin">🍳</span>`;
    } else {
      return `<span for="img" aria-label="spaghetti">🍝</span>`;
    }
  },
};
