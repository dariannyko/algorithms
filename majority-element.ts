function majorityElement(nums: number[]): number {
  const map = new Map();
  const majority = Math.floor(nums.length / 2);

  for (let num of nums) {
    const value = (map.get(num) || 0) + 1;

    if (value > majority) return num;
    map.set(num, value);
  }
}

majorityElement([3, 2, 3]); // 3
