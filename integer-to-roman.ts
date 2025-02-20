function intToRoman(num: number): string {
  let str = "";

  const roman = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];

  let i = 0;
  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);

    if (digit === 9) {
      str = roman[i][0] + roman[i + 1][0] + str;
    } else if (digit >= 5) {
      str = roman[i][1] + roman[i][0].repeat(digit - 5) + str;
    } else if (digit === 4) {
      str = roman[i][0] + roman[i][1] + str;
    } else {
      str = roman[i][0].repeat(digit) + str;
    }

    i++;
  }

  return str;
}
