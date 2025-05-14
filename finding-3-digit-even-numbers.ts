function findEvenNumbers(digits: number[]): number[] {
  const map = new Map();
  let res: number[] = [];

  for (let num of digits) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let i = 100; i <= 998; i += 2) {
    const nums = new Map();
    const values = [Math.floor(i / 100) % 10, Math.floor(i / 10) % 10, i % 10];

    values.forEach((val) => nums.set(val, (nums.get(val) || 0) + 1));

    const findNumber = Array.from(nums).every(
      ([key, value]) => value <= map.get(key)
    );

    if (findNumber) res.push(i);
  }

  return res;
}

findEvenNumbers([2, 2, 8, 8, 2]); // [222,228,282,288,822,828,882]
