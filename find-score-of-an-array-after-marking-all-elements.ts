function findScore(nums: number[]): number {
  let sum = 0;
  const marked = new Set();
  const sorted = Array.from(nums.keys()).sort((a, b) => nums[a] - nums[b]);

  for (const index of sorted) {
    if (marked.has(index)) continue;

    sum += nums[index];
    marked.add(index);
    marked.add(index + 1);
    marked.add(index - 1);
  }

  return sum;
}

findScore([2, 1, 3, 4, 5, 2]); // 7
