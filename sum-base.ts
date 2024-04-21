function sumBase(n: number, k: number): number {
  const nums = n.toString(k).split("");
  let sum = 0;

  for (let num of nums) {
    sum += Number(num);
  }

  return sum;
}

sumBase(34, 6); // 9
