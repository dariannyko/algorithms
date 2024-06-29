function subsetXORSum(nums) {
  const subsets = [[]];

  let sum = 0;

  for (const num of nums) {
    const n = subsets.length;

    for (let i = 0; i < n; i++) {
      const subset = subsets[i].slice();
      subset.push(num);
      sum += subset.reduce((a, b) => a ^ b);
      subsets.push(subset);
    }
  }

  return sum;
}
