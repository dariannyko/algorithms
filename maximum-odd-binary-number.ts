function maximumOddBinaryNumber(s: string): string {
  let first = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") first++;
  }
  return `${"1".repeat(first - 1)}${"0".repeat(s.length - first)}1`;
}

maximumOddBinaryNumber("010");
maximumOddBinaryNumber("0101");
