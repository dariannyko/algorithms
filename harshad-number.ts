function sumOfTheDigitsOfHarshadNumber(x: number): number {
  console.log(x.toString().split(""));

  const sum = x
    .toString()
    .split("")
    .reduce((sum, cur) => Number(cur) + sum, 0);

  return x % sum ? -1 : sum;
}

sumOfTheDigitsOfHarshadNumber(23); // 9
