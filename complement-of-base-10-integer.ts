function bitwiseComplement(n: number): number {
  const binary = n.toString(2);
  let res = "";

  for (let i = 0; i < binary.length; i++) {
    res += binary[i] == "1" ? "0" : "1";
  }

  return parseInt(res, 10);
}
bitwiseComplement(5); // 2
