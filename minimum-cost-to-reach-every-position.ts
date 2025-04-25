function minCosts(cost: number[]): number[] {
  const n = cost.length;
  const answer = new Array(n).fill(0);

  let minCost = Infinity;
  for (let i = 0; i < n; i++) {
    minCost = Math.min(minCost, cost[i]);
    answer[i] = minCost;
  }

  return answer;
}
