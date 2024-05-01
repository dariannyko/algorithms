function evenOddBit(n: number): number[] {
  const res: number[] = [0, 0];
  const str = n.toString(2).split("").reverse();

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      i % 2 ? res[1]++ : res[0]++;
    }
  }

  return res;
}

evenOddBit(2);
evenOddBit(17);
