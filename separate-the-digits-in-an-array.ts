function separateDigits(nums: number[]): number[] {
  return nums
    .join("")
    .split("")
    .map((num) => +num);
}

separateDigits([13, 25, 83, 77]);
