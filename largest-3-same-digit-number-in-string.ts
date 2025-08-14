function largestGoodInteger(num: string): string {
  let good = "";
  for (let i = 0; i < num.length - 2; i++) {
    if (
      num[i] === num[i + 1] &&
      num[i] === num[i + 2] &&
      num[i + 3] !== num[i + 2]
    ) {
      const substring = num[i];
      if (substring > good) good = substring;
    }
  }

  return good.repeat(3);
}

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("3200014888"));
