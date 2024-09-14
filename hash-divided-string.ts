function stringHash(s: string, k: number): string {
  let res = "";

  for (let i = 0; i < s.length; i += k) {
    const substr = s.slice(i, i + k);
    const code = substr
      .split("")
      .reduce((sum, curr) => (sum += curr.charCodeAt(0) - 97), 0);
    res += String.fromCharCode((code % 26) + 97);
  }

  return res;
}

stringHash("abcd", 2); // "bf"
