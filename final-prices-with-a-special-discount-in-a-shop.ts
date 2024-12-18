function finalPrices(prices: number[]): number[] {
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        prices[i] = prices[i] - prices[j];
        break;
      }
    }
  }

  return prices;
}

finalPrices([1, 2, 3, 4, 5]); // [4,2,4,2,3]
finalPrices([8, 4, 6, 2, 3]); // [1,2,3,4,5]
