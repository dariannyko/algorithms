const MOD = 1e9 + 7;

function specialTriplets(nums: number[]): number {
  const numCnt = new Map<number, number>();
  const numPartialCnt = new Map<number, number>();

  for (const v of nums) {
    numCnt.set(v, (numCnt.get(v) ?? 0) + 1);
  }

  let ans = 0;
  for (const v of nums) {
    const target = v * 2;
    const lCnt = numPartialCnt.get(target) ?? 0;

    numPartialCnt.set(v, (numPartialCnt.get(v) ?? 0) + 1);
    const rCnt = (numCnt.get(target) ?? 0) - (numPartialCnt.get(target) ?? 0);

    ans += (lCnt * rCnt) % MOD;
    ans %= MOD;
  }
  return ans;
}
