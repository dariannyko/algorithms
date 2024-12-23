function equalFrequency(word: string): boolean {
  const map = new Map();

  for (let char of word) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const [key, value] of map) {
    const m = new Map(map);
    value === 1 ? m.delete(key) : m.set(key, value - 1);

    if (new Set(m.values()).size === 1) {
      return true;
    }
  }
  return false;
}

equalFrequency("bac"); // true
