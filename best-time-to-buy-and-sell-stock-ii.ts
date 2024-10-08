function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]); // 7
maxProfit([1, 2, 3, 4, 5]); // 4
