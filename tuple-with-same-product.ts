function tupleSameProduct(nums: number[]): number {
  const map = new Map();
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j];
      const count = map.get(product) || 0;

      if (count >= 1) res += count;

      map.set(product, count + 1);
    }
  }
  return res * 8;
}

tupleSameProduct([2, 3, 4, 6, 8, 12]); // 40
