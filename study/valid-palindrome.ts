// #2
const allowedChars = (char: string) =>
  (char >= "A" && char <= "Z") ||
  (char >= "a" && char <= "z") ||
  (char >= "0" && char <= "9");

function isPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!allowedChars(s[start])) {
      start++;
    } else if (!allowedChars(s[end])) {
      end--;
    } else {
      if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
      start++;
      end--;
    }
  }

  return true;
}

isPalindrome("A man, a plan, a canal: Panama"); // true
