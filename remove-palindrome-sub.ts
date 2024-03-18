function removePalindromeSub(s: string): number {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] !== s[end]) {
      return 2;
    }
    start++;
    end--;
  }
  return 1;
}

removePalindromeSub("baabb"); // 2
removePalindromeSub("ababa"); // 1
removePalindromeSub("abb"); // 2
