function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]); // 7
maxProfit([7, 6, 4, 3, 1]); // 0
