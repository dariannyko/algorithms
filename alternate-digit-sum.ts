function alternateDigitSum(n: number): number {
  const str = n.toString();
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    i % 2 ? (res -= Number(str[i])) : (res += Number(str[i]));
  }

  return res;
}

alternateDigitSum(521); // 4
