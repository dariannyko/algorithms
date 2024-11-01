function rotate(nums: number[], k: number): void {
  const delim = k % nums.length;

  const removed = nums.splice(0, nums.length - delim);
  nums.push(...removed);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotate([-1, -100, 3, 99], 2); // [3, 99, -1, -100]
rotate([1, 2], 3); // [2, 1]
