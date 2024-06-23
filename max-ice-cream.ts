function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);

  for (let i = 0; i < costs.length; i++) {
    coins -= costs[i];

    if (coins < 0) {
      return i;
    }
  }

  return costs.length;
}

maxIceCream([1, 3, 2, 4, 1], 7); // 4
