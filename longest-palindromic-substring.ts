function longestPalindrome(s: string): string {
  let substr = s[0];

  function expand(l: number, r: number): string {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  }

  for (let i = 0; i < s.length; i++) {
    const odd = expand(i, i);
    if (odd.length > substr.length) substr = odd;

    const even = expand(i, i + 1);
    if (even.length > substr.length) substr = even;
  }

  return substr;
}
