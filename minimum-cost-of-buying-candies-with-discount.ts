function minimumCost(cost: number[]): number {
  let totalCost = 0;
  cost.sort((a, b) => a - b);
  let i = cost.length - 1;
  let count = 0;
  while (i >= 0) {
    if (count === 2) {
      count = 0;
    } else {
      totalCost += cost[i];
      count++;
    }
    i--;
  }
  return totalCost;
}
