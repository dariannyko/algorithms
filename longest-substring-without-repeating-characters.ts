function lengthOfLongestSubstring(s: string): number {
  let left = 0,
    right = 0,
    max = 0;

  let set = new Set();

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      max = Math.max(max, set.size);
      right++;
    }
  }
  return max;
}

lengthOfLongestSubstring("abcabcbb"); // 3
