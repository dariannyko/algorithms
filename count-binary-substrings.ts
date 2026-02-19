function countBinarySubstrings(str: string): number {
  let substrCount = 0;

  let zeros = str[0] === "0" ? 1 : 0;
  let ones = str[0] === "1" ? 1 : 0;
  for (let i = 1; i < str.length; i++) {
    const prevDigit = str[i - 1];
    const curDigit = str[i];

    if (curDigit === "0") {
      zeros = prevDigit === curDigit ? ++zeros : 1;

      if (zeros <= ones) {
        substrCount++;
      }
    } else {
      ones = prevDigit === curDigit ? ++ones : 1;

      if (ones <= zeros) {
        substrCount++;
      }
    }
  }

  return substrCount;
}
