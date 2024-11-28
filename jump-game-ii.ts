// TODO: refactor

function jump(nums: number[]): number {
  let jumpCount = 0,
    availableSteps = 0,
    currentIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums.length - 1 <= i + nums[i]) {
      return jumpCount + 1;
    }
    availableSteps = Math.max(availableSteps, i + nums[i]);
    if (i === currentIndex) {
      jumpCount += 1;
      currentIndex = availableSteps;
    }
  }
  return jumpCount;
}

jump([2, 3, 0, 1, 4]);
// jump([2, 3, 1, 1, 4]);
// jump([2, 3, 1]);
