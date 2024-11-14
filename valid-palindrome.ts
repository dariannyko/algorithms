function isPalindrome(s: string): boolean {
  const string = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) return false;
    start++;
    end--;
  }
}

isPalindrome("A man, a plan, a canal: Panama"); // true
