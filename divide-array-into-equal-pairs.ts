function divideArray(nums: number[]): boolean {
  const quantity = new Map();

  for (let num of nums) {
    quantity.set(num, (quantity.get(num) || 0) + 1);
  }

  for (let value of quantity.values()) {
    if (value % 2 !== 0) return false;
  }

  return true;
}

divideArray([3, 2, 3, 2, 2, 2]); // true
