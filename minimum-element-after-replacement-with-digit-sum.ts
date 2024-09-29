function minElement(nums: number[]): number {
  const numsSum = nums.map((num) => {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  });
  return Math.min(...numsSum);
}

minElement([10, 12, 13, 14]); // 1
