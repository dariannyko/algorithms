function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const str = x.toString();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

isPalindrome(121); // true
