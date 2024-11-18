function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();

  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of ransomNote) {
    const search = map.get(char);

    if (!search) return false;

    map.set(char, search - 1);
  }
  return true;
}

canConstruct("a", "b"); // true
