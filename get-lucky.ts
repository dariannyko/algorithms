function getLucky(s: string, k: number): number {
  let num = "";

  for (const str of s) {
    num += str.charCodeAt(0) - 96;
  }

  while (k) {
    num = num
      .split("")
      .reduce((sum, cur) => sum + parseInt(cur), 0)
      .toString();

    k--;
  }

  return parseInt(num);
}

getLucky("zbax", 2); // 8
