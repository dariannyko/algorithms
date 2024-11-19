function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    const search = map.get(char);

    if (search) {
      map.set(char, search - 1);
    } else {
      return false;
    }
  }

  return true;
}

isAnagram("anagram", "nagaram"); // true
