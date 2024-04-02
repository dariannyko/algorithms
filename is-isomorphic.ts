function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const firstIndex = s.indexOf(s[i]);
    const secondIndex = t.indexOf(t[i]);
    if (firstIndex !== secondIndex) return false;
  }

  return true;
}

console.log(isIsomorphic("paper", "title"));
console.log(
  isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck")
);
