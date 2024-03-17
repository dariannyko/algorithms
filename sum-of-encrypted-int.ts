function sumOfEncryptedInt(nums: number[]): number {
  const sum = nums.reduce((sum, item) => {
    const max = item
      .toString()
      .split("")
      .sort((a, b) => +b - +a);
    const number = max[0].repeat(max.length);
    return (sum += +number);
  }, 0);

  return sum;
}

sumOfEncryptedInt([10, 21, 31]);
