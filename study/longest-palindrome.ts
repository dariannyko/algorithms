function longestPalindrome(s: string): number {
  let length = 0;
  const counterMap = new Map();
  const strArr = s.split("");

  for (const el of strArr) {
    const currentCount = counterMap.get(el) ?? 0;
    counterMap.set(el, currentCount + 1);
  }

  let hasOne = false;
  for (const n of counterMap.values()) {
    length += Math.floor(n / 2) * 2;
    if (n % 2 === 1) {
      hasOne = true;
    }
  }

  if (hasOne) {
    length += 1;
  }
  return length;
}
