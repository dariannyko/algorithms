function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  let i = 2,
    t0 = 0,
    t1 = 0,
    t2 = 0;

  for (; i <= n; i++) {
    if (t0 + cost[i - 2] <= t1 + cost[i - 1]) {
      t2 = t0 + cost[i - 2];
    } else {
      t2 = t1 + cost[i - 1];
    }
    t0 = t1;
    t1 = t2;
  }

  return t2;
}
