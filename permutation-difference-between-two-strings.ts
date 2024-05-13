function findPermutationDifference(s: string, t: string): number {
  let sum = 0;
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  for (let j = 0; j < t.length; j++) {
    sum += Math.abs(map.get(t[j]) - j);
  }
  return sum;
}

findPermutationDifference("abc", "bac"); // 2
