// TODO: refactor
function majorityElement(nums: number[]): number {
  const map: Record<number, number> = {};

  const majorityCount: number = Math.floor(nums.length / 2);

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;

    if (map[num] > majorityCount) return num;
  }
}
