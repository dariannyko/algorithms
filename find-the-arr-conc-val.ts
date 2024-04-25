function findTheArrayConcVal(nums: number[]): number {
  let conc = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    conc += Number(`${nums[left]}${nums[right]}`);
    left++;
    right--;
  }

  if (left === right) {
    conc += nums[left];
  }

  return conc;
}

findTheArrayConcVal([5, 14, 13, 8, 12]);
