function groupAnagrams(strs: string[]): string[][] {
  const groupsMap = new Map();

  for (let word of strs) {
    const key = word.split("").sort().join("");

    const value = groupsMap.get(key);
    if (value) {
      value.push(word);
      groupsMap.set(key, value);
    } else {
      groupsMap.set(key, [word]);
    }
  }

  return Array.from(groupsMap.values());
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
