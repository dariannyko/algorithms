const countDigits = (num: number) =>
  String(num)
    .split("")
    .reduce((r, d) => r + +!(num % +d), 0);
