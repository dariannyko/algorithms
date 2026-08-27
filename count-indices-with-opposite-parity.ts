const countOppositeParity = (nums: number[]): number[] => {
  const parityCount = [0, 0];

  for (let i = nums.length - 1; i >= 0; i--) {
    const parity = nums[i] & 1;
    nums[i] = parityCount[1 ^ parity];
    parityCount[parity]++;
  }

  return nums;
};
