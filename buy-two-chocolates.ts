function buyChoco(prices: number[], money: number): number {
  let min1, min2;

  min1 = Math.min(prices[0], prices[1]);
  min2 = Math.max(prices[0], prices[1]);
  for (let i = 2; i < prices.length; i++) {
    if (prices[i] < min1) {
      min2 = min1;
      min1 = prices[i];
    } else if (prices[i] < min2) {
      min2 = prices[i];
    }
  }

  return min1 + min2 > money ? money : money - min1 - min2;
}
