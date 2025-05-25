const isSelfDividing = (num: number) => {
  let temp = num;

  while (temp > 0) {
    const divider = temp % 10;

    if (divider === 0 || num % divider !== 0) {
      return false;
    }
    temp = Math.floor(temp / 10);
  }

  return true;
};

function selfDividingNumbers(left: number, right: number): number[] {
  const res: number[] = [];
  for (let num = left; num <= right; num++) {
    if (isSelfDividing(num)) res.push(num);
  }
  return res;
}

selfDividingNumbers(1, 22);
