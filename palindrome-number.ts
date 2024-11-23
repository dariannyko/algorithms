function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let reversed = 0;
  let temporary = x;

  while (temporary > 0) {
    reversed = reversed * 10 + (temporary % 10);
    temporary = Math.floor(temporary / 10);
  }

  return reversed === x;
}

isPalindrome(121); // true
